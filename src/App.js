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

const TOTAL_QUESTIONS = 10;

function App() {
	const { register, handleSubmit } = useForm();
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startGame = async (category, difficulty, type) => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuestions(category, difficulty, type);

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
		const { category, difficulty, type } = data;
		startGame(category, difficulty, type);
	};

	return (
		<div className="App">
			<section id="main">
				<h1 className="heading">QUIZIZ</h1>
				{gameOver && (
					<>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="form-control">
								<label htmlFor="category">Select Category:</label>
								<select name="category" ref={register({ required: true })}>
									<option value="any">Any Category</option>
									<option value="9">General Knowledge</option>
									<option value="10">Entertainment: Books</option>
									<option value="11">Entertainment: Film</option>
									<option value="12">Entertainment: Music</option>
									<option value="13">
										Entertainment: Musicals &amp; Theatres
									</option>
									<option value="14">Entertainment: Television</option>
									<option value="15">Entertainment: Video Games</option>
									<option value="16">Entertainment: Board Games</option>
									<option value="17">Science &amp; Nature</option>
									<option value="18">Science: Computers</option>
									<option value="19">Science: Mathematics</option>
									<option value="20">Mythology</option>
									<option value="21">Sports</option>
									<option value="22">Geography</option>
									<option value="23">History</option>
									<option value="24">Politics</option>
									<option value="25">Art</option>
									<option value="26">Celebrities</option>
									<option value="27">Animals</option>
									<option value="28">Vehicles</option>
									<option value="29">Entertainment: Comics</option>
									<option value="30">Science: Gadgets</option>
									<option value="31">
										Entertainment: Japanese Anime &amp; Manga
									</option>
									<option value="32">
										Entertainment: Cartoon &amp; Animations
									</option>
								</select>
							</div>
							<div className="form-control">
								<label htmlFor="difficulty">Select Difficulty:</label>
								<select name="difficulty" ref={register({ required: true })}>
									<option value="any">Any Difficulty</option>
									<option value="easy">easy</option>
									<option value="easy">medium</option>
									<option value="easy">hard</option>
								</select>
							</div>
							<div className="form-control">
								<label htmlFor="type">Select Type:</label>
								<select name="type" ref={register({ required: true })}>
									<option value="any">Any Type</option>
									<option value="multiple">multiple Chioce</option>
									<option value="boolean">true / false</option>
								</select>
							</div>
							<Button>Start</Button>
						</form>
					</>
				)}
				<BeatLoader
					loading={loading}
					css={loaderCSS}
					size="30px"
					color="white"
				/>
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

				{userAnswers.length === TOTAL_QUESTIONS && !gameOver && !loading && (
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
