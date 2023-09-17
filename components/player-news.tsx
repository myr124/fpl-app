// "use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GNews from "gnews-scraper";

const PlayerNews = async () => {
  // commented out so we don't go over 100
  //   const apiUrl = `https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=${process.env.NEWS_API_KEY}`;
  //   const data: any = await (await fetch(apiUrl)).json();
  // uncomment above and comment this line below
  //   const data: any = {};
  const data = await GNews({ searchQuery: "premier league news" });

  //   if (data.status !== "ok") return <></>;

  // const data = await (await fetch("https://sportnewsapi.com/api/v1/category?section=general_PL&items=3&page=1&token=b67ya21rmshxy11kngsjasi2tkhcu2z2txqt8t5y")).json();
  //   useEffect(() => {
  //     // Fetch data from the API when the component mounts
  //     fetch(apiUrl)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         // Extract the news items from the "data" array
  //         const newsItems = data.data || [];
  //         setNewsData(newsItems);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="grid grid-cols-1 grid-rows-3 items-center">
      {data.map((item, index: number) => (
        <Card key={index} className="mx-2 my-2 flex flex-row">
          <div className="flex flex-col w-full">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-row">
                  <a href={item.articleUrl}>{item.title}</a>
                </div>
              </CardTitle>
              {/* <CardDescription>{item.text}</CardDescription> */}
            </CardHeader>
            <CardContent></CardContent>
          </div>

          <img src={item.imageUrl} className="rounded-lg" />
        </Card>
      ))}
    </div>
  );
};

export default PlayerNews;
