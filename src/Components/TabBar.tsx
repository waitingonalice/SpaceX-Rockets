import React, { ReactElement } from "react";
import "../Styles/tabs.css";
import TabContent from "./TabContent";

interface tabButtonProp {
    handleClick: (idx: number) => void;
    active: number;
    tabName: string;
    index: number;
}

export default function TabBar({
    handleClick,
    active,
    tabName,
    index,
}: tabButtonProp) {
    const className = index === active ? "active-tab" : "tab";
    return (
        <div className={className}>
            <li>
                <button onClick={() => handleClick(index)}>{tabName}</button>
            </li>
        </div>
    );
}
