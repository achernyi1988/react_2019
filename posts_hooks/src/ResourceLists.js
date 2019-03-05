import React, {useState, useEffect} from "react"
import jsonPlaceholder from "./api/jsonPlaceholder"

const ResourceLists = (props) => {

    const resources = jsonPlaceholder(props.resource);

    return (
        <div>{resources.map((value) => {
            return (
                <div className="ui item" key={value.id}>
                    <li>{value.title}</li>
                </div>
            )


        })}</div>
    )
}

export default ResourceLists;