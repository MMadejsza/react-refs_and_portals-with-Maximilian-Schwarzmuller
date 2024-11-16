import React, {useState, useRef} from 'react';

function TimerChallenge({title, targetTime}) {
	const timer = useRef();

	const [timerStarted, setTimerStarted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);

	function handleStart() {
		timer.current = setTimeout(() => {
			setTimerExpired(true);
		}, targetTime * 1000);

		setTimerStarted(true);
	}

	function handleStop() {
		// we can't use variable as it gets reset every rendering. Outside not either as it would be shared between the instances
		clearTimeout(timer.current);
	}

	return (
		<section className='challenge'>
			<h2>{title}</h2>
			{timerExpired && <p>You lost!</p>}
			<p className='challenge-time'>
				{targetTime}second{targetTime > 1 ? 's' : ''}
			</p>
			<p>
				<button onClick={timerStarted ? handleStop : handleStart}>
					{timerStarted ? 'Stop' : 'Start'} Challenge
				</button>
			</p>
			<p className={timerStarted ? 'active' : undefined}>
				{timerStarted ? 'Time is runnig...' : 'Timer inactive'}
			</p>
		</section>
	);
}

export default TimerChallenge;
