import ListGroup from "react-bootstrap/ListGroup";

import { useState } from "react";
import UpdateModal from "../../Model/Model";

function ItemsLIst({ done }: { done: boolean }) {
  return (
    <ListGroup className="mt-5 ">
      {fakeData.map((x, i) => (
        <ListGroup.Item key={i} variant={x.isDone ? "danger" : "success"}>
          {x.info}
          <UpdateModal item={x} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ItemsLIst;

const fakeData = [
  { date: new Date(), info: "22", isDone: false },
  { date: new Date(), info: "33", isDone: false },
  { date: new Date(), info: "44", isDone: true },
];
