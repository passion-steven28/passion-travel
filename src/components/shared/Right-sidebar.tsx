'use client'
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { CircleHelp, CircleUser, Home, Hotel, Settings, Train } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import HomeSideCardLayout from "./HomeSideCardLayout";
import BookingCalender from "../core/BookingCalender";
import HomeBudgetComp from "../core/HomeBudgetComp";
import { ReactNode } from "react";


const navLinks = [
    {
        name: "Home",
        link: "/dashboard/home",
        icon: <Home />
    },
    {
        name: "Transport",
        link: "/dashboard/transport",
        icon: <Train />
    },
    {
        name: "HotelBooking",
        link: "/dashboard/hotel",
        icon: <Hotel />
    }
]

const preferenceLinks = [
    {
        name: 'Settings',
        link: '/dashboard/preference/settings',
        icon: <Settings size={20} />
    },
    {
        name: 'Help & Center',
        link: '/dashboard/preference/help',
        icon: <CircleHelp size={20} />
    },
    {
        name: 'Account',
        link: '/dashboard/preference/account',
        icon: <CircleUser size={20} />
    }
]

const Right_sidebar = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <section className="col-start-10 col-end-13 sticky top-12 right-0 flex flex-col gap-4 h-full">
            {children}
        </section>
    )
}

export default Right_sidebar
