import "./ToggleTheme.css";
import { useState } from "react";

const ToggleTheme = () => {
	const [darkMode, setDarkMode] = useState(true);
	const handleToggle = () => {
		setDarkMode(!darkMode);
		document.body.style.backgroundImage = darkMode
			? "url('src/assets/backgroundday.jpg')"
			: "url('src/assets/desert-night-8807846-transformed.png')";
		document.body.style.color = darkMode ? "#fff" : "#000";
	};

	return (
		<label className="switch">
			<input type="checkbox" checked={darkMode} onChange={handleToggle} />
			<span className="slider round" />
		</label>
	);
};

export default ToggleTheme;
