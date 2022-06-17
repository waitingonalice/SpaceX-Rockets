import products from "./data/products.json";
import { catalogProps } from "./common/types/types";
import TabContent from "./Components/TabContent";
import TabBar from "./Components/TabBar";
import { useState } from "react";
import { tab } from "@testing-library/user-event/dist/tab";
import CardComponent from "./Components/Card";

const fetch = JSON.parse(JSON.stringify(products));

function App() {
    const data: catalogProps = fetch;
    const [active, setActive] = useState<number>(0);
    const handleClick = (idx: number) => {
        setActive(idx);
    };
    console.log(active);
    return (
        <div className="App relative mx-auto">
            {data.catalog.map((ele, index) => (
                <TabBar
                    key={index}
                    active={active}
                    handleClick={handleClick}
                    tabName={data.catalog[index].prod_group}
                    index={index}
                ></TabBar>
            ))}
            {data.catalog.map((ele, index) => (
                <TabContent
                    key={index}
                    active={active}
                    tabName={data.catalog[index].prod_group}
                    index={index}
                >
                    {ele.prod_items.map((e) => (
                        <CardComponent
                            img={e.title}
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
