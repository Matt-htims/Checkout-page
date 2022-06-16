import Head from 'next/head';
import styles from '../styles/Home.module.scss';

// Components
import Form from '../components/Form';
import Info from '../components/Info';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Checkout Page</title>
				<meta
					name="description"
					content="Checkout page challenge from devChallenge.io complete by Matt-htims"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<header className={styles.header}>
					<h1>Checkout</h1>
				</header>

				<main className={styles.main}>
					<div className={styles.form}>
						<Form />
					</div>
					<div className={styles.info}>
						<Info />
					</div>
				</main>
			</div>
			<footer className={styles.footer}>
				<p>
					created by <a href="https://github.com/Matt-htims">Matt-htims</a> -
					devChallenges.io
				</p>
			</footer>
		</div>
	);
}
