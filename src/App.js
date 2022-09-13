import React, { Component } from 'react';
import { Houses } from './components/houses';
import Form from './components/newHouse';

// This class is the main class that will render all the components and display them
class App extends Component {
    render() {
        return (
            <div className='card'>
                <>
                <Form/>
                <Houses/>
                </>
            </div>
            
        )
    }
}

export default App;