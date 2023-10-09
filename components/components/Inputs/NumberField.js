import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";

function NumberField({
    value,
    changeValue,
    error,
    setError,
    label = "",
    adornment = "",
    sx = {},
}) {
    const [input, setInput] = useState(value);
    const [helperText, setHelperText] = useState("");

    const handleBlur = (event) => {
        const inputValue = event.target.value;

        // Check if the text field is empty
        if (inputValue.trim().length === 0) {
            setError(true);
            setHelperText("Das Feld darf nicht leer sein.");
            return;
        }

        // Check if the entered value does not match the pattern of numbers
        if (!/^\d+?\.?\d*$/.test(inputValue)) {
            setError(true);
            setHelperText("Bitte geben Sie nur Zahlen ein.");
            return;
        }

        // Check if the value is less than or equal to 0
        if (parseFloat(inputValue) <= 0) {
            setError(true);
            setHelperText("Der Wert sollte größer als 0 sein.");
            return;
        }

        setError(false);
        setHelperText("");
        changeValue(event);
    };

    const handleChange = (event) => {
        setInput(event.target.value);
        setError(false);
    };

    return (
        <TextField
            label={label}
            value={input}
            onChange={handleChange}
            onBlur={handleBlur}
            error={error}
            helperText={helperText}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {adornment}
                    </InputAdornment>
                ),
            }}
            sx={sx}
        />
    );
}

export default NumberField;
