import react from 'react';

type cardProps = {
    url: string;
    title: string;
    moq: number;
    price: number;
};
function CardComponent({ url, title, moq, price }: cardProps) {
    return (
        <div className="shadow-lg rounded overflow-hidden border-solid border-2 w-[240px] h-[352px]">
            <div className="w-[240px] h-[240px] flex justify-center items-center bg-indigo-100">
                <img className="w-[200px] h-[240px]" alt="product" src={url} />
            </div>
            <div className="p-3 flex flex-col space-y-1">
                <div className="text-xl font-semibold ">{title}</div>
                <div className="text-gray-400 font-medium text-sm">
                    <div>Quantity: {moq}</div>
                    <div>Price: {price.toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
}
export default CardComponent;
