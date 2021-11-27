import ReactAudioPlayer from 'react-audio-player';

export default function Player({ track }) {
	console.log(track);
	if (track === undefined) return null;
	return (
		<ReactAudioPlayer
		src={track.audio}
		autoPlay
		controls
		/>
	)
}
