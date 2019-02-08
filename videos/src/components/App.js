import React, {Component} from 'react';
import SearchBar from "./SearchBar"
import VideoDetail from "./VideoDetail"
import youtube from "../api/youtube"
import {VideoList} from "./VideoList"

class App extends Component {

    state = {videos: [], selectedVideo: null};

    componentDidMount(){
        this.onSearchText("black see");
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    onSearchText = async (text) => {
        console.log("onSearchText = ", text);

        const videos = await youtube.get("/search", {
            params: {q: text}
        });

        console.log(videos.data);

        this.setState({videos: videos.data.items, selectedVideo: videos.data.items[0]});

    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchText={this.onSearchText}/>
                <div className={"ui grid"}>
                    <div className={"ui row"}>
                        <div className={"eleven wide column"}>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className={"five wide column"}>
                            <VideoList
                            videos={this.state.videos}
                            onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
