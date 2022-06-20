import React from 'react';
import { productProps } from '../common/types/types';

function CardComponent(props: productProps) {
    return (
        <div className="shadow-lg rounded overflow-hidden border-solid border-2 w-[240px] h-[352px]">
            <div className="w-[240px] h-[240px] flex justify-center items-center bg-indigo-100">
                <img className="w-[200px] h-[240px]" alt="product" src={props.img} />
            </div>
            <div className="p-3 flex flex-col space-y-1">
                <div className="text-xl font-semibold ">{props.title}</div>
                <div className="text-gray-400 font-medium text-sm">
                    <div>Quantity: {props.moq}</div>
                    <div>Price: {props.price.toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
}
export default CardComponent;
