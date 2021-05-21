import styles from '../styles/Home.module.css';
import { useYelpContext } from '../context/state';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Food() {
    const yelpContext = useYelpContext();
    const { updateTypeOfPlace, typeOfPlace, zipCode } = yelpContext;
    const [selectedError, updateSelected] = useState(false);
    const router = useRouter();

    const handleSelect = (value) => {
        if(value !== "") {
            updateSelected(false);
            router.push(`/spin?term=${typeOfPlace}&location=${zipCode}`);
        } else {
            updateSelected(true);
        }
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <select id="" className={styles.select} name="" onChange={e => updateTypeOfPlace(e.target.value)}>
                    <option className={styles.option} value="DEFAULT">Whatcha feelin G?</option>
                    <option value="Bar">Beers</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Dispensary">Dispensary</option>
                    <option value="Hamburger">Burgers</option>
                    <option value="Pizza">Pizza</option>
                </select>
                {selectedError ? <p>Select somethin G</p> : null}
                <button className={styles.button} onClick={() => handleSelect(typeOfPlace)}>Next -></button>
            </main>
        </div>
    );
}
