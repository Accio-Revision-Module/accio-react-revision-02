# ReactJS Revision - 02

## Higher Order Components (HOCs)

A Higher Order Component is a function that takes a component and returns a new component with additional props or functionality. It's a pattern that comes from functional programming and can be used to share common functionality between components.

```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

### Real-World Example

Consider a `withAuthorization` HOC, which wraps a component and checks if a user is authorized before rendering the component. You can use this HOC to protect certain parts of your application and only show them to authorized users.

## Props

Props are a way of passing data from a parent component to a child component in React. Props are read-only and help you create reusable components.

```javascript
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
```

### Real-World Example

In a user profile page, you can pass the user's name, age, and location as props from a `UserProfile` component to a `UserInfo` component. Then, the `UserInfo` component can pass these props further down to `UserName`, `UserAge`, and `UserLocation` components.

## Prop Drilling

Prop drilling is the process of passing props through multiple levels of nested components. It can become cumbersome and hard to manage in a larger application.

### Real-World Example

In the user profile page example, we pass the user object from the `UserProfile` component to the `UserInfo` component, and then further down to the `UserName`, `UserAge`, and `UserLocation` components. This is prop drilling.

## Component Lifecycle

React components have a lifecycle that you can use to run code at specific times. The lifecycle includes mounting, updating, and unmounting phases, and you can use lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` to run code at these times.

### Real-World Example

You can use the `componentDidMount` lifecycle method to fetch data from an API when a component is first rendered. Then, you can display this data in the component.

## Context API

The Context API provides a way to share values between components without having to pass props through every level of the component tree. It can be used to avoid prop drilling.

```javascript
const MyContext = React.createContext(defaultValue);

const App = () => {
  return (
    <MyContext.Provider value={someValue}>
      <Component />
    </MyContext.Provider>
  );
};

const Component = () => {
  const contextValue = useContext(MyContext);
  return <div>{contextValue}</div>;
};
```

### Real-World Example

In the user profile page example, instead of passing the user object down the component tree through props, you can use the Context API to provide the user object to all the nested components. Then, the `UserName`, `UserAge`, and `UserLocation` components can use the `useContext` hook to access the user object without prop drilling.
