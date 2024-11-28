import { useContext } from "react";
import "./NavBar.css";
import BasketContext from "../context/BasketContext";
import ToggleTheme from "./ToggleTheme";

function NavBar() {
	const { basket } = useContext(BasketContext);

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
						<li className="basket">{basket.length}</li>
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
