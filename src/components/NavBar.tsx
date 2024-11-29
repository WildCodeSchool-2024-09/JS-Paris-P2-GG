import { useContext } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import LogoGGlampe from "../assets/LogoGG-lampe.png";
import coffre from "../assets/coffre.png";
import magicLampYellow from "../assets/magic-lamp-yellow.png";
import BasketContext from "../context/BasketContext";
import { useWishList } from "../context/WishListContext";
import ToggleTheme from "./ToggleTheme";

function NavBar() {
	const navigate = useNavigate();
	const questionsLink = () => {
		navigate("/questions");
	};
	const { basket } = useContext(BasketContext);
	const { WishList } = useWishList();

	return (
		<nav>
			<div nav-icons-background>
				<section className="menu">
					<img
						id="logoGG"
						src={LogoGGlampe}
						alt="Logo GG - Gift Generator"
						onClick={() => {
							questionsLink();
						}}
						onKeyUp={() => {
							questionsLink();
						}}
					/>
					<ul>
						<li>
							<img
								className="nav-picto"
								src={coffre}
								alt="Yellow chest as basket"
							/>
						</li>
						<li className="basket">{basket.length}</li>
						<li>
							<button type="button" className="navbar-wishlist-button">
								<img
									className="nav-picto"
									src={magicLampYellow}
									alt="Yellow magic lamp as wishlist"
								/>
							</button>
						</li>
						<li className="WishList-length">{WishList.length}</li>
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
