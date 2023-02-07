import { average, prominent } from "color.js";
import React, { useEffect, useState } from 'react';
import { groupCommonHues, chroma } from "./utils";

import Leo from '@adobe/leonardo-contrast-colors';

import { useColorMode } from '@docusaurus/theme-common';
import { createGlobalStyle } from "styled-components";
import useBaseUrl from "@docusaurus/useBaseUrl";

const RATIOS = [1.45, 2.05, 30.2, 4.54, 7, 10.86];

const LEO_PARAMS = {
    colorspace: 'CAM02p',
    ratios: RATIOS,
    smooth: true
};

export default function ImageTheme(props) {
    const { colorMode, setColorMode } = useColorMode();

    const [imageUrl, setImageUrl] = useState(useBaseUrl("/img/hero/"+Math.floor(Math.random()*7)+".png"));
    const [theme, setTheme] = useState({});

    useEffect(async function () {
        const bg = await average(imageUrl, { format: 'hex' });

        const leoBg = new Leo.BackgroundColor({
            name: "bg",
            colorKeys: [bg],
            ...LEO_PARAMS
        })

        const colors = await prominent(imageUrl, { amount: 18, format: 'hex', group: 100 });
        let grouped = groupCommonHues(colors);

        let result = [leoBg]
        let names = ["primary", "secondary", "tertiary", "quarternary"];

        while (grouped.length && names.length) {
            let randidx = Math.floor(Math.random() * grouped.length);
            result.push(new Leo.Color({
                name: names.shift(),
                colorKeys: grouped.splice(randidx, 1)[0],
                ...LEO_PARAMS
            }));
        }

        const lt = new Leo.Theme({ colors: result, backgroundColor: leoBg, lightness: 90 })
        setTheme(lt);
    }, [imageUrl])

    // While useEffect hasn't finished yet, we need a default
    let GlobalStyles = () => null;
    
    if (theme && theme.contrastColorPairs) {
        theme.lightness = colorMode == "dark" ? 10 : 90;

        GlobalStyles = createGlobalStyle`
:root {
    --ifm-background-color: ${theme.backgroundColorValue};
    --ifm-heading-color: var(--ifm-color-content);
    --ifm-font-color-base: var(--ifm-color-primary);
}

:root {
    --ifm-color-primary-lightest ${theme.contrastColorPairs['primary100']};
    --ifm-color-primary-lighter	${theme.contrastColorPairs['primary200']};
    --ifm-color-primary-light	${theme.contrastColorPairs['primary300']};
    --ifm-color-primary	${theme.contrastColorPairs['primary400']};
    --ifm-color-primary-dark ${theme.contrastColorPairs['primary500']};
    --ifm-color-primary-darker ${theme.contrastColorPairs['primary600']};
    --ifm-color-primary-darkest ${theme.contrastColorPairs['primary700']};
}

.main-wrapper {
    background-image: url(${imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

article {
    background: ${chroma(theme.contrastColorPairs['bg100']).alpha(0.7).hex()};
    backdrop-filter: blur(4px);
    padding: 20px;
}
`;
    }

    return <>
        <GlobalStyles />
        <div>
            {props.children}
        </div>
    </>;
}
