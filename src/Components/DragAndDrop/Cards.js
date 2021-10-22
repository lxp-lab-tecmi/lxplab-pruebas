import React, { useEffect, useState } from 'react'
import { DragDropContext } from "react-beautiful-dnd";
import { Card } from './Card';

export const Cards = ({ question, responses: responsesToSend, identifier }) => {

    const [responses, setResponses] = useState({})


    useEffect(() => {
        setResponses(create(question))
    }, [question])

    return (
        <div>
            <DragDropContext
                onDragEnd={({ destination, source }) => {
                    if (!destination) {
                        return;
                    }

                    setResponses(reorderResponses(responses, source, destination))

                    const key = identifier
                    responsesToSend.setResponses({ ...responsesToSend.responses, [key]: reorderResponses(responses, source, destination) })
                }}
            >
                <div className="d-flex flex-nowrap mt-3">
                    {
                        responses !== undefined
                        &&
                        Object.entries(responses).map(([key, value]) => (
                            <div key={key} className="cards__card">
                                <h1 className="cards__title">{key === 'resposnesArr' ? 'Respuestas' : key}</h1>
                                <Card internalScroll
                                    key={key}
                                    listId={key}
                                    options={value}
                                />
                            </div>
                        ))
                    }
                </div>
            </DragDropContext>
        </div>
    )
}

const create = (question) => {
    let responses = {
    }

    let resposnesArr = []
    question.responses.map(response => (
        resposnesArr.push(response.response)
    ))
    responses = { ...responses, resposnesArr }

    question.options.map(option => (
        responses = { ...responses, [option.option]: [] }
    ))

    return responses
}
const reorder = (
    list,
    startIndex,
    endIndex
) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const reorderResponses = (
    responses,
    source,
    destination
) => {
    const current = [...responses[source.droppableId]];
    const next = [...responses[destination.droppableId]];
    const target = current[source.index];

    if (source.droppableId === destination.droppableId) {
        const reordered = reorder(current, source.index, destination.index);
        return {
            ...responses,
            [source.droppableId]: reordered
        };
    }

    current.splice(source.index, 1);
    next.splice(destination.index, 0, target);

    return {
        ...responses,
        [source.droppableId]: current,
        [destination.droppableId]: next
    };
};
