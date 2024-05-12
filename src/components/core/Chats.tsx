import React from 'react'
import { Card, CardContent } from '../ui/card'

type Props = {}

export default function Chats({ }: Props) {
    return (
        <>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                    <div>
                        🤖
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-sm text-gray-500'>AI</h1>
                        <h2 className='text-xs text-gray-500'>12:00 PM</h2>
                    </div>
                </div>

                <Card>
                    <CardContent>
                        welcome to my travel website, i am here to help you with your question
                    </CardContent>
                </Card>
            </div>
        </>
    )
}