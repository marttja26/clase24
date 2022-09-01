import fakeUserGenerator from '../utils/fakeUserGenerator.js';
class ContainerFake {
	constructor() {}

	getProducts(qty) {
		const products = [];
		for (let i = 0; i <= qty; i++) {
			products.push(fakeUserGenerator());
		}
		return products;
	}
}

export default ContainerFake;
