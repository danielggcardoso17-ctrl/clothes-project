const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-10 mt-10 mx-auto rounded-t-lg">

            <div className="container mx-auto text-center">
                <p>&copy; 2026 Loja HOMME. All rights reserved.</p>
            </div>

            <div className="flex flex-col items-start gap-10 mt-10 md:flex-row md:justify-around">

                <div className="flex flex-col gap-2">
                    <p className="text-xl text-red-300">Follow us on social media!</p>
                    <ul>
                        <li><a href="https://facebook.com" className="text-white hover:text-gray-300">Facebook</a></li>
                        <li><a href="https://twitter.com" className="text-white hover:text-gray-300">Twitter</a></li>
                        <li><a href="https://instagram.com" className="text-white hover:text-gray-300">Instagram</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-xl text-red-300">Contact Us</p>
                    <ul>
                        <li><a href="https://facebook.com" className="text-white hover:text-gray-300">Facebook</a></li>
                        <li><a href="https://twitter.com" className="text-white hover:text-gray-300">Twitter</a></li>
                        <li><a href="https://instagram.com" className="text-white hover:text-gray-300">Instagram</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-xl text-red-300">Newsletter</p>
                    <ul>
                        <li><a href="https://facebook.com" className="text-white hover:text-gray-300">Facebook</a></li>
                        <li><a href="https://twitter.com" className="text-white hover:text-gray-300">Twitter</a></li>
                        <li><a href="https://instagram.com" className="text-white hover:text-gray-300">Instagram</a></li>
                    </ul>
                </div>

            </div>

        </footer>
    )
}

export default Footer