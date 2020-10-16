import { configureStore } from '@reduxjs/toolkit'
import PodcastReducer from '../features/podcasts/PodcastsSlice'
import UserReducer from '../features/login/LoginSlice'

export default configureStore({
  reducer: {
    podcasts: PodcastReducer,
    user: UserReducer
  },
});

