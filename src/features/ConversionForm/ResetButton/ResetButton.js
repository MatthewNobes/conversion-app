import { Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const resetFields = (values, changeFn, defaultStartUnit, defaultEndUnit) => {
  changeFn("convertFrom", defaultStartUnit);
  changeFn("convertTo", defaultEndUnit);
  changeFn("valueToConvert", NaN);
  console.log(values);
};

export const ResetButton = (props) => (
  <Button
    startIcon={<RefreshIcon />}
    onClick={() =>
      resetFields(
        props.values,
        props.changeFn,
        props.defaultStartUnit,
        props.defaultEndUnit
      )
    }
  >
    Reset
  </Button>
);
