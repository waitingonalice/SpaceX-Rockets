import pepperPaste from "../images/HotPepperPaste.png";
import soy from "../images/soy.png";
import spicyBBQ from "../images/Spicy_BBQ_Sauce-removebg-preview 1.png";

export interface productProps {
    img: any;
    title: string;
    moq: number;
    price: number;
}
export const koreanProducts: productProps[] = [
    { img: pepperPaste, title: "Product 1", moq: 20, price: 4.5 },
    { img: soy, title: "Product 2", moq: 30, price: 4.5 },
    { img: spicyBBQ, title: "Product 3", moq: 20, price: 4.5 },
    { img: pepperPaste, title: "Product 4", moq: 20, price: 4.5 },
    { img: soy, title: "Product 5", moq: 30, price: 4.5 },
    { img: spicyBBQ, title: "Product 6", moq: 20, price: 4.5 },
    { img: pepperPaste, title: "Product 7", moq: 20, price: 4.5 },
    { img: soy, title: "Product 8", moq: 30, price: 4.5 },
    { img: spicyBBQ, title: "Product 9", moq: 20, price: 4.5 },
    { img: pepperPaste, title: "Product 10", moq: 20, price: 4.5 },
    { img: soy, title: "Product 11", moq: 30, price: 4.5 },
    { img: spicyBBQ, title: "Product 12", moq: 20, price: 4.5 },
    { img: pepperPaste, title: "Product 13", moq: 20, price: 4.5 },
    { img: soy, title: "Product 14", moq: 30, price: 4.5 },
    { img: spicyBBQ, title: "Product 15", moq: 20, price: 4.5 },
    { img: pepperPaste, title: "Product 16", moq: 20, price: 4.5 },
    { img: soy, title: "Product 17", moq: 30, price: 4.5 },
    { img: spicyBBQ, title: "Product 18", moq: 20, price: 4.5 },
];
