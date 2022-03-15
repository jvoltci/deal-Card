import React from "react";

import Card from "./components/Card";
import DealButton from "./components/DealButton";
import { deck } from "./utils/deck";
import { Box } from "@chakra-ui/react"

const App = () => {

  const [cardsArray, setCardsArray] = React.useState(deck);
  const [cardPicked, setCardPicked] = React.useState([]);

  const dealFourCard = () => {
    let randomFourCards = [];
    let newCardsArray = cardsArray ;
    for(let i = 0; i < 4; ++i) {
      const randomItem = newCardsArray[Math.floor(Math.random() * newCardsArray.length)];
      randomFourCards.push(randomItem);
      newCardsArray = newCardsArray.filter(element => element.index !== randomItem.index)
    }
    setCardsArray(newCardsArray)
    let cardsPickedArray = cardPicked;
    cardsPickedArray.length < 52 && cardsPickedArray.push(...randomFourCards);
    setCardPicked(cardsPickedArray);
  }


    return (
      <Box w="100%" >

        <DealButton dealFourCard={dealFourCard} isAllDealt={cardPicked.length === 52} />

        <Box display="flex" justifyContent="space-around" >
          {cardPicked && cardPicked.slice(cardPicked.length - 4).map((card, index) => {
            return (
              <Card key={index} suits={card.suits} card={card.card} color={card.color} />
            );
          })}
        </Box>
      </Box>
    );
  };


  export default App;
