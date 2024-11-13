import "./NavBar.css";

function NavBar() {
	return (
		<nav>
			<div nav-icons-background >
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
						src="src/assets/icons8-coffre-au-trésor-50 (1).png"
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
					<img
						className="nav-picto"
						src="src/assets/Captura_de_tela_2024-11-12_153612-removebg-preview.png"
						alt="Toggler night"
					/>
				</li>
			</ul>
			</section>
			</div>
		</nav>
	);
}

export default NavBar;
