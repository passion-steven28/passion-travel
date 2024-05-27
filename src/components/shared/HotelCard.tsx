'use client'
import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card'
import { StarIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { CldImage } from 'next-cloudinary'
import { getCldImageUrl } from 'next-cloudinary';

type Props = {
    name: string;
    location: string;
    rating: number;
    price: number;
    discount?: number;
    image: string;
}


export default function HotelCard({ name, location, rating, price, discount, image }: Props) {
    const url = getCldImageUrl({
        width: 'fill',
        height: 'fill',
        src: image
    });
    console.log(url);

    return (
        <Card className='hover:shadow-lg'>
            <CardContent className='relative h-[10rem] mb-2'>
                {/* <Image
                    src={url}
                    alt="Description of my image"
                    fill
                /> */}
                <CldImage
                    fill
                    fillBackground
                    src={image}
                    sizes="100vw"
                    alt="Description of my image"
                />
            </CardContent>
            <CardFooter className='grid gap-2'>
                <div className='flex items-center justify-between w-full gap-2'>
                    <div className='grid gap-2'>
                        <CardTitle className='text-lg'>{name}</CardTitle>
                        <h1 className='text-sm'>{location}</h1>
                        <div className='flex items-center gap-1'>
                            <StarIcon size={20} />
                            <span className='text-sm'>{rating}</span>
                        </div>
                    </div>
                    <div className='grid gap-2'>
                        <CardTitle className={cn(discount ? 'text-red-700 line-through' : 'underline')}>
                            {price}
                        </CardTitle>
                        <CardTitle className='underline'>
                            {discount}
                        </CardTitle>
                    </div>
                </div>
                <Button
                    className='w-full bg-M_primary text-M_white'
                >
                    book now
                </Button>
            </CardFooter>
        </Card>
    )
}