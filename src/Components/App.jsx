
import React, {Component} from 'react';
import DisplayName from './DisplayName/DisplayName';
import NameList from './NamesList/NameList';

class App extends Component {
    state = {
        names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie']
    }

    render() {
        return (
           <div className="App">
               <h1>React Component Worksheet 1.</h1>
               <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
               <NameList />
           </div>
        );
    }
}

export default App;


