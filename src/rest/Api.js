const ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';


// I created this separate class named Api to store the api methods
// that will be used 
class Api {
    get = async() => {
        try {
            const res = await fetch(ENDPOINT);
            return await res.json();
        } catch(event) {
            console.log('There was an issue with getting the data from the network', event);
        }
    }
 
    put = async(house) => {
        try {
            const res = await fetch(`${ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await res.json();
        } catch (event) {
            console.log('There was an issue with updating the houses', event);
        }
    }
}

export const api = new Api();