import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

const page = () => {
  return (
    <div className="m-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Selecting your initial squad</AccordionTrigger>
          <AccordionContent>
            <p>
              To join the game select a fantasy football squad of 15 players,
              consisting of: 2 Goalkeepers 5 Defenders 5 Midfielders 3 Forwards
              Budget The total value of your initial squad must not exceed £100
              million. Players Per Team You can select up to 3 players from a
              single Premier League team.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default page;
