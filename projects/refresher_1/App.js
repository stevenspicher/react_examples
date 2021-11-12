

  /* Just a basic component*/

  function App() {
    const greeting = 'Hello from Casper!!!';
     return (
     <h1>{greeting}</h1>
     )
  }

  export default App;

/*
React Component inside a Function Component: you define another component and render it as HTML element with JSX: 
*/  


// function App() {
 

//   return (
//     <>
//   <Headline />  

//   </>
//     )
// }
 
// function Headline() {
//   const greeting = 'Hello From Casper!';
 
//   return (
//   <h1>{greeting}</h1>
//   )
// }

// export default App;



/*
React Component inside a Function Component, you define another component and render it as HTML element with JSX:
*/ 


// function App() {
//   return (
//   <Headline />
//   )
// }
 
// function Headline() {
//   const town = "Casper"
//   const greeting = `Hello From ${town}`;
  
 
//   return (
//   <h1>{greeting}</h1>
//   )
// }

// export default App;

/*The Headline function is a Child Component for App, just like when the child is 
imported from elsewhere. Notice we changed up the greeting variable - and then renamed that so it is semantic.


*****Props
Props are the React Function Component's parameters. We decide from the outside what it should render (or how it should behave). 
What happens if we change some things?
What if we make town an object?
What if we changed 'props'?
*/

// function App() {
// const town = 'Chicago';
//    return (
//   <Headline place = {town} />
//   )


// function Headline(props) {
  
//   return (
//   <h1>{`Welcome to ${props.place}!`}</h1>
//   )
// }
// }
// export default App;


 
/*Let's convert these to arrow functions. Both React Arrow Function Components use a
 function block body now. However, the second component can be made more lightweight 
 with a concise body for the function, because it only returns the output of the component w
 ithout doing something else in between. When leaving away the curly braces, the explicit r
 eturn becomes an implicit return and can be left out as well:*/

 
// const App = () => {
//   const town = 'Casper';
 
//   return <Headline value={town} />;
// };
 
// const Headline = props =>  <h1>Welcome from {props.value}!</h1>
    
// export default App;

/*When using arrow functions for React components, nothing changes for the props.  */

/* *****STATE****
React Hooks made it possible to use state (and side-effects) in Function Components. 
We can create a React Function Component with state. first, let's move all logic to our 
other Function Component and don't pass any props to it: */

// import React from 'react';
 
// const App = () => <Headline />;

 
// const Headline = () => {
//   const town = 'Casper';
 
//   return <h1>Hello from {town}!</h1>;
// };
 
// export default App;

/*at this point, there is  no way of interacting with the application and thus no 
way of changing the greeting variable. The application is static and not interactive at all. */

// import React, { useState } from 'react';
 
// const App = () => <Headline />;

 
// const Headline = () => {
//   const [town, setTown] = useState('Casper'); //not using setTown yet

//   return <h1>Hello from {town}!</h1>; //just displaying the initial state of 'town'. as set by useState('Casper')
// };
 
// export default App;

/*The useState hook takes an initial state as parameter and returns an array 
which holds the current state as first item and a function to change the state as second item.
Let's add an input field to change the state with the setTown() function:*/

// import React, { useState } from 'react';
 
// const App = () =>  <Headline />;

 
// const Headline = () => {
//   const [town, setTown] = useState('Casper');
  
 
//   return (
//     <div>
//       <h1>Hello from {town}!</h1>
 
//       <input
//         type="text"
//         value={town}
//         onChange={event => setTown(event.target.value)}
//       />
//     </div>
//   );
// };
 
// export default App;



/*EVENT HANDLER:
In the previous example you have used an onChange event handler for the input field. That's appropriate, 
because you want to be notified every time the internal value of the input field has changed. 
In the case of other HTML form elements, you have several other React event handlers at your disposal such as onClick, onMouseDown, and onBlur.

Note: The onChange event handler is only one of the handlers for HTML form elements. For instance, 
a button would offer an onClick event handler to react on click events.

So far, we have used an arrow function to inline the event handler for out input field. 
What about extracting it as standalone function inside the component? It would become a named function then:*/

