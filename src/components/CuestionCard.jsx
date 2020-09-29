import React from 'react';
import { AnswersObject } from '../App';

const CuestionCard = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNr,
	totalQuestions,
}) => {
	return (
		<div>
			<p className="number">
				{questionNr} / {totalQuestions}
			</p>
			<p>question </p>
			<div>
				{answers.map((answer) => (
					<div key={answer}>
						<button disabled={!!userAnswer} value={answer} onClick={callback}>
							<span>{answer}</span>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default CuestionCard;
