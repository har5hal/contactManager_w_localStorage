# Libraries Used

-- Bootstrap
-- react-bootstrap
-- react-icons
-- react-router-dom
-- uuid

# Project Process

-- AddUser.jsx component

- Create a controlled form that stores the value of input "onChange" to the state. 

- Then on eventlistener to the form "onSubmit" we will validate the form inputs value. Then send the data through the function that we got as props as its parameter.

-- Home page

- Here we will create a state which stores the list of contacts that we add from "AddUser" component.

- We create a function "addContact" that we passed to "AddUser" component and got the data through parameter and spread it into our state using spread operator"..."

- Now that our state is created and filled with data we can pass it to our child components to be used. Here I have used prop drilling to pass the state data to child components.

- We can also use localStorage so that the data persists on page reload.

- We achieve that using "useEffect" hook.

- First we use a "useEffect" hook with a dependency to check when a component is updated. Here out dependency is "contact" state. Which runs the hook on state update.
When that happens we set our localStorage using the data.

- Second we use a "useEffect" hook without dependencies so that it only runs when component is mounted.
We will get the data from localStorage and parse it to JSON object and check if there is any data available. If there is any data we will pollute out state using that data. 

- Also we have cleared the "useEffect" hook after getting the data from localStorage, when on accidential quick renders it will keep the data.


-- ContactsList.jsx

- On this component we render the data that we stored in the state.


-- ContactCard.jsx

- Here we create a representation of how data will be shown.
- Also we add an action button that deletes a certain data.
- To do that we invoke a function that we got as props on clicking that action button. Which sends the Id of that particular data back to our "Home" page.


-- Home page

- We create a "deleteHandler" function which takes the argument and we run a filter method on our state which returns the data that does not match the ID.
- The we again pollute out state with new data.


-- ContactCard.jsx

- Now we create a link on the users data which onclicked takes us to a page where it shows the users details.
- Here we give the link a dynamic pathname and pass as certain state which can be used in other page.
- We are basically using prop drillng to pass the data.


-- UserDetails.jsx

- Now we use "useLocation" hook which help us to get the state that was passed by "ContactCard" component. And display it.

- We also create an edit that contact button and pass the current data to that component again using state.

-- EditUser.jsx

- This component is similar to "AddUser" component.

- Just that we have to set the state to already available data.
- And when data changes. then on submitting the form it will validate and invoke a function that we got as props and pass it a parameter of the updated data.


-- Home page

- Here we create a function named "editContactHandler" which gets the updated data from "EditUser" component.
- Now we loop through our main state and check if the id of the new data is available in the state. If it matches it will update that data in the state.

- And again we pollute our state through the new data.
