import React, { useContext } from "react";
import AppContext from "../AppContext";
import { useQuery, gql } from "@apollo/client";

import Item from "./Item";
import "./styles.css";

const SEARCH_REPOSITORIES_QUERY = gql`
    query searchRepositories($repositoryName: String!, $number: Int!) {
        projects(search: $repositoryName, last: $number) {
            nodes {
                id
                name
            }
        }
    }
`;

const SearchRepositories = () => {
    const context = useContext(AppContext);

    const { data } = useQuery(SEARCH_REPOSITORIES_QUERY, {
        variables: { repositoryName: context.repositoryName.get, number: 5 },
        notifyOnNetworkStatusChange: true
    });

    let content;
    if (data) {
        content = data.projects.nodes.map(obj => {
            return <Item name={obj.name} characterId={obj.id} key={obj.id}/>
        })
    }

    return (
        <div className="SearchRepositories">
            {content}
        </div>
    )
}

export default SearchRepositories;