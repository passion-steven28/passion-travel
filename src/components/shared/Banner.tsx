import React from 'react'
import { Button } from '../ui/button'

type Props = {
    title: string,
    description: string,
    btn1: string,
    btn2: string,
    bgImage: string
}

export default function Banner({
    title,
    description,
    btn1,
    btn2,
    bgImage,
}: Props) {
    return (
        <div
            className="max-h-[25vh] h-full w-full flex flex-col items-center justify-center p-4 rounded-lg text-center overflow-hidden shadow relative"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h1 className="text-3xl font-bold text-pretty">{title}</h1>
            <p className="text-M_white3 text-sm mt-2">{description}</p>
            <div className="flex items-center justify-center gap-4 mt-4">
                <Button>{btn1}</Button>
                <Button variant={"outline"}>{btn2}</Button>
            </div>
            <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
    );
}
