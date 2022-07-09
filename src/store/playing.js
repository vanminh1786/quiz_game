import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: '',
	point: 0,
	correct: 0,
	incorrect: 0,
	streak: 0,
	timeStart: 0,
	timeEnd: 0,
}

const playingSlice = createSlice({
	name: 'playing',
	initialState,
	reducers: {
		setName: (state, action) => {
			state.name = action.payload
		},
		setTotalPoint: (state, action) => {
			state.point = action.payload
		},
		setCorrect: (state) => {
			state.correct = 0
		},
		increaseCorrect: (state) => {
			state.correct++
		},
		setIncorrect: (state) => {
			state.incorrect = 0
		},
		increaseIncorrect: (state) => {
			state.incorrect++
		},
		setMaxStreak: (state, action) => {
			state.streak = action.payload
		},
		setTimeStart: (state, action) => {
			state.timeStart = action.payload
		},
		setTimeEnd: (state, action) => {
			state.timeEnd = action.payload
		},
	},
})

export const {
	setName,
	setTotalPoint,
	setCorrect,
	increaseCorrect,
	setIncorrect,
	increaseIncorrect,
	setMaxStreak,
	setTimeStart,
	setTimeEnd,
} = playingSlice.actions
export default playingSlice.reducer
