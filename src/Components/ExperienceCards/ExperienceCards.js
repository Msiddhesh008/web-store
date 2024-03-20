import React, { useState } from 'react'
import TimeCalculator from "../../Components/Functions/TimeCalculator";
import { GrReactjs } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa6";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { IoLogoJavascript } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from uuid

const ExperienceCards = () => {
    const [cards, setCards] = useState([
      {
        id: uuidv4(),
        type: "small",
        title: "HTML Experience",
        date: "2020-02-02",
        backgroundColor: "#fff",
        gredient: null,
        textColor: "#DD4B25",
        icons: (
          <FaHtml5
            style={{
              fontSize: 100,
              color: "#DD4B25",
            }}
          />
        ),
      },
      {
        id: uuidv4(),
        type: "small",
        title: "Javascript Experience",
        date: "2021-01-02",
        backgroundColor: "#F0DC4E",
        gredient: null,
        textColor: "#2E302C",
        icons: (
          <IoLogoJavascript
            style={{
              fontSize: 110,
              color: "#2E302C",
            }}
          />
        ),
      },
      {
        id: uuidv4(),
        type: "small",
        title: "React JS Experience",
        date: "2021-06-02",
        backgroundColor: "#222f3e",
        gredient: null,
        textColor: "#81E0FF",
        icons: (
          <GrReactjs
            style={{
              fontSize: 100,
              color: "#81E0FF",
            }}
            className="rotate"
          />
        ),
      },
      {
        id: uuidv4(),
        type: "small",
        title: "React Native Experience",
        date: "2021-06-02",
        backgroundColor: "#222f3e",
        gredient:null,
        textColor: "#fff",
        icons: (
          <GrReactjs
            style={{
              fontSize: 100,
              color: "#fff",
            }}
            className="rotate"
          />
        ),
      },  
    ]);
  
    const handleDragEnd = (result) => {
      if (!result.destination) return;
      const { source, destination } = result;
      // Reorder the items in the array according to the drag result
      const reorderedCards = Array.from(cards);
      const [removed] = reorderedCards.splice(source.index, 1);
      reorderedCards.splice(destination.index, 0, removed);
      // Set the new state
      setCards(reorderedCards);
    };


    console.log(cards);
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="cards">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ height: "auto",  }}
              className="w-100 d-flex flex-wrap pb-3"
            >
              {cards.map(
                (
                  {
                    id,
                    type,
                    title,
                    date,
                    icons,
                    gredient,
                    backgroundColor,
                    textColor,
                  },
                  index
                ) => {
                  return (
                    <Draggable
                      key={id}
                      draggableId={`card-${id}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={` ${
                            index === 0 ? "ps-3" : ""
                          } col-md-3 p-2 col-12`}
                        >
                          <div
                            style={{
                              background:
                                gredient !== null
                                  ? "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"
                                  : backgroundColor,
                            //   boxShadow:
                            //     "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 0px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",

                              boxShadow:
                                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                              height: 160,
                            }}
                            className="w-100  rounded-4 d-flex"
                          >
                            <div className="d-flex col-7 align-items-start justify-content-end p-3 pe-0  flex-column h-100">
                              <h6
                                style={{
                                  color: textColor,
                                }}
                                className="text- fw-bold"
                              >
                                {title}
                              </h6>
                              <h2
                                style={{
                                  color: textColor,
                                  fontSize: "16px",
                                }}
                                className="fw-bold   text-center"
                              >
                                <TimeCalculator JoiningDate={date} />
                              </h2>
                            </div>

                            <div className="col-5 p-3 d-flex align-items-center justify-content-center">
                              <span>{icons}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                }
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
  )
}

export default ExperienceCards