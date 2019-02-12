import React, {Component} from "react"
import {connect} from "react-redux"
import {fetchPostsAndUsers} from "../actions";
import UserHeader from "./UserHeader"


class PostList extends Component {


    renderPost = () => {
        const posts = this.props.posts;
        if (!posts) {
            return <div></div>
        }
        return posts.map((post) => {
            return (
                <div className={"item"} key={post.id}>
                    <i className="large  middle aligned user icon "/>
                    <div className={"content"}>
                        <div className={"description"}>
                            <h2>
                                {post.title}
                            </h2>
                            <p>
                                {post.body}
                            </p>
                            <h2 >
                                <UserHeader userId={post.userId}/>
                            </h2>
                        </div>
                    </div>


                </div>
            )
        })
    }

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    render() {
        console.log("render");
        return (

            <div className={"ui relaxed divided list"}>
                {this.renderPost()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps");
    return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);