import { useState, useEffect, useRef } from 'react'
const axios = require('axios');


export const useFetch = (url) => {

    const isMounted = useRef(true)
    const [state, setstate] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {

        setstate({ data: null, loading: true, error: null })
        axios.get(url)
            .then(data => {
                if (isMounted.current) {
                    setstate({
                        data: data.data,
                        loading: false,
                        error: null
                    })
                }

            })
            .catch(error => {
                setstate({
                    data: null,
                    loading: false,
                    error: 'Toy malito'
                })
            })

    }, [url])


    return state;
}