import {ResponsiveContext, Grid, Card, Box, TextInput, Button} from 'grommet';
import React, {useContext, useState} from 'react';
import {useSelector} from 'react-redux';
import {selectAllPodcasts} from './PodcastsSlice';
import {Search, FormDown} from 'grommet-icons'
import { useHistory } from "react-router-dom";

const PodcastExcerpt = ({podcast}) => {
    let history = useHistory();

    const handleClick = () => history.push('/podcasts/' + podcast.id)

    return (
        <Card pad="medium" hoverIndicator onClick={handleClick}>
            <h3>{podcast.title}</h3>
            <span>17 audios</span>
        </Card>
    )
}

function SearchFilter(arr, req) {
    return arr.filter(function (el) {
        return el.title.toLowerCase().indexOf(req.toLowerCase()) !== -1;
    })
}

const RenderedPodcast = ({podcasts, filter, order}) => {
    const size = useContext(ResponsiveContext)

    let orderedPodcasts = podcasts;

    if (order === '1') {
            orderedPodcasts = podcasts
            .slice()
            .sort((a, b) => a.title.localeCompare(b.title))
    }

    if (order === '2') {
        orderedPodcasts = podcasts
            .slice()
            .sort((a, b) => a.id.localeCompare(b.id))
    }

    if (order === '3') {
        orderedPodcasts = podcasts
            .slice()
            .sort((a, b) => a.title.localeCompare(b.title))
    }

    return (
        <Grid columns={size !== 'small' ? 'small' : '100%'} gap="medium">
            {SearchFilter(orderedPodcasts, filter).map((p, index) => (
                <PodcastExcerpt podcast={p} key={index}/>
            ))}
        </Grid>
    )
}

export const PodcastList = () => {
    const [search, setSearch] = useState("")
    const [order, setOrder] = useState("1")

    const podcasts = useSelector(selectAllPodcasts)

    const onSearchChange = (e) => setSearch(e.target.value)
    const onOrderChange = (e) => setOrder(e.target.value)

    return (
        <Box pad="large">
            <Box pad={{horizontal: "large"}}>
                <h2>Podcasts</h2>
                <p>Chaque Imam ou Mosquée à sa propre chaîne. Vous pouvez écouter les podcasts sur les applications Apple
                    Podcast, Google Podcast, Spotify ou Deezer.</p>
            </Box>
            <Box pad={{horizontal: "large"}}>
                <Box pad={{top: "large", bottom: "medium"}}>
                    <TextInput icon={<Search/>} placeholder="Rechercher une chaîne" value={search} onChange={onSearchChange}/>
                </Box>
                <Box pad={{vertical: "small"}} gap="small" direction="row">
                    <Button icon={order === "1" ? <FormDown/>:null} label="Par nom" size="small" value={"1"} onClick={onOrderChange}/>
                    <Button icon={order === "2" ? <FormDown/>:null} label="Par date du dernier audio" size="small" value={"2"} onClick={onOrderChange}/>
                    <Button icon={order === "3" ? <FormDown/>:null} label="Par nombre d'épisodes" size="small" value={"3"} onClick={onOrderChange}/>
                </Box>
                <Box pad={{vertical: "small"}}>
                    <RenderedPodcast podcasts={podcasts} filter={search} order={order}/>
                </Box>
            </Box>
        </Box>
    )
}