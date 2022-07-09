import { configureStore } from '@reduxjs/toolkit'
import playingReducer from './playing'

const store = configureStore({
	reducer: {
		playing: playingReducer,
	},
})

export default store
