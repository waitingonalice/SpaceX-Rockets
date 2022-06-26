import { ReactElement } from "react";
import "../Styles/headers.css";
import "../Styles/TabContent.css";

export interface TabContentProps {
    active: number;
    index: number;
    tabName: string;
    children: ReactElement[] | undefined;
}

function TabContent({ active, index, tabName, children }: TabContentProps) {
    return active === index ? (
        <div className="px-11 py-16">
            <div className="text-gray-400 font-semibold">Catalog</div>
            <h1>{tabName}</h1>
            <div className="card-content grid gap-10 justify-center sm:justify-start py-4">
                {children}
            </div>
        </div>
    ) : null;
}

export default TabContent;
