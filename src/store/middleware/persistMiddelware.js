export const persistMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    const state = store.getState();
    if (state.auth) {
        localStorage.setItem('authState', JSON.stringify(state.auth));
    }

    return result;
};
