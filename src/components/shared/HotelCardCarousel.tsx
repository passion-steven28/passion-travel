import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '../ui/card'
import HotelCard from './HotelCard'

type Props = {
  title: string,
  hotels: Array<{name: string, location: string, rating: number, price: number,image: string}>
}

export default function HotelCardCarousel({ title, hotels }: Props) {

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel
          className="w-full"
        >
          <CarouselContent
            className="-ml-1">
            {hotels.map((hotel, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <HotelCard
                  name={hotel.name}
                  location={hotel.location}
                  rating={hotel.rating}
                  price={hotel.price}
                  image={hotel.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  )
}