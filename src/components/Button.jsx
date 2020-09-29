import React from 'react';

import './Button.style.css';
function Button({ text, invert }) {
	return (
		<div className="btn-wrapper">
			<button
				style={{
					background: invert ? '#fff' : '#005375',
					color: invert ? '#005375' : '#fff',
				}}
			>
				{text}
			</button>
		</div>
	);
}

export default Button;
