import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <section className="flex items-center mx-auto h-125 rounded-lg bg-slate-200">
            <div className="mx-auto px-4 text-center" >
                <h2 className="text-4xl font-bold mb-4">Welcome to HOMME</h2>
                <p className="text-2xl text-gray-700 mb-6">Discover the latest trends in men's fashion. Shop our new collection now!</p>
                <Button variant="default" className="px-6 py-4 bg-gray-700 cursor-pointer rounded-md hover:bg-gray-800">
                    <a href="/products">Shop Now</a>
                </Button>
            </div >
        </section >
    )
}

export default Hero