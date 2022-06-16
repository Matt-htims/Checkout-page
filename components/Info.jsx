import React, { useState } from 'react';

import styles from '../styles/Info.module.scss';

// Components
import Product from './Product';

const Info = () => {
	// State
	const [firstCount, setFirstCount] = useState(0);
	const [secondCount, setSecondCount] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	// Handler
	function handleFirstAddOne() {
		setFirstCount(firstCount + 1);
		setTotalPrice(totalPrice + 54.99);
	}

	function handleFirstMinusOne() {
		if (firstCount > 0) {
			setFirstCount(firstCount - 1);
			setTotalPrice(totalPrice - 54.99);
		}
	}

	function handleSecondAddOne() {
		setSecondCount(secondCount + 1);
		setTotalPrice(totalPrice + 74.99);
	}

	function handleSecondMinusOne() {
		if (secondCount > 0) {
			setSecondCount(secondCount - 1);
			setTotalPrice(totalPrice - 74.99);
		}
	}
	return (
		<div className={styles.info}>
			<div className={styles.products}>
				<Product
					image="/photo1.png"
					name="Vintage Backbag"
					price="$54.99"
					origprice="$94.99"
					count={firstCount}
					addOne={handleFirstAddOne}
					minusOne={handleFirstMinusOne}
				/>
				<Product
					image="/photo2.png"
					name="Levi Shoes"
					price="$74.99"
					origprice="$124.99"
					count={secondCount}
					addOne={handleSecondAddOne}
					minusOne={handleSecondMinusOne}
				/>
			</div>
			<div className={styles.bottominfo}>
				<p>Shipping</p>
				<p className={styles.price}>$19</p>
			</div>
			<div className={styles.bottominfo}>
				<p>Total</p>
				<p className={styles.price}>
					${totalPrice > 0.001 ? parseFloat(totalPrice).toFixed(2) : 0}
				</p>
			</div>
		</div>
	);
};

export default Info;
