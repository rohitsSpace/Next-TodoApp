import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Col, Row, ListGroup } from "react-bootstrap";
import { listIcon } from "../../constants/icon";
import { isEmpty } from "lodash";
import useLocalStorage from "../../hooks/useLocalStorage";
import Icon from "../Icon";
import AddListItem from "./AddListItem";
import ListItem from "./ListItem";
import NoResultsRow from "../NoResultsRow";

const TodoItems = ({ listItems, removeItem, onDragEnd }) => {
  return (
    <>
      {isEmpty(listItems) && (
        <NoResultsRow message="You don't have any category to add TODO Items." />
      )}
      {!isEmpty(listItems) && (
        <Row className="my-4 ">
          <Col xs={12}>
            <ListGroup>
              <ListGroup.Item className="header">
                <Row>
                  <Col className="col-auto pr-0">
                    <Icon icon={listIcon} fixedWidth={true} />
                  </Col>
                  <Col>Your TODO Board</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item className="min-vh-100 bg-info">
                <Row>
                  <DragDropContext
                    onDragEnd={(result) => onDragEnd(result, listItems)}>
                    {listItems.map((item) => (
                      <ListItem
                        item={item}
                        key={item.id}
                        removeItem={removeItem}
                      />
                    ))}
                  </DragDropContext>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

const ListWrapper = () => {
  const [listItems, setListItems] = useState([]);
  const { setItem, value } = useLocalStorage("todoList");

  /**
   * Add a category to the board, it takes an item which is an object
   * @param  {object} item
   * it sets the item to local Storage
   */

  const addItem = (item) => {
    // assuming no duplicates for demo purposes
    const a = [...listItems, item];
    setListItems(a);
    // set item to localStorage
    setItem(a);
  };

  /**
   * Checks and delete the item from the local storage
   * @param  {object} itemToBeDeleted
   *
   */

  const removeItem = (itemToBeDeleted) => {
    const remainingCategories = listItems.filter(
      (item) => itemToBeDeleted.id !== item.id
    );
    setListItems(remainingCategories);
    // set item to localStorage
    setItem(remainingCategories);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todoList"));
    if (items) {
      setListItems(items);
    } else {
      setItem(items);
    }
  }, [setItem]);

  /**
   * Whenever someone drag item [TODO item] then we call this function
   * and its responsible to switch item from one list to another.
   * we are using react-beautiful-dnd library for this
   */

  const onDragEnd = (result, listItems) => {
    if (!result.destination) return;
    // get from which colum item picked and getting dropped
    // [1,2] => [2,1]

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      // Not the same place then swap elements and respect the order as well
      const sourceColumn = listItems.find((e) => e.id === source.droppableId);
      const destColumn = listItems.find(
        (e) => e.id === destination.droppableId
      );
      const remainingSourceItems = sourceColumn.items.filter(
        (i, index) => index !== source.index
      );
      const sourceItems = [...sourceColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      const destItems = [...destColumn.items];
      destItems.splice(destination.index, 0, removed);
      sourceColumn.items = remainingSourceItems.slice(0);
      destColumn.items = destItems.slice(0);
      // Now setting items to localStorage

      setItem(listItems);
    } else {
      // if not then we are swapping places in the same category
      //
      const column = listItems.find((e) => e.id === source.droppableId);
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      column.items = copiedItems.slice(0);
      setItem(listItems);
    }
  };

  return (
    <>
      <AddListItem onAddItem={addItem} />
      <TodoItems
        listItems={listItems}
        removeItem={removeItem}
        onDragEnd={onDragEnd}
      />
    </>
  );
};

export default ListWrapper;
