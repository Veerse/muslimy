import React from 'react'

import {Anchor, Box, Footer, Image, Text} from 'grommet'
import { FacebookOption, Instagram, Twitter } from 'grommet-icons'
import logo from '../muslimy.svg'

const Medias = () => (
    <Box direction="row" gap="xxsmall" justify="center">
        <Anchor
            a11yTitle="Instagram"
            href="#"
            icon={<Instagram color="brand" />}
        />
        <Anchor
            a11yTitle="Facebook"
            href="#"
            icon={<FacebookOption color="brand" />}
        />
        <Anchor
            a11yTitle="Twitter"
            href="#"
            icon={<Twitter color="brand" />}
        />
    </Box>
)

export const MyFooter = () => {
    return (
        <Footer background="light-1">

            <Box direction="row" pad="xsmall">
                <Image src={logo} />
                <Text alignSelf="center" color="brand" size="medium">
                    Muslimy
                </Text>
            </Box>
            <Medias/>
            <Box pad="small">
                <Text textAlign="center" size="small" color="brand" >
                    A propos
                </Text>
            </Box>
        </Footer>
    )
}