import React from 'react';

import styles from '../styles/Input.module.scss';

const Input = ({ type, label, name, placeholder, icon }) => {
	return (
		<div className={styles.input}>
			<label htmlFor={name}>{label}</label>
			<div>
				<div className={styles.icon}>{icon}</div>
				<input
					required="true"
					type={type}
					name={name}
					id={name}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
};

export default Input;
{
}
