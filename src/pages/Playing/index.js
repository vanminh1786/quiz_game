import Styles from './Playing.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import shortid from 'shortid'
import { useSelector, useDispatch } from 'react-redux'
import { questions, answers } from '../../QuestionAndAnswer.js'
import { useNavigate } from 'react-router'
import {
	setTotalPoint,
	increaseCorrect,
	increaseIncorrect,
	setMaxStreak,
	setTimeEnd,
} from '../../store/playing'

let cx = classNames.bind(Styles)

function Playing() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const name = useSelector((state) => state.playing.name)

	const music = useRef()
	const imgMusic = useRef()
	const result = useRef()
	const trueAnswer = useRef()
	const falseAnswer = useRef()
	const colorStreak = useRef()

	const [index, setIndex] = useState(0)
	const [point, setPoint] = useState(0)
	const [streak, setStreak] = useState(0)
	const [maximumStreak, setMaximumStreak] = useState(0)

	useEffect(() => {
		let time = 15
		const timer = setInterval(() => {
			time--
			// console.log(time)
			if (time == 0) setStreak(0)
		}, 1000)

		return () => clearInterval(timer)
	}, [index])

	const shuffleArray = (arr) => {
		for (let i = arr.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1))
			if (i == j) continue
			let tmp = arr[i]
			arr[i] = arr[j]
			arr[j] = tmp
		}
		return arr
	}

	questions[index].ans = shuffleArray(questions[index].ans)
	if (colorStreak.current != undefined) {
		if (streak == 0) colorStreak.current.style.width = '0%'
		else if (streak == 1) colorStreak.current.style.width = '33%'
		else if (streak == 2) colorStreak.current.style.width = '66%'
		else colorStreak.current.style.width = '100%'
	}

	const toggleMusic = () => {
		if (imgMusic.current.className === 'fa-solid fa-volume-high')
			imgMusic.current.className = 'fa-solid fa-volume-xmark'
		else imgMusic.current.className = 'fa-solid fa-volume-high'
	}

	const getId = () => {
		const id = shortid.generate()
		return id
	}

	const checkAnswer = (answer) => {
		if (answer == answers[index]) {
			setPoint((preState) => preState + (streak + 1) * 100)
			if (streak + 1 > maximumStreak) {
				setMaximumStreak(streak + 1)
				if (index == questions.length - 1) {
					dispatch(setMaxStreak(streak + 1))
					dispatch(setTotalPoint(point + (streak + 1) * 100))
				}
			}
			setStreak((preState) => preState + 1)

			dispatch(increaseCorrect())

			result.current.style.backgroundColor = '#85e650'
			result.current.style.visibility = 'visible'
			trueAnswer.current.style.display = 'block'
			setTimeout(() => {
				result.current.style.visibility = 'hidden'
				trueAnswer.current.style.display = 'none'
			}, 2000)
		} else {
			setPoint((preState) => preState + 100)
			setStreak(0)
			if (index == questions.length - 1) {
				dispatch(setTotalPoint(point + 100))
			}

			dispatch(increaseIncorrect())

			result.current.style.backgroundColor = '#d4546a'
			result.current.style.visibility = 'visible'
			falseAnswer.current.style.display = 'block'
			setTimeout(() => {
				result.current.style.visibility = 'hidden'
				falseAnswer.current.style.display = 'none'
			}, 2000)
		}

		changeQuestion()
	}

	const changeQuestion = () => {
		if (index == questions.length - 1) {
			dispatch(setTimeEnd(new Date().getTime()))
			navigate('/quiz_game/summary', { replace: true })
			return
		}

		// console.log(index, Questions)
		setIndex((preState) => preState + 1)
	}

	const exit = () => {
		navigate('/quiz_game', { replace: true })
	}

	return (
		<div className={cx('wrap')}>
			<div key={getId()} className={cx('time')}></div>
			<div className={cx('top')}>
				<div className={cx('top_left')}>
					<div className={cx('music')}>
						<i
							ref={imgMusic}
							className="fa-solid fa-volume-high"
							onClick={toggleMusic}
						></i>
						<audio ref={music} autoPlay loop>
							<source src="music.mp3" type="audio/mpeg" />
						</audio>
					</div>
					<div className={cx('streak')}>
						<div ref={colorStreak} className={cx('color_streak')}></div>
						<p>Streak</p>
						<i className="fa-solid fa-fire-flame-curved">
							<span>{streak}</span>
						</i>
					</div>
					<div className={cx('stt')}>
						<p>
							{index + 1}/{questions.length}
						</p>
					</div>
				</div>
				<div className={cx('name_point')}>
					<p>
						{name} - {point}
					</p>
				</div>
				<div className={cx('escape')} onClick={exit}>
					<i className="fa-solid fa-x"></i>
				</div>
			</div>

			<div className={cx('content')}>
				<p>{questions[index].ques}</p>
				<div className={cx('answer')}>
					{questions[index].ans.map((answer, id) => {
						return (
							<div
								key={id}
								className={cx('answer_' + id)}
								onClick={(e) => checkAnswer(e.target.innerText)}
							>
								{answer}
							</div>
						)
					})}
				</div>
			</div>

			<div ref={result} className={cx('result')}>
				<div ref={trueAnswer} className={cx('true')}>
					<i className="fa-solid fa-check"></i>
					<div className={cx('text')}>
						<p>Your point</p>
						<p>+ {streak * 100}</p>
					</div>
				</div>
				<div ref={falseAnswer} className={cx('false')}>
					<i className="fa-solid fa-x"></i>
					<div className={cx('text')}>
						<p>Your point</p>
						<p>+ 100</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Playing
