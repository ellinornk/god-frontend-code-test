import React, { useEffect, useState } from "react";
import { Text } from "vcc-ui";
import { CarCarousel } from "./Carousel";

const Landing: React.FC = () => {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('../../../api/cars.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <Text>Loading...</Text>
  if (!data) return <Text>No profile data</Text>
  
  return(
    <>
      <Text variant="cook" as="h1">Volvo</Text>
      <CarCarousel items={data}/>
    </>
  );
};

export default Landing;