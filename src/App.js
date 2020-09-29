import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import CuestionCard from './components/CuestionCard';
// types
// import { QuestionState, Difficulty } from './API';
import { QuestionState } from './API';
import { fetchQuizeQuestions } from './API';

import Button from './components/Button';

import './App.css';

const TOTAL_QUESTIONS = 10;

function App() {
	const { register, handleSubmit } = useForm();
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startTrivia = async (dif, type) => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizeQuestions(dif, type);

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
		console.log(newQuestions);
	};

	const checkAnswer = (e) => {
		if (!gameOver) {
			const answer = e.currentTarget.value;

			const correct = questions[number].correct_answer === answer;
			console.log(answer);
			if (correct) setScore((prevScore) => prevScore + 1);

			const answerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer,
			};

			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = () => {
		const nextQuestion = number + 1;

		nextQuestion === TOTAL_QUESTIONS
			? setGameOver(true)
			: setNumber(nextQuestion);
	};

	const onSubmit = (data) => {
		const { difficulty, type } = data;
		startTrivia(difficulty, type);
		// console.log(a);
	};

	return (
		<div className="App">
			<section id="main">
				{gameOver && (
					<>
						<h1 className="heading">QUIZIZ</h1>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="form-control">
								<label htmlFor="difficulty">Select Difficulty:</label>
								<select
									name="difficulty"
									id="difficulty"
									ref={register({ required: true })}
								>
									<option value="easy">easy</option>
									<option value="easy">medium</option>
									<option value="easy">hard</option>
								</select>
							</div>
							<div className="form-control">
								<label htmlFor="type">Select Type:</label>
								<select
									name="type"
									id="type"
									ref={register({ required: true })}
								>
									<option value="any">any</option>
									<option value="multiple">multiple Chioce</option>
									<option value="boolean">true / false</option>
								</select>
							</div>
							<Button text="Start" />
						</form>
					</>
				)}
				{!gameOver ? <p className="score">score: {score}</p> : null}
				{loading && <p>Loading Questions....</p>}
				{!loading && !gameOver ? (
					<CuestionCard
						question={questions[number].question}
						answers={questions[number].answers}
						callback={checkAnswer}
						userAnswer={userAnswers ? userAnswers[number] : undefined}
						questionNr={number + 1}
						totalQuestions={TOTAL_QUESTIONS}
					/>
				) : null}
				{!loading &&
				!gameOver &&
				userAnswers.length === number + 1 &&
				number !== TOTAL_QUESTIONS - 1 ? (
					<button className="next" onClick={nextQuestion}>
						Next Question
					</button>
				) : null}
			</section>
		</div>
	);
}

export default App;
