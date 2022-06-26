import { gql } from "@apollo/client";

export const SITE_QUERY = gql`
    query ($site_name: String) {
        launchesPast(find: { site_name: $site_name }) {
            mission_name
            launch_date_local
            launch_site {
                site_name
            }
            links {
                flickr_images
            }
            rocket {
                rocket_name
            }
        }
    }
`;
