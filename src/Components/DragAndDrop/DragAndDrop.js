import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { useFetch } from '../../Hooks/useFetch';

export const DragAndDrop = () => {
    const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon/')
    return (
        <>

            {
                (!error)
                    ? (
                        (loading)
                            ? <h1>Loading...</h1>
                            : <DragDropContext >
                                <div className="d-flex">
                                    <div className="m-3">
                                        <Droppable droppableId="characters">
                                            {(provided) => (
                                                <div className="" {...provided.droppableProps} ref={provided.innerRef}>
                                                    {data.results.map((data, index) => (
                                                        <Draggable draggableId={data.name} index={index} key={index}>
                                                            {(provided) => (
                                                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={Date.now()}>
                                                                    {data.name}
                                                                </li>
                                                            )}
                                                        </Draggable>
                                                    )
                                                    )}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                    <div className="m-3 bg-danger">
                                        <Droppable droppableId="characters2">
                                            {(provided) => (
                                                <div className="" {...provided.droppableProps} ref={provided.innerRef}>
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                </div>
                            </DragDropContext>

                    )
                    : <h1>Error al obtener información</h1>
            }
        </>
    )
}
