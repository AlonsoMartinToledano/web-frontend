import React, { useContext } from "react";
import AppContext from "../AppContext";
import { useQuery, gql } from "@apollo/client";

import "./styles.css";

const QUERY = gql`
    query authentication($membership: Boolean!, $number: Int!) {
        projects(membership: $membership, last: $number) {
            nodes {
                id
            }
        }
    }
`;

const Authentication = () => {
    const context = useContext(AppContext);

    const { data } = useQuery(QUERY, {
        variables: { membership: true, number: 1 },
        notifyOnNetworkStatusChange: true,
    });

    if (data) {
        if (data.projects.nodes[0]) {
            context.mode.set(3);
        } else {
            context.mode.set(1);
        }
    }

    return (
        <div className="Authentication">
        </div>
    )
}

export default Authentication;