REACT 
_____

  React is a JavaScript library for building user interfaces. 
  It provides a component-based approach to creating interactive and reusable UI components.
  React allows developers to efficiently manage and update the UI based on changes in data, 
  resulting in fast and responsive web applications.

----------------------------------------------------------------------------------------------------------

COMPONENTS
__________

  Components are independent and reusable bits of code.
  Components are the building blocks of UI, 
  They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
  They have props to receive data and state to manage their own data. 
  Components are the building blocks of UI, promoting reusability and modularity in React apps.

Class Components:

  Class-based, extends React.Component.
  Have a render() method to define the component's UI.
  Can have state and access to lifecycle methods.

Functional Components:

  Function-based.
  Receive props as input and return JSX.
  Simpler and more lightweight.
  Can use React Hooks to manage state and lifecycle events.

----------------------------------------------------------------------------------------------------------

WORKING OF REACT 
________________

  working of react React is a JavaScript library that helps you build user interfaces.
  It works by creating a virtual copy of the UI called the Virtual DOM.
  When the data or state of a component changes, React updates the Virtual DOM and
  figures out the smallest changes needed to update the real web page. 
  This makes the updates faster and more efficient. 
  React also makes it easy to handle user interactions and build reusable components, 
  which are like building blocks you can use to create complex interfaces.

----------------------------------------------------------------------------------------------------------

PROPS
______

  Props are used to pass data from a parent component to a child component and are read-only.

----------------------------------------------------------------------------------------------------------
STATE
_____

  State is for managing a component's internal data and can be changed.

----------------------------------------------------------------------------------------------------------
JSX
____

  JAVASCRIPT XML
  JSX is a syntax extension in React that allows you to write HTML-like code within JavaScript 
  to define and describe the structure of user interfaces. 
  It combines JavaScript and HTML to create dynamic UI components in a declarative manner.

----------------------------------------------------------------------------------------------------------

BABEL
_____

  Babel is a JavaScript compiler used in React to convert modern JavaScript 
  and JSX code into backward-compatible versions that can be executed in older browsers. 
  It ensures compatibility and allows developers to write modern code while supporting 
  a wider range of environments.

----------------------------------------------------------------------------------------------------------
VIRTUAL DOM
___________

  Virtual DOM is a lightweight copy of the actual DOM used by React to efficiently track and update UI changes. 

ACTUAL DOM 
___________

  Actual DOM is the real representation of the HTML document and interacts directly with the browser.

---------------------------------------------------------------------------------------------------------- 
REACT WORKS 
___________

  React works by using reusable components to build user interfaces. 
  It creates a virtual copy of the actual DOM called the Virtual DOM, and when changes occur, 
  React efficiently updates the Virtual DOM and selectively applies those changes to the actual DOM for rendering, 
  resulting in improved performance.
----------------------------------------------------------------------------------------------------------

STATE
______

  State in React represents the component's own data that can be modified and updated over time. 
  It allows components to manage and reflect changes in their internal state, influencing the UI rendering

----------------------------------------------------------------------------------------------------------
 
HOOKS
_____

  Hooks in React are special functions that allow you to add state and other React features to function components.
  They simplify component development, promote code reuse, and provide an alternative to class components.


  Hooks in React are special functions that enhance functional components:

  useState: Adds state to functional components.

  useEffect: Handles side effects in functional components.

  useRef: Stores mutable values across component renders.

  useHistory vs useNavigate: Enable navigation in React Router.

  useCallback: Memoizes a callback function for performance optimization.

  useMemo: Memoizes a value to avoid unnecessary re-computation.

----------------------------------------------------------------------------------------------------------
LIFE CYCLE
__________

  Mounting — an instance of a component is being created and inserted into the DOM. 
  Updating — when the React component is born in the browser and grows by receiving new updates. 
  Unmounting — the component is not needed and gets unmounted.

----------------------------------------------------------------------------------------------------------
DOM
____

  DOM (Document Object Model) in JavaScript represents the structure of a web page as a tree. 
  It allows JavaScript to interact with and modify elements on the page. 
  You can access elements, manipulate their properties, handle events, and change the structure dynamically.

