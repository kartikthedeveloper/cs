import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (120+ Unique) ==========================

const questionsData = [
  // ----- AngularJS Basics (6) -----
  {
    id: 1,
    topic: "AngularJS Basics",
    question: "What is AngularJS?",
    options: [
      { label: "A", text: "A JavaScript framework for building dynamic web applications" },
      { label: "B", text: "A CSS framework for styling web pages" },
      { label: "C", text: "A server-side programming language" },
      { label: "D", text: "A database management system" },
    ],
    answer: "A. A JavaScript framework for building dynamic web applications",
  },
  {
    id: 2,
    topic: "AngularJS Basics",
    question: "Who developed AngularJS?",
    options: [
      { label: "A", text: "Microsoft" },
      { label: "B", text: "Google" },
      { label: "C", text: "Facebook" },
      { label: "D", text: "Amazon" },
    ],
    answer: "B. Google",
  },
  {
    id: 3,
    topic: "AngularJS Basics",
    question: "Which directive is used to bootstrap an AngularJS application?",
    options: [
      { label: "A", text: "ng-boot" },
      { label: "B", text: "ng-app" },
      { label: "C", text: "ng-init" },
      { label: "D", text: "ng-model" },
    ],
    answer: "B. ng-app",
  },
  {
    id: 4,
    topic: "AngularJS Basics",
    question: "AngularJS is based on which architectural pattern?",
    options: [
      { label: "A", text: "MVC (Model-View-Controller)" },
      { label: "B", text: "MVVM (Model-View-ViewModel)" },
      { label: "C", text: "MVP (Model-View-Presenter)" },
      { label: "D", text: "Microservices" },
    ],
    answer: "A. MVC (Model-View-Controller)",
  },
  {
    id: 5,
    topic: "AngularJS Basics",
    question: "Which of the following is true about AngularJS?",
    options: [
      { label: "A", text: "It is a front-end framework" },
      { label: "B", text: "It supports two-way data binding" },
      { label: "C", text: "It uses dependency injection" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 6,
    topic: "AngularJS Basics",
    question: "What is the purpose of the 'ng-model' directive?",
    options: [
      { label: "A", text: "To bind HTML elements to application data" },
      { label: "B", text: "To initialize an AngularJS app" },
      { label: "C", text: "To repeat an HTML element for each item in a collection" },
      { label: "D", text: "To conditionally show or hide elements" },
    ],
    answer: "A. To bind HTML elements to application data",
  },

  // ----- Directives (6) -----
  {
    id: 7,
    topic: "Directives",
    question: "Which directive is used to repeat an element for each item in an array?",
    options: [
      { label: "A", text: "ng-repeat" },
      { label: "B", text: "ng-foreach" },
      { label: "C", text: "ng-loop" },
      { label: "D", text: "ng-iterate" },
    ],
    answer: "A. ng-repeat",
  },
  {
    id: 8,
    topic: "Directives",
    question: "What does the 'ng-if' directive do?",
    options: [
      { label: "A", text: "It removes or recreates an element based on a condition" },
      { label: "B", text: "It hides or shows an element without removing it" },
      { label: "C", text: "It binds a model to an input field" },
      { label: "D", text: "It initializes a scope variable" },
    ],
    answer: "A. It removes or recreates an element based on a condition",
  },
  {
    id: 9,
    topic: "Directives",
    question: "Which directive is used to hide an element if a condition is true?",
    options: [
      { label: "A", text: "ng-show" },
      { label: "B", text: "ng-hide" },
      { label: "C", text: "ng-if" },
      { label: "D", text: "ng-visible" },
    ],
    answer: "B. ng-hide",
  },
  {
    id: 10,
    topic: "Directives",
    question: "What is the difference between ng-show and ng-if?",
    options: [
      { label: "A", text: "ng-show hides the element using CSS, ng-if removes the element from DOM" },
      { label: "B", text: "ng-show removes the element, ng-if hides it" },
      { label: "C", text: "Both are identical" },
      { label: "D", text: "ng-show is used for arrays, ng-if for objects" },
    ],
    answer: "A. ng-show hides the element using CSS, ng-if removes the element from DOM",
  },
  {
    id: 11,
    topic: "Directives",
    question: "Which directive is used to bind HTML content to a model property?",
    options: [
      { label: "A", text: "ng-bind" },
      { label: "B", text: "ng-bind-html" },
      { label: "C", text: "ng-html" },
      { label: "D", text: "ng-model" },
    ],
    answer: "B. ng-bind-html",
  },
  {
    id: 12,
    topic: "Directives",
    question: "Which directive is used to execute an expression when a user clicks an element?",
    options: [
      { label: "A", text: "ng-click" },
      { label: "B", text: "ng-change" },
      { label: "C", text: "ng-submit" },
      { label: "D", text: "ng-mouseover" },
    ],
    answer: "A. ng-click",
  },

  // ----- Scopes (6) -----
  {
    id: 13,
    topic: "Scopes",
    question: "How many $rootScope can an AngularJS application have?",
    options: [
      { label: "A", text: "Two" },
      { label: "B", text: "Infinity" },
      { label: "C", text: "One" },
      { label: "D", text: "Zero" },
    ],
    answer: "C. One",
  },
  {
    id: 14,
    topic: "Scopes",
    question: "What is the relationship between $rootScope and $scope?",
    options: [
      { label: "A", text: "$rootScope is the parent of all $scopes" },
      { label: "B", text: "$scope is the parent of $rootScope" },
      { label: "C", text: "They are unrelated" },
      { label: "D", text: "$rootScope is a child of $scope" },
    ],
    answer: "A. $rootScope is the parent of all $scopes",
  },
  {
    id: 15,
    topic: "Scopes",
    question: "How do you create a new child scope in AngularJS?",
    options: [
      { label: "A", text: "Using the $new() method" },
      { label: "B", text: "Using the $create() method" },
      { label: "C", text: "Using the $scope() method" },
      { label: "D", text: "Automatically when a controller is created" },
    ],
    answer: "D. Automatically when a controller is created",
  },
  {
    id: 16,
    topic: "Scopes",
    question: "What is scope inheritance in AngularJS?",
    options: [
      { label: "A", text: "Child scopes inherit properties from parent scopes" },
      { label: "B", text: "Parent scopes inherit from child scopes" },
      { label: "C", text: "Scopes do not inherit" },
      { label: "D", text: "Only $rootScope inherits" },
    ],
    answer: "A. Child scopes inherit properties from parent scopes",
  },
  {
    id: 17,
    topic: "Scopes",
    question: "Which method is used to propagate changes from a child scope to parent?",
    options: [
      { label: "A", text: "$emit" },
      { label: "B", text: "$broadcast" },
      { label: "C", text: "$on" },
      { label: "D", text: "$watch" },
    ],
    answer: "A. $emit (sends event upwards to parent scopes)",
  },
  {
    id: 18,
    topic: "Scopes",
    question: "What is the purpose of $apply in AngularJS?",
    options: [
      { label: "A", text: "To manually trigger a digest cycle" },
      { label: "B", text: "To create a new scope" },
      { label: "C", text: "To destroy a scope" },
      { label: "D", text: "To bind a model" },
    ],
    answer: "A. To manually trigger a digest cycle",
  },

  // ----- Data Binding (6) -----
  {
    id: 19,
    topic: "Data Binding",
    question: "What type of data binding does AngularJS support?",
    options: [
      { label: "A", text: "One-way binding" },
      { label: "B", text: "Two-way binding" },
      { label: "C", text: "Both one-way and two-way" },
      { label: "D", text: "No data binding" },
    ],
    answer: "C. Both one-way and two-way",
  },
  {
    id: 20,
    topic: "Data Binding",
    question: "Which directive enables two-way data binding?",
    options: [
      { label: "A", text: "ng-bind" },
      { label: "B", text: "ng-model" },
      { label: "C", text: "ng-value" },
      { label: "D", text: "ng-data" },
    ],
    answer: "B. ng-model",
  },
  {
    id: 21,
    topic: "Data Binding",
    question: "How do you bind a model property to an HTML element in AngularJS?",
    options: [
      { label: "A", text: "Using double curly braces {{ }}" },
      { label: "B", text: "Using the ng-bind directive" },
      { label: "C", text: "Using the ng-model directive" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 22,
    topic: "Data Binding",
    question: "What is the difference between ng-bind and interpolation {{ }}?",
    options: [
      { label: "A", text: "ng-bind prevents flickering, interpolation may show raw expression briefly" },
      { label: "B", text: "Interpolation is faster" },
      { label: "C", text: "ng-bind is only for attributes" },
      { label: "D", text: "There is no difference" },
    ],
    answer: "A. ng-bind prevents flickering, interpolation may show raw expression briefly",
  },
  {
    id: 23,
    topic: "Data Binding",
    question: "What is one-way binding in AngularJS?",
    options: [
      { label: "A", text: "Data flows from model to view only" },
      { label: "B", text: "Data flows from view to model only" },
      { label: "C", text: "Data flows both ways" },
      { label: "D", text: "Data does not flow" },
    ],
    answer: "A. Data flows from model to view only",
  },
  {
    id: 24,
    topic: "Data Binding",
    question: "Which of the following is a disadvantage of two-way binding?",
    options: [
      { label: "A", text: "Can cause performance issues with large datasets" },
      { label: "B", text: "It is not supported in AngularJS" },
      { label: "C", text: "It requires extra code" },
      { label: "D", text: "It only works with strings" },
    ],
    answer: "A. Can cause performance issues with large datasets",
  },

  // ----- Dependency Injection (6) -----
  {
    id: 25,
    topic: "Dependency Injection",
    question: "What is Dependency Injection in AngularJS?",
    options: [
      { label: "A", text: "A design pattern where objects are passed their dependencies rather than creating them internally" },
      { label: "B", text: "A method to inject HTML into the DOM" },
      { label: "C", text: "A way to create directives" },
      { label: "D", text: "A technique for optimizing performance" },
    ],
    answer: "A. A design pattern where objects are passed their dependencies rather than creating them internally",
  },
  {
    id: 26,
    topic: "Dependency Injection",
    question: "How is dependency injection implemented in AngularJS?",
    options: [
      { label: "A", text: "Using injectable services and factories" },
      { label: "B", text: "Using global variables" },
      { label: "C", text: "Using JavaScript prototypes" },
      { label: "D", text: "Using CSS classes" },
    ],
    answer: "A. Using injectable services and factories",
  },
  {
    id: 27,
    topic: "Dependency Injection",
    question: "Which of the following can be injected as a dependency in AngularJS?",
    options: [
      { label: "A", text: "Factory" },
      { label: "B", text: "Value" },
      { label: "C", text: "Constant" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 28,
    topic: "Dependency Injection",
    question: "What is the purpose of the $injector in AngularJS?",
    options: [
      { label: "A", text: "It is used to retrieve and instantiate injectable objects" },
      { label: "B", text: "It is used to inject HTML" },
      { label: "C", text: "It is used to create directives" },
      { label: "D", text: "It is used to handle events" },
    ],
    answer: "A. It is used to retrieve and instantiate injectable objects",
  },
  {
    id: 29,
    topic: "Dependency Injection",
    question: "Which service is used to share data across controllers?",
    options: [
      { label: "A", text: "$rootScope" },
      { label: "B", text: "$scope" },
      { label: "C", text: "$http" },
      { label: "D", text: "$location" },
    ],
    answer: "A. $rootScope",
  },
  {
    id: 30,
    topic: "Dependency Injection",
    question: "How do you define a service in AngularJS?",
    options: [
      { label: "A", text: "Using module.service() or module.factory()" },
      { label: "B", text: "Using module.directive()" },
      { label: "C", text: "Using module.controller()" },
      { label: "D", text: "Using module.config()" },
    ],
    answer: "A. Using module.service() or module.factory()",
  },

  // ----- Filters (6) -----
  {
    id: 31,
    topic: "Filters",
    question: "What is the purpose of filters in AngularJS?",
    options: [
      { label: "A", text: "To format data for display" },
      { label: "B", text: "To filter arrays based on conditions" },
      { label: "C", text: "To sort data" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 32,
    topic: "Filters",
    question: "Which filter is used to convert a string to lowercase?",
    options: [
      { label: "A", text: "lowercase" },
      { label: "B", text: "lower" },
      { label: "C", text: "tolower" },
      { label: "D", text: "case" },
    ],
    answer: "A. lowercase",
  },
  {
    id: 33,
    topic: "Filters",
    question: "Which filter is used to format dates?",
    options: [
      { label: "A", text: "date" },
      { label: "B", text: "time" },
      { label: "C", text: "datetime" },
      { label: "D", text: "format" },
    ],
    answer: "A. date",
  },
  {
    id: 34,
    topic: "Filters",
    question: "How do you apply a filter in an AngularJS template?",
    options: [
      { label: "A", text: "Using the pipe character |" },
      { label: "B", text: "Using the filter method" },
      { label: "C", text: "Using the ng-filter directive" },
      { label: "D", text: "Using the filter attribute" },
    ],
    answer: "A. Using the pipe character |",
  },
  {
    id: 35,
    topic: "Filters",
    question: "Which filter is used to limit the number of items in an array?",
    options: [
      { label: "A", text: "limitTo" },
      { label: "B", text: "slice" },
      { label: "C", text: "take" },
      { label: "D", text: "first" },
    ],
    answer: "A. limitTo",
  },
  {
    id: 36,
    topic: "Filters",
    question: "Can you chain multiple filters in AngularJS?",
    options: [
      { label: "A", text: "Yes, using multiple pipe characters" },
      { label: "B", text: "No, only one filter per expression" },
      { label: "C", text: "Yes, using commas" },
      { label: "D", text: "No, filters cannot be combined" },
    ],
    answer: "A. Yes, using multiple pipe characters",
  },

  // ----- Routing (6) -----
  {
    id: 37,
    topic: "Routing",
    question: "Which module is used for routing in AngularJS?",
    options: [
      { label: "A", text: "ngRoute" },
      { label: "B", text: "ngRouter" },
      { label: "C", text: "ngRouting" },
      { label: "D", text: "RouteModule" },
    ],
    answer: "A. ngRoute",
  },
  {
    id: 38,
    topic: "Routing",
    question: "What is the $routeProvider used for?",
    options: [
      { label: "A", text: "To configure routes in AngularJS" },
      { label: "B", text: "To provide route parameters" },
      { label: "C", text: "To handle route events" },
      { label: "D", text: "All of the above" },
    ],
    answer: "A. To configure routes in AngularJS",
  },
  {
    id: 39,
    topic: "Routing",
    question: "Which directive is used to render the view for a route?",
    options: [
      { label: "A", text: "ng-view" },
      { label: "B", text: "ng-route" },
      { label: "C", text: "ng-template" },
      { label: "D", text: "ng-partial" },
    ],
    answer: "A. ng-view",
  },
  {
    id: 40,
    topic: "Routing",
    question: "What is deep linking in AngularJS?",
    options: [
      { label: "A", text: "Encoding the application state in the URL to allow bookmarking" },
      { label: "B", text: "Linking to external websites" },
      { label: "C", text: "Using HTML5 history API" },
      { label: "D", text: "Linking to elements within a page" },
    ],
    answer: "A. Encoding the application state in the URL to allow bookmarking",
  },
  {
    id: 41,
    topic: "Routing",
    question: "Which method is used to navigate to a different route programmatically?",
    options: [
      { label: "A", text: "$location.path()" },
      { label: "B", text: "$route.go()" },
      { label: "C", text: "$router.navigate()" },
      { label: "D", text: "window.location" },
    ],
    answer: "A. $location.path()",
  },
  {
    id: 42,
    topic: "Routing",
    question: "What is the role of $routeParams?",
    options: [
      { label: "A", text: "To access route parameters from the URL" },
      { label: "B", text: "To configure routes" },
      { label: "C", text: "To define route events" },
      { label: "D", text: "To render the view" },
    ],
    answer: "A. To access route parameters from the URL",
  },

  // ----- Forms & Validation (6) -----
  {
    id: 43,
    topic: "Forms & Validation",
    question: "Which directive is used to create a form in AngularJS?",
    options: [
      { label: "A", text: "ng-form" },
      { label: "B", text: "form" },
      { label: "C", text: "ng-form" },
      { label: "D", text: "Both A and B" },
    ],
    answer: "D. Both A and B",
  },
  {
    id: 44,
    topic: "Forms & Validation",
    question: "What is the purpose of the 'novalidate' attribute on a form?",
    options: [
      { label: "A", text: "To disable browser validation" },
      { label: "B", text: "To enable AngularJS validation" },
      { label: "C", text: "To reset the form" },
      { label: "D", text: "To submit the form" },
    ],
    answer: "A. To disable browser validation",
  },
  {
    id: 45,
    topic: "Forms & Validation",
    question: "Which property of a form controller indicates whether the form is valid?",
    options: [
      { label: "A", text: "$valid" },
      { label: "B", text: "$invalid" },
      { label: "C", text: "$pristine" },
      { label: "D", text: "$dirty" },
    ],
    answer: "A. $valid",
  },
  {
    id: 46,
    topic: "Forms & Validation",
    question: "What does $dirty mean on a form control?",
    options: [
      { label: "A", text: "The user has interacted with the control" },
      { label: "B", text: "The control is invalid" },
      { label: "C", text: "The control has not been touched" },
      { label: "D", text: "The control is disabled" },
    ],
    answer: "A. The user has interacted with the control",
  },
  {
    id: 47,
    topic: "Forms & Validation",
    question: "Which directive is used for AngularJS validation?",
    options: [
      { label: "A", text: "ng-required" },
      { label: "B", text: "ng-minlength" },
      { label: "C", text: "ng-pattern" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 48,
    topic: "Forms & Validation",
    question: "How do you display error messages for a form control?",
    options: [
      { label: "A", text: "Using ng-show with formName.fieldName.$error" },
      { label: "B", text: "Using ng-messages" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "Neither" },
    ],
    answer: "C. Both A and B",
  },

  // ----- Services & Factories (6) -----
  {
    id: 49,
    topic: "Services & Factories",
    question: "What is the difference between a service and a factory in AngularJS?",
    options: [
      { label: "A", text: "A service is a constructor function, a factory is a function that returns an object" },
      { label: "B", text: "A factory is a constructor, a service returns an object" },
      { label: "C", text: "There is no difference" },
      { label: "D", text: "Service is synchronous, factory is asynchronous" },
    ],
    answer: "A. A service is a constructor function, a factory is a function that returns an object",
  },
  {
    id: 50,
    topic: "Services & Factories",
    question: "What is the $http service used for?",
    options: [
      { label: "A", text: "To make AJAX requests" },
      { label: "B", text: "To handle HTTP routing" },
      { label: "C", text: "To parse HTML" },
      { label: "D", text: "To manage cookies" },
    ],
    answer: "A. To make AJAX requests",
  },
  {
    id: 51,
    topic: "Services & Factories",
    question: "Which service is used to interact with the browser's location?",
    options: [
      { label: "A", text: "$location" },
      { label: "B", text: "$window" },
      { label: "C", text: "$document" },
      { label: "D", text: "$browser" },
    ],
    answer: "A. $location",
  },
  {
    id: 52,
    topic: "Services & Factories",
    question: "What is the purpose of the $timeout service?",
    options: [
      { label: "A", text: "To execute a function after a delay" },
      { label: "B", text: "To cancel a timeout" },
      { label: "C", text: "To clear intervals" },
      { label: "D", text: "All of the above" },
    ],
    answer: "A. To execute a function after a delay",
  },
  {
    id: 53,
    topic: "Services & Factories",
    question: "How do you create a constant in AngularJS?",
    options: [
      { label: "A", text: "Using module.constant()" },
      { label: "B", text: "Using module.value()" },
      { label: "C", text: "Using module.factory()" },
      { label: "D", text: "Using module.provider()" },
    ],
    answer: "A. Using module.constant()",
  },
  {
    id: 54,
    topic: "Services & Factories",
    question: "What is a provider in AngularJS?",
    options: [
      { label: "A", text: "A configurable service" },
      { label: "B", text: "A type of directive" },
      { label: "C", text: "A filter" },
      { label: "D", text: "A controller" },
    ],
    answer: "A. A configurable service",
  },

  // ----- Controllers (6) -----
  {
    id: 55,
    topic: "Controllers",
    question: "What is the role of a controller in AngularJS?",
    options: [
      { label: "A", text: "To control the data and logic for a view" },
      { label: "B", text: "To define HTML templates" },
      { label: "C", text: "To configure routing" },
      { label: "D", text: "To create services" },
    ],
    answer: "A. To control the data and logic for a view",
  },
  {
    id: 56,
    topic: "Controllers",
    question: "How do you define a controller in AngularJS?",
    options: [
      { label: "A", text: "Using module.controller()" },
      { label: "B", text: "Using module.directive()" },
      { label: "C", text: "Using module.service()" },
      { label: "D", text: "Using module.filter()" },
    ],
    answer: "A. Using module.controller()",
  },
  {
    id: 57,
    topic: "Controllers",
    question: "What is the purpose of 'controller as' syntax?",
    options: [
      { label: "A", text: "To alias the controller instance in the view" },
      { label: "B", text: "To inject dependencies" },
      { label: "C", text: "To define controller methods" },
      { label: "D", text: "To handle events" },
    ],
    answer: "A. To alias the controller instance in the view",
  },
  {
    id: 58,
    topic: "Controllers",
    question: "Can a controller be used in multiple views?",
    options: [
      { label: "A", text: "Yes, it can be reused" },
      { label: "B", text: "No, each view needs its own controller" },
      { label: "C", text: "Only if using the same module" },
      { label: "D", text: "Only if using $rootScope" },
    ],
    answer: "A. Yes, it can be reused",
  },
  {
    id: 59,
    topic: "Controllers",
    question: "What is the $scope object in a controller?",
    options: [
      { label: "A", text: "It is the context for the view data" },
      { label: "B", text: "It is the global object" },
      { label: "C", text: "It is a service" },
      { label: "D", text: "It is a directive" },
    ],
    answer: "A. It is the context for the view data",
  },
  {
    id: 60,
    topic: "Controllers",
    question: "How do you share data between two controllers?",
    options: [
      { label: "A", text: "Using a service or factory" },
      { label: "B", text: "Using $rootScope" },
      { label: "C", text: "Using events" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },

  // ----- Modules (6) -----
  {
    id: 61,
    topic: "Modules",
    question: "What is a module in AngularJS?",
    options: [
      { label: "A", text: "A container for controllers, services, directives, etc." },
      { label: "B", text: "A separate HTML file" },
      { label: "C", text: "A CSS stylesheet" },
      { label: "D", text: "A third-party library" },
    ],
    answer: "A. A container for controllers, services, directives, etc.",
  },
  {
    id: 62,
    topic: "Modules",
    question: "How do you create a module in AngularJS?",
    options: [
      { label: "A", text: "Using angular.module()" },
      { label: "B", text: "Using module.create()" },
      { label: "C", text: "Using ng-app directive" },
      { label: "D", text: "Using $module" },
    ],
    answer: "A. Using angular.module()",
  },
  {
    id: 63,
    topic: "Modules",
    question: "How do you inject a module as a dependency?",
    options: [
      { label: "A", text: "Passing it as an array argument to angular.module()" },
      { label: "B", text: "Using the require attribute" },
      { label: "C", text: "Using the import statement" },
      { label: "D", text: "It is automatic" },
    ],
    answer: "A. Passing it as an array argument to angular.module()",
  },
  {
    id: 64,
    topic: "Modules",
    question: "What is the purpose of module.config()?",
    options: [
      { label: "A", text: "To configure providers and services" },
      { label: "B", text: "To define controllers" },
      { label: "C", text: "To register directives" },
      { label: "D", text: "To set up routing" },
    ],
    answer: "A. To configure providers and services",
  },
  {
    id: 65,
    topic: "Modules",
    question: "What is the difference between module.run() and module.config()?",
    options: [
      { label: "A", text: "run() is executed after config() and can use services" },
      { label: "B", text: "config() is executed after run()" },
      { label: "C", text: "Both are executed at the same time" },
      { label: "D", text: "run() is for configuration, config() for initialization" },
    ],
    answer: "A. run() is executed after config() and can use services",
  },
  {
    id: 66,
    topic: "Modules",
    question: "Can you have multiple modules in one AngularJS application?",
    options: [
      { label: "A", text: "Yes, by using dependency injection" },
      { label: "B", text: "No, only one module per app" },
      { label: "C", text: "Yes, but they cannot interact" },
      { label: "D", text: "No, modules are global" },
    ],
    answer: "A. Yes, by using dependency injection",
  },

  // ----- Directives Advanced (6) -----
  {
    id: 67,
    topic: "Directives",
    question: "How do you create a custom directive in AngularJS?",
    options: [
      { label: "A", text: "Using module.directive()" },
      { label: "B", text: "Using module.controller()" },
      { label: "C", text: "Using module.service()" },
      { label: "D", text: "Using module.filter()" },
    ],
    answer: "A. Using module.directive()",
  },
  {
    id: 68,
    topic: "Directives",
    question: "What is the 'restrict' property in a directive definition?",
    options: [
      { label: "A", text: "It defines how the directive can be used: element, attribute, class, or comment" },
      { label: "B", text: "It restricts the directive to only work on certain elements" },
      { label: "C", text: "It specifies the scope of the directive" },
      { label: "D", text: "It defines the template URL" },
    ],
    answer: "A. It defines how the directive can be used: element, attribute, class, or comment",
  },
  {
    id: 69,
    topic: "Directives",
    question: "What is the 'scope' property in a directive?",
    options: [
      { label: "A", text: "It defines whether the directive has its own scope or shares parent scope" },
      { label: "B", text: "It defines the template" },
      { label: "C", text: "It defines the controller" },
      { label: "D", text: "It defines the link function" },
    ],
    answer: "A. It defines whether the directive has its own scope or shares parent scope",
  },
  {
    id: 70,
    topic: "Directives",
    question: "What is the link function in a directive?",
    options: [
      { label: "A", text: "It manipulates the DOM and handles events" },
      { label: "B", text: "It defines the template" },
      { label: "C", text: "It configures the scope" },
      { label: "D", text: "It injects dependencies" },
    ],
    answer: "A. It manipulates the DOM and handles events",
  },
  {
    id: 71,
    topic: "Directives",
    question: "What is the difference between '=' and '@' in the scope binding of a directive?",
    options: [
      { label: "A", text: "'=' is two-way binding, '@' is one-way binding of a string attribute" },
      { label: "B", text: "'@' is two-way binding, '=' is one-way" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "'=' is for objects, '@' for strings" },
    ],
    answer: "A. '=' is two-way binding, '@' is one-way binding of a string attribute",
  },
  {
    id: 72,
    topic: "Directives",
    question: "Which directive is used to transclude content?",
    options: [
      { label: "A", text: "transclude: true" },
      { label: "B", text: "ng-transclude" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "None" },
    ],
    answer: "C. Both A and B",
  },

  // ----- Events (6) -----
  {
    id: 73,
    topic: "Events",
    question: "How do you handle a click event in AngularJS?",
    options: [
      { label: "A", text: "Using ng-click directive" },
      { label: "B", text: "Using onclick attribute" },
      { label: "C", text: "Using addEventListener" },
      { label: "D", text: "Using ng-mouseover" },
    ],
    answer: "A. Using ng-click directive",
  },
  {
    id: 74,
    topic: "Events",
    question: "What is the ng-change directive used for?",
    options: [
      { label: "A", text: "To execute an expression when the model changes" },
      { label: "B", text: "To execute on click" },
      { label: "C", text: "To execute on mouseover" },
      { label: "D", text: "To execute on keyup" },
    ],
    answer: "A. To execute an expression when the model changes",
  },
  {
    id: 75,
    topic: "Events",
    question: "Which directive is used to prevent default behavior of an event?",
    options: [
      { label: "A", text: "ng-prevent" },
      { label: "B", text: "ng-default" },
      { label: "C", text: "ng-stop" },
      { label: "D", text: "There is no built-in directive, you can use $event.preventDefault()" },
    ],
    answer: "D. There is no built-in directive, you can use $event.preventDefault()",
  },
  {
    id: 76,
    topic: "Events",
    question: "How do you pass the $event object to a function in AngularJS?",
    options: [
      { label: "A", text: "By including $event in the function call" },
      { label: "B", text: "It is automatically passed" },
      { label: "C", text: "By using event parameter" },
      { label: "D", text: "Not possible" },
    ],
    answer: "A. By including $event in the function call",
  },
  {
    id: 77,
    topic: "Events",
    question: "What is the purpose of the ng-submit directive?",
    options: [
      { label: "A", text: "To handle form submission" },
      { label: "B", text: "To submit the form via AJAX" },
      { label: "C", text: "To reset the form" },
      { label: "D", text: "To validate the form" },
    ],
    answer: "A. To handle form submission",
  },
  {
    id: 78,
    topic: "Events",
    question: "Which directive is used to handle keyboard events like keyup?",
    options: [
      { label: "A", text: "ng-keyup" },
      { label: "B", text: "ng-keypress" },
      { label: "C", text: "ng-keydown" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },

  // ----- HTTP & AJAX (6) -----
  {
    id: 79,
    topic: "HTTP & AJAX",
    question: "Which service is used to make HTTP requests in AngularJS?",
    options: [
      { label: "A", text: "$http" },
      { label: "B", text: "$ajax" },
      { label: "C", text: "$request" },
      { label: "D", text: "$fetch" },
    ],
    answer: "A. $http",
  },
  {
    id: 80,
    topic: "HTTP & AJAX",
    question: "What is the $http.get() method used for?",
    options: [
      { label: "A", text: "To send a GET request to a server" },
      { label: "B", text: "To send a POST request" },
      { label: "C", text: "To update data" },
      { label: "D", text: "To delete data" },
    ],
    answer: "A. To send a GET request to a server",
  },
  {
    id: 81,
    topic: "HTTP & AJAX",
    question: "How do you handle errors in $http?",
    options: [
      { label: "A", text: "Using .catch() method" },
      { label: "B", text: "Using .error() callback" },
      { label: "C", text: "Using .fail() method" },
      { label: "D", text: "Using try-catch" },
    ],
    answer: "A. Using .catch() method (or .error for older versions)",
  },
  {
    id: 82,
    topic: "HTTP & AJAX",
    question: "What is the $http.defaults used for?",
    options: [
      { label: "A", text: "To configure default headers and settings for all HTTP requests" },
      { label: "B", text: "To set default timeout" },
      { label: "C", text: "To configure interceptors" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 83,
    topic: "HTTP & AJAX",
    question: "How do you set a custom header in $http?",
    options: [
      { label: "A", text: "Using the headers property in the config object" },
      { label: "B", text: "Using $http.headers" },
      { label: "C", text: "Using $http.setHeader()" },
      { label: "D", text: "Not possible" },
    ],
    answer: "A. Using the headers property in the config object",
  },
  {
    id: 84,
    topic: "HTTP & AJAX",
    question: "What is the purpose of $http interceptors?",
    options: [
      { label: "A", text: "To globally handle requests and responses" },
      { label: "B", text: "To cache responses" },
      { label: "C", text: "To transform data" },
      { label: "D", text: "To handle authentication" },
    ],
    answer: "A. To globally handle requests and responses",
  },

  // ----- Internationalization (i18n) (6) -----
  {
    id: 85,
    topic: "Internationalization",
    question: "Which module is used for internationalization in AngularJS?",
    options: [
      { label: "A", text: "angular-i18n" },
      { label: "B", text: "ngI18n" },
      { label: "C", text: "i18n" },
      { label: "D", text: "angular-translate" },
    ],
    answer: "A. angular-i18n",
  },
  {
    id: 86,
    topic: "Internationalization",
    question: "What is the $locale service used for?",
    options: [
      { label: "A", text: "To get locale-specific information like date, number formats" },
      { label: "B", text: "To set the language" },
      { label: "C", text: "To translate strings" },
      { label: "D", text: "To detect browser language" },
    ],
    answer: "A. To get locale-specific information like date, number formats",
  },
  {
    id: 87,
    topic: "Internationalization",
    question: "How can you change the language in AngularJS?",
    options: [
      { label: "A", text: "By loading the appropriate locale script" },
      { label: "B", text: "Using $locale.change()" },
      { label: "C", text: "Using $rootScope.language" },
      { label: "D", text: "It is not possible" },
    ],
    answer: "A. By loading the appropriate locale script",
  },
  {
    id: 88,
    topic: "Internationalization",
    question: "Which filter is affected by locale settings?",
    options: [
      { label: "A", text: "date" },
      { label: "B", text: "currency" },
      { label: "C", text: "number" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 89,
    topic: "Internationalization",
    question: "What is the purpose of the ngPluralize directive?",
    options: [
      { label: "A", text: "To handle pluralization of strings based on locale" },
      { label: "B", text: "To pluralize numbers" },
      { label: "C", text: "To format numbers" },
      { label: "D", text: "To translate text" },
    ],
    answer: "A. To handle pluralization of strings based on locale",
  },
  {
    id: 90,
    topic: "Internationalization",
    question: "Can you use AngularJS i18n with custom translations?",
    options: [
      { label: "A", text: "Yes, by using filters or directives" },
      { label: "B", text: "No, only built-in locale" },
      { label: "C", text: "Yes, but only with server-side support" },
      { label: "D", text: "No, it's not supported" },
    ],
    answer: "A. Yes, by using filters or directives",
  },

  // ----- Performance & Best Practices (6) -----
  {
    id: 91,
    topic: "Performance & Best Practices",
    question: "What is the recommended way to watch models for performance?",
    options: [
      { label: "A", text: "Use $watch with deep equality only when necessary" },
      { label: "B", text: "Use $watchCollection for arrays" },
      { label: "C", text: "Avoid unnecessary watches" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 92,
    topic: "Performance & Best Practices",
    question: "What is the purpose of one-time binding in AngularJS (::) )?",
    options: [
      { label: "A", text: "To bind once and not update, improving performance" },
      { label: "B", text: "To bind in both directions" },
      { label: "C", text: "To bind only on initialization" },
      { label: "D", text: "To disable binding" },
    ],
    answer: "A. To bind once and not update, improving performance",
  },
  {
    id: 93,
    topic: "Performance & Best Practices",
    question: "How can you reduce the number of digest cycles?",
    options: [
      { label: "A", text: "Use $applyAsync to batch updates" },
      { label: "B", text: "Use ng-if instead of ng-show" },
      { label: "C", text: "Use one-time binding" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 94,
    topic: "Performance & Best Practices",
    question: "What is the best practice for organizing AngularJS code?",
    options: [
      { label: "A", text: "Use the 'Controller As' syntax" },
      { label: "B", text: "Keep controllers thin and services fat" },
      { label: "C", text: "Use modules to organize components" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 95,
    topic: "Performance & Best Practices",
    question: "What is the purpose of $destroy event?",
    options: [
      { label: "A", text: "To clean up resources when a scope is destroyed" },
      { label: "B", text: "To destroy the application" },
      { label: "C", text: "To remove all watchers" },
      { label: "D", text: "To reset the scope" },
    ],
    answer: "A. To clean up resources when a scope is destroyed",
  },
  {
    id: 96,
    topic: "Performance & Best Practices",
    question: "How should you handle large ng-repeat lists?",
    options: [
      { label: "A", text: "Use limitTo filter or pagination" },
      { label: "B", text: "Use track by to avoid re-rendering" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "None" },
    ],
    answer: "C. Both A and B",
  },

  // ----- Testing (6) -----
  {
    id: 97,
    topic: "Testing",
    question: "Which testing framework is commonly used with AngularJS?",
    options: [
      { label: "A", text: "Jasmine" },
      { label: "B", text: "Mocha" },
      { label: "C", text: "Jest" },
      { label: "D", text: "All of the above" },
    ],
    answer: "A. Jasmine",
  },
  {
    id: 98,
    topic: "Testing",
    question: "What is AngularJS's $httpBackend used for in testing?",
    options: [
      { label: "A", text: "To mock HTTP requests" },
      { label: "B", text: "To make real HTTP calls" },
      { label: "C", text: "To configure headers" },
      { label: "D", text: "To intercept responses" },
    ],
    answer: "A. To mock HTTP requests",
  },
  {
    id: 99,
    topic: "Testing",
    question: "How do you inject dependencies in AngularJS unit tests?",
    options: [
      { label: "A", text: "Using angular.mock.inject()" },
      { label: "B", text: "Using $injector" },
      { label: "C", text: "Using new keyword" },
      { label: "D", text: "Using require" },
    ],
    answer: "A. Using angular.mock.inject()",
  },
  {
    id: 100,
    topic: "Testing",
    question: "What is the purpose of $controller in tests?",
    options: [
      { label: "A", text: "To instantiate a controller with mocked scope" },
      { label: "B", text: "To test directive controllers" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "None" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 101,
    topic: "Testing",
    question: "What is the angular.mock.module() used for?",
    options: [
      { label: "A", text: "To load modules in tests" },
      { label: "B", text: "To configure modules" },
      { label: "C", text: "To mock modules" },
      { label: "D", text: "All of the above" },
    ],
    answer: "A. To load modules in tests",
  },
  {
    id: 102,
    topic: "Testing",
    question: "How do you test directives in AngularJS?",
    options: [
      { label: "A", text: "By compiling the directive and testing the compiled element" },
      { label: "B", text: "By using $compile service" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "None" },
    ],
    answer: "C. Both A and B",
  },

  // ----- AngularJS vs Other Frameworks (6) -----
  {
    id: 103,
    topic: "AngularJS vs Other Frameworks",
    question: "What is the main difference between AngularJS and Angular (2+) ?",
    options: [
      { label: "A", text: "AngularJS uses JavaScript, Angular uses TypeScript" },
      { label: "B", text: "AngularJS is based on MVC, Angular uses component-based architecture" },
      { label: "C", text: "Angular has better performance" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 104,
    topic: "AngularJS vs Other Frameworks",
    question: "Which of these is a feature of AngularJS?",
    options: [
      { label: "A", text: "Two-way data binding" },
      { label: "B", text: "Directives" },
      { label: "C", text: "Dependency Injection" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 105,
    topic: "AngularJS vs Other Frameworks",
    question: "What is the primary advantage of AngularJS over jQuery?",
    options: [
      { label: "A", text: "Two-way data binding" },
      { label: "B", text: "Simpler DOM manipulation" },
      { label: "C", text: "Better browser support" },
      { label: "D", text: "Lighter weight" },
    ],
    answer: "A. Two-way data binding",
  },
  {
    id: 106,
    topic: "AngularJS vs Other Frameworks",
    question: "Which framework is more suitable for large-scale applications?",
    options: [
      { label: "A", text: "AngularJS" },
      { label: "B", text: "React" },
      { label: "C", text: "Angular" },
      { label: "D", text: "Vue" },
    ],
    answer: "C. Angular",
  },
  {
    id: 107,
    topic: "AngularJS vs Other Frameworks",
    question: "Is AngularJS still widely used today?",
    options: [
      { label: "A", text: "Yes, for legacy applications" },
      { label: "B", text: "No, it is deprecated" },
      { label: "C", text: "It is used only for new projects" },
      { label: "D", text: "It is the most popular front-end framework" },
    ],
    answer: "A. Yes, for legacy applications",
  },
  {
    id: 108,
    topic: "AngularJS vs Other Frameworks",
    question: "What is the AngularJS equivalent of a React component?",
    options: [
      { label: "A", text: "Directive" },
      { label: "B", text: "Controller" },
      { label: "C", text: "Service" },
      { label: "D", text: "Filter" },
    ],
    answer: "A. Directive",
  },

  // ----- Miscellaneous (12) -----
  {
    id: 109,
    topic: "Miscellaneous",
    question: "What is the purpose of the ng-cloak directive?",
    options: [
      { label: "A", text: "To prevent the browser from displaying the raw AngularJS template during load" },
      { label: "B", text: "To cloak the application from users" },
      { label: "C", text: "To hide elements until the page is fully loaded" },
      { label: "D", text: "To encrypt the data" },
    ],
    answer: "A. To prevent the browser from displaying the raw AngularJS template during load",
  },
  {
    id: 110,
    topic: "Miscellaneous",
    question: "What is the AngularJS digest cycle?",
    options: [
      { label: "A", text: "The process of watching for changes and updating the view" },
      { label: "B", text: "The compilation of templates" },
      { label: "C", text: "The dependency injection process" },
      { label: "D", text: "The routing process" },
    ],
    answer: "A. The process of watching for changes and updating the view",
  },
  {
    id: 111,
    topic: "Miscellaneous",
    question: "How do you sanitize HTML in AngularJS?",
    options: [
      { label: "A", text: "Using $sanitize service" },
      { label: "B", text: "Using ng-bind-html" },
      { label: "C", text: "Using $sce.trustAsHtml" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 112,
    topic: "Miscellaneous",
    question: "What is the purpose of $q in AngularJS?",
    options: [
      { label: "A", text: "To handle promises and asynchronous operations" },
      { label: "B", text: "To query the DOM" },
      { label: "C", text: "To create queries" },
      { label: "D", text: "To handle JSON" },
    ],
    answer: "A. To handle promises and asynchronous operations",
  },
  {
    id: 113,
    topic: "Miscellaneous",
    question: "What is the 'controllerAs' syntax used for?",
    options: [
      { label: "A", text: "To assign an alias to the controller in the view" },
      { label: "B", text: "To define controller methods" },
      { label: "C", text: "To inject services" },
      { label: "D", text: "To handle events" },
    ],
    answer: "A. To assign an alias to the controller in the view",
  },
  {
    id: 114,
    topic: "Miscellaneous",
    question: "How do you handle form submissions in AngularJS?",
    options: [
      { label: "A", text: "Using ng-submit directive" },
      { label: "B", text: "Using $http to send data" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "Using jQuery" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 115,
    topic: "Miscellaneous",
    question: "What is the purpose of the ng-switch directive?",
    options: [
      { label: "A", text: "To conditionally display elements based on an expression" },
      { label: "B", text: "To switch between views" },
      { label: "C", text: "To toggle visibility" },
      { label: "D", text: "To handle events" },
    ],
    answer: "A. To conditionally display elements based on an expression",
  },
  {
    id: 116,
    topic: "Miscellaneous",
    question: "Which directive is used to include HTML templates in AngularJS?",
    options: [
      { label: "A", text: "ng-include" },
      { label: "B", text: "ng-template" },
      { label: "C", text: "ng-html" },
      { label: "D", text: "ng-partial" },
    ],
    answer: "A. ng-include",
  },
  {
    id: 117,
    topic: "Miscellaneous",
    question: "What is the purpose of $rootScope?",
    options: [
      { label: "A", text: "It is the global scope available across all controllers" },
      { label: "B", text: "It is the scope for a specific controller" },
      { label: "C", text: "It is a service" },
      { label: "D", text: "It is a directive" },
    ],
    answer: "A. It is the global scope available across all controllers",
  },
  {
    id: 118,
    topic: "Miscellaneous",
    question: "How do you debug an AngularJS application?",
    options: [
      { label: "A", text: "Using Batarang extension" },
      { label: "B", text: "Using console.log" },
      { label: "C", text: "Using $log service" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 119,
    topic: "Miscellaneous",
    question: "What is the purpose of the ng-options directive?",
    options: [
      { label: "A", text: "To create dropdown options from an array" },
      { label: "B", text: "To iterate over a collection" },
      { label: "C", text: "To bind to a select element" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 120,
    topic: "Miscellaneous",
    question: "What is the difference between ng-options and ng-repeat for select?",
    options: [
      { label: "A", text: "ng-options is more efficient for large datasets and supports object binding" },
      { label: "B", text: "ng-repeat is simpler but less efficient" },
      { label: "C", text: "Both are equally efficient" },
      { label: "D", text: "ng-options is deprecated" },
    ],
    answer: "A. ng-options is more efficient for large datasets and supports object binding",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is AngularJS?",
    answer:
      "AngularJS is a JavaScript-based open-source front-end web framework developed by Google for building dynamic single-page applications. It extends HTML with directives and provides two-way data binding, dependency injection, and MVC architecture.",
  },
  {
    question: "Why should I practice AngularJS MCQs?",
    answer:
      "Practicing AngularJS MCQs helps in preparing for interviews, competitive exams, and placement tests. It reinforces your understanding of core concepts like directives, scopes, services, and dependency injection, and identifies areas needing improvement.",
  },
  {
    question: "What are the key topics in AngularJS?",
    answer:
      "Key topics include Directives, Scopes, Data Binding, Dependency Injection, Controllers, Services, Routing, Filters, Forms, Validation, HTTP/AJAX, Modules, Testing, and Performance Optimization.",
  },
  {
    question: "How can I prepare for AngularJS interviews?",
    answer:
      "Start with basic concepts, practice MCQs, build small projects, understand common design patterns, study the AngularJS documentation, and review frequently asked interview questions.",
  },
  {
    question: "Is AngularJS still relevant in 2026?",
    answer:
      "AngularJS (Angular 1.x) is still used in many legacy applications. While newer versions (Angular 2+) are recommended for new projects, knowledge of AngularJS remains valuable for maintaining existing codebases.",
  },
  {
    question: "What are the benefits of AngularJS over other frameworks?",
    answer:
      "AngularJS offers two-way data binding, a powerful directive system, dependency injection, modular architecture, and built-in services for common tasks like HTTP requests and routing, making it a comprehensive framework for SPAs.",
  },
];

// ========================== COMPONENT ==========================
export default function AngularJsMcq() {
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
        "@id": "https://CodeSkipper.in/mcq/angularjs-mcq",
        "url": "https://CodeSkipper.in/mcq/angularjs-mcq",
        "name": "AngularJS Multiple Choice Questions | Code Skipper",
        "description":
          "Explore a comprehensive collection of 120+ multiple-choice questions on AngularJS, covering directives, scopes, services, and more. Test your knowledge with our curated list.",
        "about": { "@type": "Thing", "name": "AngularJS MCQ" },
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
              "name": "AngularJS",
              "item": "https://CodeSkipper.in/mcq/angularjs-mcq",
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
        "@id": "https://CodeSkipper.in/mcq/angularjs-mcq#course",
        "name": "AngularJS MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for AngularJS exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "AngularJS" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/angularjs-mcq#faq",
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
        <title>AngularJS MCQs 2026 | 120+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 120+ AngularJS multiple-choice questions with answers. Covers directives, scopes, services, dependency injection, routing, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="AngularJS, MCQs, AngularJS MCQ, JavaScript framework, frontend development, SPA, directives, scopes, dependency injection, routing, services, filters, angular interview questions, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/angularjs-mcq" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/angularjs-mcq" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/angularjs-mcq" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/angularjs-mcq" />
        <meta property="og:title" content="AngularJS MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 120+ AngularJS multiple-choice questions covering directives, scopes, services, dependency injection, routing, and more."
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
        <meta name="twitter:title" content="AngularJS MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 120+ AngularJS multiple-choice questions covering directives, scopes, services, dependency injection, routing, and more."
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
              🎯 120+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              AngularJS <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-6">
              Master AngularJS concepts with 120+ curated MCQs covering directives, scopes,
              services, dependency injection, routing, and more. Perfect for exams, interviews,
              and placement preparation.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">20 Topics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-sm font-medium">120+ Questions</span>
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
            Explore AngularJS Topics
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
            AngularJS MCQs
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
              { title: "AngularJS Tutorial", href: "/tutorials/angularjs", icon: "📖" },
              { title: "AngularJS Interview Questions", href: "/interview/angularjs", icon: "💼" },
              { title: "AngularJS Notes", href: "/notes/angularjs", icon: "📝" },
              { title: "JavaScript MCQs", href: "/mcq/javascript-mcq", icon: "🟨" },
              { title: "React JS MCQs", href: "/mcq/react-mcq", icon: "⚛️" },
              { title: "Frontend Development Roadmap", href: "/roadmap/frontend", icon: "🗺️" },
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
            Ready to Master AngularJS?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Explore our full collection of AngularJS tutorials, notes, and interview guides to
            accelerate your learning journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tutorials/angularjs"
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Start Learning
            </Link>
            <Link
              href="/roadmap/frontend"
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