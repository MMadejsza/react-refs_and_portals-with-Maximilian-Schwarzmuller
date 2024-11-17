import {forwardRef, useImperativeHandle, useRef} from 'react';

const ResultModal = forwardRef(function ResultModal({onReset, remainingTime, targetTime}, ref) {
	const dialog = useRef();
	// form with method dialog within dialog tag, will close the dialog after clicking btn in it without any js
	const userLost = remainingTime <= 0;
	const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	return (
		<dialog
			ref={dialog}
			className='result-modal'>
			{userLost && <h2>You lost!</h2>}
			<p>
				The target time was <strong>{targetTime}</strong> seconds.
			</p>
			<p>
				You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
			</p>
			<form
				method='dialog'
				onSubmit={onReset}>
				<button>Close</button>
			</form>
		</dialog>
	);
});

export default ResultModal;
