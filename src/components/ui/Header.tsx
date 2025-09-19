import * as React from "react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X,Menu, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
            "hover:text-blue-400 focus:text-blue-400",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-white">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Header() {

  const [open, setOpen] = React.useState(false);
  const hoverRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverRef.current) clearTimeout(hoverRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    hoverRef.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <header className="flex items-center justify-between p-4 px-8 bg-black/30 backdrop-blur-sm text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="flex items-center">
        <img src="/logo-light.png" alt="Gravity Team Logo" className="h-8" />
      </div>
      <div className="hidden md:flex">

        <NavigationMenu>
          <NavigationMenuList className="space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="bg-transparent text-sm font-medium hover:bg-transparent hover:text-blue-300 focus:bg-transparent">
                ABOUT US
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center bg-transparent text-sm font-medium hover:text-blue-300 focus:outline-none data-[state=open]:text-blue-300">
                    OUR SERVICES
                    {open ? (
                      <ChevronUp className="ml-1 h-4 w-4 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                    )}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[240px] rounded-xl border border-gray-800 bg-black/30 shadow-lg backdrop-blur-sm">
                  <DropdownMenuItem className="text-white hover:text-blue-400 focus:bg-transparent focus:text-blue-400 cursor-pointer">
                    Liquidity for Crypto Exchanges
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:text-blue-400 focus:bg-transparent focus:text-blue-400 cursor-pointer">
                    Crypto Coin Market Making
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="bg-transparent text-sm font-medium hover:bg-transparent hover:text-blue-300 focus:bg-transparent">
                CAREERS
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="bg-transparent text-sm font-medium hover:bg-transparent hover:text-blue-300 focus:bg-transparent">
                BLOG
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden md:block">
        <Button variant="outline" className="bg-transparent text-white border-blue-500 hover:bg-blue-500">
          GET IN TOUCH
        </Button>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-full h-full bg-[#111111] border-none text-white flex flex-col p-0 [&>button]:hidden"
          >
            {/* 1. Custom Header with a SINGLE close button */}
            <header className="flex justify-between items-center p-6 border-b border-white/10">
              <img src="/logo-light.png" alt="Gravity Team Logo" className="h-8" />
              <SheetClose asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-yellow-500/50 text-white hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </header>

            {/* 2. Top-aligned Navigation Links with consistent styles */}
            <div className="p-6">
              <div className="flex flex-col space-y-4 text-xl font-medium">
                <a href="#" className="py-2 hover:text-gray-300">ABOUT US</a>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b-0">
                    {/* The AccordionTrigger now matches the style of the other links */}
                    <AccordionTrigger className="py-2 text-xl font-medium hover:no-underline hover:text-gray-300">
                      OUR SERVICES
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 pt-2">
                      <a href="#" className="block py-2 text-base text-gray-400 hover:text-blue-400">
                        Liquidity for Crypto Exchanges
                      </a>
                      <a href="#" className="block py-2 text-base text-gray-400 hover:text-blue-400">
                        Crypto Coin Market Making
                      </a>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <a href="#" className="py-2 hover:text-gray-300">CAREERS</a>
                <a href="#" className="py-2 hover:text-gray-300">BLOG</a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
