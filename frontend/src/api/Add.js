let API = "http://localhost:5000/api";


// Add a new user's animal
export const addUserAnimal = (animalData) => {
    return fetch(`${API}/useranimal/newuseranimal`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(animalData)
    })
    .then(response => response.json())
    .catch(error => console.error("Error adding user animal:", error));
};



export const getAllUserAnimals = () => {
    return fetch(`${API}/useranimal/alluseranimals`, {
      credentials: "include", // Include cookies in the request
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
export const getUserAnimalById = (id) => {
  return fetch(`${API}/useranimal/getanimal/${id}`, {
      credentials: "include"
  })
  .then(response => response.json())
  .catch(error => console.error("Error fetching user animal by ID:", error));
};
