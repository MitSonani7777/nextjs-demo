import { configureStore } from '@reduxjs/toolkit';
import { persistMiddleware } from './middleware/persistMiddelware';
import authReducer from './slices/auth/authSlice'


// Load persisted auth state
const persistedAuthState = typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('authState')) || undefined
    : undefined;

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    preloadedState: {
        auth: persistedAuthState
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(persistMiddleware),
});
