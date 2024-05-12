import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'
import { Separator } from '../ui/separator'
import Chats from './Chats'

type Props = {}

export default function ChatSideComp({ }: Props) {
    return (
        <Card className='max-h-screen w-full h-[calc(100vh-48px)] flex flex-col justify-between rounded-l-bg'>
            <CardHeader>
                <CardTitle className='text-xl'>chat with our ai chatbot</CardTitle>
            </CardHeader>

            <Separator />

            <CardContent className='flex-grow overflow-y-auto h-full'>
                <Chats />
            </CardContent>
            <CardFooter>
                <form className='flex items-center rounded-xl border border-gray-300 p-2'>
                    <Input
                        type='text'
                        placeholder='Enter your message'
                        className='w-full focus:outline-none focus-visible:ring-none border-none'
                    />
                    <Button
                        type="submit"
                        variant={'outline'}
                        size={'default'}
                    >
                        <Send size={20} />
                    </Button>
                </form>
            </CardFooter>
        </Card>
    )
}