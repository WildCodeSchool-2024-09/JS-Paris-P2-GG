import "./ProductSheet.css";

function ProductSheet() {
	return (
		<section className="ProductSection">
		<div className="CardProductSheet">
			<img src="src/assets/qatar-airways-thumb.png" alt="Pour test" />
			<h4>Titre produit</h4>
			<p>prix €</p>
			<p>	Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Nam ac sem fringilla, scelerisque enim eu, laoreet urna. Praesent
				porttitor ornare varius. Cras quis neque neque. Vestibulum tincidunt
				orci non sollicitudin auctor. Nam sagittis, ligula in bibendum finibus,
				magna sapien eleifend dui, vel congue tortor lectus a lorem. Mauris sem
				urna, ultricies vel varius at, molestie vel lorem. Curabitur nulla nisi,
				accumsan id efficitur nec, venenatis vitae felis. Proin porttitor
				ullamcorper nulla, a egestas nisi placerat a. Nullam nec rhoncus dui,
				eget lobortis velit. Curabitur laoreet eros eu massa facilisis, a
				ullamcorper erat cursus. Pellentesque mauris velit, lobortis nec
				ultrices quis.
			</p>
		</div>
		</section>
	);
}

export default ProductSheet;
