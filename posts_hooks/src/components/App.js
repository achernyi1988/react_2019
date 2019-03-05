import React, {useState} from 'react';
import ResourceLists from "../ResourceLists";

const App = () => {
    const [resource, setResource] = useState(["posts"]);


    return (
        <div className="ui container">
            <button className={"ui button primary"} onClick={() => setResource ("posts")}>Posts</button>
            <button className={"ui button primary"} onClick={() => setResource ("todos")}>Todos</button>

            <ResourceLists resource={resource}/>
        </div>
    );
}

export default App;
