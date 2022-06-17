import React from "react";
import "../Styles/tabs.css";
import logo from "../images/Trustana_Full logo_color.png";

interface tabButtonProp {
    active: number;
    handleClick: (idx: number) => void;
}

export default function TabButton(props: tabButtonProp) {
    return (
        <div className="">
            <ul className="tab-container flex flex-row whitespace-nowrap  overflow-x-auto overflow-y-hidden">
                <li>
                    <button
                        type="button"
                        className={
                            props.active === 1 ? `active-tab` : "tab h-[48px]"
                        }
                        onClick={() => props.handleClick(1)}
                    >
                        Korean Products
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className={props.active === 2 ? "active-tab" : "tab"}
                        onClick={() => props.handleClick(2)}
                    >
                        Chinese Products
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className={props.active === 3 ? "active-tab" : "tab"}
                        onClick={() => props.handleClick(3)}
                    >
                        Japanese Products
                    </button>
                </li>
                <div className="pr-5 pl-5 flex ml-auto items-center w-[120px]">
                    <img src={logo} alt="trustana" className="" />
                </div>
            </ul>
        </div>
    );
}
