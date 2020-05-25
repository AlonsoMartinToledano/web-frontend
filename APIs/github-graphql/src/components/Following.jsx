import React from "react";
import { useQuery, gql } from "@apollo/client";

import Item from "./Item";
import "./styles.css";

const FOLLOWING_QUERY = gql`
    query following($number: Int!) {
        viewer {
            following(last: $number) {
                nodes {
                    id
                    name
                }
            }
        }
    }
`;

const Following = () => {
    const { data } = useQuery(FOLLOWING_QUERY, {
        variables: { number: 5 },
        notifyOnNetworkStatusChange: true
    });

    let content;
    if (data) {
        content = data.viewer.following.nodes.map(obj => {
            return <Item name={obj.name} characterId={obj.id} key={obj.id}/>
        })
    }

    return (
        <div className="Following">
            {content}
        </div>
    )
}

export default Following;