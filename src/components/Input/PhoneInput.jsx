import React from 'react';

const PhoneInput = ({ value, onChange }) => {
    const handleInputChange = (e) => {
        let inputValue = e.target.value;

        // Удаляем все символы, кроме цифр
        inputValue = inputValue.replace(/\D/g, "");

        // Форматируем номер телефона в формате +7 (777) 777-77-77
        if (inputValue.length > 1) {
            inputValue = `+7 (${inputValue.slice(1, 4)}${inputValue.length > 4 ? `) ${inputValue.slice(4, 7)}` : ""}${inputValue.length > 7 ? `-${inputValue.slice(7, 9)}` : ""}${inputValue.length > 9 ? `-${inputValue.slice(9, 11)}` : ""}`;
        } else if (inputValue.length > 0) {
            inputValue = `+7 (${inputValue}`;
        }

        onChange(inputValue);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Backspace" && value.length > 0) {
            let inputValue = value.replace(/\D/g, "");
            inputValue = inputValue.slice(0, -1);

            onChange(
                inputValue.length > 1
                    ? `+7 (${inputValue.slice(1, 4)}${inputValue.length > 4 ? `) ${inputValue.slice(4, 7)}` : ""}${inputValue.length > 7 ? `-${inputValue.slice(7, 9)}` : ""}${inputValue.length > 9 ? `-${inputValue.slice(9, 11)}` : ""}`
                    : inputValue.length > 0
                    ? `+7 (${inputValue}`
                    : ""
            );
            e.preventDefault();
        }
    };

    return (
        <input
            type="text"
            className="login-form-input"
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="+7 (___) ___-__-__"
        />
    );
};

export default PhoneInput;