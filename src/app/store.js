import { configureStore } from '@reduxjs/toolkit'
import PodcastReducer from '../features/podcasts/PodcastsSlice'
import UserReducer from '../features/user/UserSlice'

export default configureStore({
  reducer: {
    podcasts: PodcastReducer,
    user: UserReducer
  },
});

