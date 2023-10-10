import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";

function NumberFieldEuro({
    value,
    changeValue,
    setError,
    label = "",
    sx = {},
    max,
}) {
    const [input, setInput] = useState(value);
    const [inputError, setInputError] = useState(false);
    const [helperText, setHelperText] = useState("");

    const handleBlur = (event) => {
        const inputValue = event.target.value;

        if (inputValue.trim().length === 0) {
            handleError(true);
            setHelperText("Das Feld darf nicht leer sein.");
            return;
        }

        if (!/^\d+?\,?\d*$/.test(inputValue)) {
            handleError(true);
            setHelperText("Bitte geben Sie nur Zahlen ein.");
            return;
        }

        if (parseFloat(inputValue) <= 0) {
            handleError(true);
            setHelperText("Der Wert sollte größer als 0 sein.");
            return;
        }

        if (parseFloat(inputValue) > max) {
            handleError(true);
            setHelperText(" Wert sollte kleiner als " + max + " sein.");
            return;
        }

        handleError(false);
        setHelperText("");
        changeValue(event);
    };

    const handleError = (prev) => {
        setInputError(prev);
        setError(prev);
    };

    const handleChange = (event) => {
        if (!/^\d*\,?\d*$/.test(event.target.value)) {
            return;
        }

        setInput(event.target.value);
        setError(false);
    };

    return (
        <TextField
            label={label}
            value={input}
            onChange={handleChange}
            onBlur={handleBlur}
            error={inputError}
            helperText={helperText}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">€</InputAdornment>
                ),
            }}
            sx={sx}
        />
    );
}

export default NumberFieldEuro;
