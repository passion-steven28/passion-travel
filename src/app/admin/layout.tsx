import { TooltipProvider } from "@/components/ui/tooltip";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <SideBar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <NavBar />
          {children}
        </div>
      </div>
    </TooltipProvider>
  );
}