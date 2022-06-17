import { useState } from "react";
import TabButton from "./Components/Tab";
import CardComponent from "./Components/Card";
import TabContent from "./Components/TabContent";
import Pagination from "./Components/Pagination";
import { koreanProducts, productProps } from "./data/KoreanProducts";

function App() {
    const [active, setActive] = useState<number>(1);
    const handleClick = (idx: number) => {
        setActive(idx);
    };
    return (
        <div className="App relative mx-auto">
            <TabButton active={active} handleClick={handleClick} />

            <TabContent active={active} idx={1} title={"Korean Products"}>
                {koreanProducts.map(
                    ({ img, title, moq, price }: productProps) => (
                        <div key={title}>
                            <CardComponent
                                img={img}
                                title={title}
                                moq={moq}
                                price={price}
                            ></CardComponent>
                        </div>
                    )
                )}
            </TabContent>
            <TabContent
                active={active}
                idx={2}
                title={"Chinese Products"}
            ></TabContent>
            <TabContent
                active={active}
                idx={3}
                title={"Japanese Products"}
            ></TabContent>
            <Pagination />
        </div>
    );
}

export default App;
