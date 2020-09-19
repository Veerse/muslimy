import React from 'react';
import {useSelector} from "react-redux";
import {selectPodcastById} from "./PodcastsSlice";
import {Button} from "grommet";

export const SinglePodcastPage = ({match}) => {
    const { podcastId } = match.params

    const podcast = useSelector((state) => selectPodcastById(state, podcastId))

    if (!podcast) {
        return (
            <section>
                Podcast non trouvé
            </section>
        )
    }

    return (
        <section>
            <Button label="Flux RSS" />
            {podcast.title}
        </section>
    )
}