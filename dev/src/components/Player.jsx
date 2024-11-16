import React, {useState, useRef} from 'react';

export default function Player() {
	const input = useRef();

	const [playerName, setPlayerName] = useState('');
	// const [submission, setSubmission] = useState(false);

	// function handleInput(e) {
	// 	setSubmission(false);
	// 	setPlayerName(e.target.value);
	// }

	function handleSubmit() {
		setPlayerName(input.current.value);
		input.current.value = '';
	}

	return (
		<section id='player'>
			<h2>Welcome {playerName ?? 'Unknown'}</h2>
			<p>
				<input
					type='text'
					ref={input}
					// onChange={handleInput}
					// value={playerName}
				/>
				<button onClick={handleSubmit}>Set Name</button>
			</p>
		</section>
	);
}
