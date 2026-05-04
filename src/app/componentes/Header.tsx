import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Button } from "@mui/material"

const Header = () => {
    return (
        <header className="border-b border-gray-300">
            <div className="flex justify-between items-center p-8">

                <div>
                    <h1 className="text-2xl font-bold text-black">HOMME</h1>
                </div>

                {/* MENU MOBILE: Aparece apenas em telas pequenas, some em telas 'md' (768px+) */}
                <NavigationMenu className="md:hidden">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink asChild><a href="/">Home</a></NavigationMenuLink>
                                <NavigationMenuLink asChild><a href="/link2">Products</a></NavigationMenuLink>
                                <NavigationMenuLink asChild><a href="/link3">Collections</a></NavigationMenuLink>
                                <NavigationMenuLink asChild><a href="/link4">Contact</a></NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* MENU DESKTOP: Começa escondido (hidden) e vira 'flex' apenas em telas 'md' pra cima */}
                <nav className="hidden md:flex">
                    <ul className="flex gap-8">
                        <li><a href="/" className="text-gray-600 hover:text-gray-800 font-medium">Home</a></li>
                        <li><a href="/link2" className="text-gray-600 hover:text-gray-800 font-medium">Products</a></li>
                        <li><a href="/link3" className="text-gray-600 hover:text-gray-800 font-medium">Collections</a></li>
                        <li><a href="/link4" className="text-gray-600 hover:text-gray-800 font-medium">Contact</a></li>
                    </ul>
                </nav>

                <div>
                    <Button variant="outlined">
                        Login
                    </Button>
                </div>

            </div>
        </header>
    )
}

export default Header