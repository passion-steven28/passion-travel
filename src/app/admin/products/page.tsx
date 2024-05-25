import Image from "next/image"
import Link from "next/link"
import {
    ChevronLeft,
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Upload,
    Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Dashboard() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <form action="">
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                            <div className="flex items-center gap-4">
                                <Button variant="outline" size="icon" className="h-7 w-7">
                                    <ChevronLeft className="h-4 w-4" />
                                    <span className="sr-only">Back</span>
                                </Button>
                                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                                    Pro Controller
                                </h1>
                                <Badge variant="outline" className="ml-auto sm:ml-0">
                                    In stock
                                </Badge>
                                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                                    <Button variant="outline" size="sm">
                                        Discard
                                    </Button>
                                    <Button size="sm">Save Product</Button>
                                </div>
                            </div>
                            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                                    <Card x-chunk="dashboard-07-chunk-0">
                                        <CardHeader>
                                            <CardTitle>Product Details</CardTitle>
                                            <CardDescription>
                                                Lipsum dolor sit amet, consectetur adipiscing elit
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid gap-6">
                                                <div className="grid gap-3">
                                                    <Label htmlFor="name">Name</Label>
                                                    <Input
                                                        name="name"
                                                        type="text"
                                                        className="w-full"
                                                        placeholder="Product Name"
                                                    />
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="description">Description</Label>
                                                    <Textarea
                                                        id="description"
                                                        placeholder="Product Description"
                                                        className="min-h-32"
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card x-chunk="dashboard-07-chunk-2">
                                        <CardHeader>
                                            <CardTitle>Product Category</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid gap-6 sm:grid-cols-3">
                                                <div className="grid gap-3">
                                                    <Label htmlFor="category">Category</Label>
                                                    <Select>
                                                        <SelectTrigger
                                                            id="category"
                                                            aria-label="Select category"
                                                        >
                                                            <SelectValue placeholder="Select category" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="clothing">Clothing</SelectItem>
                                                            <SelectItem value="electronics">
                                                                Electronics
                                                            </SelectItem>
                                                            <SelectItem value="accessories">
                                                                Accessories
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="subcategory">
                                                        Subcategory (optional)
                                                    </Label>
                                                    <Select>
                                                        <SelectTrigger
                                                            id="subcategory"
                                                            aria-label="Select subcategory"
                                                        >
                                                            <SelectValue placeholder="Select subcategory" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="t-shirts">T-Shirts</SelectItem>
                                                            <SelectItem value="hoodies">Hoodies</SelectItem>
                                                            <SelectItem value="sweatshirts">
                                                                Sweatshirts
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                                    <Card x-chunk="dashboard-07-chunk-3">
                                        <CardHeader>
                                            <CardTitle>Product Status</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid gap-6">
                                                <div className="grid gap-3">
                                                    <Label htmlFor="status">Status</Label>
                                                    <Select>
                                                        <SelectTrigger id="status" aria-label="Select status">
                                                            <SelectValue placeholder="Select status" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="draft">Draft</SelectItem>
                                                            <SelectItem value="published">Active</SelectItem>
                                                            <SelectItem value="archived">Archived</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card
                                        className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                                    >
                                        <CardHeader>
                                            <CardTitle>Product Images</CardTitle>
                                            <CardDescription>
                                                Lipsum dolor sit amet, consectetur adipiscing elit
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid gap-2">
                                                <Image
                                                    alt="Product image"
                                                    className="aspect-square w-full rounded-md object-cover"
                                                    height="300"
                                                    src="/placeholder.svg"
                                                    width="300"
                                                />
                                                <div className="grid grid-cols-3 gap-2">
                                                    <button>
                                                        <Image
                                                            alt="Product image"
                                                            className="aspect-square w-full rounded-md object-cover"
                                                            height="84"
                                                            src="/placeholder.svg"
                                                            width="84"
                                                        />
                                                    </button>
                                                    <button>
                                                        <Image
                                                            alt="Product image"
                                                            className="aspect-square w-full rounded-md object-cover"
                                                            height="84"
                                                            src="/placeholder.svg"
                                                            width="84"
                                                        />
                                                    </button>
                                                    <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                                                        <Input type="file" />
                                                        <Upload className="h-4 w-4 text-muted-foreground" />
                                                        <span className="sr-only">Upload</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card x-chunk="dashboard-07-chunk-5">
                                        <CardHeader>
                                            <CardTitle>Archive Product</CardTitle>
                                            <CardDescription>
                                                Lipsum dolor sit amet, consectetur adipiscing elit.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div></div>
                                            <Button size="sm" variant="secondary">
                                                Archive Product
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2 md:hidden">
                                <Button variant="outline" size="sm">
                                    Discard
                                </Button>
                                <Button size="sm">Save Product</Button>
                            </div>
                        </div>
                    </main>
                </form>
            </div>
        </div>
    )
}
