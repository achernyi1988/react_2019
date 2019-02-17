import React, {Component} from "react"
import {connect} from "react-redux"
import * as fetchPostsAnd_Users from "../actions";
import UserHeader from "./UserHeaderConnect"

import { bindActionCreators }           from 'redux'

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
        this.props.actions.fetchPostsAndUsers();
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

function mapDispatchToProps(dispatch) {
    return {
        actions:  bindActionCreators(fetchPostsAnd_Users, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);