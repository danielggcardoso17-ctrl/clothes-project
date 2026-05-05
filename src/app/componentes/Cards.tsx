
interface CardProps {
    Image: string;
    Title: string;
    Description: string;
    Price: number;
}

const Cards = ({ Image, Title, Description, Price }: CardProps) => {
    return (
        <div className="flex flex-col gap-2 p-4 rounded-lg shadow-md w-80" >
            <img src={Image} alt={Title} className="h-full w-full object-contain" />
            <h2 className="text-2xl">{Title}</h2>
            <p>{Description}</p>
            <p>${Price.toFixed(2)}</p>
            <div className="flex flex-col gap-2">
                <button className="bg-green-500 text-white font-bold p-2 rounded-md cursor-pointer hover:opacity-70">Adicionar a sacola</button>
                <button className="border border-green-500 text-green-500 font-bold p-2 rounded-md cursor-pointer hover:text-green-600">Comprar agora</button>
            </div>
        </div>
    )
}

export default Cards
