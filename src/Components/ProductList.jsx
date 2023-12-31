import { data } from '../data';
import {Link} from 'react-router-dom'




export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
		<div className='container-items'>
			{data.map(product => (
				<div className='item' key={product.id}>
					<figure>
					<Link to="/DetalleSantaTeresa"> <img src={product.img} alt={product.nameProduct}  /></Link>
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2>
                        <h2>{product.subtProduct}</h2>
                        <h2>{product.descripcionProduct}</h2>
						<p className='price'>${product.price}</p>
						<button onClick={() => onAddProduct(product)}>
							Añadir al carrito
						</button>
                        
					</div>
				</div>
			))}
		</div>
	);
};
