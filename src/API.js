import { shuffleArray } from './utils';

export const fetchQuizeQuestions = async (difficulty, type) => {
	const endPoint = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=${
		type === 'any' ? '' : type
	}`;
	const response = await fetch(endPoint);
	const responseData = await response.json();

	return responseData.results.map((question) => ({
		...question,
		answers: shuffleArray([
			...question.incorrect_answers,
			question.correct_answer,
		]),
	}));
};
