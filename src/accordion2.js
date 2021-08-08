import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Chances of winning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Chances of winning tells you how likely you are to win in a consumer court had the complaint been filed there</p>
            Or Alternatively,
            <p>How likely you are to win in a negotiation with the other party (device manufacturer or seller) by quoting</p>
            <p>your winning chances in a consumer court as a reference

</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Expected compensation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Expected compensation tells you what compensation (free servicing, product/ part replacement or</p>
            <p>monetary compensation) you are likely to get from the other party had your complaint been filed in a</p>
            <p>consumer court</p>
            <p>Or Alternatively,</p>
            <p>what compensation (free servicing, product/ part replacement) you are likely to get from the other party</p>
            <p>in a negotiation</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
