import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function checkQueryParams(props) {
    useEffect(() => {
        console.log(props)
        const router = useRouter();
        if(props.query.term == "" || props.query.location == "") {
            router.push("/");
        }
    }, [])
}
