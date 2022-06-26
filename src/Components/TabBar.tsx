import "../Styles/tabs.css";

type tabButtonProp = {
    handleClick: (idx: number) => void;
    active: number;
    index: number;
    tabName: string;
};

export default function TabBar({
    handleClick,
    active,
    index,
    tabName,
}: tabButtonProp) {
    const className: string = index === active ? "active-tab" : "tab";

    return (
        <div className={className} role="button">
            <li>
                <button
                    type="button"
                    onClick={() => handleClick(index)}
                    value={tabName}
                >
                    {tabName}
                </button>
            </li>
        </div>
    );
}
