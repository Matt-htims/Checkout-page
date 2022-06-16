import React from 'react';
import {
	MdEmail,
	MdPhone,
	MdAccountCircle,
	MdHome,
	MdLocationCity,
	MdMarkunreadMailbox,
	MdLanguage,
} from 'react-icons/md';

import styles from '../styles/Form.module.scss';

// Components
import Input from './Input';

const Form = () => {
	return (
		<div className={styles.form}>
			<form action="">
				<div className={styles.contact}>
					<h2>Contact information</h2>
					<Input
						type="email"
						label="E-mail"
						name="email"
						placeholder="Enter your email..."
						icon={<MdEmail color="#828282" size="20px" />}
					/>
					<Input
						type="tel"
						label="Phone"
						name="phone"
						placeholder="Enter your phone..."
						icon={<MdPhone color="#828282" size="20px" />}
					/>
				</div>
				<div className={styles.shipping}>
					<h2>Shipping address</h2>
					<Input
						type="text"
						label="Full name"
						name="name"
						placeholder="Your name..."
						icon={<MdAccountCircle color="#828282" size="20px" />}
					/>
					<Input
						type="text"
						label="Address"
						name="address"
						placeholder="Your address..."
						icon={<MdHome color="#828282" size="20px" />}
					/>
					<Input
						type="text"
						label="City"
						name="city"
						placeholder="Your city..."
						icon={<MdLocationCity color="#828282" size="20px" />}
					/>
					<div className={styles.twoline}>
						<div className={styles.one}>
							<label htmlFor="country">Country</label>
							<div>
								<div className={styles.icon}>
									<MdLanguage color="#828282" size="20px" />
								</div>
								<select
									required="true"
									name="country"
									id="country"
									placeholder="Your country..."
								>
									<option disabled selected value>
										Your country...
									</option>
									<option value="united kingdom">United Kingdom</option>
									<option value="germany">Germany</option>
									<option value="france">France</option>
									<option value="usa">United States</option>
								</select>
							</div>
						</div>
						<div className={styles.two}>
							<Input
								type="text"
								label="Postal code"
								name="postcode"
								placeholder="Your postal code..."
								icon={<MdMarkunreadMailbox color="#828282" size="20px" />}
							/>
						</div>
					</div>
				</div>
				<div className={styles.infosave}>
					<input name="save" id="save" type="checkbox" />
					<label htmlFor="save">Save this information for next time</label>
				</div>
				<div className={styles.button}>
					<button>Continue</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
