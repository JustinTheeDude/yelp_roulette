export default function ZipCodeInput(props) {
    return (
        <input type="text" />
    )
}

export async function getStaticProps(context) {
    const API_KEY = "HF3aj20l--aSTBbFhVxM2wk1e8YEYz2i8Y-tv2D3BEc1FRs8kUaOGf15-PsesfiokIFNUGy4Xi701dxR28YfuLq3XzRSOHwBQhHuyHPBFJomuykvdTRBuEmxqw2fYHYx";
    let url = "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972"
    const res = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        }
    });

    const json = await res.json();

    return {
        props: { json }
    }
}
