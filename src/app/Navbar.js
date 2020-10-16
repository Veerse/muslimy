import React from 'react'
import { useSelector } from 'react-redux'
import { Menu, Box, Header, Anchor, ResponsiveContext } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import { useHistory, withRouter } from "react-router-dom";
import { Avatar } from 'grommet';
import { selectUser } from '../features/login/LoginSlice';

const RouterAnchorBase = (props) => {
    return <Anchor {...props} onClick={() => props.history.push(props.path)} />;
};

export const RouterAnchor = withRouter(RouterAnchorBase);

export const MyNavbar = () => {
    let history = useHistory()

    var user = useSelector(selectUser)

    function profileButtonClicked () {
        history.push("/home");
    }

    return (
        <Header background="" pad="medium" height="xsmall" border="bottom">
            <Box direction="row" align="center" gap="small">
                <RouterAnchor label="Muslimy" path="/"  size="large" />

            </Box>
            <ResponsiveContext.Consumer>
                {size =>
                    size === 'small' ? (
                        <Box justify="end" direction="row">
                            <Menu
                                a11yTitle="Navigation Menu"
                                dropProps={{ align: { top: 'bottom', right: 'right' } }}
                                icon={<MenuIcon color="brand" />}
                                items={[
                                    {
                                        label: <Box pad="small">Nos podcasts</Box>,
                                        href: '/podcasts',
                                    },
                                    {
                                        label: <Box pad="small">Comment ça marche ?</Box>,
                                        href: '/howitworks',
                                    },
                                    {
                                        label: <Box pad="small">Mon compte</Box>,
                                        href: '#',
                                    }
                                ]}
                            />
                        </Box>
                    ) : (
                        <Box justify="end" align="center" direction="row" gap="medium">
                            <RouterAnchor label="Nos podcasts" path="/podcasts" />
                            <RouterAnchor label="Comment ça marche ?" path="/howitworks" />
                            {user === null ? <Box/>:<Avatar background="brand" onClick={profileButtonClicked}>SY</Avatar>}
                        </Box>
                    )
                }
            </ResponsiveContext.Consumer>
        </Header>
    )
}