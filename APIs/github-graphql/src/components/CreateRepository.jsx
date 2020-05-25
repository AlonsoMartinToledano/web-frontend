import React from "react";
import { useMutation, gql } from "@apollo/client";

import "./styles.css";

const CREATE_REPOSITORY_MUTATION = gql`
    mutation createRepository($name: String!, $visibility: String!) {
        createRepository(input: {name: $name, visibility: $visibility}) {
            repository {
                name
            }
        }
    }
`;

const CreateRepository = () => {
    const [createRepository, { data }] = useMutation(CREATE_REPOSITORY_MUTATION);

    let visibility;
    let repositoryName;
    let content;
    if (data) {
        content = <div className="Button">Done</div>
    } else {
        content = <div className="CreateRepository">
            <div className="Button" onClick={() => visibility = "PUBLIC"}>Public</div>
            <div className="Button" onClick={() => visibility = "PRIVATE"}>Private</div>
            <input id="repositoryName" placeholder="Repository Name" className="Input"/>
            <form onSubmit={e => {
                e.preventDefault();
                repositoryName = document.getElementById("repositoryName").value
                createRepository({ variables: { name: repositoryName, visibility: visibility }});
            }}><button className="Button" type="submit">Create</button></form>
        </div>
    }

    return (
        <div className="CreateRepository">
            {content}
        </div>
    )
}

export default CreateRepository;