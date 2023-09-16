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
          <AccordionTrigger>Create your team</AccordionTrigger>
          <AccordionContent>
            <p>
              Start by selecting 15 players from the Premier League within a
              budget of 100 million pounds. Your team should consist of 2
              goalkeepers, 5 defenders, 5 midfielders, and 3 forwards.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Formation</AccordionTrigger>
          <AccordionContent>
            Choose a formation for your team, such as 4-4-2 or 3-5-2, based on
            your strategy.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Player Prices</AccordionTrigger>
          <AccordionContent>
            Players are priced differently based on their performance and
            popularity. You need to balance star players with budget-friendly
            options.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Transfers</AccordionTrigger>
          <AccordionContent>
            You get one free transfer each Gameweek. Additional transfers cost
            you points (-4 for each extra transfer). Plan your transfers wisely.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default page;
