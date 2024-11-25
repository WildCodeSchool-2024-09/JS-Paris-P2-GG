import "./NavBar.css";
import ToggleTheme from "./ToggleTheme";
// import { useNavigate } from "react-router-dom";

function NavBar() {
	// const navigate= useNavigate();

	// const questionsLink=() => {navigate("/questions")};
	return (
		<nav>
			<div nav-icons-background>
				<section className="menu">
					<img
						id="logoGG"
						src="src\assets\LogoGG_lampe.png"
						alt="Logo GG - Gift Generator"
						// onClick={() => {questionsLink()}}
						// onKeyUp={() => {questionsLink()}}
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
							<ToggleTheme />
						</li>
					</ul>
				</section>
			</div>
		</nav>
	);
}

export default NavBar;
