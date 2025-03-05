import { configureStore } from '@reduxjs/toolkit';
import { persistMiddleware } from './middleware/persistMiddleware';

// Load persisted auth state
const persistedAuthState = typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('authState')) || undefined
    : undefined;

export const store = configureStore({
    reducer: {},
    preloadedState: {
        auth: persistedAuthState
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(persistMiddleware),
});
