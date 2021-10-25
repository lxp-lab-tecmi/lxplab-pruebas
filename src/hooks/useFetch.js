import { useState, useEffect, useRef } from 'react'
const axios = require('axios');


export const useFetch = (url) => {

    const isMounted = useRef(true)
    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {

        setState({ data: null, loading: true, error: null })
        axios.get(url)
            .then(data => {
                if (isMounted.current) {
                    if(data.data.code === 1){
                        setState({
                            data: data.data.data,
                            loading: false,
                            error: null
                        })
                    }
                }
            })
            .catch(error => {
                setState({
                    data: null,
                    loading: false,
                    error: 'Toy malito'
                })
            })

    }, [url])
    return state;
}