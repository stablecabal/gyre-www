const chroma = require('chroma-js');
const { extendChroma } = require('./chroma-plus');
const DeltaE = require('delta-e');
extendChroma(chroma);

function orderColors(colors, priority1, priority2, random = false) {
    let validOptions = ['hue', 'saturation', 'lightness'];
    for (let i = 0; i < validOptions.length; i++) {
        if (!validOptions.includes(priority1)) console.warn(`${priority1} is not a valid option of ${validOptions}`);
        if (priority2) {
            if (!validOptions.includes(priority2)) console.warn(`${priority1} is not a valid option of ${validOptions}`);
        }
    }
    // for each color, convert to lch object
    let colorsJch = colors.map((color, i) => {
        let jch = chroma(color).jch();
        return { hue: Math.floor(jch[2]), saturation: Math.floor(jch[1]), lightness: Math.floor(jch[0]), color, index: i }
    })

    let sorted;
    if (priority2) {
        // Sort by priority 1, then by priority 1
        sorted = colorsJch.sort((a, b) => (a[priority1] > b[priority1]) ? 1 : (a[priority1] === b[priority1]) ? ((a[priority2] > b[priority2]) ? 1 : -1) : -1)
    } else {
        sorted = colorsJch.sort((a, b) => (a[priority1] > b[priority1]) ? 1 : -1)
    }

    // Create random "starting point" for hues
    // Only useful in CVD scenario
    if (random) {
        if (priority1 === 'hue') {
            let randomIndex = getRandomInt(sorted.length);
            let firstHalf = sorted.splice(0, randomIndex);
            let secondHalf = sorted.splice(randomIndex);
            sorted = secondHalf.concat(firstHalf)
        }
    }

    const orderedColors = sorted.map((object) => { return object.color });
    return orderedColors;
}

function getColorDifference(color1, color2) {
    // pre-formatting and running through specific deltaE formula
    let c1 = chroma(color1).lab();
    let c2 = chroma(color2).lab();
    let c1Lab = { L: c1[0], A: c1[1], B: c1[2] }
    let c2Lab = { L: c2[0], A: c2[1], B: c2[2] }
    // Use DeltaE 2000 formula (latest)
    return DeltaE.getDeltaE00(c1Lab, c2Lab);
}

function groupCommonHues(colors) {
    // colors are in put as an array of Chroma.js colors.
    // Then, find the colors that are similar, and place them
    // into a sub-array.
    // EXAMPLE: ['yellow', 'lightyellow', 'blue', 'green', 'lightgreen']
    // should become: [ ['yellow', 'lightyellow'], ['blue'], ['green', 'lightgreen'] ]

    // First, resort colors by hue 
    let orderedColors = orderColors(colors, 'hue', 'saturation');
    // Acceptable difference in hues
    const hueGroupThreshold = 22; // 10
    const hueThreshold = 22; // 10
    const colorDifferenceMin = 16;
    const colorDifferenceMax = 100;
    // Filter colors with lightness darker than 8,
    // and chroma greater than 40
    // as darker colors are less clearly identifiable.
    const minChroma = 30;
    const minLuma = 8;
    let filteredColors = [];
    for (let i = 0; i < colors.length; i++) {
        if (chroma(orderedColors[i]).lch()[1] > minChroma && chroma(orderedColors[i]).lch()[0] > minLuma) filteredColors.push(orderedColors[i]);
        else continue;
    }

    // Create new array, bucketing similar hues within sub-arrays
    let bucketedColors = [];
    for (let i = 0; i < filteredColors.length; i++) {
        const lastIndex = (i === 0) ? filteredColors.length - 1 : i - 1;
        const currentColor = filteredColors[i];
        const lastColor = filteredColors[lastIndex];
        let hueDiff = chroma(currentColor).jch()[2] - chroma(lastColor).jch()[2];

        if (hueDiff < 0) hueDiff = hueDiff * -1;

        if (hueDiff >= hueGroupThreshold || bucketedColors.length === 0) {
            const newArr = [];
            newArr.push(currentColor)
            bucketedColors.push(newArr)
            // console.log(`Adding new array with color ${currentColor}`)
        }
        // Find the right bucket to place the color if it's within the hue threshold
        if (hueDiff < hueGroupThreshold && bucketedColors.length > 0) {
            // Loop the bucketed colors
            for (let z = 0; z < bucketedColors.length; z++) {
                const currentBucket = bucketedColors[z];

                let colorDiffs = currentBucket.map((color) => {
                    return getColorDifference(color, currentColor);
                });
                let hueDiffs = currentBucket.map((color) => {
                    return chroma(currentColor).jch()[2] - chroma(color).jch()[2];
                });

                let minHueDiff = Math.min(...hueDiffs);
                let minDiff = Math.min(...colorDiffs);
                let maxDiff = Math.max(...colorDiffs);

                // if minimum color difference of currentColor, when compared to all colors of
                // the current bucket..
                if (minDiff > colorDifferenceMin && maxDiff < colorDifferenceMax && minHueDiff <= hueThreshold) {
                    currentBucket.push(currentColor)
                }
            }
        }
    }
    // // FOR DEBUGGING ONLY
    // for(let i = 0; i < bucketedColors.length; i++) {
    //   let bucket = bucketedColors[i];
    //   console.log('BUCKETED COLORS:')
    //   bucket.forEach((color) => {console.color(color)})
    // }
    return bucketedColors;
}

module.exports = {
    chroma,
    groupCommonHues
};

