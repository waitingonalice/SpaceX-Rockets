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
        <li
            className={className}
            onClick={() => handleClick(index)}
            role="button"
        >
            {tabName}
        </li>
    );
}
