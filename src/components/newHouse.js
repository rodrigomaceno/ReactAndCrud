import React, {Component} from 'react';
import { useState } from 'react';

const initialState = {
    id: '',
    name: '',
    rooms: []
}

function Form() {
    const [formData, setFormData] = useState(initialState)

    const onChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const postData = async () => {
        const res = await fetch('https://ancient-taiga-31359.herokuapp.com/api/houses', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        console.log(data)
    }

    const deleteData = async (id) => {
        
        const res = await fetch(`https://ancient-taiga-31359.herokuapp.com/api/houses/${id}`,{
            method:"DELETE"
        })
        
        console.log(res)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postData();
    }

    const del = (event) => {
        event.preventDefault();
        deleteData(formData.id);
        console.log(formData.id)
    }

    return (
        <div>
            <h4>Create New House</h4>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type='text'
                        placeholder='Enter name'
                        name='name'
                        value={formData.name}
                        onChange={onChange}
                    />
                </div>
                <input type='submit'/>
            </form>
            <h4>Delete a House</h4>
            <form onSubmit={del}>
                <div>
                    <input
                        type='text'
                        placeholder='Enter Id'
                        name='id'
                        value={formData.id}
                        onChange={onChange}
                    />
                </div>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Form

// export default class NewHouse extends Component{
//     newHouse(){
        
//         fetch('https://ancient-taiga-31359.herokuapp.com/api/houses',{
//             method:"POST",
//             body:JSON.stringify(
//                 {
//                     name: prompt('Give this house a name'),
//                     rooms: []
//                 }
//             )
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))
//     }
//     render(){
//     return (
//         <>
//         <button onClick={this.newHouse}>Create New House</button>
//         </>
//     )}
// }