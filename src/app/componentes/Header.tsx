import { Button } from "@/components/ui/button"

const Header = () => {
    return (
        <header className="border-b border-gray-300">
            <div className="flex justify-between items-center p-8">

                <div>
                    <h1 className="text-2xl font-bold text-black">HOMME</h1>
                </div>

                {/* MENU DESKTOP: Começa escondido (hidden) e vira 'flex' apenas em telas 'sm' pra cima */}
                <nav className="hidden sm:flex">
                    <ul className="flex gap-8">
                        <li><a href="/" className="text-gray-600 hover:text-gray-800 font-medium">Home</a></li>
                        <li><a href="/products" className="text-gray-600 hover:text-gray-800 font-medium">Products</a></li>
                        <li><a href="/link3" className="text-gray-600 hover:text-gray-800 font-medium">Collections</a></li>
                        <li><a href="/link4" className="text-gray-600 hover:text-gray-800 font-medium">Contact</a></li>
                    </ul>
                </nav>

                <div>
                    <Button variant="default">
                        Login
                    </Button>
                </div>

            </div>
        </header>
    )
}

export default Header