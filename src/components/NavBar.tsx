import "./NavBar.css";
import { useState } from "react";
import Toggle from "./Toggle";

function NavBar() {
	const [darkMode, setDarkMode] = useState(false);

	const handleToggle = (isDark) => {
		setDarkMode(isDark);
		document.body.style.backgroundImage = isDark
			? "url('src/assets/backgroundday.jpg')"
			: "url('src/assets/desert-night-8807846-transformed.png')";
		document.body.style.color = isDark ? "#000" : "#fff";
	};
	return (
		<nav>
			<div nav-icons-background>
				<section className="menu">
					<img
						id="logoGG"
						src="src\assets\LogoGG_lampe.png"
						alt="Logo GG - Gift Generator"
					/>
					<ul>
						<li>
							<img
								className="nav-picto"
								src="src/assets/coffre.png"
								alt="Yellow chest as basket"
							/>
						</li>
						<li>
							<img
								className="nav-picto"
								src="src\assets\magic-lamp_yellow.png"
								alt="Yellow magic lamp as wishlist"
							/>
						</li>
						<li>
							<Toggle onToggle={handleToggle} />
						</li>
					</ul>
				</section>
			</div>
		</nav>
	);
}

export default NavBar;
