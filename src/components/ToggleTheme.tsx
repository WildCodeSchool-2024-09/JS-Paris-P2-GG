import "./ToggleTheme.css";
import { useState } from "react";
import backgroundday from "../assets/backgroundday.jpg";
import desertNight from "../assets/desert-night.png";

const ToggleTheme = () => {
	const [darkMode, setDarkMode] = useState(true);
	const handleToggle = () => {
		setDarkMode(!darkMode);
		document.body.style.backgroundImage = darkMode
			? backgroundday
			: desertNight;
		document.body.style.color = darkMode ? "#ffffff" : "#000000";
	};

	return (
		<label className="switch">
			<input
				title="toggle"
				type="checkbox"
				checked={darkMode}
				onChange={handleToggle}
			/>
			<span className="slider round" />
		</label>
	);
};

export default ToggleTheme;
