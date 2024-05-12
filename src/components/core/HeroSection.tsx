'use client'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

type Props = {
    name: string
}

const images = [
    {
        name: 'hotel',
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'hotel',
        url: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'hotel',
        url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'hotel',
        url: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
]


export default function HeroSection({ name }: Props) {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <div>
            <div>
                <h1 className='text-xl'>hi, {name}</h1>
                <p className='text-xl font-semibold underline'>lets explore the world today!</p>
            </div>

            <div>
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full h-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem
                                className=''
                                key={index}>
                                    <Card
                                    className='h-[10rem] relative'
                                >
                                        <Image
                                        src={image.url}
                                        alt={image.name}
                                        fill
                                        className='object-cover object-center w-full h-full'
                                    />
                                    </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}
