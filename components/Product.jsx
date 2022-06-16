import { useState } from 'react';
import Image from 'next/image';

import styles from '../styles/Product.module.scss';

const Product = ({
	image,
	name,
	price,
	origprice,
	count,
	addOne,
	minusOne,
}) => {
	return (
		<div className={styles.product}>
			<div className={styles.image}>
				<Image
					alt={name}
					src={image}
					height="135px"
					width="175px"
					layout="fill"
				/>
			</div>
			<div className={styles.text}>
				<div>
					<h3>{name}</h3>
					<div className={styles.price}>
						<h4>{price}</h4>
						<p>{origprice}</p>
					</div>
				</div>
				<div className={styles.amount}>
					<button onClick={minusOne}>-</button>
					<p>{count}</p>
					<button onClick={addOne}>+</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
