import React from "react";
import { useQuery, gql } from "@apollo/client";

import Item from "./Item";
import "./styles.css";

const MY_REPOSITORIES_QUERY = gql`
    query MyRepositories($membership: Boolean!, $number: Int!) {
        projects(membership: $membership, last: $number) {
            nodes {
                id
                name
            }
        }
    }
`;

const MyRepositories = () => {
    const { data } = useQuery(MY_REPOSITORIES_QUERY, {
        variables: { membership: true, number: 5 },
        notifyOnNetworkStatusChange: true
    });

    let content;
    if (data) {
        content = data.projects.nodes.map(obj => {
            return <Item name={obj.name} characterId={obj.id} key={obj.id}/>
        })
    }

    return (
        <div className="MyRepositories">
            {content}
        </div>
    )
}

export default MyRepositories;