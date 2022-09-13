import React, {useState} from "react";

// This function will create a form that will allow the user to create a new room
export const NewRoom = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleArea = (event) => {
        const int = parseInt(event.target.value, 10);
        if(int >= 0){
            setArea(int);
        } else {
            return '';
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (name && area) {
            props.addRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('you typed a invalid value')
        }
    };

    // This will return a card with the form for creating a room
    return (
        <div className="myCard">
            
            
            <form className="container" onSubmit={onSubmit}>
            <h5> Add a new room</h5>
                <input type="text" placeholder="Name of Room" onChange={(event) => setName(event.target.value)} value={name}></input>
                <input type="text" placeholder="Area size" onChange={handleArea} value={area}></input>
                <button className="btn btn-primary" type="submit">Add Room</button>
            </form>
            
        </div>
    )
}