'use client'
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
        link: '/dashboard/preference/settings',
        icon: <CircleUser size={20} />
    }
]

const Left_sidebar = () => {
    const pathname = usePathname()
    const active = navLinks.find((link) => link.link === pathname)?.name

    return (
        <Card className="col-start-1 col-end-3 flex flex-col justify-start gap-4 M_white p-4 h-[calc(100vh-48px)] max-h-screen sticky top-12 left-0 rounded-r-bg">
            <CardTitle>Dashboard</CardTitle>
            <CardContent
                className="flex flex-col gap-2 items-start w-full p-0">
                <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.link}
                            className={cn(
                                "flex flex-row gap-2 items-center p-2 rounded-md w-full hover:bg-M_primary hover:text-M_white2 transform transition-all duration-300 ease-in-out",
                                pathname === link.link
                                    ? "bg-M_primary text-M_white2"
                                    : "text-M_black"
                            )}
                        >
                            <span>
                                {link.icon}
                            </span>
                            <h1>{link.name}</h1>
                        </Link>
                    ))}
                </div>
            </CardContent>
            <CardFooter
                className="absolute bottom-2 left-0 w-full flex flex-col justify-center items-center"
            >
                <div className="flex flex-col gap-2">
                    {preferenceLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.link}
                            className={cn(
                                "flex flex-row gap-2 items-center p-2 rounded-md w-full text-M_primary hover:underline text-sm transform transition-all duration-300 ease-in-out",
                            )}
                        >
                            <span>
                                {link.icon}
                            </span>
                            <h1>{link.name}</h1>
                        </Link>
                    ))}
                </div>
            </CardFooter>
        </Card>
    )
}

export default Left_sidebar
