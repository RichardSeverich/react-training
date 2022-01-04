import React, { useEffect, useState } from "react";
import Card from "./Card";
import Api from "./../services/Api";

const CardPage = () => {
  const [listCard, setListCard] = useState([]);

  useEffect(() => {
    Api.getData(setListCard);
  });

  console.log(listCard);
  return (
    <div>
      {
        listCard.map(cardInfo => {
          return <Card key={cardInfo.id} card={cardInfo}></Card>
        })
      }
    </div>
  );
};

export default CardPage;
