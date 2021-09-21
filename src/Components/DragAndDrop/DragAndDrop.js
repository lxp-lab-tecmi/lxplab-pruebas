import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { useFetch } from '../../hooks/useFetch';

export const DragAndDrop = () => {
    const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon/')
    return (
        <>

            {
                (!error)
                    ? (
                        (loading)
                            ? <h1>Loading...</h1>
                            : <>
                                <DragDropContext>
                                    <Droppable droppableId="characters">
                                        {(provided) => (
                                            <div className="" {...provided.droppableProps} ref={provided.innerRef}>
                                                {data.results.map((data, index) => (
                                                    <Draggable  draggableId={data.name} index={index} key={index}>
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
                                    <Droppable droppableId="characters">
                                        {(provided) => (
                                            <div className="" {...provided.droppableProps} ref={provided.innerRef}>
                                                {data.results.map((data, index) => (
                                                    <Draggable  draggableId={data.name} index={index} key={index}>
                                                        {(provided) => (
                                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={Date.now()}>
                                                                {data.name} 1
                                                            </li>
                                                        )}
                                                    </Draggable>
                                                )
                                                )}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>

                            </>
                    )
                    : <h1>Error al obtener información</h1>
            }
        </>
    )
}
