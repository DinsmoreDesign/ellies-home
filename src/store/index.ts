import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { home, news } from './slices';

const store = configureStore({
    reducer: {
        home,
        news
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
