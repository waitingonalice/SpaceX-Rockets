import "./Styles/tabs.css";
import { useState, useEffect } from "react";
import TabContent from "./Components/TabContent";
import TabBar from "./Components/TabBar";
import CardComponent from "./Components/Card";
import { spaceXSite, spaceXLaunchesPast } from "./common/types/types";
import { SITE_QUERY } from "./API/fetchData";
import { useLazyQuery, useQuery } from "@apollo/client";

const launchsite = [
    { launch_name: "CCAFS SLC 40" },
    { launch_name: "VAFB SLC 4E" },
    { launch_name: "KSC LC 39A" },
];

function App() {
    const [active, setActive] = useState<number>(0);
    const [site, setSite] = useState<string>("CCAFS SLC 40");
    // const [loading, setloading] = useState<boolean>(true);
    const variables = { site_name: site };

    const [getLaunchSites, { loading, data }] = useLazyQuery(SITE_QUERY, {
        fetchPolicy: "network-only",
        // nextFetchPolicy: "cache-first",
    });

    function launchSites(): void {
        getLaunchSites({ variables: variables });
    }
    useEffect(() => {
        launchSites();
    }, []);

    //sends query string, endpoint and variables to qgl server and returns results

    const handleClick = (idx: number) => {
        setSite(launchsite[idx].launch_name);
        launchSites();
        setActive(idx);
    };
    // console.log(site);
    // console.log(loading);

    const launchData: spaceXSite = data;

    console.dir(launchData);
    return (
        <div className="App relative mx-auto">
            <div className="tab-container border-solid border 2 border-b-slate-300 -m-[1px] overflow-y-hidden overflow-x-auto whitespace-nowrap">
                <ul className="flex">
                    {launchsite.map((e, index) => (
                        <TabBar
                            key={index}
                            active={active}
                            handleClick={handleClick}
                            index={index}
                            tabName={e.launch_name}
                        />
                    ))}
                </ul>
            </div>

            <div>
                {loading ? (
                    <div>Loading</div>
                ) : (
                    launchsite.map((e: any, index: number) => (
                        <TabContent
                            key={e.launch_name}
                            index={index}
                            active={active}
                            tabName={e.launch_name}
                        >
                            {data &&
                                data.launchesPast.map((...e: any) => (
                                    <CardComponent
                                        mission_name={e.mission_name}
                                        launch_date_local={e.launch_date_local}
                                        rocket_name={e.rocket.rocket_name}
                                    />
                                ))}
                        </TabContent>
                    ))
                )}
            </div>
        </div>
    );
}

export default App;
