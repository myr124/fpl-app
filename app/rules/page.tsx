import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

const page = () => {
  return (
    <div className="m-10">
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
        <AccordionItem value="item-2">
          <AccordionTrigger>Formation</AccordionTrigger>
          <AccordionContent>
            <p>
              Choose a formation for your team, such as 4-4-2 or 3-5-2, based on
              your strategy.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Player Prices</AccordionTrigger>
          <AccordionContent>
            <p>
              Players are priced differently based on their performance and
              popularity. You need to balance star players with budget-friendly
              options.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Transfers</AccordionTrigger>
          <AccordionContent>
            <p>
              You get one free transfer each Gameweek. Additional transfers cost
              you points (-4 for each extra transfer). Plan your transfers
              wisely.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Captain and Vice-Captain</AccordionTrigger>
          <AccordionContent>
            <p>
              Select a captain and vice-captain for each Gameweek. The captain's
              points are doubled, and if the captain doesn't play, the
              vice-captain's points are doubled.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Scoring Points</AccordionTrigger>
          <AccordionContent>
            <p>
              Players earn points for goals, assists, clean sheets, and more.
              They lose points for yellow/red cards and conceding goals. Refer
              to the FPL scoring system for details.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Chips</AccordionTrigger>
          <AccordionContent>
            <p>
              You have four chips to use during the season - Bench Boost, Triple
              Captain, Free Hit, and Second Wildcard. Use them strategically.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>Wildcard</AccordionTrigger>
          <AccordionContent>
            <p>
              You have two wildcards in the season. The first can be used
              anytime, but the second can only be used after Gameweek 19.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>Mini-Leagues</AccordionTrigger>
          <AccordionContent>
            <p>
              Join or create mini-leagues with friends to compete against each
              other.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>Keep an Eye on Fixtures</AccordionTrigger>
          <AccordionContent>
            <p>
              Monitor fixture schedules and player injuries. Make transfers and
              choose your captain based on favorable fixtures.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger>Manage your budget</AccordionTrigger>
          <AccordionContent>
            <p>
              Be mindful of your budget and make sure you have a balanced team.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-12">
          <AccordionTrigger>Keep up with the news</AccordionTrigger>
          <AccordionContent>
            <p>
              Stay updated with Premier League news and injuries to make
              informed decisions.
            </p>
          </AccordionContent>
          <AccordionItem value="item-13 ">
            <AccordionTrigger>Plan for Blanks and Doubles</AccordionTrigger>
            <AccordionContent>
              <p>
                Be prepared for Gameweeks with fewer fixtures and those with
                double fixtures. Use chips wisely.
              </p>
            </AccordionContent>
          </AccordionItem>
        </AccordionItem>
        <AccordionItem value="item-14 ">
          <AccordionTrigger>Have fun</AccordionTrigger>
          <AccordionContent>
            <p>
              Enjoy the game, and remember that it's all about having fun and
              competing with friends.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default page;
