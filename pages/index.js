import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useYelpContext } from '../context/state';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const yelpContext = useYelpContext();
    const [buttonError, setButtonError] = useState(false);
    const { updateZipCode, zipCode } = yelpContext;
    const router = useRouter();

    const handleClick = (zip) => {
        if(zip !== "") {
            setButtonError(false);
            router.push("/food");
        } else {
            setButtonError(true);
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Yelp Roulette</title>
                <meta name="description" content="Yelp Roulette" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.header}>Yelp Roulette</h1>
                <input className={styles.input} type="text" placeholder="Whats Ya Postal Code?" onChange={e => updateZipCode(e.target.value)}/>
                {buttonError ? <p>Enter a zip code first G</p> : null}
                <button className={styles.button} onClick={() => handleClick(zipCode)}>Next</button>
            </main>
        </div>
    )
}
