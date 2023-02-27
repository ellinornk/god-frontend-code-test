import React from "react";
import { SingleItem, CarItem } from "./ SingleItem";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ArrowButtons } from "./ArrowButtons";
import { useIsDesktop } from "../utils/isDesktop";

type Props = {
  items?: Array<CarItem>;
}

export const CarCarousel: React.FC<Props> = ({items}) => {
    const isDesktop = useIsDesktop();

    const allItems = items?.map((item) => {
        return (
            <SingleItem 
                key={item.id}
                id={item.id} 
                modelName={item.modelName} 
                bodyType={item.bodyType} 
                modelType={item.modelType} 
                imageUrl={item.imageUrl}
            />
        )
    });

  return(
    <>
    <Carousel  
        arrows={false}
        centerMode={false}
        customButtonGroup={ isDesktop ? <ArrowButtons /> : null}
        keyBoardControl
        focusOnSelect
        showDots={!isDesktop}
        swipeable
        responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 481
              },
              items: 4,
              partialVisibilityGutter: 40
            },
            mobile: {
                breakpoint: {
                  max: 480,
                  min: 0
                },
                items: 1.5,
                partialVisibilityGutter: 20
              }
            }}
            renderButtonGroupOutside
    >
        {allItems}
    </Carousel>
    </>
  )
}