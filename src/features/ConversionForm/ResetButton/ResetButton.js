import { Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const resetFields = (
  changeFn,
  defaultStartUnit,
  defaultEndUnit,
  resetResultFn
) => {
  changeFn("convertFrom", defaultStartUnit);
  changeFn("convertTo", defaultEndUnit);
  changeFn("valueToConvert", NaN);
  resetResultFn();
};

export const ResetButton = (props) => (
  <Button
    startIcon={<RefreshIcon />}
    onClick={() =>
      resetFields(
        props.changeFn,
        props.defaultStartUnit,
        props.defaultEndUnit,
        props.resetResultFn
      )
    }
  >
    Reset
  </Button>
);
