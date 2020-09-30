import React from 'react';

import './CuestionCard.style.css';

const CuestionCard = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNr,
	totalQuestions,
}) => {
	return (
		<div className="question-card">
			{/* <p className="number">
				{questionNr} / {totalQuestions}
			</p> */}
			<p className="question-card__question">{question}</p>
			<div className="question-card__answer-box">
				{answers.map((answer) => (
					<button
						key={answer}
						disabled={!!userAnswer}
						value={answer}
						onClick={callback}
						className="question-card__answer"
					>
						<span>{answer}</span>
					</button>
				))}
			</div>
		</div>
	);
};

export default CuestionCard;
