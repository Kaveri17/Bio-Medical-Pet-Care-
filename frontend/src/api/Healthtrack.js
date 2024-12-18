let API = "http://localhost:5000/api";

export const addHealth = (add) => {
    return fetch(`${API}/daily/dailyrecord`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(add)
    })
    .then(response => response.json())
    .then(data => {
        // If the response has an error object, return a message string
        if (data.errors) {
            return { error: data.errors.message || "An error occurred" };
        }
        return data;  // return the successful data if no error
    })
    .catch(error => {
        // Return a generic error message
        return { error: "An error occurred while communicating with the server." };
    });
};

//get all 
export const dailyrecords = () => {
    return fetch(`${API}/daily/dailyrecords`)
    .then(res => res.json())
    .catch(error => console.log(error))
}
// get by id

export const dailyrecord = (id) => {
    return fetch(`${API}/daily/dailyrecord/${id}`)
    .then(res=>res.json())
    .catch(error=>console.log(error))
}




  