import '../Styles/tabs.css';

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
    const className: string = index === active ? 'active-tab' : 'tab';
    return (
        <div className={className}>
            <li>
                <button onClick={() => handleClick(index)}>{tabName}</button>
            </li>
        </div>
    );
}
