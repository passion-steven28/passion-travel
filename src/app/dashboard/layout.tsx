'use client'
import Left_sidebar from "@/components/shared/Left-sidebar";
import Right_sidebar from "@/components/shared/Right-sidebar";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { CircleHelp, CircleUser, Home, Hotel, Settings, Train } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'


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


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {


    return (
        <div
            className="bg-M_white2 grid grid-cols-12 gap-2 min-h-screen w-full relative"
        >
            <Left_sidebar />
            <main className="col-start-3 col-end-13 h-full w-full relative">
                {children}
            </main>
        </div>
    )
}
