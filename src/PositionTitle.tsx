import React from "react";
import { Card, Typography, makeStyles } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles({
  card: {
    padding: "16px",
    margin: "16px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#cedaf5"
  },
  positionType: {
    color: "gray",
    marginLeft: "8px"
  },
  underlying: {
    fontWeight: "bold"
  },
  expiry: {
    color: "green",
    marginLeft: "8px"
  },
  separator: {
    margin: "0 8px"
  },
  open: {
    color: "green"
  },
  closed: {
    color: "red"
  }
});

interface PositionCardProps {
  positionType: string;
  underlying: string;
  expiry: string;
  isOpen: boolean;
}

const PositionCard: React.FC<PositionCardProps> = ({ positionType, underlying, expiry, isOpen }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <FiberManualRecordIcon
        className={isOpen ? classes.open : classes.closed}
      />
      <Typography variant="h6" className={classes.underlying}>
        {underlying}
      </Typography>
      <Typography variant="body2" className={classes.separator}>
        |
      </Typography>
      <Typography variant="subtitle1" className={classes.positionType}>
        {positionType}
      </Typography>
      <Typography variant="body2" className={classes.separator}>
        |
      </Typography>
      <Typography variant="body1" className={classes.expiry}>
        {expiry}
      </Typography>
    </Card>
  );
};

export default PositionCard;
