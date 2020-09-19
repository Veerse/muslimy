import React from 'react'

import {Menu, Box, Header, Anchor, ResponsiveContext} from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';

export const MyNavbar = (props) => {
    return (
        <Header background="" pad="medium" height="xsmall" border="bottom">
            <Box direction="row" align="center" gap="small">
                <Anchor size="large" href="/" label="Muslimy" />
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
                            <Anchor href="/podcasts" label="Nos podcasts" />
                            <Anchor href="#" label="Comment ça marche ?"  />
                        </Box>
                    )
                }
            </ResponsiveContext.Consumer>
        </Header>
    )
}