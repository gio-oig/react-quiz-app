import React, { useState } from 'react';
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';

import { fetchQuestions } from './API';

import CuestionCard from './components/CuestionCard';
import Button from './components/Button';

import './App.css';

const loaderCSS = css`
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translateX(-50%);
`;

const TOTAL_QUESTIONS = 2;

function App() {
	const { register, handleSubmit } = useForm();
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startGame = async (dif, type) => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuestions(dif, type);

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};

	const checkAnswer = (e) => {
		if (!gameOver) {
			const answer = e.currentTarget.value;

			const correct = questions[number].correct_answer === answer;

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

		setNumber(nextQuestion);
	};

	const onSubmit = (data) => {
		const { difficulty, type } = data;
		startGame(difficulty, type);
	};

	return (
		<div className="App">
			<section id="main">
				<h1 className="heading">QUIZIZ</h1>
				{gameOver && (
					<>
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
							<Button>Start</Button>
						</form>
					</>
				)}
				<BeatLoader loading={loading} css={loaderCSS} size="30" color="white" />
				{!loading && !gameOver && userAnswers.length !== TOTAL_QUESTIONS ? (
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
					number !== TOTAL_QUESTIONS - 1 && (
						<Button invert onClick={nextQuestion}>
							Next Question
						</Button>
					)}

				{userAnswers.length === TOTAL_QUESTIONS && !gameOver && (
					<>
						<p className="score">correct: {score}</p>
						<p className="score">incorrect: {TOTAL_QUESTIONS - score}</p>
						<Button invert onClick={() => setGameOver(true)}>
							Restart
						</Button>
					</>
				)}
			</section>
		</div>
	);
}

export default App;
