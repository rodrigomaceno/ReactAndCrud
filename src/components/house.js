import React from 'react';
import { NewRoom} from './newRoom';
import Form from './newHouse';

export const House = (props) => {
    const {house, updateHouse} = props;

   
    // This function will delete the room by its ID
    const deleteRoom = (roomId) => {
        const editedHouse = {
            ...house,
            rooms: house.rooms.filter((element) => element._id !== roomId)
        };
        updateHouse(editedHouse);
    }

    // This function will add a new room by getting all the properties of house
    // and creating a new room based on the array.
    const addRoom = (room) => updateHouse({
        ...house, rooms: [...house.rooms, room]});
    
    // This function is responsible for displaying and laying out the rooms
    // It also provides a button for deleting a room
    const rooms = () => (
        <div id='this' className='bg-light'>
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label> {`${room.name} Area: ${room.area}`}</label>&nbsp;&nbsp;
                    <button type='button' className='btn btn-danger' onClick={(event) => deleteRoom(room._id)}> Delete Room</button>
                </li>
            ))}
        </ul>
        </div>
        
    );
   

    // This returns a card with a House title 
    // and displays the room component and
    // the form to add a room
    return (

            <div id="myCard" className='bg-light'>
            <h4 className='card-header'>{house.name}</h4>
            {
                rooms({
                    rooms, houseId: house._id, deleteRoom
                })
                
            }
            
            <NewRoom addRoom={addRoom} />
            
            </div>
        
    );
}; 