'use client'
import React from 'react'
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"
import { Calendar } from '../ui/calendar'

type Props = {}

export default function BookingCalender({ }: Props) {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2024, 3),
        to: addDays(new Date(2022, 0, 20), 20),
    })
    return (
        <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={1}
        />
    )
}