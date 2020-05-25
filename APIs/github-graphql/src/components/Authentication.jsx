import React, { useContext } from "react";
import AppContext from "../AppContext";
import { useQuery, gql } from "@apollo/client";

import "./styles.css";

const QUERY = gql`
    query authentication($number: Int!) {
        viewer {
            repositories(last: $number) {
                nodes {
                    id
                    name
                }
            }
        }
    }
`;

const Authentication = () => {
    const context = useContext(AppContext);

    const { loading, error } = useQuery(QUERY, {
        variables: { number: 1 },
        notifyOnNetworkStatusChange: true,
    });

    if (!loading && error) {
        context.mode.set(1);
    } else if (!loading && !error) {
        context.mode.set(3);
    }

    return (
        <div className="Authentication">
        </div>
    )
}

export default Authentication;