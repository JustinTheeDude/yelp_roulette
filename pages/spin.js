import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { Transition, animated, useSpring } from 'react-spring';
import { SpinnerCircular } from 'spinners-react';
import { useRouter } from 'next/router';

export default function Spin(props) {
    const businesses = props.json.businesses.map(business => business.name);
    const urls = props.json.businesses.map(business => business.url);
    const getRandomIndex = (listLength) => Math.floor(Math.random() * listLength);
    const [timer, setTime] = useState(false);
    const [reroll, setReroll] = useState(false);

    setTimeout(() => {setTime(true)}, 2000);

    const reRoll = () => {
        if(reroll == true) {
            setReroll(false);
            setTime(false);
        } else {
            setTime(false);
            setReroll(true);
        }
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {!timer ?
                    <>
                        <SpinnerCircular size="100px" color="#FFFFFF" secondaryColor={'rgba(255,255,255,0.44)'}/>
                        <h2 className={styles.header}>Choosing a spot</h2>
                    </>
                    :
                    <>
                        <a className={styles.header} href={urls[getRandomIndex(businesses.length)]} target="_blank">{businesses[getRandomIndex(businesses.length)]}</a>
                        <button className={styles.button} onClick={() => reRoll()}>Reroll!</button>
                    </>
                }
            </main>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    const API_KEY = process.env.API_KEY;
    const url = `https://api.yelp.com/v3/businesses/search?term=${query.term}&location=${query.location}`;
    const res = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        }
    });

    const json = await res.json();

    return {
        props: {
            json,
            query
        }
    }
}
