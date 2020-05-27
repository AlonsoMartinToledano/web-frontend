import React from "react";
import { useQuery, gql } from "@apollo/client";

import Item from "./Item";
import "./styles.css";

const MY_DATA_QUERY = gql`
    query myData {
        currentUser {
            username
            name
        }
    }
`;

const MyData = () => {
    const { data } = useQuery(MY_DATA_QUERY, {
        notifyOnNetworkStatusChange: true
    });

    let content;
    if (data) {
        content = <div>
            <Item name={data.currentUser.username} />
            <Item name={data.currentUser.name} />
        </div>
    }

    return (
        <div className="MyData">
            {content}
        </div>
    )
}

export default MyData;