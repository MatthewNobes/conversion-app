import { Button } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { swapValues } from "./swapValues";

export const SwapButton = (props) => (
  <Button
    startIcon={<SwapHorizIcon />}
    onClick={() => {
      const initialStartValue = props.startValue;
      const initialEndValue = props.endValue;
      swapValues(initialEndValue, "convertFrom", props.changeFn);
      swapValues(initialStartValue, "convertTo", props.changeFn);
    }}
  >
    Swap
  </Button>
);
