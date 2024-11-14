import "./Toggle.css";
import React, { useState } from 'react';

const Toggle = ({ onToggle }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
        onToggle(!isDarkMode);
    };

    return (
        <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
            <span className="slider round"></span>
        </label>
    );
};

export default Toggle;