----------------------------------------------------------------------------------------------------------
SPA
____

  Single-Page Application (SPA):
  Everything is on one page.
  When you interact with the application, it updates the content without loading new pages.
  It feels fast and interactive, like using an app.
  Examples: Gmail, Facebook, Twitter.

MPA
___

  Multi-Page Application (MPA):
  Each page is a separate document.
  When you interact, the server sends a whole new page to the browser.
  It feels like navigating between different pages on a website.
  Examples: Traditional websites with multiple interconnected pages.

----------------------------------------------------------------------------------------------------------
REUSIBILITY
___________

  Reusability in React means creating components that can be used multiple times throughout your application. 
  By designing reusable components, you can write code once and use it in different parts of your app, 
  promoting code organization, efficiency, and consistency in design and behavior.

----------------------------------------------------------------------------------------------------------

DYNAMIC RENDERING
__________________

  Dynamic rendering refers to the ability to update and change the content of a web page 
  or user interface based on certain conditions, user interactions, or data changes

----------------------------------------------------------------------------------------------------------
LIFECYCLE METHOD 
_________________

  Lifecycle methods in React are special functions that are automatically called at
 different stages of a component's life.

 lifecycle methods:

componentDidMount(): 
  Called after the component is rendered for the first time.
  It's used for initialization tasks like fetching data or setting up event listeners.

componentDidUpdate(prevProps, prevState): 
  Called after the component is updated with new props or state.
  It's used to handle actions based on the changes, like updating the UI or making additional requests.
     
                                                                                                                             componentWillUnmount():
  Called right before the component is removed from the DOM.
  It's used for cleanup tasks like removing event listeners or canceling timers.


----------------------------------------------------------------------------------------------------------

REACT ROUTER
____________

  React Router is a library that helps handle routing in React applications. 
  it allows you to create different routes for different components, 
  navigate between them using links,and access URL parameters. 
  React Router makes it easy to build multi-page-like applications within a single-page application structure.
----------------------------------------------------------------------------------------------------------

WEBPACK
_______

  Webpack is a tool used in web development to bundle and manage dependencies in JavaScript applications. 
  It takes your project files, processes them, and creates a single optimized file or multiple files
  for the browser to use.

----------------------------------------------------------------------------------------------------------

Controlled Components: 
______________________

  React components where the form input value is controlled by the component's state. 
  Changes are handled through event handlers, offering more control and flexibility.

Uncontrolled Components: 
________________________

  Form inputs where the value is managed by the DOM instead of the component's state. 
  Simpler to implement but provide less control and validation options.

----------------------------------------------------------------------------------------------------------


PURE COMPONENT
_______________

  A pure component in React is a component that automatically optimizes rendering by performing a 
  shallow comparison of props and state. 
  It skips re-rendering if the values are the same, improving performance.

----------------------------------------------------------------------------------------------------------

FRAGMENTS
_________

  Fragments in React group multiple JSX elements without introducing an extra wrapper element in the DOM, 
  improving code readability and keeping the DOM structure clean.
----------------------------------------------------------------------------------------------------------

CSR (Client-Side Rendering): 
____________________________

 React renders components in the user's browser using JavaScript. 
 It provides a smooth user experience but slower initial load times.

SSR (Server-Side Rendering): 
____________________________

 React renders components on the server and sends fully rendered HTML to the user. 
 It offers faster initial load times but requires more server resources.

----------------------------------------------------------------------------------------------------------

Stateless components: 
____________________

  Functions that render UI based on props and don't manage internal state.


Stateful components: 
_____________________

  Classes that manage their own internal state using setState. 
  They handle complex state and user interactions.

----------------------------------------------------------------------------------------------------------

REACT FIBER
___________

  React Fiber is a rewritten reconciliation algorithm in React that improves performance, 
  responsiveness, and error handling. 
  It enables incremental rendering, time-slicing, concurrent updates, and better error boundaries.

