import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { Cards } from './Cards'

export const Questions = ({ questions, responses }) => {

    const { counter,increment, decrement } = useCounter(0)
    console.log(questions)

    return (
        <div className="question__m-auto">
            <h1 className="w-100 m-auto mt-4 text-center">{questions[counter].question}</h1>
            <Cards key={counter} question={questions[counter]} responses={responses} identifier={questions[counter]._id}/>
            <div className="w-100 m-auto text-center">
                <button
                    className="btn btn-outline-primary m-1"
                    onClick={() => decrement(1)}
                    disabled={!(counter > 0)}
                >
                    {'<'}
                </button>
                <button
                    className="btn btn-outline-primary m-1"
                    onClick={() => increment(1)}
                    disabled={(counter === questions.length - 1)}
                >
                    {'>'}
                </button>
            </div>
        </div>
    )
}
