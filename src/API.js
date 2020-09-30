import { randomizeAnswersPossitions } from './utils';

export const fetchQuestions = async (category, difficulty, type) => {
	const API = `https://opentdb.com/api.php?amount=10&category=${
		category === 'any' ? '' : category
	}&difficulty=${difficulty === 'any' ? '' : difficulty}&type=${
		type === 'any' ? '' : type
	}`;
	const response = await fetch(API);
	const responseData = await response.json();

	// return new array of objects with answers property
	return responseData.results.map((question) => ({
		...question,
		answers: randomizeAnswersPossitions([
			...question.incorrect_answers,
			question.correct_answer,
		]),
	}));
};