// import React, { useState } from 'react';
 
// const App = () => <Headline />;
 
// const Headline = () => {
//   const [town, setTown] = useState('Casper');
 
//   const handleChange = event => setTown(event.target.value); //this moves the onchange event handling to a standalone function
 
//   return (
//     <div>
//       <h1>Hello from {town}!</h1>

//       <input type="text" value={town} onChange={handleChange} /> {/* this calls the function on line 195*/}
//     </div>
//   );
// };
 
// export default App;


/*CALLBACK FUNCTIONS
Everything happens in our Child Function Component. There are no props passed to it, even though you have seen before how a 
string variable for the greeting can be passed from the Parent Component to the Child Component. Is it possible to pass 
a function to a component as prop as well? Somehow it must be possible to call a component function from the outside! 
Let's see how this works: */

// import React, { useState } from 'react';
 
// const App = () => {
//   const [town, setTown] = useState('Casper');
 
//   const handleChange = event => setTown(event.target.value);
 
//   return (
//     <Headline headline={town} onChangeHeadline={handleChange} /> //passing the function on line 220 into Headline as a prop 
//   );
// };
 
// const Headline = ({ headline, onChangeHeadline }) => (
//   <div>
//     <h1>Hello from {headline}!</h1>
 
//     <input type="text" value={headline} onChange={onChangeHeadline} />   {/* this calls the function INSIDE the APP component on line 220*/}
//   </div>
// );
 
// export default App;

/*That's all to it. You can pass a function to a Child Component and handle what happens up in the Parent Component. 
You could also execute something in between in the Child Component (Headline component) for the onChangeHeadline function 
-- like trimming the value -- to add extra functionality inside the Child Component. That's how you would be able to 
call a Child Component's function from a Parent Component.

Let's take this example one step further by introducing a Sibling Component for the Headline component. It could be an abstract Input component:*/

// import React, { useState } from 'react';
 
// const App = () => {
//   const [town, setTown ]= useState(
//     'Casper'
//   );
 
//   const handleChange = event => setTown(event.target.value);
 
//   return (
//     <div>
//       <Headline headline={town} />
 
//       <Input value={town} onChangeInput={handleChange}> {/* passing the handleChange function, which contains the setTown function...*/}
//         Set town:
//       </Input>
//     </div>
//   );
// };
 
// const Headline = ({ headline }) => <h1>Hello from {headline}!</h1>;
 
// const Input = ({ value, onChangeInput, children }) => (   // passing onChangeInput using deconstruction to get directly to the function 
//   <label>
//     {children} 
//     <input type="text" value={value} onChange={onChangeInput} />
//   </label>
// );
 
// export default App;


/*Now let's break it up into the components to be imported */


// import React, { useState } from 'react';
// import Input from './components/Input';
// import Headline from './components/Headline';
 
// const App = () => {
//   const [town, setTown] = useState(
//     'Casper'
//   );
 
//   const handleChange = event => setTown(event.target.value);
 
//   return (
//     <div>
//       <Headline headline={town} />
 
//       <Input value={town} onChangeInput={handleChange}>
//         Set Greeting:
//       </Input>
//     </div>
//   );
// };
 
// export default App;



/*some of you have run into issues with named vs default imports */


// import React, { useState } from 'react';
// import { Input, Headline } from './components/components'; //moved all our components into one file, and imported them as named components - remember the brackets {}!

 
// const App = () => {
//   const [town, setTown] = useState(
//     'Casper'
//   );
 
//   const handleChange = event => setTown(event.target.value);
 
//   return (
//     <div>
//       <Headline headline={town} />
 
//       <Input value={town} onChangeInput={handleChange}>
//         Set Greeting:
//       </Input>
//     </div>
//   );
// };
 

// export default App;

/*adding a Form component to be used throughout the application*/

// import React, { useState } from 'react';
// import { Headline, Form } from './components/components'
 
// const App = () => {
//   const [town, setTown] = useState(
//     'Casper'
//   );
 
//  return (
//   <>
//   <Form setTown={setTown} />;
//   <Headline headline={town} />
//   </>
//   )
// };
 
// export default App;
 
