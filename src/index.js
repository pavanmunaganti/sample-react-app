import React from "react";
import { render } from "react-dom";
//import SkiDayCounterF from "./SkiDayCounter";
//import SkiDayCounter from "./SkiDayCounter";
import { Library } from "./Library";
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");

/*
let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
};

render(
  <SkiDayCounterF
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}
  />,
  rootElement
);
*/

let bookList = [
  { title: "Head first mafia", author: "Movyya", pages: 1265 },
  { title: "GAP", author: "Rajanna", pages: 800 },
  { title: "Auto: Life of an asspole", author: "Gogul", pages: 108 },
  { title: "Finding holes in a Network", author: "Bokkalanna", pages: 696 },
  {
    title: "Tiktok bookcamp: Become a star in 30 days ",
    author: "Madam",
    pages: 1216
  },
  { title: "Emergency survival tricks", author: "Ramki", pages: 1234 }
];

render(<Library books={bookList} />, rootElement);

serviceWorker.unregister();
