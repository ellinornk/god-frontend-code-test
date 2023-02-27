import React from 'react'
import { IconButton, Spacer, View } from 'vcc-ui'

export const ArrowButtons = ({ next, previous, ...rest }: any) => {
    const { carouselState: { currentSlide } } = rest;

    return (
        <View direction="row" justifyContent="flex-end">
            <IconButton iconName="navigation-chevronback" onClick={() => previous()} variant="outline"/>
            <Spacer />
            <IconButton iconName="navigation-chevronforward" onClick={() => next()} variant="outline"/>
        </View>
    )
}
