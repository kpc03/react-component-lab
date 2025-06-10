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
    }
  ];
  
  export default list;
  