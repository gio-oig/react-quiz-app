import React from 'react';

import './Button.style.css';
function Button({ invert, onClick, children }) {
	return (
		<div className="btn-wrapper">
			<button
				className="btn"
				onClick={onClick}
				style={{
					background: invert ? '#fff' : '#005375',
					color: invert ? '#005375' : '#fff',
				}}
			>
				{children}
			</button>
		</div>
	);
}

export default Button;
