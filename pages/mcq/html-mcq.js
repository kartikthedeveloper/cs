import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (130+ Unique) ==========================

const questionsData = [
  // ----- HTML Basics (6) -----
  {
    id: 1,
    topic: "HTML Basics",
    question: "What does HTML stand for?",
    options: [
      { label: "A", text: "Hyper Text Markup Language" },
      { label: "B", text: "High Tech Modern Language" },
      { label: "C", text: "Hyper Transfer Markup Language" },
      { label: "D", text: "Hyper Text Machine Language" },
    ],
    answer: "A. Hyper Text Markup Language",
  },
  {
    id: 2,
    topic: "HTML Basics",
    question: "Which HTML tag is used to define the document type?",
    options: [
      { label: "A", text: "<!DOCTYPE html>" },
      { label: "B", text: "<html>" },
      { label: "C", text: "<head>" },
      { label: "D", text: "<title>" },
    ],
    answer: "A. <!DOCTYPE html>",
  },
  {
    id: 3,
    topic: "HTML Basics",
    question: "Which tag is used to create a hyperlink in HTML?",
    options: [
      { label: "A", text: "<a>" },
      { label: "B", text: "<link>" },
      { label: "C", text: "<href>" },
      { label: "D", text: "<url>" },
    ],
    answer: "A. <a>",
  },
  {
    id: 4,
    topic: "HTML Basics",
    question: "What is the correct HTML element for inserting a line break?",
    options: [
      { label: "A", text: "<br>" },
      { label: "B", text: "<break>" },
      { label: "C", text: "<lb>" },
      { label: "D", text: "<newline>" },
    ],
    answer: "A. <br>",
  },
  {
    id: 5,
    topic: "HTML Basics",
    question: "Which HTML attribute specifies an alternate text for an image?",
    options: [
      { label: "A", text: "alt" },
      { label: "B", text: "src" },
      { label: "C", text: "title" },
      { label: "D", text: "href" },
    ],
    answer: "A. alt",
  },
  {
    id: 6,
    topic: "HTML Basics",
    question: "Which tag is used to define a paragraph?",
    options: [
      { label: "A", text: "<p>" },
      { label: "B", text: "<para>" },
      { label: "C", text: "<paragraph>" },
      { label: "D", text: "<text>" },
    ],
    answer: "A. <p>",
  },

  // ----- HTML Tags (6) -----
  {
    id: 7,
    topic: "HTML Tags",
    question: "Which tag is used to define a heading in HTML?",
    options: [
      { label: "A", text: "<h1> to <h6>" },
      { label: "B", text: "<head>" },
      { label: "C", text: "<header>" },
      { label: "D", text: "<heading>" },
    ],
    answer: "A. <h1> to <h6>",
  },
  {
    id: 8,
    topic: "HTML Tags",
    question: "Which tag is used to define an unordered list?",
    options: [
      { label: "A", text: "<ul>" },
      { label: "B", text: "<ol>" },
      { label: "C", text: "<li>" },
      { label: "D", text: "<list>" },
    ],
    answer: "A. <ul>",
  },
  {
    id: 9,
    topic: "HTML Tags",
    question: "Which tag is used to define a table row?",
    options: [
      { label: "A", text: "<tr>" },
      { label: "B", text: "<td>" },
      { label: "C", text: "<th>" },
      { label: "D", text: "<row>" },
    ],
    answer: "A. <tr>",
  },
  {
    id: 10,
    topic: "HTML Tags",
    question: "Which tag is used to define a division or section in HTML?",
    options: [
      { label: "A", text: "<div>" },
      { label: "B", text: "<span>" },
      { label: "C", text: "<section>" },
      { label: "D", text: "<block>" },
    ],
    answer: "A. <div>",
  },
  {
    id: 11,
    topic: "HTML Tags",
    question: "Which tag is used to define a form?",
    options: [
      { label: "A", text: "<form>" },
      { label: "B", text: "<input>" },
      { label: "C", text: "<label>" },
      { label: "D", text: "<fieldset>" },
    ],
    answer: "A. <form>",
  },
  {
    id: 12,
    topic: "HTML Tags",
    question: "Which tag is used to define a button in HTML?",
    options: [
      { label: "A", text: "<button>" },
      { label: "B", text: "<input type='button'>" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "<btn>" },
    ],
    answer: "C. Both A and B",
  },

  // ----- HTML Attributes (6) -----
  {
    id: 13,
    topic: "HTML Attributes",
    question: "Which attribute is used to specify the URL of a link?",
    options: [
      { label: "A", text: "href" },
      { label: "B", text: "src" },
      { label: "C", text: "link" },
      { label: "D", text: "url" },
    ],
    answer: "A. href",
  },
  {
    id: 14,
    topic: "HTML Attributes",
    question: "Which attribute is used to specify the source of an image?",
    options: [
      { label: "A", text: "src" },
      { label: "B", text: "href" },
      { label: "C", text: "alt" },
      { label: "D", text: "source" },
    ],
    answer: "A. src",
  },
  {
    id: 15,
    topic: "HTML Attributes",
    question: "Which attribute is used to specify the width of an image?",
    options: [
      { label: "A", text: "width" },
      { label: "B", text: "height" },
      { label: "C", text: "size" },
      { label: "D", text: "dimension" },
    ],
    answer: "A. width",
  },
  {
    id: 16,
    topic: "HTML Attributes",
    question: "Which attribute is used to open a link in a new tab?",
    options: [
      { label: "A", text: "target='_blank'" },
      { label: "B", text: "target='_new'" },
      { label: "C", text: "new='true'" },
      { label: "D", text: "open='new'" },
    ],
    answer: "A. target='_blank'",
  },
  {
    id: 17,
    topic: "HTML Attributes",
    question: "Which attribute is used to disable an input field?",
    options: [
      { label: "A", text: "disabled" },
      { label: "B", text: "readonly" },
      { label: "C", text: "hidden" },
      { label: "D", text: "inactive" },
    ],
    answer: "A. disabled",
  },
  {
    id: 18,
    topic: "HTML Attributes",
    question: "Which attribute is used to set the maximum length of an input?",
    options: [
      { label: "A", text: "maxlength" },
      { label: "B", text: "max" },
      { label: "C", text: "length" },
      { label: "D", text: "maxlen" },
    ],
    answer: "A. maxlength",
  },

  // ----- HTML Forms (6) -----
  {
    id: 19,
    topic: "HTML Forms",
    question: "Which input type is used for email addresses?",
    options: [
      { label: "A", text: "email" },
      { label: "B", text: "text" },
      { label: "C", text: "password" },
      { label: "D", text: "tel" },
    ],
    answer: "A. email",
  },
  {
    id: 20,
    topic: "HTML Forms",
    question: "Which input type is used for password fields?",
    options: [
      { label: "A", text: "password" },
      { label: "B", text: "text" },
      { label: "C", text: "hidden" },
      { label: "D", text: "secret" },
    ],
    answer: "A. password",
  },
  {
    id: 21,
    topic: "HTML Forms",
    question: "Which tag is used to create a dropdown list?",
    options: [
      { label: "A", text: "<select>" },
      { label: "B", text: "<dropdown>" },
      { label: "C", text: "<list>" },
      { label: "D", text: "<option>" },
    ],
    answer: "A. <select>",
  },
  {
    id: 22,
    topic: "HTML Forms",
    question: "Which tag is used to define a label for a form element?",
    options: [
      { label: "A", text: "<label>" },
      { label: "B", text: "<legend>" },
      { label: "C", text: "<caption>" },
      { label: "D", text: "<span>" },
    ],
    answer: "A. <label>",
  },
  {
    id: 23,
    topic: "HTML Forms",
    question: "Which input type is used to submit a form?",
    options: [
      { label: "A", text: "submit" },
      { label: "B", text: "button" },
      { label: "C", text: "reset" },
      { label: "D", text: "image" },
    ],
    answer: "A. submit",
  },
  {
    id: 24,
    topic: "HTML Forms",
    question: "Which method should be used to send form data securely?",
    options: [
      { label: "A", text: "POST" },
      { label: "B", text: "GET" },
      { label: "C", text: "SEND" },
      { label: "D", text: "PUT" },
    ],
    answer: "A. POST",
  },

  // ----- HTML Tables (6) -----
  {
    id: 25,
    topic: "HTML Tables",
    question: "Which tag is used to define a table header?",
    options: [
      { label: "A", text: "<th>" },
      { label: "B", text: "<td>" },
      { label: "C", text: "<tr>" },
      { label: "D", text: "<thead>" },
    ],
    answer: "A. <th>",
  },
  {
    id: 26,
    topic: "HTML Tables",
    question: "Which tag is used to define a table data cell?",
    options: [
      { label: "A", text: "<td>" },
      { label: "B", text: "<th>" },
      { label: "C", text: "<tr>" },
      { label: "D", text: "<tbody>" },
    ],
    answer: "A. <td>",
  },
  {
    id: 27,
    topic: "HTML Tables",
    question: "Which attribute is used to merge cells horizontally?",
    options: [
      { label: "A", text: "colspan" },
      { label: "B", text: "rowspan" },
      { label: "C", text: "merge" },
      { label: "D", text: "span" },
    ],
    answer: "A. colspan",
  },
  {
    id: 28,
    topic: "HTML Tables",
    question: "Which attribute is used to merge cells vertically?",
    options: [
      { label: "A", text: "rowspan" },
      { label: "B", text: "colspan" },
      { label: "C", text: "merge" },
      { label: "D", text: "vertical-span" },
    ],
    answer: "A. rowspan",
  },
  {
    id: 29,
    topic: "HTML Tables",
    question: "Which tag is used to define a table footer?",
    options: [
      { label: "A", text: "<tfoot>" },
      { label: "B", text: "<tf>" },
      { label: "C", text: "<footer>" },
      { label: "D", text: "<table-foot>" },
    ],
    answer: "A. <tfoot>",
  },
  {
    id: 30,
    topic: "HTML Tables",
    question: "Which tag is used to define a table body?",
    options: [
      { label: "A", text: "<tbody>" },
      { label: "B", text: "<tb>" },
      { label: "C", text: "<body>" },
      { label: "D", text: "<table-body>" },
    ],
    answer: "A. <tbody>",
  },

  // ----- HTML Lists (6) -----
  {
    id: 31,
    topic: "HTML Lists",
    question: "Which tag is used to define an ordered list?",
    options: [
      { label: "A", text: "<ol>" },
      { label: "B", text: "<ul>" },
      { label: "C", text: "<li>" },
      { label: "D", text: "<list>" },
    ],
    answer: "A. <ol>",
  },
  {
    id: 32,
    topic: "HTML Lists",
    question: "Which tag is used to define a list item?",
    options: [
      { label: "A", text: "<li>" },
      { label: "B", text: "<item>" },
      { label: "C", text: "<list-item>" },
      { label: "D", text: "<il>" },
    ],
    answer: "A. <li>",
  },
  {
    id: 33,
    topic: "HTML Lists",
    question: "Which tag is used to define a description list?",
    options: [
      { label: "A", text: "<dl>" },
      { label: "B", text: "<ul>" },
      { label: "C", text: "<ol>" },
      { label: "D", text: "<desclist>" },
    ],
    answer: "A. <dl>",
  },
  {
    id: 34,
    topic: "HTML Lists",
    question: "Which tag is used to define a term in a description list?",
    options: [
      { label: "A", text: "<dt>" },
      { label: "B", text: "<dd>" },
      { label: "C", text: "<dl>" },
      { label: "D", text: "<term>" },
    ],
    answer: "A. <dt>",
  },
  {
    id: 35,
    topic: "HTML Lists",
    question: "Which tag is used to define a description in a description list?",
    options: [
      { label: "A", text: "<dd>" },
      { label: "B", text: "<dt>" },
      { label: "C", text: "<dl>" },
      { label: "D", text: "<desc>" },
    ],
    answer: "A. <dd>",
  },
  {
    id: 36,
    topic: "HTML Lists",
    question: "Which list type uses numbers by default?",
    options: [
      { label: "A", text: "Ordered list" },
      { label: "B", text: "Unordered list" },
      { label: "C", text: "Description list" },
      { label: "D", text: "Bullet list" },
    ],
    answer: "A. Ordered list",
  },

  // ----- HTML Links (6) -----
  {
    id: 37,
    topic: "HTML Links",
    question: "Which tag is used to create a hyperlink?",
    options: [
      { label: "A", text: "<a>" },
      { label: "B", text: "<link>" },
      { label: "C", text: "<href>" },
      { label: "D", text: "<url>" },
    ],
    answer: "A. <a>",
  },
  {
    id: 38,
    topic: "HTML Links",
    question: "Which attribute is used to specify the URL of a link?",
    options: [
      { label: "A", text: "href" },
      { label: "B", text: "src" },
      { label: "C", text: "url" },
      { label: "D", text: "link" },
    ],
    answer: "A. href",
  },
  {
    id: 39,
    topic: "HTML Links",
    question: "How do you create a link with a different target?",
    options: [
      { label: "A", text: "Using the target attribute" },
      { label: "B", text: "Using the href attribute" },
      { label: "C", text: "Using the rel attribute" },
      { label: "D", text: "Using the type attribute" },
    ],
    answer: "A. Using the target attribute",
  },
  {
    id: 40,
    topic: "HTML Links",
    question: "Which value opens a link in a new window/tab?",
    options: [
      { label: "A", text: "_blank" },
      { label: "B", text: "_self" },
      { label: "C", text: "_parent" },
      { label: "D", text: "_top" },
    ],
    answer: "A. _blank",
  },
  {
    id: 41,
    topic: "HTML Links",
    question: "Which tag is used to link to an external CSS file?",
    options: [
      { label: "A", text: "<link>" },
      { label: "B", text: "<a>" },
      { label: "C", text: "<style>" },
      { label: "D", text: "<script>" },
    ],
    answer: "A. <link>",
  },
  {
    id: 42,
    topic: "HTML Links",
    question: "Which attribute is used to specify the relationship of a linked resource?",
    options: [
      { label: "A", text: "rel" },
      { label: "B", text: "type" },
      { label: "C", text: "media" },
      { label: "D", text: "href" },
    ],
    answer: "A. rel",
  },

  // ----- HTML Media (6) -----
  {
    id: 43,
    topic: "HTML Media",
    question: "Which tag is used to embed an image?",
    options: [
      { label: "A", text: "<img>" },
      { label: "B", text: "<image>" },
      { label: "C", text: "<src>" },
      { label: "D", text: "<picture>" },
    ],
    answer: "A. <img>",
  },
  {
    id: 44,
    topic: "HTML Media",
    question: "Which tag is used to embed a video?",
    options: [
      { label: "A", text: "<video>" },
      { label: "B", text: "<media>" },
      { label: "C", text: "<movie>" },
      { label: "D", text: "<source>" },
    ],
    answer: "A. <video>",
  },
  {
    id: 45,
    topic: "HTML Media",
    question: "Which tag is used to embed an audio file?",
    options: [
      { label: "A", text: "<audio>" },
      { label: "B", text: "<sound>" },
      { label: "C", text: "<music>" },
      { label: "D", text: "<play>" },
    ],
    answer: "A. <audio>",
  },
  {
    id: 46,
    topic: "HTML Media",
    question: "Which attribute is used to specify the source of a video?",
    options: [
      { label: "A", text: "src" },
      { label: "B", text: "href" },
      { label: "C", text: "source" },
      { label: "D", text: "data" },
    ],
    answer: "A. src",
  },
  {
    id: 47,
    topic: "HTML Media",
    question: "Which tag is used to specify multiple sources for a video?",
    options: [
      { label: "A", text: "<source>" },
      { label: "B", text: "<src>" },
      { label: "C", text: "<media>" },
      { label: "D", text: "<data>" },
    ],
    answer: "A. <source>",
  },
  {
    id: 48,
    topic: "HTML Media",
    question: "Which attribute makes a video autoplay?",
    options: [
      { label: "A", text: "autoplay" },
      { label: "B", text: "loop" },
      { label: "C", text: "play" },
      { label: "D", text: "start" },
    ],
    answer: "A. autoplay",
  },

  // ----- HTML Semantics (6) -----
  {
    id: 49,
    topic: "HTML Semantics",
    question: "Which tag defines the main content of a document?",
    options: [
      { label: "A", text: "<main>" },
      { label: "B", text: "<body>" },
      { label: "C", text: "<section>" },
      { label: "D", text: "<article>" },
    ],
    answer: "A. <main>",
  },
  {
    id: 50,
    topic: "HTML Semantics",
    question: "Which tag defines a header for a document or section?",
    options: [
      { label: "A", text: "<header>" },
      { label: "B", text: "<head>" },
      { label: "C", text: "<top>" },
      { label: "D", text: "<banner>" },
    ],
    answer: "A. <header>",
  },
  {
    id: 51,
    topic: "HTML Semantics",
    question: "Which tag defines a footer for a document or section?",
    options: [
      { label: "A", text: "<footer>" },
      { label: "B", text: "<bottom>" },
      { label: "C", text: "<foot>" },
      { label: "D", text: "<end>" },
    ],
    answer: "A. <footer>",
  },
  {
    id: 52,
    topic: "HTML Semantics",
    question: "Which tag defines a navigation menu?",
    options: [
      { label: "A", text: "<nav>" },
      { label: "B", text: "<menu>" },
      { label: "C", text: "<navigation>" },
      { label: "D", text: "<navbar>" },
    ],
    answer: "A. <nav>",
  },
  {
    id: 53,
    topic: "HTML Semantics",
    question: "Which tag defines an independent piece of content?",
    options: [
      { label: "A", text: "<article>" },
      { label: "B", text: "<section>" },
      { label: "C", text: "<div>" },
      { label: "D", text: "<aside>" },
    ],
    answer: "A. <article>",
  },
  {
    id: 54,
    topic: "HTML Semantics",
    question: "Which tag defines content aside from the main content?",
    options: [
      { label: "A", text: "<aside>" },
      { label: "B", text: "<sidebar>" },
      { label: "C", text: "<side>" },
      { label: "D", text: "<extra>" },
    ],
    answer: "A. <aside>",
  },

  // ----- HTML5 Features (6) -----
  {
    id: 55,
    topic: "HTML5 Features",
    question: "Which input type is new in HTML5 for date selection?",
    options: [
      { label: "A", text: "date" },
      { label: "B", text: "datetime" },
      { label: "C", text: "calendar" },
      { label: "D", text: "time" },
    ],
    answer: "A. date",
  },
  {
    id: 56,
    topic: "HTML5 Features",
    question: "Which HTML5 element is used for drawing graphics?",
    options: [
      { label: "A", text: "<canvas>" },
      { label: "B", text: "<svg>" },
      { label: "C", text: "<graph>" },
      { label: "D", text: "<draw>" },
    ],
    answer: "A. <canvas>",
  },
  {
    id: 57,
    topic: "HTML5 Features",
    question: "Which HTML5 element is used for semantic grouping of content?",
    options: [
      { label: "A", text: "<section>" },
      { label: "B", text: "<group>" },
      { label: "C", text: "<block>" },
      { label: "D", text: "<content>" },
    ],
    answer: "A. <section>",
  },
  {
    id: 58,
    topic: "HTML5 Features",
    question: "Which HTML5 element is used for progress bars?",
    options: [
      { label: "A", text: "<progress>" },
      { label: "B", text: "<meter>" },
      { label: "C", text: "<bar>" },
      { label: "D", text: "<status>" },
    ],
    answer: "A. <progress>",
  },
  {
    id: 59,
    topic: "HTML5 Features",
    question: "Which HTML5 attribute is used to validate input using a pattern?",
    options: [
      { label: "A", text: "pattern" },
      { label: "B", text: "validate" },
      { label: "C", text: "regex" },
      { label: "D", text: "format" },
    ],
    answer: "A. pattern",
  },
  {
    id: 60,
    topic: "HTML5 Features",
    question: "Which HTML5 tag is used to include external application content?",
    options: [
      { label: "A", text: "<embed>" },
      { label: "B", text: "<object>" },
      { label: "C", text: "<iframe>" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },

  // ----- HTML Accessibility (6) -----
  {
    id: 61,
    topic: "HTML Accessibility",
    question: "Which attribute provides a text alternative for images?",
    options: [
      { label: "A", text: "alt" },
      { label: "B", text: "title" },
      { label: "C", text: "aria-label" },
      { label: "D", text: "role" },
    ],
    answer: "A. alt",
  },
  {
    id: 62,
    topic: "HTML Accessibility",
    question: "Which ARIA role is used to define a landmark?",
    options: [
      { label: "A", text: "role='main'" },
      { label: "B", text: "role='navigation'" },
      { label: "C", text: "role='banner'" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 63,
    topic: "HTML Accessibility",
    question: "Which attribute is used to associate a label with a form control?",
    options: [
      { label: "A", text: "for" },
      { label: "B", text: "id" },
      { label: "C", text: "aria-labelledby" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 64,
    topic: "HTML Accessibility",
    question: "Which element is used to group related form controls for accessibility?",
    options: [
      { label: "A", text: "<fieldset>" },
      { label: "B", text: "<group>" },
      { label: "C", text: "<legend>" },
      { label: "D", text: "<label>" },
    ],
    answer: "A. <fieldset>",
  },
  {
    id: 65,
    topic: "HTML Accessibility",
    question: "What is the purpose of the 'aria-label' attribute?",
    options: [
      { label: "A", text: "Provides a label for an element when no visible text is present" },
      { label: "B", text: "Specifies the role of an element" },
      { label: "C", text: "Defines the state of an element" },
      { label: "D", text: "Sets the tab order" },
    ],
    answer: "A. Provides a label for an element when no visible text is present",
  },
  {
    id: 66,
    topic: "HTML Accessibility",
    question: "Which HTML element is used to provide a caption for a table?",
    options: [
      { label: "A", text: "<caption>" },
      { label: "B", text: "<legend>" },
      { label: "C", text: "<label>" },
      { label: "D", text: "<summary>" },
    ],
    answer: "A. <caption>",
  },

  // ----- HTML DOM (6) -----
  {
    id: 67,
    topic: "HTML DOM",
    question: "What is the DOM?",
    options: [
      { label: "A", text: "Document Object Model - a programming interface for HTML documents" },
      { label: "B", text: "Data Object Model" },
      { label: "C", text: "Document Oriented Model" },
      { label: "D", text: "Dynamic Object Model" },
    ],
    answer: "A. Document Object Model - a programming interface for HTML documents",
  },
  {
    id: 68,
    topic: "HTML DOM",
    question: "Which method is used to select an element by its ID?",
    options: [
      { label: "A", text: "document.getElementById()" },
      { label: "B", text: "document.querySelector()" },
      { label: "C", text: "document.getElementsByTagName()" },
      { label: "D", text: "document.getElementsByClassName()" },
    ],
    answer: "A. document.getElementById()",
  },
  {
    id: 69,
    topic: "HTML DOM",
    question: "Which property is used to get or set the HTML content of an element?",
    options: [
      { label: "A", text: "innerHTML" },
      { label: "B", text: "outerHTML" },
      { label: "C", text: "textContent" },
      { label: "D", text: "innerText" },
    ],
    answer: "A. innerHTML",
  },
  {
    id: 70,
    topic: "HTML DOM",
    question: "Which method is used to create a new element in the DOM?",
    options: [
      { label: "A", text: "document.createElement()" },
      { label: "B", text: "document.newElement()" },
      { label: "C", text: "document.addElement()" },
      { label: "D", text: "document.createNode()" },
    ],
    answer: "A. document.createElement()",
  },
  {
    id: 71,
    topic: "HTML DOM",
    question: "Which method is used to append a child element?",
    options: [
      { label: "A", text: "appendChild()" },
      { label: "B", text: "addChild()" },
      { label: "C", text: "insertChild()" },
      { label: "D", text: "pushChild()" },
    ],
    answer: "A. appendChild()",
  },
  {
    id: 72,
    topic: "HTML DOM",
    question: "Which event occurs when the user clicks on an element?",
    options: [
      { label: "A", text: "onclick" },
      { label: "B", text: "onmouseover" },
      { label: "C", text: "onchange" },
      { label: "D", text: "onsubmit" },
    ],
    answer: "A. onclick",
  },

  // ----- HTML Events (6) -----
  {
    id: 73,
    topic: "HTML Events",
    question: "Which event fires when the page is loaded?",
    options: [
      { label: "A", text: "onload" },
      { label: "B", text: "onloadstart" },
      { label: "C", text: "onready" },
      { label: "D", text: "onpageload" },
    ],
    answer: "A. onload",
  },
  {
    id: 74,
    topic: "HTML Events",
    question: "Which event fires when an input field loses focus?",
    options: [
      { label: "A", text: "onblur" },
      { label: "B", text: "onfocus" },
      { label: "C", text: "onchange" },
      { label: "D", text: "oninput" },
    ],
    answer: "A. onblur",
  },
  {
    id: 75,
    topic: "HTML Events",
    question: "Which event fires when a form is submitted?",
    options: [
      { label: "A", text: "onsubmit" },
      { label: "B", text: "onform" },
      { label: "C", text: "onpost" },
      { label: "D", text: "onsend" },
    ],
    answer: "A. onsubmit",
  },
  {
    id: 76,
    topic: "HTML Events",
    question: "Which event fires when the mouse moves over an element?",
    options: [
      { label: "A", text: "onmouseover" },
      { label: "B", text: "onmouseenter" },
      { label: "C", text: "onmouseout" },
      { label: "D", text: "onmousemove" },
    ],
    answer: "A. onmouseover",
  },
  {
    id: 77,
    topic: "HTML Events",
    question: "Which event fires when a key is pressed?",
    options: [
      { label: "A", text: "onkeydown" },
      { label: "B", text: "onkeypress" },
      { label: "C", text: "onkeyup" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 78,
    topic: "HTML Events",
    question: "Which event fires when an element is changed?",
    options: [
      { label: "A", text: "onchange" },
      { label: "B", text: "oninput" },
      { label: "C", text: "onupdate" },
      { label: "D", text: "onmodify" },
    ],
    answer: "A. onchange",
  },

  // ----- Additional MCQs to reach 130+ -----
  {
    id: 79,
    topic: "HTML Basics",
    question: "What is the correct HTML element for the largest heading?",
    options: [
      { label: "A", text: "<h1>" },
      { label: "B", text: "<heading>" },
      { label: "C", text: "<h6>" },
      { label: "D", text: "<head>" },
    ],
    answer: "A. <h1>",
  },
  {
    id: 80,
    topic: "HTML Tags",
    question: "Which tag is used to define a horizontal rule?",
    options: [
      { label: "A", text: "<hr>" },
      { label: "B", text: "<line>" },
      { label: "C", text: "<rule>" },
      { label: "D", text: "<br>" },
    ],
    answer: "A. <hr>",
  },
  {
    id: 81,
    topic: "HTML Attributes",
    question: "Which attribute is used to specify the style of an element?",
    options: [
      { label: "A", text: "style" },
      { label: "B", text: "class" },
      { label: "C", text: "id" },
      { label: "D", text: "css" },
    ],
    answer: "A. style",
  },
  {
    id: 82,
    topic: "HTML Forms",
    question: "Which input type is used to create a checkbox?",
    options: [
      { label: "A", text: "checkbox" },
      { label: "B", text: "radio" },
      { label: "C", text: "toggle" },
      { label: "D", text: "switch" },
    ],
    answer: "A. checkbox",
  },
  {
    id: 83,
    topic: "HTML Tables",
    question: "Which tag is used to define a table caption?",
    options: [
      { label: "A", text: "<caption>" },
      { label: "B", text: "<thead>" },
      { label: "C", text: "<tfoot>" },
      { label: "D", text: "<legend>" },
    ],
    answer: "A. <caption>",
  },
  {
    id: 84,
    topic: "HTML Lists",
    question: "Which tag is used to start a list item in an unordered list?",
    options: [
      { label: "A", text: "<li>" },
      { label: "B", text: "<item>" },
      { label: "C", text: "<list>" },
      { label: "D", text: "<ul>" },
    ],
    answer: "A. <li>",
  },
  {
    id: 85,
    topic: "HTML Links",
    question: "Which attribute is used to specify the target URL in a form?",
    options: [
      { label: "A", text: "action" },
      { label: "B", text: "method" },
      { label: "C", text: "target" },
      { label: "D", text: "href" },
    ],
    answer: "A. action",
  },
  {
    id: 86,
    topic: "HTML Media",
    question: "Which attribute controls whether a video should loop?",
    options: [
      { label: "A", text: "loop" },
      { label: "B", text: "repeat" },
      { label: "C", text: "autoplay" },
      { label: "D", text: "controls" },
    ],
    answer: "A. loop",
  },
  {
    id: 87,
    topic: "HTML Semantics",
    question: "Which tag is used to define a time or date?",
    options: [
      { label: "A", text: "<time>" },
      { label: "B", text: "<date>" },
      { label: "C", text: "<datetime>" },
      { label: "D", text: "<calendar>" },
    ],
    answer: "A. <time>",
  },
  {
    id: 88,
    topic: "HTML5 Features",
    question: "Which HTML5 element is used for scalable vector graphics?",
    options: [
      { label: "A", text: "<svg>" },
      { label: "B", text: "<canvas>" },
      { label: "C", text: "<vector>" },
      { label: "D", text: "<graphics>" },
    ],
    answer: "A. <svg>",
  },
  {
    id: 89,
    topic: "HTML Accessibility",
    question: "Which attribute is used to specify the language of an element?",
    options: [
      { label: "A", text: "lang" },
      { label: "B", text: "xml:lang" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "locale" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 90,
    topic: "HTML DOM",
    question: "Which method is used to remove an element from the DOM?",
    options: [
      { label: "A", text: "removeChild()" },
      { label: "B", text: "deleteChild()" },
      { label: "C", text: "removeElement()" },
      { label: "D", text: "eraseElement()" },
    ],
    answer: "A. removeChild()",
  },
  {
    id: 91,
    topic: "HTML Events",
    question: "Which event fires when the document is unloaded?",
    options: [
      { label: "A", text: "onunload" },
      { label: "B", text: "onbeforeunload" },
      { label: "C", text: "onleave" },
      { label: "D", text: "onexit" },
    ],
    answer: "A. onunload",
  },
  {
    id: 92,
    topic: "HTML Basics",
    question: "Which HTML element defines the root of an HTML document?",
    options: [
      { label: "A", text: "<html>" },
      { label: "B", text: "<document>" },
      { label: "C", text: "<root>" },
      { label: "D", text: "<body>" },
    ],
    answer: "A. <html>",
  },
  {
    id: 93,
    topic: "HTML Tags",
    question: "Which tag is used to define an inline container?",
    options: [
      { label: "A", text: "<span>" },
      { label: "B", text: "<div>" },
      { label: "C", text: "<inline>" },
      { label: "D", text: "<container>" },
    ],
    answer: "A. <span>",
  },
  {
    id: 94,
    topic: "HTML Attributes",
    question: "Which attribute is used to specify the character encoding?",
    options: [
      { label: "A", text: "charset" },
      { label: "B", text: "encoding" },
      { label: "C", text: "char" },
      { label: "D", text: "codepage" },
    ],
    answer: "A. charset",
  },
  {
    id: 95,
    topic: "HTML Forms",
    question: "Which input type is used for numeric values?",
    options: [
      { label: "A", text: "number" },
      { label: "B", text: "range" },
      { label: "C", text: "text" },
      { label: "D", text: "tel" },
    ],
    answer: "A. number",
  },
  {
    id: 96,
    topic: "HTML Tables",
    question: "Which attribute defines the number of columns in a table?",
    options: [
      { label: "A", text: "colspan" },
      { label: "B", text: "rowspan" },
      { label: "C", text: "col" },
      { label: "D", text: "cols" },
    ],
    answer: "A. colspan",
  },
  {
    id: 97,
    topic: "HTML Lists",
    question: "Which tag is used to create a nested list?",
    options: [
      { label: "A", text: "Place a list inside a list item" },
      { label: "B", text: "<nest>" },
      { label: "C", text: "<sublist>" },
      { label: "D", text: "<inner>" },
    ],
    answer: "A. Place a list inside a list item",
  },
  {
    id: 98,
    topic: "HTML Links",
    question: "Which attribute is used to specify the media type of a linked resource?",
    options: [
      { label: "A", text: "media" },
      { label: "B", text: "type" },
      { label: "C", text: "rel" },
      { label: "D", text: "href" },
    ],
    answer: "A. media",
  },
  {
    id: 99,
    topic: "HTML Media",
    question: "Which tag is used to define a track for media elements?",
    options: [
      { label: "A", text: "<track>" },
      { label: "B", text: "<source>" },
      { label: "C", text: "<caption>" },
      { label: "D", text: "<subtitles>" },
    ],
    answer: "A. <track>",
  },
  {
    id: 100,
    topic: "HTML Semantics",
    question: "Which tag is used to define a figure caption?",
    options: [
      { label: "A", text: "<figcaption>" },
      { label: "B", text: "<caption>" },
      { label: "C", text: "<legend>" },
      { label: "D", text: "<figure>" },
    ],
    answer: "A. <figcaption>",
  },
  {
    id: 101,
    topic: "HTML5 Features",
    question: "Which input type is used for color selection?",
    options: [
      { label: "A", text: "color" },
      { label: "B", text: "picker" },
      { label: "C", text: "rgb" },
      { label: "D", text: "hex" },
    ],
    answer: "A. color",
  },
  {
    id: 102,
    topic: "HTML Accessibility",
    question: "Which HTML element is used to define a heading for a section?",
    options: [
      { label: "A", text: "<h1> to <h6>" },
      { label: "B", text: "<header>" },
      { label: "C", text: "<title>" },
      { label: "D", text: "<heading>" },
    ],
    answer: "A. <h1> to <h6>",
  },
  {
    id: 103,
    topic: "HTML DOM",
    question: "Which property is used to get the text content of an element?",
    options: [
      { label: "A", text: "textContent" },
      { label: "B", text: "innerText" },
      { label: "C", text: "innerHTML" },
      { label: "D", text: "outerHTML" },
    ],
    answer: "A. textContent",
  },
  {
    id: 104,
    topic: "HTML Events",
    question: "Which event fires when a form control loses focus?",
    options: [
      { label: "A", text: "onblur" },
      { label: "B", text: "onfocus" },
      { label: "C", text: "onchange" },
      { label: "D", text: "oninput" },
    ],
    answer: "A. onblur",
  },
  {
    id: 105,
    topic: "HTML Basics",
    question: "Which HTML tag is used to define a comment?",
    options: [
      { label: "A", text: "<!-- comment -->" },
      { label: "B", text: "// comment" },
      { label: "C", text: "/* comment */" },
      { label: "D", text: "# comment" },
    ],
    answer: "A. <!-- comment -->",
  },
  {
    id: 106,
    topic: "HTML Tags",
    question: "Which tag is used to define a preformatted text?",
    options: [
      { label: "A", text: "<pre>" },
      { label: "B", text: "<code>" },
      { label: "C", text: "<text>" },
      { label: "D", text: "<format>" },
    ],
    answer: "A. <pre>",
  },
  {
    id: 107,
    topic: "HTML Attributes",
    question: "Which attribute is used to set the height of an image?",
    options: [
      { label: "A", text: "height" },
      { label: "B", text: "width" },
      { label: "C", text: "size" },
      { label: "D", text: "dimension" },
    ],
    answer: "A. height",
  },
  {
    id: 108,
    topic: "HTML Forms",
    question: "Which input type is used to upload files?",
    options: [
      { label: "A", text: "file" },
      { label: "B", text: "upload" },
      { label: "C", text: "document" },
      { label: "D", text: "image" },
    ],
    answer: "A. file",
  },
  {
    id: 109,
    topic: "HTML Tables",
    question: "Which tag is used to group the header content in a table?",
    options: [
      { label: "A", text: "<thead>" },
      { label: "B", text: "<theadrow>" },
      { label: "C", text: "<thgroup>" },
      { label: "D", text: "<head>" },
    ],
    answer: "A. <thead>",
  },
  {
    id: 110,
    topic: "HTML Lists",
    question: "Which attribute is used to start an ordered list from a specific number?",
    options: [
      { label: "A", text: "start" },
      { label: "B", text: "begin" },
      { label: "C", text: "value" },
      { label: "D", text: "count" },
    ],
    answer: "A. start",
  },
  {
    id: 111,
    topic: "HTML Links",
    question: "Which attribute is used to specify the relationship between the current document and the linked document?",
    options: [
      { label: "A", text: "rel" },
      { label: "B", text: "type" },
      { label: "C", text: "media" },
      { label: "D", text: "rev" },
    ],
    answer: "A. rel",
  },
  {
    id: 112,
    topic: "HTML Media",
    question: "Which attribute is used to specify if an audio file should autoplay?",
    options: [
      { label: "A", text: "autoplay" },
      { label: "B", text: "loop" },
      { label: "C", text: "controls" },
      { label: "D", text: "muted" },
    ],
    answer: "A. autoplay",
  },
  {
    id: 113,
    topic: "HTML Semantics",
    question: "Which tag is used to define a mark or highlighted text?",
    options: [
      { label: "A", text: "<mark>" },
      { label: "B", text: "<highlight>" },
      { label: "C", text: "<strong>" },
      { label: "D", text: "<em>" },
    ],
    answer: "A. <mark>",
  },
  {
    id: 114,
    topic: "HTML5 Features",
    question: "Which element is used to measure data within a range?",
    options: [
      { label: "A", text: "<meter>" },
      { label: "B", text: "<progress>" },
      { label: "C", text: "<range>" },
      { label: "D", text: "<gauge>" },
    ],
    answer: "A. <meter>",
  },
  {
    id: 115,
    topic: "HTML Accessibility",
    question: "Which attribute is used to provide a text alternative for non-text content?",
    options: [
      { label: "A", text: "alt" },
      { label: "B", text: "aria-label" },
      { label: "C", text: "title" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 116,
    topic: "HTML DOM",
    question: "Which method is used to add a class to an element?",
    options: [
      { label: "A", text: "classList.add()" },
      { label: "B", text: "addClass()" },
      { label: "C", text: "setClass()" },
      { label: "D", text: "className = 'new'" },
    ],
    answer: "A. classList.add()",
  },
  {
    id: 117,
    topic: "HTML Events",
    question: "Which event fires when the user double-clicks an element?",
    options: [
      { label: "A", text: "ondblclick" },
      { label: "B", text: "onclick" },
      { label: "C", text: "onmouseup" },
      { label: "D", text: "onmousedown" },
    ],
    answer: "A. ondblclick",
  },
  {
    id: 118,
    topic: "HTML Basics",
    question: "Which character is used to indicate an end tag?",
    options: [
      { label: "A", text: "</>" },
      { label: "B", text: "<>" },
      { label: "C", text: "/" },
      { label: "D", text: ">" },
    ],
    answer: "A. </>",
  },
  {
    id: 119,
    topic: "HTML Tags",
    question: "Which tag is used to define a subscript text?",
    options: [
      { label: "A", text: "<sub>" },
      { label: "B", text: "<sup>" },
      { label: "C", text: "<low>" },
      { label: "D", text: "<under>" },
    ],
    answer: "A. <sub>",
  },
  {
    id: 120,
    topic: "HTML Attributes",
    question: "Which attribute is used to set the tab order of an element?",
    options: [
      { label: "A", text: "tabindex" },
      { label: "B", text: "order" },
      { label: "C", text: "tab" },
      { label: "D", text: "index" },
    ],
    answer: "A. tabindex",
  },
  {
    id: 121,
    topic: "HTML Forms",
    question: "Which attribute is used to set the placeholder text in an input field?",
    options: [
      { label: "A", text: "placeholder" },
      { label: "B", text: "hint" },
      { label: "C", text: "label" },
      { label: "D", text: "default" },
    ],
    answer: "A. placeholder",
  },
  {
    id: 122,
    topic: "HTML Tables",
    question: "Which tag is used to define a table column group?",
    options: [
      { label: "A", text: "<colgroup>" },
      { label: "B", text: "<col>" },
      { label: "C", text: "<group>" },
      { label: "D", text: "<columns>" },
    ],
    answer: "A. <colgroup>",
  },
  {
    id: 123,
    topic: "HTML Lists",
    question: "Which tag is used to define the term in a description list?",
    options: [
      { label: "A", text: "<dt>" },
      { label: "B", text: "<dd>" },
      { label: "C", text: "<dl>" },
      { label: "D", text: "<term>" },
    ],
    answer: "A. <dt>",
  },
  {
    id: 124,
    topic: "HTML Links",
    question: "Which attribute is used to specify the character encoding of a linked resource?",
    options: [
      { label: "A", text: "charset" },
      { label: "B", text: "encoding" },
      { label: "C", text: "codepage" },
      { label: "D", text: "hreflang" },
    ],
    answer: "A. charset",
  },
  {
    id: 125,
    topic: "HTML Media",
    question: "Which attribute is used to specify the poster image for a video?",
    options: [
      { label: "A", text: "poster" },
      { label: "B", text: "cover" },
      { label: "C", text: "thumbnail" },
      { label: "D", text: "preview" },
    ],
    answer: "A. poster",
  },
  {
    id: 126,
    topic: "HTML Semantics",
    question: "Which tag is used to define a block of content that is thematically grouped?",
    options: [
      { label: "A", text: "<section>" },
      { label: "B", text: "<article>" },
      { label: "C", text: "<div>" },
      { label: "D", text: "<group>" },
    ],
    answer: "A. <section>",
  },
  {
    id: 127,
    topic: "HTML5 Features",
    question: "Which HTML5 element is used for drawing graphics with JavaScript?",
    options: [
      { label: "A", text: "<canvas>" },
      { label: "B", text: "<svg>" },
      { label: "C", text: "<graphics>" },
      { label: "D", text: "<draw>" },
    ],
    answer: "A. <canvas>",
  },
  {
    id: 128,
    topic: "HTML Accessibility",
    question: "Which attribute is used to specify the ARIA role of an element?",
    options: [
      { label: "A", text: "role" },
      { label: "B", text: "aria-role" },
      { label: "C", text: "landmark" },
      { label: "D", text: "access" },
    ],
    answer: "A. role",
  },
  {
    id: 129,
    topic: "HTML DOM",
    question: "Which method is used to remove a class from an element?",
    options: [
      { label: "A", text: "classList.remove()" },
      { label: "B", text: "removeClass()" },
      { label: "C", text: "deleteClass()" },
      { label: "D", text: "className = ''" },
    ],
    answer: "A. classList.remove()",
  },
  {
    id: 130,
    topic: "HTML Events",
    question: "Which event fires when the user scrolls an element?",
    options: [
      { label: "A", text: "onscroll" },
      { label: "B", text: "onwheel" },
      { label: "C", text: "onmove" },
      { label: "D", text: "ondrag" },
    ],
    answer: "A. onscroll",
  },
  {
    id: 131,
    topic: "HTML Basics",
    question: "Which HTML element is used to define the title of a document?",
    options: [
      { label: "A", text: "<title>" },
      { label: "B", text: "<head>" },
      { label: "C", text: "<meta>" },
      { label: "D", text: "<header>" },
    ],
    answer: "A. <title>",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is HTML and why is it important?",
    answer:
      "HTML (Hyper Text Markup Language) is the standard markup language for creating web pages. It defines the structure of content on the web. HTML is the foundation of all web development, working alongside CSS for styling and JavaScript for interactivity.",
  },
  {
    question: "What is the difference between HTML and HTML5?",
    answer:
      "HTML5 is the latest version of HTML, introducing new semantic elements (like <article>, <section>, <nav>), new input types (date, color, range), support for audio/video without plugins, canvas for graphics, and improved APIs for web applications.",
  },
  {
    question: "What are the basic structure tags of an HTML document?",
    answer:
      "Every HTML document has a basic structure: <!DOCTYPE html> at the top, followed by <html>, which contains <head> (with <title>, meta tags, links to CSS) and <body> (where visible content is placed).",
  },
  {
    question: "What is the difference between block-level and inline elements?",
    answer:
      "Block-level elements (like <div>, <p>, <h1>) start on a new line and take up full width. Inline elements (like <span>, <a>, <img>) do not start on a new line and only take up as much space as needed.",
  },
  {
    question: "How do you create a hyperlink in HTML?",
    answer:
      "Use the <a> tag with the href attribute: <a href='https://example.com'>Link text</a>. You can also add target='_blank' to open in a new tab.",
  },
  {
    question: "What is the role of the 'alt' attribute in images?",
    answer:
      "The alt attribute provides alternative text for an image if it cannot be displayed. It is essential for accessibility (screen readers) and improves SEO.",
  },
  {
    question: "What is a semantic HTML element and why use it?",
    answer:
      "Semantic elements (like <header>, <footer>, <article>, <nav>) clearly describe their meaning to both the browser and developer. They improve accessibility, SEO, and maintainability of code.",
  },
  {
    question: "How do you create a form in HTML?",
    answer:
      "Use the <form> tag with action (where to send data) and method (GET or POST). Inside, use input elements like text, password, submit, etc., with labels for usability.",
  },
];

// ========================== COMPONENT ==========================
export default function HtmlMcq() {
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
        "@id": "https://CodeSkipper.in/mcq/html",
        "url": "https://CodeSkipper.in/mcq/html",
        "name": "HTML MCQs | Code Skipper",
        "description":
          "Practice 130+ HTML multiple-choice questions covering basics, tags, attributes, forms, tables, lists, links, media, semantics, HTML5, accessibility, DOM, events, and more.",
        "about": { "@type": "Thing", "name": "HTML MCQ" },
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
              "name": "HTML MCQs",
              "item": "https://CodeSkipper.in/mcq/html",
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
        "@id": "https://CodeSkipper.in/mcq/html#course",
        "name": "HTML MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for HTML exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "HTML" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/html#faq",
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
        <title>HTML MCQs 2026 | 130+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 130+ HTML multiple-choice questions with answers. Covers basics, tags, attributes, forms, tables, lists, links, media, semantics, HTML5, accessibility, DOM, events, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="HTML, MCQs, Tags, Attributes, Forms, Tables, Semantics, HTML5, Accessibility, DOM, Events, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/html" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/html" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/html" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/html" />
        <meta property="og:title" content="HTML MCQs 2026 | 130+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 130+ HTML multiple-choice questions covering basics, tags, attributes, forms, tables, lists, links, media, semantics, HTML5, accessibility, DOM, events, and more."
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
        <meta name="twitter:title" content="HTML MCQs 2026 | 130+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 130+ HTML multiple-choice questions covering basics, tags, attributes, forms, tables, lists, links, media, semantics, HTML5, accessibility, DOM, events, and more."
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
              🌐 130+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              HTML <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-6">
              Master HTML with 130+ curated MCQs covering basics, tags, attributes, forms,
              tables, lists, links, media, semantics, HTML5, accessibility, DOM, events, and more.
              Perfect for exams, interviews, and placements.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">13 Topics</span>
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
            Explore HTML Topics
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
            HTML MCQs
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
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">🔗</span>
            Related Resources
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "HTML Tutorial", href: "/tutorials/html", icon: "📖" },
              { title: "HTML Interview Questions", href: "/interview/html", icon: "💼" },
              { title: "HTML Notes & Cheat Sheet", href: "/notes/html", icon: "📝" },
              { title: "CSS MCQs", href: "/mcq/css", icon: "🎨" },
              { title: "JavaScript MCQs", href: "/mcq/javascript", icon: "⚡" },
              { title: "Web Development Guide", href: "/guides/web-dev", icon: "🌐" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">{item.title}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Master HTML?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Explore our full collection of tutorials, notes, and interview guides to
            accelerate your learning journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tutorials/html"
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Start Learning
            </Link>
            <Link
              href="/roadmap/html"
              className="px-8 py-3 bg-blue-500/30 text-white font-medium rounded-xl hover:bg-blue-500/50 transition-colors border border-white/20"
            >
              View Roadmap
            </Link>
          </div>
        </section>
      </main>
    </CourseLayout>
  );
}