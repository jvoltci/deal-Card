import React from "react";
import PropTypes from "prop-types";

import heart from "../style/images/heart.png";
import diamond from "../style/images/diamond.png";
import club from "../style/images/club.png";
import spade from "../style/images/spade.png";
import { Box, Image } from "@chakra-ui/react"


const Card = (props) => {

  const { suits, card, color } = props;

  const getCardSymbol = (suits) => {
    let symbol;
    switch (suits) {
      case "Diamond":
        return symbol = diamond;
      case "Heart":
        return symbol = heart;
      case "Club":
        return symbol = club;
      case "Spade":
        return symbol = spade;
      default:
        return symbol;
    };
  };

  const cardSymbol = getCardSymbol(suits);
  return (
    <Box border={`2px solid ${color}`} position="relative" borderRadius="7px" h="200px" w="150px" >
      <Box position="absolute" ml="5px" color={`${color}`}>
        <Box display="flex" justifyContent="center" fontWeight="bold" >{card}</Box>
        <Image src={cardSymbol} alt="symbol" h="25px" />
      </Box>

      <Box position="absolute" mr="5px" bottom="0" right="0" color={`${color}`}>
        <Image transform="rotate(180deg)" src={cardSymbol} alt="symbol" h="25px" />
        <Box display="flex" justifyContent="center" fontWeight="bold" >{card}</Box>
      </Box>
    </Box>
  );
};

Card.propTypes = {
  suits: PropTypes.string,
  card: PropTypes.string,
  color: PropTypes.string
};

export default Card;
