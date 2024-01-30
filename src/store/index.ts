import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '@store/slices/counterSlice';
import newsSlice from '@store/slices/newsSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        news: newsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
