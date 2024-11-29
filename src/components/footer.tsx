import "./Footer.css";
import camel from "../assets/camel.png";

function Footer() {
	return (
		<div className="footer">
			<img id="camel" src={camel} alt="Camel pictogram" />
			<h6>© GG ÇA - All Rights Reserved</h6>
		</div>
	);
}

export default Footer;
