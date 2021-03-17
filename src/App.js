import Ipod from './Ipod';
// npx create-react-app my-app
// A few words about redux
// Redux is a state management tool for javascript
// 1. Acts as a single source of truth. A thing called "store" stores the state for components.
// No need of scattering the states throughout components
// 2. state is read only
// 3. changes to state are made by pure functions only also called reducers.


// When and why should we use redux?
// When we have deep nested hierarchy of components, the state must be moved to a common parent if it is to be shared among many components
// We can avoid this cumbersome task using redux. So redux is useful when many components need to share state.
// Redux state change is predictible. We know when, where, why, who is changing the state.
// States are easier to maintain.
// It helps in data persistance.
// Data flow is only in one direction. See how-redux-works.png


// Actions only describe what happened, but don't describe how the application's state changes. 
// Reducer specifies how the application's state changes in response to actions sent to the store.
function App() {
  return (
    <div className="App">
      <Ipod />
    </div>
  );
}

export default App;
