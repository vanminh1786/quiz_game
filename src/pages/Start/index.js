import styles from './Start.module.scss'
import classNames from 'classnames/bind'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
	setName,
	setTotalPoint,
	setCorrect,
	setIncorrect,
	setMaxStreak,
	setTimeStart,
} from '../../store/playing'

let cx = classNames.bind(styles)

function Start() {
	const [name, setNamePlayer] = useState('')

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const playGame = () => {
		dispatch(setName(name))
		dispatch(setTotalPoint(0))
		dispatch(setCorrect(0))
		dispatch(setIncorrect(0))
		dispatch(setMaxStreak())
		dispatch(setTimeStart(new Date().getTime()))
		navigate('/quiz_game/play', { replace: true })
	}

	return (
		<div className={cx('wrap')}>
			<div className={cx('top')}>
				<button className={cx('logo')}>Quiziz</button>
				<button className={cx('escape')}>End</button>
			</div>

			<div className={cx('start')}>
				<div className={cx('information')}>
					<p>To play this quiz</p>
					<p>Your name</p>
					<input
						type="text"
						value={name}
						onChange={(e) => setNamePlayer(e.target.value)}
					/>
					<p>Your age</p>
					<input type="number" min="1" />
				</div>
				<button className={cx('start_btn')} onClick={playGame}>
					Start
				</button>
			</div>
		</div>
	)
}

export default Start
