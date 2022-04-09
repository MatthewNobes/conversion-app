import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import InboxIcon from "@mui/icons-material/MoveToInbox";

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
        <InboxIcon />
      </ListItemIcon>
      <ListItemText
        primary={primaryText}
        secondary={secondaryText}
        sx={{ opacity: isOpen ? 1 : 0 }}
      />
    </ListItemButton>
  );
};
