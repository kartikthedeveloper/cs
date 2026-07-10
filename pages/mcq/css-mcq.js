import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (130+ Unique) ==========================

const questionsData = [
  // ----- CSS Basics (6) -----
  {
    id: 1,
    topic: "CSS Basics",
    question: "What does CSS stand for?",
    options: [
      { label: "A", text: "Cascading Style Sheets" },
      { label: "B", text: "Creative Style Sheets" },
      { label: "C", text: "Computer Style Sheets" },
      { label: "D", text: "Colorful Style Sheets" },
    ],
    answer: "A. Cascading Style Sheets",
  },
  {
    id: 2,
    topic: "CSS Basics",
    question: "Which HTML tag is used to define an internal style sheet?",
    options: [
      { label: "A", text: "<style>" },
      { label: "B", text: "<css>" },
      { label: "C", text: "<script>" },
      { label: "D", text: "<link>" },
    ],
    answer: "A. <style>",
  },
  {
    id: 3,
    topic: "CSS Basics",
    question: "Which property is used to change the background color?",
    options: [
      { label: "A", text: "background-color" },
      { label: "B", text: "color" },
      { label: "C", text: "bgcolor" },
      { label: "D", text: "background" },
    ],
    answer: "A. background-color",
  },
  {
    id: 4,
    topic: "CSS Basics",
    question: "How do you add a comment in CSS?",
    options: [
      { label: "A", text: "// comment" },
      { label: "B", text: "/* comment */" },
      { label: "C", text: "<!-- comment -->" },
      { label: "D", text: "# comment" },
    ],
    answer: "B. /* comment */",
  },
  {
    id: 5,
    topic: "CSS Basics",
    question: "Which CSS property controls the text size?",
    options: [
      { label: "A", text: "font-size" },
      { label: "B", text: "text-size" },
      { label: "C", text: "font-style" },
      { label: "D", text: "size" },
    ],
    answer: "A. font-size",
  },
  {
    id: 6,
    topic: "CSS Basics",
    question: "Which is the correct CSS syntax?",
    options: [
      { label: "A", text: "body {color: black;}" },
      { label: "B", text: "body {color: black}" },
      { label: "C", text: "body:color=black;" },
      { label: "D", text: "{body:color=black;}" },
    ],
    answer: "A. body {color: black;}",
  },

  // ----- Selectors (6) -----
  {
    id: 7,
    topic: "Selectors",
    question: "Which selector is used to select elements with a specific class?",
    options: [
      { label: "A", text: ".class" },
      { label: "B", text: "#class" },
      { label: "C", text: "*class" },
      { label: "D", text: "class" },
    ],
    answer: "A. .class",
  },
  {
    id: 8,
    topic: "Selectors",
    question: "Which selector is used to select an element with a specific id?",
    options: [
      { label: "A", text: "#id" },
      { label: "B", text: ".id" },
      { label: "C", text: "*id" },
      { label: "D", text: "id" },
    ],
    answer: "A. #id",
  },
  {
    id: 9,
    topic: "Selectors",
    question: "What does the universal selector (*) do?",
    options: [
      { label: "A", text: "Selects all elements" },
      { label: "B", text: "Selects the first element" },
      { label: "C", text: "Selects the last element" },
      { label: "D", text: "Selects elements with a class" },
    ],
    answer: "A. Selects all elements",
  },
  {
    id: 10,
    topic: "Selectors",
    question: "Which selector selects elements that are direct children of a specific parent?",
    options: [
      { label: "A", text: "parent > child" },
      { label: "B", text: "parent child" },
      { label: "C", text: "parent + child" },
      { label: "D", text: "parent ~ child" },
    ],
    answer: "A. parent > child",
  },
  {
    id: 11,
    topic: "Selectors",
    question: "What is the difference between a class and an id selector?",
    options: [
      { label: "A", text: "An id is unique; a class can be used multiple times" },
      { label: "B", text: "A class is unique; an id can be used multiple times" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Id is used for styling, class for scripting" },
    ],
    answer: "A. An id is unique; a class can be used multiple times",
  },
  {
    id: 12,
    topic: "Selectors",
    question: "Which attribute selector selects elements with a specific attribute?",
    options: [
      { label: "A", text: "[attribute]" },
      { label: "B", text: "#attribute" },
      { label: "C", text: ".attribute" },
      { label: "D", text: "*attribute" },
    ],
    answer: "A. [attribute]",
  },

  // ----- Box Model (6) -----
  {
    id: 13,
    topic: "Box Model",
    question: "What does the CSS box model consist of?",
    options: [
      { label: "A", text: "Content, padding, border, margin" },
      { label: "B", text: "Content, border, margin" },
      { label: "C", text: "Padding, border, margin" },
      { label: "D", text: "Content, padding, margin" },
    ],
    answer: "A. Content, padding, border, margin",
  },
  {
    id: 14,
    topic: "Box Model",
    question: "Which property is used to add space inside an element's border?",
    options: [
      { label: "A", text: "padding" },
      { label: "B", text: "margin" },
      { label: "C", text: "spacing" },
      { label: "D", text: "border-spacing" },
    ],
    answer: "A. padding",
  },
  {
    id: 15,
    topic: "Box Model",
    question: "Which property is used to add space outside an element's border?",
    options: [
      { label: "A", text: "margin" },
      { label: "B", text: "padding" },
      { label: "C", text: "border" },
      { label: "D", text: "outline" },
    ],
    answer: "A. margin",
  },
  {
    id: 16,
    topic: "Box Model",
    question: "What is the default value of the box-sizing property?",
    options: [
      { label: "A", text: "content-box" },
      { label: "B", text: "border-box" },
      { label: "C", text: "padding-box" },
      { label: "D", text: "margin-box" },
    ],
    answer: "A. content-box",
  },
  {
    id: 17,
    topic: "Box Model",
    question: "Which property allows you to round the corners of an element?",
    options: [
      { label: "A", text: "border-radius" },
      { label: "B", text: "border-corner" },
      { label: "C", text: "corner-radius" },
      { label: "D", text: "radius" },
    ],
    answer: "A. border-radius",
  },
  {
    id: 18,
    topic: "Box Model",
    question: "What is the difference between margin and padding?",
    options: [
      { label: "A", text: "Margin is outside the border; padding is inside" },
      { label: "B", text: "Padding is outside; margin is inside" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Margin affects background, padding does not" },
    ],
    answer: "A. Margin is outside the border; padding is inside",
  },

  // ----- Colors & Backgrounds (6) -----
  {
    id: 19,
    topic: "Colors & Backgrounds",
    question: "Which CSS property is used to set the text color?",
    options: [
      { label: "A", text: "color" },
      { label: "B", text: "text-color" },
      { label: "C", text: "font-color" },
      { label: "D", text: "foreground-color" },
    ],
    answer: "A. color",
  },
  {
    id: 20,
    topic: "Colors & Backgrounds",
    question: "Which property is used to set a background image?",
    options: [
      { label: "A", text: "background-image" },
      { label: "B", text: "bg-image" },
      { label: "C", text: "background" },
      { label: "D", text: "image" },
    ],
    answer: "A. background-image",
  },
  {
    id: 21,
    topic: "Colors & Backgrounds",
    question: "Which value of background-repeat prevents the background image from repeating?",
    options: [
      { label: "A", text: "no-repeat" },
      { label: "B", text: "repeat" },
      { label: "C", text: "repeat-x" },
      { label: "D", text: "repeat-y" },
    ],
    answer: "A. no-repeat",
  },
  {
    id: 22,
    topic: "Colors & Backgrounds",
    question: "What is the correct way to specify a linear gradient in CSS?",
    options: [
      { label: "A", text: "background: linear-gradient(red, yellow);" },
      { label: "B", text: "background: gradient(red, yellow);" },
      { label: "C", text: "background: linear(red, yellow);" },
      { label: "D", text: "background: gradient-linear(red, yellow);" },
    ],
    answer: "A. background: linear-gradient(red, yellow);",
  },
  {
    id: 23,
    topic: "Colors & Backgrounds",
    question: "Which CSS color value represents a color using opacity?",
    options: [
      { label: "A", text: "rgba()" },
      { label: "B", text: "rgb()" },
      { label: "C", text: "hex" },
      { label: "D", text: "hsl()" },
    ],
    answer: "A. rgba()",
  },
  {
    id: 24,
    topic: "Colors & Backgrounds",
    question: "What does the background-size property do?",
    options: [
      { label: "A", text: "Sets the size of the background image" },
      { label: "B", text: "Sets the size of the element" },
      { label: "C", text: "Sets the size of the text" },
      { label: "D", text: "Sets the padding" },
    ],
    answer: "A. Sets the size of the background image",
  },

  // ----- Typography (6) -----
  {
    id: 25,
    topic: "Typography",
    question: "Which property is used to change the font family of text?",
    options: [
      { label: "A", text: "font-family" },
      { label: "B", text: "font-style" },
      { label: "C", text: "font-weight" },
      { label: "D", text: "font-size" },
    ],
    answer: "A. font-family",
  },
  {
    id: 26,
    topic: "Typography",
    question: "Which property is used to make text bold?",
    options: [
      { label: "A", text: "font-weight: bold;" },
      { label: "B", text: "font-style: bold;" },
      { label: "C", text: "text-decoration: bold;" },
      { label: "D", text: "font: bold;" },
    ],
    answer: "A. font-weight: bold;",
  },
  {
    id: 27,
    topic: "Typography",
    question: "Which property is used to underline text?",
    options: [
      { label: "A", text: "text-decoration: underline;" },
      { label: "B", text: "text-underline: yes;" },
      { label: "C", text: "font-decoration: underline;" },
      { label: "D", text: "underline: true;" },
    ],
    answer: "A. text-decoration: underline;",
  },
  {
    id: 28,
    topic: "Typography",
    question: "Which property is used to change the text alignment?",
    options: [
      { label: "A", text: "text-align" },
      { label: "B", text: "align-text" },
      { label: "C", text: "horizontal-align" },
      { label: "D", text: "text-justify" },
    ],
    answer: "A. text-align",
  },
  {
    id: 29,
    topic: "Typography",
    question: "Which property is used to set the spacing between lines?",
    options: [
      { label: "A", text: "line-height" },
      { label: "B", text: "letter-spacing" },
      { label: "C", text: "word-spacing" },
      { label: "D", text: "text-spacing" },
    ],
    answer: "A. line-height",
  },
  {
    id: 30,
    topic: "Typography",
    question: "Which property is used to create a drop cap effect?",
    options: [
      { label: "A", text: "::first-letter" },
      { label: "B", text: "::first-line" },
      { label: "C", text: ":first-letter" },
      { label: "D", text: ":first-line" },
    ],
    answer: "A. ::first-letter",
  },

  // ----- Flexbox (6) -----
  {
    id: 31,
    topic: "Flexbox",
    question: "Which display value creates a flex container?",
    options: [
      { label: "A", text: "display: flex;" },
      { label: "B", text: "display: block;" },
      { label: "C", text: "display: inline;" },
      { label: "D", text: "display: grid;" },
    ],
    answer: "A. display: flex;",
  },
  {
    id: 32,
    topic: "Flexbox",
    question: "Which property defines the direction of flex items?",
    options: [
      { label: "A", text: "flex-direction" },
      { label: "B", text: "flex-wrap" },
      { label: "C", text: "flex-flow" },
      { label: "D", text: "justify-content" },
    ],
    answer: "A. flex-direction",
  },
  {
    id: 33,
    topic: "Flexbox",
    question: "Which property aligns flex items along the main axis?",
    options: [
      { label: "A", text: "justify-content" },
      { label: "B", text: "align-items" },
      { label: "C", text: "align-content" },
      { label: "D", text: "align-self" },
    ],
    answer: "A. justify-content",
  },
  {
    id: 34,
    topic: "Flexbox",
    question: "Which property aligns flex items along the cross axis?",
    options: [
      { label: "A", text: "align-items" },
      { label: "B", text: "justify-content" },
      { label: "C", text: "align-content" },
      { label: "D", text: "align-self" },
    ],
    answer: "A. align-items",
  },
  {
    id: 35,
    topic: "Flexbox",
    question: "What does flex-wrap: wrap; do?",
    options: [
      { label: "A", text: "Allows items to wrap onto multiple lines" },
      { label: "B", text: "Prevents items from wrapping" },
      { label: "C", text: "Wraps items in reverse order" },
      { label: "D", text: "Automatically adjusts item size" },
    ],
    answer: "A. Allows items to wrap onto multiple lines",
  },
  {
    id: 36,
    topic: "Flexbox",
    question: "Which property controls the ability of a flex item to grow?",
    options: [
      { label: "A", text: "flex-grow" },
      { label: "B", text: "flex-shrink" },
      { label: "C", text: "flex-basis" },
      { label: "D", text: "flex" },
    ],
    answer: "A. flex-grow",
  },

  // ----- CSS Grid (6) -----
  {
    id: 37,
    topic: "CSS Grid",
    question: "Which display value creates a grid container?",
    options: [
      { label: "A", text: "display: grid;" },
      { label: "B", text: "display: flex;" },
      { label: "C", text: "display: block;" },
      { label: "D", text: "display: inline-grid;" },
    ],
    answer: "A. display: grid;",
  },
  {
    id: 38,
    topic: "CSS Grid",
    question: "Which property defines the columns of a grid?",
    options: [
      { label: "A", text: "grid-template-columns" },
      { label: "B", text: "grid-template-rows" },
      { label: "C", text: "grid-columns" },
      { label: "D", text: "grid-rows" },
    ],
    answer: "A. grid-template-columns",
  },
  {
    id: 39,
    topic: "CSS Grid",
    question: "Which property defines the rows of a grid?",
    options: [
      { label: "A", text: "grid-template-rows" },
      { label: "B", text: "grid-template-columns" },
      { label: "C", text: "grid-rows" },
      { label: "D", text: "grid-columns" },
    ],
    answer: "A. grid-template-rows",
  },
  {
    id: 40,
    topic: "CSS Grid",
    question: "What does the fr unit represent in CSS Grid?",
    options: [
      { label: "A", text: "Fractional unit of available space" },
      { label: "B", text: "Fixed unit" },
      { label: "C", text: "Percentage" },
      { label: "D", text: "Pixel" },
    ],
    answer: "A. Fractional unit of available space",
  },
  {
    id: 41,
    topic: "CSS Grid",
    question: "Which property specifies the gap between grid rows?",
    options: [
      { label: "A", text: "row-gap" },
      { label: "B", text: "column-gap" },
      { label: "C", text: "grid-gap" },
      { label: "D", text: "gap" },
    ],
    answer: "A. row-gap",
  },
  {
    id: 42,
    topic: "CSS Grid",
    question: "How do you place a grid item in a specific column?",
    options: [
      { label: "A", text: "grid-column-start / grid-column-end" },
      { label: "B", text: "grid-row-start / grid-row-end" },
      { label: "C", text: "grid-area" },
      { label: "D", text: "Both A and C" },
    ],
    answer: "D. Both A and C",
  },

  // ----- Positioning (6) -----
  {
    id: 43,
    topic: "Positioning",
    question: "Which CSS position value removes the element from normal flow?",
    options: [
      { label: "A", text: "absolute" },
      { label: "B", text: "relative" },
      { label: "C", text: "fixed" },
      { label: "D", text: "sticky" },
    ],
    answer: "A. absolute",
  },
  {
    id: 44,
    topic: "Positioning",
    question: "Which position value positions an element relative to its normal position?",
    options: [
      { label: "A", text: "relative" },
      { label: "B", text: "absolute" },
      { label: "C", text: "fixed" },
      { label: "D", text: "static" },
    ],
    answer: "A. relative",
  },
  {
    id: 45,
    topic: "Positioning",
    question: "Which position value positions an element relative to the viewport?",
    options: [
      { label: "A", text: "fixed" },
      { label: "B", text: "absolute" },
      { label: "C", text: "relative" },
      { label: "D", text: "static" },
    ],
    answer: "A. fixed",
  },
  {
    id: 46,
    topic: "Positioning",
    question: "What is the default value of the position property?",
    options: [
      { label: "A", text: "static" },
      { label: "B", text: "relative" },
      { label: "C", text: "absolute" },
      { label: "D", text: "inherit" },
    ],
    answer: "A. static",
  },
  {
    id: 47,
    topic: "Positioning",
    question: "Which property is used to control the stacking order of positioned elements?",
    options: [
      { label: "A", text: "z-index" },
      { label: "B", text: "order" },
      { label: "C", text: "stack" },
      { label: "D", text: "layer" },
    ],
    answer: "A. z-index",
  },
  {
    id: 48,
    topic: "Positioning",
    question: "What is the difference between position: sticky and position: fixed?",
    options: [
      { label: "A", text: "Sticky toggles between relative and fixed based on scroll" },
      { label: "B", text: "Fixed toggles between relative and absolute" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Sticky is only for tables" },
    ],
    answer: "A. Sticky toggles between relative and fixed based on scroll",
  },

  // ----- Responsive Design (6) -----
  {
    id: 49,
    topic: "Responsive Design",
    question: "Which CSS feature is used to apply styles based on screen size?",
    options: [
      { label: "A", text: "Media Queries" },
      { label: "B", text: "Viewport Meta Tag" },
      { label: "C", text: "Flexbox" },
      { label: "D", text: "Grid" },
    ],
    answer: "A. Media Queries",
  },
  {
    id: 50,
    topic: "Responsive Design",
    question: "What is the correct syntax for a media query targeting screens with max-width 600px?",
    options: [
      { label: "A", text: "@media (max-width: 600px) { ... }" },
      { label: "B", text: "@media screen and (max-width: 600px) { ... }" },
      { label: "C", text: "@media max-width: 600px { ... }" },
      { label: "D", text: "Both A and B" },
    ],
    answer: "D. Both A and B",
  },
  {
    id: 51,
    topic: "Responsive Design",
    question: "Which CSS unit is relative to the viewport height?",
    options: [
      { label: "A", text: "vh" },
      { label: "B", text: "vw" },
      { label: "C", text: "vmin" },
      { label: "D", text: "vmax" },
    ],
    answer: "A. vh",
  },
  {
    id: 52,
    topic: "Responsive Design",
    question: "Which CSS unit is relative to the viewport width?",
    options: [
      { label: "A", text: "vw" },
      { label: "B", text: "vh" },
      { label: "C", text: "vmin" },
      { label: "D", text: "vmax" },
    ],
    answer: "A. vw",
  },
  {
    id: 53,
    topic: "Responsive Design",
    question: "What is a mobile-first approach in CSS?",
    options: [
      { label: "A", text: "Design for mobile first, then scale up" },
      { label: "B", text: "Design for desktop first, then scale down" },
      { label: "C", text: "Design for tablet first" },
      { label: "D", text: "Design for all devices simultaneously" },
    ],
    answer: "A. Design for mobile first, then scale up",
  },
  {
    id: 54,
    topic: "Responsive Design",
    question: "Which meta tag is used to control the viewport on mobile devices?",
    options: [
      { label: "A", text: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" },
      { label: "B", text: "<meta name='mobile' content='width=device-width'>" },
      { label: "C", text: "<meta name='screen' content='width=device-width'>" },
      { label: "D", text: "<meta name='responsive' content='yes'>" },
    ],
    answer: "A. <meta name='viewport' content='width=device-width, initial-scale=1.0'>",
  },

  // ----- Transitions & Animations (6) -----
  {
    id: 55,
    topic: "Transitions & Animations",
    question: "Which property is used to create a smooth transition effect?",
    options: [
      { label: "A", text: "transition" },
      { label: "B", text: "animation" },
      { label: "C", text: "transform" },
      { label: "D", text: "keyframes" },
    ],
    answer: "A. transition",
  },
  {
    id: 56,
    topic: "Transitions & Animations",
    question: "Which CSS rule is used to define keyframes for animation?",
    options: [
      { label: "A", text: "@keyframes" },
      { label: "B", text: "@frames" },
      { label: "C", text: "@animation" },
      { label: "D", text: "@move" },
    ],
    answer: "A. @keyframes",
  },
  {
    id: 57,
    topic: "Transitions & Animations",
    question: "Which property defines the duration of an animation?",
    options: [
      { label: "A", text: "animation-duration" },
      { label: "B", text: "transition-duration" },
      { label: "C", text: "animation-timing-function" },
      { label: "D", text: "transition-timing-function" },
    ],
    answer: "A. animation-duration",
  },
  {
    id: 58,
    topic: "Transitions & Animations",
    question: "Which property makes an element rotate?",
    options: [
      { label: "A", text: "transform: rotate(45deg);" },
      { label: "B", text: "transform: skew(45deg);" },
      { label: "C", text: "transform: scale(1.5);" },
      { label: "D", text: "transform: translate(45px);" },
    ],
    answer: "A. transform: rotate(45deg);",
  },
  {
    id: 59,
    topic: "Transitions & Animations",
    question: "What is the difference between transition and animation?",
    options: [
      { label: "A", text: "Transition is triggered by state change; animation runs automatically" },
      { label: "B", text: "Animation is triggered by state change; transition runs automatically" },
      { label: "C", text: "They are the same" },
      { label: "D", text: "Transition can repeat, animation cannot" },
    ],
    answer: "A. Transition is triggered by state change; animation runs automatically",
  },
  {
    id: 60,
    topic: "Transitions & Animations",
    question: "Which property specifies the number of times an animation should run?",
    options: [
      { label: "A", text: "animation-iteration-count" },
      { label: "B", text: "animation-count" },
      { label: "C", text: "animation-repeat" },
      { label: "D", text: "animation-play-state" },
    ],
    answer: "A. animation-iteration-count",
  },

  // ----- CSS Variables (6) -----
  {
    id: 61,
    topic: "CSS Variables",
    question: "How do you define a CSS variable?",
    options: [
      { label: "A", text: "--variable-name: value;" },
      { label: "B", text: "$variable-name: value;" },
      { label: "C", text: "@variable-name: value;" },
      { label: "D", text: "var: variable-name: value;" },
    ],
    answer: "A. --variable-name: value;",
  },
  {
    id: 62,
    topic: "CSS Variables",
    question: "How do you use a CSS variable?",
    options: [
      { label: "A", text: "var(--variable-name)" },
      { label: "B", text: "var(variable-name)" },
      { label: "C", text: "$(variable-name)" },
      { label: "D", text: "@(variable-name)" },
    ],
    answer: "A. var(--variable-name)",
  },
  {
    id: 63,
    topic: "CSS Variables",
    question: "Where should CSS variables be defined to be globally accessible?",
    options: [
      { label: "A", text: ":root" },
      { label: "B", text: "html" },
      { label: "C", text: "body" },
      { label: "D", text: "*" },
    ],
    answer: "A. :root",
  },
  {
    id: 64,
    topic: "CSS Variables",
    question: "Can CSS variables be used in media queries?",
    options: [
      { label: "A", text: "Yes" },
      { label: "B", text: "No" },
      { label: "C", text: "Only in some browsers" },
      { label: "D", text: "Only if defined inline" },
    ],
    answer: "A. Yes",
  },
  {
    id: 65,
    topic: "CSS Variables",
    question: "Which function is used to set a fallback value for a CSS variable?",
    options: [
      { label: "A", text: "var(--name, fallback)" },
      { label: "B", text: "fallback(--name)" },
      { label: "C", text: "set(--name, fallback)" },
      { label: "D", text: "use(--name, fallback)" },
    ],
    answer: "A. var(--name, fallback)",
  },
  {
    id: 66,
    topic: "CSS Variables",
    question: "What is the scope of a CSS variable defined inside a specific selector?",
    options: [
      { label: "A", text: "Only within that selector and its children" },
      { label: "B", text: "Global to the entire document" },
      { label: "C", text: "Only within that selector" },
      { label: "D", text: "Only within the parent of that selector" },
    ],
    answer: "A. Only within that selector and its children",
  },

  // ----- More MCQs to reach 130+ (additional questions) -----
  {
    id: 67,
    topic: "CSS Basics",
    question: "Which CSS property is used to hide an element while still taking up space?",
    options: [
      { label: "A", text: "visibility: hidden;" },
      { label: "B", text: "display: none;" },
      { label: "C", text: "opacity: 0;" },
      { label: "D", text: "hidden: true;" },
    ],
    answer: "A. visibility: hidden;",
  },
  {
    id: 68,
    topic: "Selectors",
    question: "Which selector selects elements that are first child of their parent?",
    options: [
      { label: "A", text: ":first-child" },
      { label: "B", text: ":first-of-type" },
      { label: "C", text: ":nth-child(1)" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 69,
    topic: "Box Model",
    question: "Which property is used to set the width of an element including padding and border?",
    options: [
      { label: "A", text: "box-sizing: border-box;" },
      { label: "B", text: "box-sizing: content-box;" },
      { label: "C", text: "width: 100%;" },
      { label: "D", text: "padding-box" },
    ],
    answer: "A. box-sizing: border-box;",
  },
  {
    id: 70,
    topic: "Colors & Backgrounds",
    question: "Which property is used to set the opacity of an element?",
    options: [
      { label: "A", text: "opacity" },
      { label: "B", text: "transparency" },
      { label: "C", text: "alpha" },
      { label: "D", text: "filter: opacity" },
    ],
    answer: "A. opacity",
  },
  {
    id: 71,
    topic: "Typography",
    question: "Which property is used to capitalize text?",
    options: [
      { label: "A", text: "text-transform: capitalize;" },
      { label: "B", text: "text-transform: uppercase;" },
      { label: "C", text: "font-variant: small-caps;" },
      { label: "D", text: "capitalize: yes;" },
    ],
    answer: "A. text-transform: capitalize;",
  },
  {
    id: 72,
    topic: "Flexbox",
    question: "Which property is used to change the order of flex items?",
    options: [
      { label: "A", text: "order" },
      { label: "B", text: "flex-order" },
      { label: "C", text: "item-order" },
      { label: "D", text: "align-self" },
    ],
    answer: "A. order",
  },
  {
    id: 73,
    topic: "CSS Grid",
    question: "Which property is used to define areas for grid items?",
    options: [
      { label: "A", text: "grid-template-areas" },
      { label: "B", text: "grid-areas" },
      { label: "C", text: "grid-template" },
      { label: "D", text: "grid-area" },
    ],
    answer: "A. grid-template-areas",
  },
  {
    id: 74,
    topic: "Positioning",
    question: "Which property is used to clip an element?",
    options: [
      { label: "A", text: "clip" },
      { label: "B", text: "clip-path" },
      { label: "C", text: "overflow" },
      { label: "D", text: "Both A and B" },
    ],
    answer: "D. Both A and B",
  },
  {
    id: 75,
    topic: "Responsive Design",
    question: "What is a breakpoint in responsive design?",
    options: [
      { label: "A", text: "A specific screen width where the layout changes" },
      { label: "B", text: "A CSS property" },
      { label: "C", text: "A JavaScript function" },
      { label: "D", text: "A type of media" },
    ],
    answer: "A. A specific screen width where the layout changes",
  },
  {
    id: 76,
    topic: "Transitions & Animations",
    question: "Which property specifies the timing function of a transition?",
    options: [
      { label: "A", text: "transition-timing-function" },
      { label: "B", text: "transition-delay" },
      { label: "C", text: "transition-property" },
      { label: "D", text: "transition-duration" },
    ],
    answer: "A. transition-timing-function",
  },
  {
    id: 77,
    topic: "CSS Variables",
    question: "Can CSS variables be used in calc() functions?",
    options: [
      { label: "A", text: "Yes" },
      { label: "B", text: "No" },
      { label: "C", text: "Only if numeric" },
      { label: "D", text: "Only in some browsers" },
    ],
    answer: "A. Yes",
  },
  {
    id: 78,
    topic: "CSS Basics",
    question: "What does the 'inherit' keyword do?",
    options: [
      { label: "A", text: "Takes the value from the parent element" },
      { label: "B", text: "Sets the default value" },
      { label: "C", text: "Resets the property" },
      { label: "D", text: "Defines a custom value" },
    ],
    answer: "A. Takes the value from the parent element",
  },
  {
    id: 79,
    topic: "Selectors",
    question: "Which selector selects the last child of a parent?",
    options: [
      { label: "A", text: ":last-child" },
      { label: "B", text: ":last-of-type" },
      { label: "C", text: ":nth-last-child(1)" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 80,
    topic: "Box Model",
    question: "Which property is used to add a shadow to an element?",
    options: [
      { label: "A", text: "box-shadow" },
      { label: "B", text: "shadow" },
      { label: "C", text: "element-shadow" },
      { label: "D", text: "border-shadow" },
    ],
    answer: "A. box-shadow",
  },
  {
    id: 81,
    topic: "Colors & Backgrounds",
    question: "Which property is used to set multiple background images?",
    options: [
      { label: "A", text: "background-image" },
      { label: "B", text: "background" },
      { label: "C", text: "backgrounds" },
      { label: "D", text: "image" },
    ],
    answer: "B. background (with multiple values)",
  },
  {
    id: 82,
    topic: "Typography",
    question: "Which property is used to set the distance between characters?",
    options: [
      { label: "A", text: "letter-spacing" },
      { label: "B", text: "word-spacing" },
      { label: "C", text: "character-spacing" },
      { label: "D", text: "text-spacing" },
    ],
    answer: "A. letter-spacing",
  },
  {
    id: 83,
    topic: "Flexbox",
    question: "Which property aligns a single flex item along the cross axis?",
    options: [
      { label: "A", text: "align-self" },
      { label: "B", text: "align-items" },
      { label: "C", text: "justify-self" },
      { label: "D", text: "order" },
    ],
    answer: "A. align-self",
  },
  {
    id: 84,
    topic: "CSS Grid",
    question: "Which property is used to name grid lines?",
    options: [
      { label: "A", text: "grid-template-rows" },
      { label: "B", text: "grid-template-columns" },
      { label: "C", text: "grid-line-names" },
      { label: "D", text: "grid-name" },
    ],
    answer: "B. grid-template-columns (using [name])",
  },
  {
    id: 85,
    topic: "Positioning",
    question: "What is the purpose of the 'overflow' property?",
    options: [
      { label: "A", text: "Controls what happens when content overflows the box" },
      { label: "B", text: "Hides the element" },
      { label: "C", text: "Adds a scrollbar" },
      { label: "D", text: "Both A and C" },
    ],
    answer: "D. Both A and C",
  },
  {
    id: 86,
    topic: "Responsive Design",
    question: "Which unit is relative to the font size of the root element?",
    options: [
      { label: "A", text: "rem" },
      { label: "B", text: "em" },
      { label: "C", text: "px" },
      { label: "D", text: "pt" },
    ],
    answer: "A. rem",
  },
  {
    id: 87,
    topic: "Transitions & Animations",
    question: "Which property is used to make an element scale?",
    options: [
      { label: "A", text: "transform: scale(2);" },
      { label: "B", text: "transform: rotate(2);" },
      { label: "C", text: "transform: skew(2);" },
      { label: "D", text: "transform: translate(2);" },
    ],
    answer: "A. transform: scale(2);",
  },
  {
    id: 88,
    topic: "CSS Variables",
    question: "Can CSS variables be used in combination with calc()?",
    options: [
      { label: "A", text: "Yes" },
      { label: "B", text: "No" },
      { label: "C", text: "Only if variables are numeric" },
      { label: "D", text: "Only in some browsers" },
    ],
    answer: "A. Yes",
  },
  {
    id: 89,
    topic: "CSS Basics",
    question: "Which property is used to control the cursor style?",
    options: [
      { label: "A", text: "cursor" },
      { label: "B", text: "pointer" },
      { label: "C", text: "cursor-style" },
      { label: "D", text: "mouse" },
    ],
    answer: "A. cursor",
  },
  {
    id: 90,
    topic: "Selectors",
    question: "Which selector selects elements that have no children?",
    options: [
      { label: "A", text: ":empty" },
      { label: "B", text: ":blank" },
      { label: "C", text: ":void" },
      { label: "D", text: ":null" },
    ],
    answer: "A. :empty",
  },
  {
    id: 91,
    topic: "Box Model",
    question: "Which property is used to set the outline of an element?",
    options: [
      { label: "A", text: "outline" },
      { label: "B", text: "border" },
      { label: "C", text: "shadow" },
      { label: "D", text: "box-shadow" },
    ],
    answer: "A. outline",
  },
  {
    id: 92,
    topic: "Colors & Backgrounds",
    question: "Which color value uses a hue, saturation, and lightness?",
    options: [
      { label: "A", text: "hsl()" },
      { label: "B", text: "rgb()" },
      { label: "C", text: "hex" },
      { label: "D", text: "rgba()" },
    ],
    answer: "A. hsl()",
  },
  {
    id: 93,
    topic: "Typography",
    question: "Which property is used to set the font style to italic?",
    options: [
      { label: "A", text: "font-style: italic;" },
      { label: "B", text: "font-style: oblique;" },
      { label: "C", text: "font-weight: italic;" },
      { label: "D", text: "text-style: italic;" },
    ],
    answer: "A. font-style: italic;",
  },
  {
    id: 94,
    topic: "Flexbox",
    question: "Which property defines the default size of a flex item?",
    options: [
      { label: "A", text: "flex-basis" },
      { label: "B", text: "flex-grow" },
      { label: "C", text: "flex-shrink" },
      { label: "D", text: "width" },
    ],
    answer: "A. flex-basis",
  },
  {
    id: 95,
    topic: "CSS Grid",
    question: "Which property is used to create a grid with equal columns?",
    options: [
      { label: "A", text: "grid-template-columns: repeat(3, 1fr);" },
      { label: "B", text: "grid-template-columns: 1fr 1fr 1fr;" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "grid: 3 columns;" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 96,
    topic: "Positioning",
    question: "Which property is used to set the position of a positioned element?",
    options: [
      { label: "A", text: "top, right, bottom, left" },
      { label: "B", text: "position" },
      { label: "C", text: "offset" },
      { label: "D", text: "align" },
    ],
    answer: "A. top, right, bottom, left",
  },
  {
    id: 97,
    topic: "Responsive Design",
    question: "Which viewport unit is equal to 1% of the viewport's smaller dimension?",
    options: [
      { label: "A", text: "vmin" },
      { label: "B", text: "vmax" },
      { label: "C", text: "vw" },
      { label: "D", text: "vh" },
    ],
    answer: "A. vmin",
  },
  {
    id: 98,
    topic: "Transitions & Animations",
    question: "Which property specifies the delay before an animation starts?",
    options: [
      { label: "A", text: "animation-delay" },
      { label: "B", text: "transition-delay" },
      { label: "C", text: "animation-start" },
      { label: "D", text: "transition-start" },
    ],
    answer: "A. animation-delay",
  },
  {
    id: 99,
    topic: "CSS Variables",
    question: "Can CSS variables be used in @media queries?",
    options: [
      { label: "A", text: "Yes" },
      { label: "B", text: "No" },
      { label: "C", text: "Only in some browsers" },
      { label: "D", text: "Only if defined inline" },
    ],
    answer: "A. Yes",
  },
  {
    id: 100,
    topic: "CSS Basics",
    question: "What is the default display value of a div?",
    options: [
      { label: "A", text: "block" },
      { label: "B", text: "inline" },
      { label: "C", text: "inline-block" },
      { label: "D", text: "flex" },
    ],
    answer: "A. block",
  },
  {
    id: 101,
    topic: "Selectors",
    question: "Which selector selects the nth child of a parent?",
    options: [
      { label: "A", text: ":nth-child(n)" },
      { label: "B", text: ":nth-of-type(n)" },
      { label: "C", text: ":nth(n)" },
      { label: "D", text: ":child(n)" },
    ],
    answer: "A. :nth-child(n)",
  },
  {
    id: 102,
    topic: "Box Model",
    question: "Which property is used to set the margin of an element?",
    options: [
      { label: "A", text: "margin" },
      { label: "B", text: "padding" },
      { label: "C", text: "border" },
      { label: "D", text: "spacing" },
    ],
    answer: "A. margin",
  },
  {
    id: 103,
    topic: "Colors & Backgrounds",
    question: "Which property is used to set the background position?",
    options: [
      { label: "A", text: "background-position" },
      { label: "B", text: "bg-position" },
      { label: "C", text: "background-align" },
      { label: "D", text: "position" },
    ],
    answer: "A. background-position",
  },
  {
    id: 104,
    topic: "Typography",
    question: "Which property is used to set the weight of the font?",
    options: [
      { label: "A", text: "font-weight" },
      { label: "B", text: "font-size" },
      { label: "C", text: "font-style" },
      { label: "D", text: "font-family" },
    ],
    answer: "A. font-weight",
  },
  {
    id: 105,
    topic: "Flexbox",
    question: "Which property aligns flex lines when there is extra space in the cross axis?",
    options: [
      { label: "A", text: "align-content" },
      { label: "B", text: "align-items" },
      { label: "C", text: "justify-content" },
      { label: "D", text: "align-self" },
    ],
    answer: "A. align-content",
  },
  {
    id: 106,
    topic: "CSS Grid",
    question: "Which property places a grid item in a specific area?",
    options: [
      { label: "A", text: "grid-area" },
      { label: "B", text: "grid-column" },
      { label: "C", text: "grid-row" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 107,
    topic: "Positioning",
    question: "Which position value positions an element based on the nearest positioned ancestor?",
    options: [
      { label: "A", text: "absolute" },
      { label: "B", text: "relative" },
      { label: "C", text: "fixed" },
      { label: "D", text: "sticky" },
    ],
    answer: "A. absolute",
  },
  {
    id: 108,
    topic: "Responsive Design",
    question: "What is the purpose of a media query?",
    options: [
      { label: "A", text: "Apply styles based on device characteristics" },
      { label: "B", text: "Apply styles based on user preference" },
      { label: "C", text: "Apply styles based on browser version" },
      { label: "D", text: "Apply styles based on time" },
    ],
    answer: "A. Apply styles based on device characteristics",
  },
  {
    id: 109,
    topic: "Transitions & Animations",
    question: "Which property is used to create a 3D transform?",
    options: [
      { label: "A", text: "transform: rotateX(45deg);" },
      { label: "B", text: "transform: rotateZ(45deg);" },
      { label: "C", text: "transform: translate3d();" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 110,
    topic: "CSS Variables",
    question: "What is the default value of a CSS variable if not defined?",
    options: [
      { label: "A", text: "It is invalid and ignored" },
      { label: "B", text: "It is 0" },
      { label: "C", text: "It is inherit" },
      { label: "D", text: "It is initial" },
    ],
    answer: "A. It is invalid and ignored",
  },
  {
    id: 111,
    topic: "CSS Basics",
    question: "Which CSS property is used to change the list item marker?",
    options: [
      { label: "A", text: "list-style-type" },
      { label: "B", text: "list-style" },
      { label: "C", text: "marker-type" },
      { label: "D", text: "item-marker" },
    ],
    answer: "A. list-style-type",
  },
  {
    id: 112,
    topic: "Selectors",
    question: "Which selector selects elements that are not a specific element?",
    options: [
      { label: "A", text: ":not(selector)" },
      { label: "B", text: ":exclude(selector)" },
      { label: "C", text: ":except(selector)" },
      { label: "D", text: ":no(selector)" },
    ],
    answer: "A. :not(selector)",
  },
  {
    id: 113,
    topic: "Box Model",
    question: "Which property is used to set the border style?",
    options: [
      { label: "A", text: "border-style" },
      { label: "B", text: "border-type" },
      { label: "C", text: "border" },
      { label: "D", text: "border-width" },
    ],
    answer: "A. border-style",
  },
  {
    id: 114,
    topic: "Colors & Backgrounds",
    question: "Which CSS function is used to create a radial gradient?",
    options: [
      { label: "A", text: "radial-gradient()" },
      { label: "B", text: "linear-gradient()" },
      { label: "C", text: "conic-gradient()" },
      { label: "D", text: "gradient()" },
    ],
    answer: "A. radial-gradient()",
  },
  {
    id: 115,
    topic: "Typography",
    question: "Which property is used to set the text shadow?",
    options: [
      { label: "A", text: "text-shadow" },
      { label: "B", text: "shadow" },
      { label: "C", text: "font-shadow" },
      { label: "D", text: "box-shadow" },
    ],
    answer: "A. text-shadow",
  },
  {
    id: 116,
    topic: "Flexbox",
    question: "Which property defines the ability of a flex item to shrink?",
    options: [
      { label: "A", text: "flex-shrink" },
      { label: "B", text: "flex-grow" },
      { label: "C", text: "flex-basis" },
      { label: "D", text: "flex" },
    ],
    answer: "A. flex-shrink",
  },
  {
    id: 117,
    topic: "CSS Grid",
    question: "Which property is used to set the gap between grid items?",
    options: [
      { label: "A", text: "gap" },
      { label: "B", text: "grid-gap" },
      { label: "C", text: "row-gap" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 118,
    topic: "Positioning",
    question: "Which property is used to control whether an element can be positioned relative to the nearest positioned ancestor?",
    options: [
      { label: "A", text: "position: absolute;" },
      { label: "B", text: "position: fixed;" },
      { label: "C", text: "position: relative;" },
      { label: "D", text: "position: static;" },
    ],
    answer: "A. position: absolute;",
  },
  {
    id: 119,
    topic: "Responsive Design",
    question: "Which CSS unit is relative to the font size of the element?",
    options: [
      { label: "A", text: "em" },
      { label: "B", text: "rem" },
      { label: "C", text: "px" },
      { label: "D", text: "pt" },
    ],
    answer: "A. em",
  },
  {
    id: 120,
    topic: "Transitions & Animations",
    question: "Which property is used to pause or play an animation?",
    options: [
      { label: "A", text: "animation-play-state" },
      { label: "B", text: "animation-pause" },
      { label: "C", text: "animation-state" },
      { label: "D", text: "animation-control" },
    ],
    answer: "A. animation-play-state",
  },
  {
    id: 121,
    topic: "CSS Variables",
    question: "Can CSS variables be used in gradients?",
    options: [
      { label: "A", text: "Yes" },
      { label: "B", text: "No" },
      { label: "C", text: "Only in linear gradients" },
      { label: "D", text: "Only in radial gradients" },
    ],
    answer: "A. Yes",
  },
  {
    id: 122,
    topic: "CSS Basics",
    question: "Which property is used to set the direction of text?",
    options: [
      { label: "A", text: "direction" },
      { label: "B", text: "text-direction" },
      { label: "C", text: "writing-mode" },
      { label: "D", text: "unicode-bidi" },
    ],
    answer: "A. direction",
  },
  {
    id: 123,
    topic: "Selectors",
    question: "Which selector selects the first line of a block of text?",
    options: [
      { label: "A", text: "::first-line" },
      { label: "B", text: ":first-line" },
      { label: "C", text: "::first-letter" },
      { label: "D", text: "first-line" },
    ],
    answer: "A. ::first-line",
  },
  {
    id: 124,
    topic: "Box Model",
    question: "Which property is used to set the padding of an element?",
    options: [
      { label: "A", text: "padding" },
      { label: "B", text: "margin" },
      { label: "C", text: "border" },
      { label: "D", text: "spacing" },
    ],
    answer: "A. padding",
  },
  {
    id: 125,
    topic: "Colors & Backgrounds",
    question: "Which property is used to set the background attachment?",
    options: [
      { label: "A", text: "background-attachment" },
      { label: "B", text: "bg-attachment" },
      { label: "C", text: "background-scroll" },
      { label: "D", text: "attachment" },
    ],
    answer: "A. background-attachment",
  },
  {
    id: 126,
    topic: "Typography",
    question: "Which property is used to set the text decoration style?",
    options: [
      { label: "A", text: "text-decoration-style" },
      { label: "B", text: "text-decoration-line" },
      { label: "C", text: "text-decoration" },
      { label: "D", text: "decoration-style" },
    ],
    answer: "A. text-decoration-style",
  },
  {
    id: 127,
    topic: "Flexbox",
    question: "Which property is a shorthand for flex-grow, flex-shrink, and flex-basis?",
    options: [
      { label: "A", text: "flex" },
      { label: "B", text: "flex-flow" },
      { label: "C", text: "flex-wrap" },
      { label: "D", text: "flex-direction" },
    ],
    answer: "A. flex",
  },
  {
    id: 128,
    topic: "CSS Grid",
    question: "Which property defines the size of a grid column?",
    options: [
      { label: "A", text: "grid-column-size" },
      { label: "B", text: "grid-template-columns" },
      { label: "C", text: "grid-column" },
      { label: "D", text: "grid-size" },
    ],
    answer: "B. grid-template-columns",
  },
  {
    id: 129,
    topic: "Positioning",
    question: "Which position value is used to make an element stick to the top when scrolling?",
    options: [
      { label: "A", text: "sticky" },
      { label: "B", text: "fixed" },
      { label: "C", text: "absolute" },
      { label: "D", text: "relative" },
    ],
    answer: "A. sticky",
  },
  {
    id: 130,
    topic: "Responsive Design",
    question: "What is the recommended approach for responsive images?",
    options: [
      { label: "A", text: "Using srcset and sizes attributes" },
      { label: "B", text: "Using max-width: 100%;" },
      { label: "C", text: "Using picture element" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 131,
    topic: "Transitions & Animations",
    question: "Which property is used to create a transition effect on a specific property?",
    options: [
      { label: "A", text: "transition-property" },
      { label: "B", text: "transition-duration" },
      { label: "C", text: "transition-timing-function" },
      { label: "D", text: "transition-delay" },
    ],
    answer: "A. transition-property",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is CSS and why is it important?",
    answer:
      "CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of a document written in HTML. It controls the layout, colors, fonts, and overall visual appearance of web pages. CSS is essential for creating responsive, visually appealing, and user-friendly websites.",
  },
  {
    question: "What is the difference between inline, internal, and external CSS?",
    answer:
      "Inline CSS is applied directly within an HTML element using the style attribute. Internal CSS is defined within a <style> tag in the <head> section. External CSS is defined in a separate .css file and linked using the <link> tag. External CSS is preferred for reusability and maintainability.",
  },
  {
    question: "What are pseudo-classes and pseudo-elements?",
    answer:
      "Pseudo-classes (e.g., :hover, :focus) target elements based on their state or position. Pseudo-elements (e.g., ::before, ::after) target specific parts of an element, like the first line or first letter. Both are used to style elements without adding extra HTML markup.",
  },
  {
    question: "What is the Box Model in CSS?",
    answer:
      "The box model describes the space occupied by an element. It consists of content, padding, border, and margin. Understanding the box model is crucial for controlling layout and spacing. The box-sizing property can change how width and height are calculated.",
  },
  {
    question: "What is the difference between Flexbox and Grid?",
    answer:
      "Flexbox is a one-dimensional layout model for arranging items in rows or columns. It is best for aligning and distributing space among items in a container. CSS Grid is a two-dimensional layout system that allows you to create complex grid-based layouts with rows and columns. Grid is better for overall page layout, while Flexbox is ideal for components.",
  },
  {
    question: "What are media queries and how do they work?",
    answer:
      "Media queries are a CSS feature that allows you to apply styles based on the characteristics of the device, such as screen width, height, orientation, and resolution. They are essential for responsive design, enabling websites to adapt to different screen sizes and devices.",
  },
  {
    question: "What is the difference between em and rem units?",
    answer:
      "em is relative to the font size of the parent element, while rem (root em) is relative to the font size of the root element (html). rem is generally preferred for consistency, especially in responsive designs.",
  },
  {
    question: "What are CSS variables and why are they useful?",
    answer:
      "CSS variables (custom properties) allow you to store values (like colors, fonts, sizes) and reuse them throughout your stylesheet. They make it easier to maintain and update themes, reduce redundancy, and enable dynamic styling with JavaScript.",
  },
];

// ========================== COMPONENT ==========================
export default function CssMcq() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Extract unique topics
  const topics = Array.from(new Set(questionsData.map((q) => q.topic)));

  const filteredQuestions = selectedTopic
    ? questionsData.filter((q) => q.topic === selectedTopic)
    : questionsData;

  const getTopicCount = (topic) => {
    return questionsData.filter((q) => q.topic === topic).length;
  };

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://CodeSkipper.in/mcq/css",
        "url": "https://CodeSkipper.in/mcq/css",
        "name": "CSS MCQs | Code Skipper",
        "description":
          "Practice 130+ CSS multiple-choice questions covering selectors, box model, flexbox, grid, responsive design, animations, and more.",
        "about": { "@type": "Thing", "name": "CSS MCQ" },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": questionsData.map((q, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": { "@type": "Question", "name": q.question, "text": q.question },
          })),
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://CodeSkipper.in" },
            { "@type": "ListItem", "position": 2, "name": "MCQ", "item": "https://CodeSkipper.in/mcq" },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "CSS MCQs",
              "item": "https://CodeSkipper.in/mcq/css",
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://CodeSkipper.in/#website",
        "url": "https://CodeSkipper.in",
        "name": "Code Skipper",
        "description": "Learn programming, AI, and data science with tutorials, MCQs, and resources.",
        "publisher": {
          "@type": "Organization",
          "@id": "https://CodeSkipper.in/#organization",
          "name": "Code Skipper",
          "logo": { "@type": "ImageObject", "url": "https://CodeSkipper.in/Images/logo.png" },
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": { "@type": "EntryPoint", "urlTemplate": "https://CodeSkipper.in/search?q={search_term_string}" },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://CodeSkipper.in/#organization",
        "name": "Code Skipper",
        "url": "https://CodeSkipper.in",
        "logo": { "@type": "ImageObject", "url": "https://CodeSkipper.in/Images/logo.png", "width": "150", "height": "150" },
        "description": "Code Skipper provides programming tutorials, MCQs, and learning resources.",
        "email": "contact@CodeSkipper.in",
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://CodeSkipper.in/#educational",
        "name": "Code Skipper",
        "url": "https://CodeSkipper.in",
        "description": "Educational platform for programming and AI learning.",
      },
      {
        "@type": "Course",
        "@id": "https://CodeSkipper.in/mcq/css#course",
        "name": "CSS MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for CSS exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "CSS" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/css#faq",
        "mainEntity": faqData.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
        })),
      },
    ],
  };

  return (
    <CourseLayout>
      <Head>
        <title>CSS MCQs 2026 | 130+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 130+ CSS multiple-choice questions with answers. Covers selectors, box model, flexbox, grid, responsive design, animations, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="CSS, MCQs, Cascading Style Sheets, Flexbox, Grid, Responsive Design, Animations, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/css" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/css" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/css" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/css" />
        <meta property="og:title" content="CSS MCQs 2026 | 130+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 130+ CSS multiple-choice questions covering selectors, box model, flexbox, grid, responsive design, animations, and more."
        />
        <meta property="og:image" content="https://CodeSkipper.in/Images/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta property="og:site_name" content="Code Skipper" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CodeSkipper" />
        <meta name="twitter:title" content="CSS MCQs 2026 | 130+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 130+ CSS multiple-choice questions covering selectors, box model, flexbox, grid, responsive design, animations, and more."
        />
        <meta name="twitter:image" content="https://CodeSkipper.in/Images/logo.png" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="relative xl:container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* ===== HERO ===== */}
        <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 md:p-12 mb-10 text-white">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium mb-4">
              🎨 130+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              CSS <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-6">
              Master CSS with 130+ curated MCQs covering selectors, box model, flexbox, grid,
              responsive design, animations, and more. Perfect for exams, interviews, and placements.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">12 Topics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-sm font-medium">130+ Questions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-medium">Exam Ready</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-purple-400/10 blur-3xl" aria-hidden="true" />
        </section>

        {/* ===== TOPIC CARDS ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">📚</span>
            Explore CSS Topics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
                  selectedTopic === topic
                    ? "border-blue-600 bg-blue-50 text-blue-700 shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50/50"
                }`}
                aria-label={`Filter by ${topic}`}
              >
                <span className="block truncate">{topic}</span>
                <span className="text-xs text-gray-400 font-normal">{getTopicCount(topic)} questions</span>
              </button>
            ))}
          </div>
          {selectedTopic && (
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Showing <strong>{filteredQuestions.length}</strong> questions for{" "}
                <strong className="text-blue-600">{selectedTopic}</strong>
              </span>
              <button
                onClick={() => setSelectedTopic(null)}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear Filter ✕
              </button>
            </div>
          )}
        </section>

        {/* ===== MCQ LIST ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">📝</span>
            CSS MCQs
            <span className="ml-2 text-sm font-normal text-gray-500">({filteredQuestions.length} questions)</span>
          </h2>
          <div className="space-y-6">
            {filteredQuestions.map((q, index) => (
              <article
                key={q.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-5 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg font-medium text-gray-900 leading-relaxed">
                      {q.question}
                    </p>
                  </div>
                  <ul className="space-y-2 ml-11">
                    {q.options.map((option) => (
                      <li key={option.label} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold flex items-center justify-center">
                          {option.label}
                        </span>
                        <p className="text-gray-700 text-sm md:text-base">{option.text}</p>
                      </li>
                    ))}
                  </ul>
                  <details className="mt-4 ml-11 group">
                    <summary className="inline-flex cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                      <span className="group-open:hidden">Show Answer</span>
                      <span className="hidden group-open:inline">Hide Answer</span>
                    </summary>
                    <div className="mt-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm md:text-base">
                      <span className="font-semibold">✓</span> {q.answer}
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
          {filteredQuestions.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-500 text-lg">No questions found for this topic.</p>
              <button
                onClick={() => setSelectedTopic(null)}
                className="mt-3 text-blue-600 hover:text-blue-800 font-medium"
              >
                View all questions
              </button>
            </div>
          )}
        </section>

        {/* ===== FAQ ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">❓</span>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="text-base font-medium text-gray-900 pr-4">{faq.question}</span>
                  <span className="flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-700 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ===== RELATED RESOURCES ===== */}
      </main>
    </CourseLayout>
  );
}