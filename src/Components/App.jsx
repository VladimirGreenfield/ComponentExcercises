
import React, {Component} from 'react';
import DisplayName from './DisplayName/DisplayName';


class App extends Component {
    state = {
        firstName: 'Reggie',
        lastName: 'White'
    };

    render() {
        return (
           <div className="App">
               <h1>React Component Worksheet 1.</h1>
               <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
           </div>
        );
    }
}

export default App;