----------------------------------------------------------------------------------------------------------
JWT 
____

  (JSON Web Tokens) provide a secure method for authentication and authorization, 
  enabling stateless and scalable web applications.

  Authentication is the process of verifying the identity of a user, 
  typically through credentials like usernames and passwords.

  Authorization determines what actions a user is allowed to perform based on their authenticated identity.

----------------------------------------------------------------------------------------------------------
 ACTION CREATOR
 _______________

  An action creator is a function that creates and returns an action object in Redux to initiate a state change.
----------------------------------------------------------------------------------------------------------

 ERROR BOUNDRY 
 _____________

 An error boundary is a React component that catches JavaScript errors in its child components during 
 rendering and provides error fallback UI.

----------------------------------------------------------------------------------------------------------
 REDUX
 ______

  Redux is a JavaScript library for managing application state. 
  It provides a predictable way to update and access state,
  making code easier to understand and maintain.
  Components can subscribe to the store to access and react to changes in the state.

----------------------------------------------------------------------------------------------------------

 USENAVIGATE
 ____________

 useNavigate is a hook that provides a function to navigate programmatically 
 to different routes within a React component.

----------------------------------------------------------------------------------------------------------
 ACTION
 ______

  an action is an event or trigger that occurs within a component, initiating state changes or other operations.
----------------------------------------------------------------------------------------------------------

 USELOCATION
 ____________

 useLocation is a hook that returns the current location object,
 providing information about the current URL.

----------------------------------------------------------------------------------------------------------
 HOC stands for Higher-Order Component,
 _____________________________________

  a function that takes a component and returns an enhanced version of it with additional functionality.
----------------------------------------------------------------------------------------------------------

 LAZY LOADING
 ____________

  lazy loading is a feature that allows you to load components or routes dynamically only when they are needed,
  improving performance by reducing initial bundle size.

----------------------------------------------------------------------------------------------------------
 CODE SPLITTING 
 ______________

  Code splitting in React is a technique that allows you to split your application's code into smaller chunks, 
  loading them on-demand for improved performance.

----------------------------------------------------------------------------------------------------------

 PROP DRILLING
 ____________

  Prop drilling in React refers to the process of passing props through multiple intermediate components 
  to reach a deeply nested component.

----------------------------------------------------------------------------------------------------------
 PROFILER
 ________

  Profiler in React is a built-in tool used for measuring and optimizing 
  the performance of components and their rendering.

----------------------------------------------------------------------------------------------------------
 FRAFMENT AND DIV
 _________________

  Fragments and <div> in React are used to group multiple JSX elements together.
  Fragments allow grouping without introducing additional HTML elements like <div>.

----------------------------------------------------------------------------------------------------------
 SHALLOW RENDERING 
 _________________

  Shallow rendering in React is a testing technique that renders a component one level deep, 
  without rendering its child components, for isolated unit testing purposes.

----------------------------------------------------------------------------------------------------------

 INTERCEPTOR
 ___________

  interceptor is a mechanism that intercepts and handles requests or responses within the application's 
  HTTP client library, such as Axios or Fetch.

----------------------------------------------------------------------------------------------------------
 CUSTOM HOOK 
 ___________

 custom hook is a reusable function that encapsulates logic and state, 
 allowing it to be shared between multiple components.

----------------------------------------------------------------------------------------------------------
 REACT FIBER
 ____________

  React Fiber is the internal engine of React that handles the reconciliation and rendering process,
  enabling efficient updates and improved performance.

----------------------------------------------------------------------------------------------------------
 GENERATOR FUCTION
 __________________

  generator function is a special type of function that can be paused and resumed, 
  allowing for asynchronous programming using the yield keyword.

----------------------------------------------------------------------------------------------------------
 REACT SAGA
 ___________

  React Saga is a middleware library for Redux that allows for handling side effects, 
  such as asynchronous operations, in a more organized and declarative manner using generator functions.
----------------------------------------------------------------------------------------------------------

 REDUX THUNK
 ___________

  Redux Thunk middleware allows you to write action creators that return a function instead of an action.
