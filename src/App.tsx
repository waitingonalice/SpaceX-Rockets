import "./Styles/tabs.css";
import { useState, useEffect } from "react";
import TabContent from "./Components/TabContent";
import TabBar from "./Components/TabBar";
import CardComponent from "./Components/Card";
import { spaceXLaunchesPast } from "./common/types/types";
import { SITE_QUERY } from "./API/fetchData";
import { useLazyQuery } from "@apollo/client";
import spacex from "./images/spacex.png";
import Pagination from "./Components/Pagination";

const launchsite = [
    { launch_name: "CCAFS SLC 40" },
    { launch_name: "VAFB SLC 4E" },
    { launch_name: "KSC LC 39A" },
];

function App() {
    const [active, setActive] = useState<number>(0);
    const [site, setSite] = useState<string>("CCAFS SLC 40");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const variables = { site_name: site };
    const postPerPage = 10;

    //sends query string and variables to qgl server and returns function for manual execution (useLazyQuery)
    const [getLaunchSites, { loading, data }] = useLazyQuery(SITE_QUERY, {
        variables: variables,
    });
    const launchData: spaceXLaunchesPast = data;

    useEffect(() => {
        getLaunchSites();
    }, []);

    const handleClick = (idx: number) => {
        setSite(launchsite[idx].launch_name);
        getLaunchSites();
        setActive(idx);
    };

    const handlePaginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    //pagination range of a limit of 10 cards per page.
    const indexOfLastPost = postPerPage * currentPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = launchData?.launchesPast?.slice(
        indexOfFirstPost,
        indexOfLastPost
    );
    console.dir(currentPosts);
    console.log(currentPage);
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
                    <div className="text-center">Loading</div>
                ) : (
                    launchsite.map((e: any, index: number) => (
                        <TabContent
                            key={e.launch_name}
                            index={index}
                            active={active}
                            tabName={e.launch_name}
                        >
                            {currentPosts &&
                                currentPosts.map((e: any, index: number) => (
                                    <CardComponent
                                        key={index}
                                        url={
                                            e.links.flickr_images.length !== 0
                                                ? e.links.flickr_images[0]
                                                : spacex
                                        }
                                        mission_name={e.mission_name}
                                        launch_date_local={e.launch_date_local}
                                        rocket_name={e.rocket.rocket_name}
                                    />
                                ))}
                        </TabContent>
                    ))
                )}
                <Pagination
                    postPerPage={postPerPage}
                    totalPosts={launchData?.launchesPast?.length}
                    paginate={handlePaginate}
                    paginateActive={currentPage}
                />
            </div>
        </div>
    );
}

export default App;
