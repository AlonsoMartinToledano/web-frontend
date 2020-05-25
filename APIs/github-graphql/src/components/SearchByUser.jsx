import React, { useContext } from "react";
import AppContext from "../AppContext";
import { useQuery, gql } from "@apollo/client";

import Item from "./Item";
import "./styles.css";

const USER_REPOSITORIES_QUERY = gql`
    query userRepositories($number: Int!, $username: String!) {
        user(login: $username) {
            repositories(last: $number) {
                nodes {
                    id
                    name
                }
            }
        }
    }
`;

const SearchByUser = () => {
    const context = useContext(AppContext);

    const { data } = useQuery(USER_REPOSITORIES_QUERY, {
        variables: { number: 5, username: context.searchUser.get },
        notifyOnNetworkStatusChange: true
    });

    let content;
    if (data) {
        content = data.user.repositories.nodes.map(obj => {
            return <Item name={obj.name} characterId={obj.id} key={obj.id}/>
        })
    }

    return (
        <div className="SearchByUser">
            {content}
        </div>
    )
}

export default SearchByUser;