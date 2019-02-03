import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './commentDetail';
import CardApproval from "./cardApproval";

const App = () => {
    return (

        <div className={"ui container comments"}>
            <CardApproval>
                <div>Hello</div>
            </CardApproval>

            <CardApproval>
                <CommentDetail
                    author={"Lena"}
                    timeAgo={"Today at 4 am"}
                    commentText={"Nice!"}/>
            </CardApproval>
            <CardApproval>
                <CommentDetail
                    author={"Alex"}
                    timeAgo={"Today at 5 pm"}
                    commentText={"Greate!"}/>
            </CardApproval>
            <CardApproval>
                <CommentDetail
                    author={"Diana"}
                    timeAgo={"Yesterday at 8 pm"}
                    commentText={"Bad!"}/>
            </CardApproval>
        </div>

    );
}

ReactDOM.render(<App/>, document.getElementById('root'));

