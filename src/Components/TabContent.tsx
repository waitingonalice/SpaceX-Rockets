import React from "react";
import "../Styles/headers.css";
import "../Styles/TabContent.css";
export interface TabContentProps {
    active: number;
    idx: number;
    title: string | number;
    children?: any;
}

function TabContent(props: TabContentProps) {
    return props.active === props.idx ? (
        <div className="px-11 py-16">
            <div className="text-gray-400 font-semibold">Catalog</div>
            <h1>{props.title}</h1>
            <div className="card-content grid gap-10 justify-center sm:justify-start py-4">
                {props.children}
            </div>
        </div>
    ) : null;
}

export default TabContent;
