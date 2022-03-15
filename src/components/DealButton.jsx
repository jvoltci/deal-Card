import React from "react";
import PropTypes from "prop-types";
import { Button, Box } from "@chakra-ui/react"

const DealButton = (props) => {
  return (
    <Box display="flex" justifyContent="center" m="100px auto">
      <Button w="200px" disabled={props.isAllDealt} onClick={() => props.dealFourCard()}>Deal cards</Button>
    </Box>
  );
};

DealButton.propTypes = {
  dealFourCard: PropTypes.func,
  isAllDealt: PropTypes.bool
};

export default DealButton;
