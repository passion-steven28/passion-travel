import React from 'react'

type Props = {
    title: string,
    children: React.ReactNode
}

export default function HomeSideCardLayout({title,children }: Props) {
    return (
        <div>
            <h1>{ title}</h1>
            <div>
                {children}
            </div>
        </div>
    )
}