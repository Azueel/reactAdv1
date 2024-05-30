import React, { useRef } from 'react';

export const FocusScreen = () => {
	const inputRef = useRef();

	const handleClick = () => {
		// document.querySelector('input').select();
		inputRef.current.select();
	};

	return (
		<>
			<h1>Focus Screen</h1>

			<input type="text" className="form-control mt-2" />
			<input type="text" className="form-control mt-2" />
			<input ref={inputRef} className="form-control mt-2" />
			<input type="text" className="form-control mt-2" />
			<button onClick={handleClick} className="btn btn-primary mt-3">
				Focus
			</button>
		</>
	);
};
