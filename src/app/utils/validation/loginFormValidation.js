import toast from "react-hot-toast";

export const handleValidation = (inputValue) => {
    let isValid = true

    if (!inputValue?.email.trim() || !inputValue?.password.trim()) {
        toast("Please fill in all fields");
        isValid = false
        return isValid;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputValue?.email)) {
        toast("Please enter a valid email address");
        isValid = false
        return isValid;
    }

    // Password validation
    if (inputValue?.password.length < 6) {
        toast("Password must be at least 6 characters long");
        isValid = false
        return isValid;
    }
    return isValid;
}