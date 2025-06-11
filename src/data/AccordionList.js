const list = [
    {
      "question": "What is a component in React?",
      "answer": "A component is a reusable piece of UI in React. It can be a function or a class. Components help break the UI into independent parts. Each component manages its own structure and logic."
    },
    {
      "question": "What is JSX?",
      "answer": "JSX stands for JavaScript XML. It lets you write HTML-like syntax inside JavaScript. JSX makes it easy to visualize the UI structure. Under the hood, it's converted to React.createElement calls."
    },
    {
      "question": "What is the virtual DOM?",
      "answer": "The virtual DOM is a lightweight JavaScript version of the real DOM. React uses it to track changes efficiently. When state changes, a new virtual DOM is compared with the old one. Only the differences are updated in the real DOM."
    },
    {
      "question": "What are props in React?",
      "answer": "Props are read-only data passed from a parent to a child component. They allow components to be dynamic and reusable. Props cannot be changed by the child component. Think of them as function arguments for components."
    },
    {
      "question": "What is state in React?",
      "answer": "State is a built-in object that stores dynamic data in a component. It can change over time, triggering re-renders. Each component can manage its own state. It’s useful for handling user interactions or async data."
    },
    {
      "question": "What is the useEffect hook used for?",
      "answer": "useEffect is a React hook used to perform side effects in components. It's commonly used for fetching data, setting up subscriptions, or manipulating the DOM. It runs after the component renders. You can also control when it re-runs using dependencies."
    },
    {
      "question": "What is the difference between state and props?",
      "answer": "Props are passed into components and cannot be changed inside them. State is local and managed within the component. Props make components flexible and reusable. State allows components to track and react to changes."
    },
    {
      "question": "What is conditional rendering in React?",
      "answer": "Conditional rendering means showing or hiding parts of the UI based on logic. You can use `if`, ternary operators, or logical &&. It helps create interactive UIs. For example, show a message only if a user is logged in."
    },
    {
      "question": "Why use keys in lists?",
      "answer": "Keys help React identify which list items changed. They should be unique and stable. This helps in efficient re-rendering and avoiding bugs. Don’t use array index as key unless there's no better unique ID."
    },
    {
      "question": "What are controlled components in React?",
      "answer": "Controlled components are form elements managed by React state. The input value is controlled via a `value` prop and an `onChange` handler. This makes the form behavior predictable. It also enables validation and formatting in real time."
    }
  ];
  
  export default list;
  