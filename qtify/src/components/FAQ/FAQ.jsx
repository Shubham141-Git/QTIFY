import styles from "./FAQ.module.css";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function FAQ() {
  const faqDetails = [
    {
      que: "Is Qtify Free to use?",
      ans: "Yes it's free to use",
    },
    {
      que: "Can I download and listen to songs offline?",
      ans: "Sorry, unfortunately we don't provide the service to download any songs.",
    },
  ];

  return (
    <div className={styles.faq}>
      <div>
        <p className={styles.faqTitle}>FAQs</p>
      </div>

      {faqDetails.map((item) => {
        return (
          <Accordion className={styles.accordian}>
            <AccordionSummary
              className={styles.summary}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.que}</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.details}>
              <Typography>{item.ans}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
