let API = "http://localhost:5001/api";


// Add a new user's animal
export const addUserAnimal = (animalData, token) => {
    return fetch(`${API}/useranimal/newuseranimal`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(animalData)
    })
    .then(response => response.json())
    .catch(error => console.error("Error adding user animal:", error));
};

// Get all user's animals
export const getAllUserAnimals = (token) => {
    return fetch(`${API}/useranimal/getall`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .catch(error => console.error("Error fetching all user animals:", error));
};

// Get a specific user's animal by ID
export const getUserAnimalById = (id, token) => {
    return fetch(`${API}/useranimal/get/${id}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .catch(error => console.error("Error fetching user animal by ID:", error));
};
