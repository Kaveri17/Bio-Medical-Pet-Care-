let API = "http://localhost:5000/api";


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
// export const getAllUserAnimals = (token) => {
//     return fetch(`${API}/useranimal/alluseranimals`, {
//         headers: {
//             "Authorization": `Bearer ${token}`
//         }
//     })
//     .then(response => response.json())
//     .catch(error => console.error("Error fetching all user animals:", error));
// };

export const getAllUserAnimals = (token) => {
    return fetch(`${API}/useranimal/alluseranimals`, {
      headers: {
        Authorization: `Bearer ${token}`, // Pass token in Authorization header
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user animals");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error fetching all user animals:", error);
        return { error: error.message };
      });
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
