import { Button } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { swapValues } from "./swapValues";

export const SwapButton = (props) => {
  const initialStartValue = props.startValue;
  const initialEndValue = props.endValue;
  let valuesEqual = false;
  if (initialStartValue === initialEndValue) {
    valuesEqual = true;
  }

  return (
    <Button
      startIcon={<SwapHorizIcon />}
      disabled={valuesEqual}
      onClick={() => {
        swapValues(initialEndValue, "convertFrom", props.changeFn);
        swapValues(initialStartValue, "convertTo", props.changeFn);
        props.reCalculateFn();
      }}
    >
      Swap
    </Button>
  );
};
