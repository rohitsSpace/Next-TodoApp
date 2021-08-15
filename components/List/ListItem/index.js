import React, { useEffect, useState } from "react";
import AddCard from "./AddCard";
import Icon from "../../Icon";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { addIcon, deleteIconLight, trashIcon } from "../../../constants/icon";
import { Col, Button, Row } from "react-bootstrap";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const ListItem = ({ item, removeItem }) => {
  const [openAdd, setOpenAdd] = useState(false);
  const [cardsItem, setCardsItem] = useState([]);
  const [allMyCardsItems, setAllMyCardsItems] = useState([]);
  const [currentList, setCurrentList] = useState("");
  const { setItem, value } = useLocalStorage("todoList");

  const addTask = (item) => {
    const itemToAdd = {
      id: uuidv4(),
      content: item,
    };

    // assuming no duplicates for demo purposes
    const a = [...cardsItem, itemToAdd];
    setCardsItem(a);
    currentList.items.push(itemToAdd);
    setItem(allMyCardsItems);
  };

  const removeTask = (item) => {
    const remainingTotoItems = cardsItem.filter((i) => item.id !== i.id);
    setCardsItem(remainingTotoItems);
    currentList.items.length = 0;
    currentList.items.push(...remainingTotoItems);
    setItem(allMyCardsItems);
    //  TODO need to improve logic to set state
    // right now reloading the page to refresh the states
    window.location.href = "/";
  };

  useEffect(() => {
    const allLists = JSON.parse(localStorage.getItem("todoList"));

    const myList = allLists.find((list) => list.id === item.id);
    setAllMyCardsItems(allLists);
    setCardsItem(myList.items);
    setCurrentList(myList);
  }, [item, item.items]);

  return (
    <Col xs="12" md="5" className="shadow-lg  m-1">
      <Row className="bg-dark">
        <Col className="my-2">
          <h4 className="text-white my-auto">{item.name}</h4>
        </Col>
        <Col xs="auto" className="my-auto">
          <Icon
            icon={deleteIconLight}
            onClick={(e) => {
              e.preventDefault();
              removeItem(item);
            }}
            className="text-right text-link"
          />
        </Col>
      </Row>
      <Row className="my-2">
        <Col>
          <Button variant="danger" onClick={() => setOpenAdd(!openAdd)}>
            <Icon icon={addIcon} className="mr-2" />
            Add Todo
          </Button>
        </Col>
      </Row>
      {openAdd && (
        <Row>
          <Col>
            <AddCard onAddItem={addTask} />
          </Col>
        </Row>
      )}

      <Droppable droppableId={item.id} key={item.id}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver ? "gray" : "black",
              }}
              className="min-vh-100 mb-3">
              {item.items.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            userSelect: "none",
                            padding: "16px",
                            margin: "0 0 8px 0",
                            minHeight: "50px",
                            backgroundColor: snapshot.isDragging
                              ? "#3c343f"
                              : "#efbe66",
                            color: "white",
                            ...provided.draggableProps.style,
                          }}>
                          <Row>
                            <Col
                              className={`${
                                snapshot.isDragging ? "text-white" : "text-dark"
                              }`}>
                              {item.content && item.content.title}
                            </Col>
                            <Col xs="auto" className="my-auto">
                              <Icon
                                icon={trashIcon}
                                onClick={(e) => {
                                  removeTask(item);
                                }}
                                className="text-right text-link"
                              />
                            </Col>
                          </Row>
                          <small
                            className={`${
                              snapshot.isDragging ? "text-danger" : "text-white"
                            }`}>
                            {item.content && item.content.des}
                          </small>
                        </div>
                      );
                    }}
                  </Draggable>
                );
              })}

              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </Col>
  );
};

export default ListItem;
