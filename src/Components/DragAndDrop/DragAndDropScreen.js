import axios from 'axios'
import React, { useState } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { Questions } from './Questions'


import Swal from 'sweetalert2'

export const DragAndDropScreen = () => {

    const { data, loading, error } = useFetch("https://api-xl-lab-nodejs.herokuapp.com/test/615e0575e2413719241ccdb2")
    const [responses, setResponses] = useState({})

    const handleResponses = () => {
        axios.post(`https://api-xl-lab-nodejs.herokuapp.com/test/grade/615e0575e2413719241ccdb2`, responses)
            .then(function (response) {
                const grade = response.data.data
                let message = ''
                let icon = ''
                if (grade >= 70) {
                    icon = 'success'
                    message = 'Felicidades!!!'
                } else {
                    icon = 'error'
                    message = 'Realiza de nuevo el test'
                }

                Swal.fire({
                    icon: icon,
                    title: `${message} Calificación: ${grade}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(function (error) {
            });
    }
    return (
        <div className="background">
            {error !== undefined
                ? <>
                    {
                        (loading)
                            ? <h1>loading...</h1>
                            : <div className="dragAndDrop__container m-auto">
                                <h1 className="text-center">{data[0]?.title}</h1>
                                <p className="text-center h3">{data[0]?.description}</p>
                                <Questions questions={data[0]?.questions} responses={{ responses, setResponses }} />
                                <button className="btn btn-outline-success d-flex m-auto mt-3" onClick={handleResponses}>Evaluar</button>
                            </div>
                    }
                </>
                : <h1>{error}</h1>}
        </div>
    )
}
