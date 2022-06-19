export interface productProps {
    img: any;
    title: string;
    moq: number;
    price: number;
}

export interface headerProps {
    prod_group: string;
    prod_items: productProps[];
}

export interface catalogProps {
    count: number;
    catalog: headerProps[];
}
