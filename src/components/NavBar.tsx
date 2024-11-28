import "./NavBar.css";
import ToggleTheme from "./ToggleTheme";
import { useWishList } from "../context/WishListContext";
import { useState } from "react";

function NavBar() {
	const { WishList } = useWishList();

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
							<button type="button" className="navbar-wishlist-button">
								<img
									className="nav-picto"
									src="src\assets\magic-lamp_yellow.png"
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
