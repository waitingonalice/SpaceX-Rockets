import React from "react";

type cardProps = {
    mission_name: string;
    launch_date_local: string;
    rocket_name: string;
    url?: string;
};
function CardComponent({
    mission_name,
    launch_date_local,
    rocket_name,
    url,
}: cardProps) {
    return (
        <div
            className="shadow-lg rounded overflow-hidden border-solid border-2 min-w-[240px] min-h-[350px] transition ease-in-out hover:shadow-2xl"
            role="button"
        >
            <div className="w-[240px] h-[240px] flex justify-center items-center bg-indigo-100">
                <img className="w-[240px] h-[240px]" alt="rocket" src={url} />
            </div>
            <div className="p-3 flex flex-col space-y-1">
                <div className="text-sm font-semibold ">{mission_name}</div>
                <div className="text-gray-400 font-light text-sm">
                    <div>Rocket: {rocket_name}</div>
                    <div>Datetime: {launch_date_local}</div>
                </div>
            </div>
        </div>
    );
}
export default CardComponent;
