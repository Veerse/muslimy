import React from 'react'

import {Menu, Box, Header, Anchor, ResponsiveContext} from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import {withRouter} from "react-router-dom";

const RouterAnchorBase = (props) => {
    return <Anchor {...props} onClick={() => props.history.push(props.path)} />;
};
export const RouterAnchor = withRouter(RouterAnchorBase);

export const MyNavbar = () => {
    return (
        <Header background="" pad="medium" height="xsmall" border="bottom">
            <Box direction="row" align="center" gap="small">
                <RouterAnchor label="Muslimy" path="/"  size="large" />

            </Box>
            <ResponsiveContext.Consumer>
                {size =>
                    size === 'small' ? (
                        <Box justify="end">
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
                                        href: '#',
                                    },
                                ]}
                            />
                        </Box>
                    ) : (
                        <Box justify="end" direction="row" gap="medium">
                            <RouterAnchor label="Nos podcasts" path="/podcasts" />
                            <RouterAnchor label="Comment ça marche ?" path="#" />
                        </Box>
                    )
                }
            </ResponsiveContext.Consumer>
        </Header>
    )
}