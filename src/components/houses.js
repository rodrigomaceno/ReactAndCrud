import React, {Component} from 'react';
import { House } from './house.js';
import { api } from '../rest/Api.js';


// This class consists of a list of houses
// It also makes use of the lifecycle methods to get 
// all the houses, to set the state and to update the data 
export class Houses extends Component {
    state = {
        houses : []
    };

    componentDidMount() {
        this.fetchHouses();
    }

    fetchHouses = async() => {
        const houses = await api.get();
        this.setState({houses});
    }

    updateHouse = async(editedHouse) => {
        await api.put(editedHouse);
        this.fetchHouses();
    }

    render() {
        return (
            <>
                {this.state.houses.map((element) => (
                    
                    <House
                        house = {element}
                        key= {element.id}
                        updateHouse= {this.updateHouse}
                    />
                    
                    
                ))}
            </>
        )
    }
}