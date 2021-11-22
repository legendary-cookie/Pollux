import React from "react";
import {getSonglist} from '../Api';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: null 
        };
    }
    
    componentDidMount() {
        getSonglist(5).then(songs => {
            console.log(songs)
            this.setState({
                songs
            });
        });
    }

    render() {
        if (this.state.songs === null || this.state.songs === undefined) {
            return 'Loading...';
        }
        return (
            <div>
            <h1>Songs</h1>
            {
                //TODO: Convert to some kind of songlist component and make the songs 'clickable'
                Array.from({ length: this.state.songs.length }, (_, i) => (
                <p>{this.state.songs[i].name}</p>
                ))
            }
            </div>
        )
    }
}

export default Index;
