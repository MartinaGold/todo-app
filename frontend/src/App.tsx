import React from 'react';
import {Container} from "@material-ui/core";
import {TodoComponent} from "./components/TodoComponent";


function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <TodoComponent></TodoComponent>
      </Container>
    </div>
  );
}

export default App;
