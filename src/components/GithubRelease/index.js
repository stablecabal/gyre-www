import React, { useEffect, useState } from 'react';

export default function GithubRelease(props) {
    const [url, setUrl] = useState("");

    useEffect(async function () {
        const res = await fetch("https://api.github.com/repos/stablecabal/gyre-installer/releases");
        const json = await res.json();

        for (let release of json) {
            if (release.prerelease) continue;
            
            if (release.target_commitish == props.target_commitish) {
                setUrl("https://github.com/stablecabal/gyre-installer/archive/refs/tags/" + release.tag_name + ".zip")
                return;
            }
        }

    }, [props.target_commitish])

    if (!url) return <span>[Getting latest release...]</span>;
    return <a href={url}>{props.title}</a>;
}
