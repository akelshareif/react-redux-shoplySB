import React, { useState } from 'react';

const useFields = (INITIAL_STATE) => {
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    return [formData, handleChange];
};

export default useFields;
