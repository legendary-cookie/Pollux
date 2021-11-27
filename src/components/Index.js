import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { searchByName, getBaseUrl } from "../Api";
import TrackSearchResult from "./TrackSearchResult"
import Player from "./Player";

export default function Index() {
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [playingTrack, setPlayingTrack] = useState();

	useEffect(() => {
		// No search, no query
		if (!search) return setSearchResults([]);
    		let cancel = false;

		searchByName(search).then(res => {
			if (cancel) return;
			setSearchResults(
			res.map(track => {
				return {
					artist: track.artist,
					title: track.name,
					album: track.album,
					id: track.id,
					year: track.year,
					image: `${getBaseUrl()}songs/${track.id}/${track.image}`,
					audio: `${getBaseUrl()}songs/${track.id}/${track.audiosource}`,
				}
			}));
		});
		
	return () => (cancel = true)
	}, [search]);


	function chooseTrack(track) {
		setPlayingTrack(track);
		setSearch("");
	}

        return (
	<Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
            <Form.Control
		type="search"
		placeholder="Search Songs"
		value={search}
		onChange={e => setSearch(e.target.value)}
	    />
	<div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
	{searchResults.map(track => (
		<TrackSearchResult 
		track={track} 
		key={track.id} 
		chooseTrack={chooseTrack}
		/>
	))}
	</div>
	<div>
		<Player track={playingTrack} />
	</div>
	</Container>
        )
}
