import React from 'react'
import { Droppable, Draggable } from "react-beautiful-dnd";

export const Card = ({ listId, listType, options }) => {
    return (
        <Droppable
            droppableId={listId}
            type="CARD"
            direction="horizontal"
            isCombineEnabled={false}
        >
            {dropProvided => (
                <div {...dropProvided.droppableProps}>
                    <div
                        className="card__container"
                        ref={dropProvided.innerRef}>
                        {options.map((option, index) => (
                            <Draggable key={option} draggableId={option} index={index}>
                                {dragProvided => (
                                    <div
                                        {...dragProvided.dragHandleProps}
                                        {...dragProvided.draggableProps}
                                        ref={dragProvided.innerRef}
                                        className="card__option"
                                    >
                                        <div>{option}</div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {dropProvided.placeholder}
                    </div>
                </div>
            )}
        </Droppable>
    )
}
