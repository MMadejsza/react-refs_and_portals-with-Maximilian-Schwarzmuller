function TimerChallenge({title, targetTime}) {
	return (
		<section className='challenge'>
			<h2>{title}</h2>
			<p className='challenge-time'>
				{targetTime}second{targetTime > 1 ? 's' : ''}
			</p>
			<p>
				<button>Start Challange</button>
			</p>
			<p className='active'>Time is runnig... / Timer inactive</p>
		</section>
	);
}

export default TimerChallenge;
