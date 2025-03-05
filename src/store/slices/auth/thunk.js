import { loginApi } from "@/app/api/login/post";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    'auth/login',
    async (userData, { rejectWithValue }) => {
        console.log("ssssssssssssss", userData)
        try {
            const response = await loginApi(userData);
            // Check if we have a successful response with data
            if (response && response.data) {
                // Store the token if it exists
                const token = response.data.token || response.token;
                if (token) {
                    localStorage.setItem('token', token);
                }

                return {
                    user: response.data || response,
                    token: token,
                    message: response.message || 'Login successful'
                };
            }

            // If we don't have data property, reject with error
            return rejectWithValue({
                message: response.message || 'Login failed. Invalid response format.'
            });
        } catch (error) {
            // Handle API error response
            const errorMessage =
                error.response?.data?.message ||
                error.response?.data?.error ||
                'Login failed. Please check your credentials.';

            return rejectWithValue({ message: errorMessage });
        }
    }
);