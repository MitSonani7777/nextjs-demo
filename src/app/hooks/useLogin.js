"use client"
import { useState } from "react";

export const useLogin = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" })

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInputValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return {
    inputValue,
    setInputValue,
    handleOnChange
  };
};


