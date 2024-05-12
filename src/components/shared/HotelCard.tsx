import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card'
import { StarIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
    name: string;
    location: string;
    rating: number;
    price: number;
    discount?: number;
    image: string;
}

export default function HotelCard({ name, location, rating, price, discount,image }: Props) {
    return (
        <Card>
            <CardContent className='relative h-[10rem]'>
                <Image
                    src={image}
                    alt='img'
                    fill
                    className='w-full h-full object-cover object-center'
                />
            </CardContent>
            <CardFooter className='grid gap-2'>
                <div className='flex items-center justify-between w-full gap-2'>
                    <div className='grid gap-2'>
                        <CardTitle className='text-lg'>{name}</CardTitle>
                        <h1 className='text-sm'>{location}</h1>
                        <div>
                            <StarIcon size={20} />
                            <span className='text-sm'>{rating}</span>
                        </div>
                    </div>
                    <div className='grid gap-2'>
                        <CardTitle className={cn(discount? 'text-red-700 line-through' : 'underline')}>
                            {price}
                        </CardTitle>
                        <CardTitle className='underline'>
                            {discount}
                        </CardTitle>
                    </div>
                </div>
                <Button
                className='w-full bg-M_primary text-M_white'
                >book now</Button>
            </CardFooter>
        </Card>
    )
}