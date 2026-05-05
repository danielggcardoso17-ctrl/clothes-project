import Cards from "./Cards"

const Products = () => {
    return (
        <div className="flex flex-col items-center gap-3">
            <h1 className="text-2xl font-bold">Products</h1>
            <p>Here are our latest products!</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <Cards Image="/shopping.webp" Title="Product Name" Description="Product Description" Price={19.99} />
                <Cards Image="/shopping.webp" Title="Product Name" Description="Product Description" Price={19.99} />
                <Cards Image="/shopping.webp" Title="Product Name" Description="Product Description" Price={19.99} />
                <Cards Image="/shopping.webp" Title="Product Name" Description="Product Description" Price={19.99} />
                <Cards Image="/shopping.webp" Title="Product Name" Description="Product Description" Price={19.99} />
                <Cards Image="/shopping.webp" Title="Product Name" Description="Product Description" Price={19.99} />
                <Cards Image="/shopping.webp" Title="Product Name" Description="Product Description" Price={19.99} />
                <Cards Image="/shopping.webp" Title="Product Name" Description="Product Description" Price={19.99} />
            </div>
        </div>
    )
}
export default Products