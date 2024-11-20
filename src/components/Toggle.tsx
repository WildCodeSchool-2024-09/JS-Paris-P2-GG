import "./Toggle.css";
import { useState } from "react";

const Toggle = () => {
	const [darkMode, setDarkMode] = useState(false);
	const handleToggle = () => {
		setDarkMode(!darkMode);
		document.body.style.backgroundImage = darkMode
			? "url('src/assets/desert-night-8807846-transformed.png')"
			: "url('src/assets/backgroundday.jpg')";
		document.body.style.color = darkMode ? "#fff" : "#000";
	};

	return (
		<label className="switch">
			<input type="checkbox" checked={darkMode} onChange={handleToggle} />
			<span className="slider round" />
		</label>
	);
};

export default Toggle;
