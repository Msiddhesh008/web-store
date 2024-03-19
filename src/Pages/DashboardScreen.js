import React, { useState } from "react";
import HaedMain01 from "../Components/HeadMain/HaedMain01";
import TimeCalculator from "../Components/Functions/TimeCalculator";
import reactLogo from "../Images/reactLogo.png";
import { RiReactjsLine } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { DiJavascript1 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa6";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";



const DashboardScreen = () => {

  const [cards, setCards] = useState([
    {
      type: "small",
      title: "HTML Experience",
      date: "2020-02-02",
      backgroundColor: "#fff",
      gredient: null,
      textColor: "#DD4B25",
      icons: (
        <FaHtml5
          style={{
            fontSize: 120,
            color: "#DD4B25",
          }}
        />
      ),
    },
    {
      type: "small",
      title: "Javascript Experience",
      date: "2021-01-02",
      backgroundColor: "#F0DC4E",
      gredient: null,
      textColor: "#2E302C",
      icons: (
        <DiJavascript1
          style={{
            fontSize: 150,
            color: "#2E302C",
          }}
        />
      ),
    },
    {
      type: "small",
      title: "React JS Experience",
      date: "2021-06-02",
      backgroundColor: null,
      gredient:
        "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
      textColor: "#fff",
      icons: (
        <GrReactjs
          style={{
            fontSize: 120,
            color: "#fff",
          }}
          className="rotate"
        />
      ),
    },
  ])


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

  return (
    <div className="h-100 w-100 d-flex flex-column justify-content-start align-items-start">
      <HaedMain01 />

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="cards">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ height: "34%" }}
              className="w-100 d-flex flex-wrap "
            >
              {cards.map(
                ({ type, title, date, icons, gredient, backgroundColor, textColor }, index) => {
                  return (
                    <Draggable key={index} draggableId={`card-${index}`} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="col-12 col-md-4 p-3 "
                        >
                          <div
                            style={{
                              background:
                                gredient !== null
                                  ? "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"
                                  : backgroundColor,
                              boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                                height:200
                            }}
                            className="w-100  rounded-4 d-flex"
                          >
                            <div className="d-flex col-6 align-items-start justify-content-end p-3 pe-0 ps-4 flex-column h-100">
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

                            <div className="col-6 p-3 d-flex align-items-center justify-content-center">
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
    </div>
  );
};

export default DashboardScreen;
