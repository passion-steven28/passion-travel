import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { BellRing, Search } from 'lucide-react'

const NavBar = () => {
    return (
        <nav className='flex items-center justify-evenly bg-M_white p-2 w-full h-12 sticky top-0 z-10'>
            <div>
                logo
            </div>

            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="search" placeholder="search here..." />
                <Button type="submit" size={'icon'}>
                    <Search />
                </Button>
            </div>

            <div className="flex items-center space-x-2">
                <div>
                    <Sheet>
                        <SheetTrigger>
                            <BellRing />
                        </SheetTrigger>
                        <SheetContent className="w-[400px] sm:w-[540px]">
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
