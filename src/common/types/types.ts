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

export interface spaceXSiteProps {
    mission_name: string;
    launch_date_unix: string;
    launch_site: { site_name: string };
    rocket: { rocket_name: string };
    links: { flickr_images: [string | undefined] };
}

export interface spaceXDataProps {
    data: spaceXSiteProps[];
}

export interface spaceXObjects {
    [data: string]: spaceXDataProps[];
}

export interface spaceXSiteTemplate {
    site_name: string;
    limit: number;
    alias: string;
}
