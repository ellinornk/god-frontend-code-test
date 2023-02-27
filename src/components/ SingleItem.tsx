import React from "react";
import { Block, Link, Spacer, Text, View } from "vcc-ui";
import NextLink from "next/link"
import Image from 'next/image';

export interface CarItem {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

type Props = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export const SingleItem: React.FC<Props> = ({id, modelName, bodyType, modelType, imageUrl}) => {

  return( 
    <Block extend={{minWidth: "12rem", paddingRight: "1em"}} tabIndex={0}>
      <Text variant="bates" subStyle="emphasis">{bodyType.toUpperCase()}</Text>
      <View direction="row" wrap="wrap" alignItems="baseline">
        <Text subStyle="emphasis" extend={{paddingRight: "0.2rem"}}>
            {modelName}
        </Text>
        <Text variant="bates">{modelType}</Text>
      </View>
      <div style={{position: "relative", width: "100%", height: "12rem"}}>
      <Image src={imageUrl} alt={modelName} layout="fill" objectFit="cover"/>
      </div>
      <View direction="row" justifyContent="center">
        <NextLink href={"/learn/" + id} passHref>
          <Link arrow="right" aria-label={`Learn more about ${modelName} ${modelType}`}>Learn</Link>    
        </NextLink>
        <Spacer size={2} />
        <NextLink href={"/shop/" + id}  passHref>
          <Link arrow="right" aria-label={`Shop for ${modelName} ${modelType}`}>Shop</Link>
        </NextLink>
      </View>
    </Block>
  );
};