----------------------------------------------------------------------------------------------------------

 PROPTYPES
 __________
   
  PropTypes is React's internal mechanism for adding type checking to components

  The main difference between custom hooks and regular utility functions is that custom
  hooks usually involve the use of other in-built hooks and follow the rules of hooks, 
  while the latter is a regular function that can be used anywhere
----------------------------------------------------------------------------------------------------------

 AXIOS 
 ______
 
  Axios is one of the most popular JavaScript libraries to perform HTTP requests. 
  Axios interceptors are powerful mechanisms built into Axios for making changes to requests
  and responses in a non-intrusive way


  The axios cancel token API is based on the withdrawn cancelable promises proposal.    
  A CancellationToken enables cooperative cancellation between threads, thread pool work items, or Task objects

----------------------------------------------------------------------------------------------------------
 USE SELECTOR
 ____________
 
  useSelector ​Allows you to extract data from the Redux store state for use in this component

----------------------------------------------------------------------------------------------------------
 KEY
 ____

  A key is a unique identifier. it is used to identify which items have changed, 
  updated, or deleted from the Lists

----------------------------------------------------------------------------------------------------------
IMMUTABLE
_________
  immutable object if you can't change the object's state after you've created it.

MUTABLE
________
  a mutable object allows you to modify its internal state after creation.
----------------------------------------------------------------------------------------------------------

REACT DEVTOOLS
______________

   React Dev Tools is an extension created by the React team. 
   It enables developers to debug their code inside their Developer Tools
----------------------------------------------------------------------------------------------------------

METHOD BIND
____________

  The Menthod bind() is an inbuilt method in React that is used to pass the data as an argument 
  to the function of a class based component.

----------------------------------------------------------------------------------------------------------
CONDITIONAL RENDERING 
_____________________

   Conditional rendering Use JavaScript operators like if or the conditional operator to create elements 
   representing the current state, and let React update the UI to match them.

----------------------------------------------------------------------------------------------------------

Reconciliation.
_______________

   Virtual DOM is synced with real DOM with ReactDOM library. This process is called Reconciliation. 

   Reconciliation is the process of efficiently updating the actual DOM based on these differences. 
   It ensures that only the necessary parts of the DOM are updated to reflect the changes in a 
   component's state or props.
----------------------------------------------------------------------------------------------------------
DIFFING
_______
   Process of identifying the differences between the virtual DOM tree before and after an update. 

----------------------------------------------------------------------------------------------------------
SUSPENCE
________

  Suspense is a new feature that lets your component “wait” for something before it can render.

----------------------------------------------------------------------------------------------------------
DISPATCHING
___________

  Dispatching actions in Redux is the fundamental method of updating a Redux store's state .

----------------------------------------------------------------------------------------------------------

SHADOW DOM
___________
  Shadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree

----------------------------------------------------------------------------------------------------------
RENDER PROPS 
_____________
  render prop refers to a technique for sharing code between React components using a prop whose value is a function

----------------------------------------------------------------------------------------------------------
BATCHING
________
  React uses batching to group state updates within event handlers and inbuilt hooks.

----------------------------------------------------------------------------------------------------------
SYNTHETIC EVENTS

   Synthetic events in React are a uniform way to handle events across different browsers. 
   They wrap native browser events to provide a consistent interface. This helps avoid cross-browser 
   compatibility issues when working with events in React components.

----------------------------------------------------------------------------------------------------------

CUSTOM HOOK

  A custom hook in React is like a reusable piece of logic that you can use in different parts of your app. 
  It's a function that helps you manage state or do other tasks.

  For example, you could create a custom hook to handle counting. Then, you can use this hook in different 
  components to keep track of numbers without having to rewrite the same logic each time. 

----------------------------------------------------------------------------------------------------------

REACT MEMO

  React.memo is a higher-order component (HOC) provided by React.
  It's used for optimizing functional components by preventing unnecessary re-renders.

   const MyComponent = React.memo(({ name }) => {
     console.log('Rendering MyComponent');
     return <div>{name}</div>;
    });

    export default MyComponent;


----------------------------------------------------------------------------------------------------------


-----------------------------------Mohammed zeheer -------------------------------------------------------