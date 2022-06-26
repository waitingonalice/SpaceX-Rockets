// export interface productProps {
//     img: string;
//     title: string;
//     moq: number;
//     price: number;
// }

// export interface headerProps {
//     prod_group: string;
//     prod_items: productProps[];
// }

// export interface catalogProps {
//     count: number;
//     catalog: headerProps[];
// }

export interface spaceXSitesData {
    mission_name: string;
    launch_date_local: string;
    launch_site: { site_name: string };
    links: { flickr_images: Array<string> | undefined };
    rocket: { rocket_name: string };
}

export interface spaceXLaunchesPast {
    launchesPast: spaceXSitesData[];
}
export interface spaceXSite {
    data: spaceXLaunchesPast;
}
