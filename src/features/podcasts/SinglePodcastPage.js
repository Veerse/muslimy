import React from 'react';
import {useSelector} from "react-redux";
import {selectPodcastById} from "./PodcastsSlice";
import {Button} from "grommet";

export const SinglePodcastPage = ({match}) => {
    const { podcastId } = match.params

    const podcast = useSelector((state) => selectPodcastById (state, podcastId))
    const podcastStatus = useSelector(state => state.podcasts.status)
    const podcastsError = useSelector(state => state.podcasts.error)

    if (podcastStatus === 'failed') {
        return  (
            <section>
                Erreur {podcastsError}
            </section>
        )
    }

    if (podcastStatus === 'loading' || podcastStatus === 'idle') {
        return (
            <section>
                Loading
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