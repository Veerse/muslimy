import { configureStore } from '@reduxjs/toolkit';
import PodcastReducer from '../features/podcasts/PodcastsSlice'

export default configureStore({
  reducer: {
    podcasts: PodcastReducer,
  },
});

