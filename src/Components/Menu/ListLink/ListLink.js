import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import HomeIcon from "@mui/icons-material/Home";

const GetIcon = (props) => {
  if (props.linkIcon === "Mass") {
    return <FitnessCenterIcon />;
  }
  if (props.linkIcon === "Distance") {
    return <SquareFootIcon />;
  } else {
    return <HomeIcon />;
  }
};

export const ListLink = (props) => {
  const isOpen = props.isOpen;
  const location = props.linkLocation;
  const primaryText = props.linkPrimaryText;
  const secondaryText = props.linkSecondaryText;

  return (
    <ListItemButton
      key={location}
      sx={{
        minHeight: 48,
        justifyContent: isOpen ? "initial" : "center",
        px: 2.5,
      }}
      component={Link}
      to={location}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: isOpen ? 3 : "auto",
          justifyContent: "center",
        }}
      >
        <GetIcon linkIcon={props.linkIcon} />
      </ListItemIcon>
      <ListItemText
        primary={primaryText}
        secondary={secondaryText}
        sx={{ opacity: isOpen ? 1 : 0 }}
      />
    </ListItemButton>
  );
};
