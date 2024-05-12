import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Button } from '../ui/button'
import SelectDropDown from '../shared/SelectDropDown'
import { ArrowUpDown } from 'lucide-react'

type Props = {}

const transports = [
    {
        name: 'Car',
    },
    {
        name: 'Bus',
    },
    {
        name: 'Train',
    },
    {
        name: 'Plane',
    },
]

// Define the options for each dropdown
const dropdownOptions2: {
    placeholder: string;
    option: {
        value: string;
        label: string;
    }[];
}[] = [
        {
            placeholder: "Select Option 1",
            option: [
                {
                    value: 'x',
                    label: 'x',
                },
                {
                    value: 'x',
                    label: 'x',
                },
            ],
        },
        {
            placeholder: "Select Option 2",
            option: [
                {
                    value: 'x',
                    label: 'x',
                },
                {
                    value: 'x',
                    label: 'x',
                },
            ],
        },
        {
            placeholder: "Select Option 3",
            option: [
                {
                    value: 'x',
                    label: 'x',
                },
                {
                    value: 'x',
                    label: 'x',
                },
            ],
        },
    ];

export default function TransportSearchComp({ }: Props) {
    return (
        <Card>
            <CardHeader className='flex flex-row justify-between items-center gap-2 w-full'>
                {transports.map((transport) => {
                    return <Button
                        key={transport.name}
                        variant="outline"
                        className='w-full'
                    >
                        {transport.name}
                    </Button>
                })}
            </CardHeader>
            <CardContent className='flex flex-col justify-center w-full'>
                <SelectDropDown
                    title='enter pickup details'
                    selects={dropdownOptions2}
                />

                <div className='flex items-center justify-center w-full my-4'>
                    <Button
                        size={'icon'}
                    >
                        <ArrowUpDown />
                    </Button>
                </div>

                <SelectDropDown
                    title='enter drop details'
                    selects={dropdownOptions2}
                />
            </CardContent>
            <CardFooter>
                <Button className='w-full'>
                    Search
                </Button>
            </CardFooter>
        </Card>
    )
}