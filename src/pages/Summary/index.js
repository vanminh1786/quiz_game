import Styles from './Summary.module.scss'
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

let cx = classNames.bind(Styles)

function Summary() {
	const navigate = useNavigate()

	const information = useSelector((state) => state.playing)
	const true_result = Math.floor(
		(information.correct / (information.correct + information.incorrect)) * 100
	)
	const false_result = 100 - true_result
	const speed =
		(information.timeEnd - information.timeStart) /
		1000 /
		(information.correct + information.incorrect)

	const playAgain = () => {
		navigate('/quiz_game/play', { replace: true })
	}

	return (
		<div className={cx('wrap')}>
			<div className={cx('content')}>
				<h1>Summary</h1>
				<div className={cx('about')}>
					<p>
						<img
							src="https://cf.quizizz.com/join/img/avatars/tablet_lg/monster14.png"
							alt="avatar"
						/>
						{information.name}
					</p>
					<i class="fa-solid fa-share-nodes"></i>
				</div>
				<div className={cx('accuracy')}>
					<p>Accuracy</p>
					<div className={cx('draw')}>
						<div
							className={cx('success')}
							style={{ width: `${true_result}%` }}
						></div>
						<span>{true_result}%</span>
						<div
							className={cx('danger')}
							style={{ width: `${false_result}%` }}
						></div>
					</div>
				</div>
				<div className={cx('score')}>
					<div className={cx('left')}>
						<p>Score</p>
						<span>{information.point}</span>
					</div>
					<i className="fa-solid fa-coins"></i>
				</div>
				<button className={cx('replay')} onClick={playAgain}>
					Play again
				</button>
				<div className={cx('performance')}>
					<p>Performance Stats</p>
					<div className={cx('row')}>
						<div className={cx('part')}>
							<i
								className={cx('fa-solid', 'fa-check-double', 'part_correct')}
							></i>
							<p className={cx('main_content')}>{information.correct}</p>
							<p>Correct</p>
						</div>
						<div className={cx('part')}>
							<i className={cx('fa-solid', 'fa-xmark', 'part_incorrect')}></i>
							<p className={cx('main_content')}>{information.incorrect}</p>
							<p>Incorrect</p>
						</div>
					</div>
					<div className={cx('row')}>
						<div className={cx('part')}>
							<i className={cx('fa-solid', 'fa-gauge-high', 'part_speed')}></i>
							<p className={cx('main_content')}>{speed} m</p>
							<p>Time/ques</p>
						</div>
						<div className={cx('part')}>
							<i className={cx('fa-brands', 'fa-gripfire', 'part_streak')}></i>
							<p className={cx('main_content')}>{information.streak}</p>
							<p>Streak</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Summary
