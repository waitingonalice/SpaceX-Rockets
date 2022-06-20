import { catalogProps } from './common/types/types';
import TabContent from './Components/TabContent';
import TabBar from './Components/TabBar';
import { useState } from 'react';
import CardComponent from './Components/Card';
import './Styles/tabs.css';

const fetch = require('./data/products.json');
console.dir(fetch);
function App() {
    const data: catalogProps = fetch;
    const [active, setActive] = useState<number>(0);
    const handleClick = (idx: number) => {
        setActive(idx);
    };

    return (
        <div className="App relative mx-auto">
            <div className="tab-container border-solid border 2 border-b-slate-300 -m-[1px] overflow-y-hidden overflow-x-auto whitespace-nowrap">
                <ul className="flex">
                    {data &&
                        data.catalog.map((ele, index) => (
                            <TabBar
                                key={index}
                                active={active}
                                handleClick={handleClick}
                                tabName={data.catalog[index].prod_group}
                                index={index}
                            ></TabBar>
                        ))}
                </ul>
            </div>
            {data &&
                data.catalog.map((ele, index) => (
                    <TabContent
                        key={index}
                        active={active}
                        tabName={data.catalog[index].prod_group}
                        index={index}
                    >
                        {ele.prod_items.map((e) => (
                            <CardComponent
                                key={e.title}
                                url={e.img}
                                title={e.title}
                                moq={e.moq}
                                price={e.price}
                            />
                        ))}
                    </TabContent>
                ))}
        </div>
    );
}

export default App;
