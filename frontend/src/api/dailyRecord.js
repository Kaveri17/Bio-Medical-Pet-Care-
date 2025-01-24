let API = "http://localhost:5000/api"

//add daily record
export const addDaily = (add,id) => {
    console.log(id)
        return fetch(`${API}/daily/dailyrecord/${id}`, {
             method: "POST",
           headers: {
                 "Content-Type": "application/json"
            },
           body: JSON.stringify(add),
             credentials: "include",
         })
     .then(response => response.json())
        .then(data => {
             if (data.errors) {
                return { error: data.errors.message || "An error occurred" };
            }
             return data;
        })
        .catch(error => {
            return { error: "An error occurred while communicating with the server." };
         });
     };


//get all daily record
export const getAllDailyRecord = () => {
    return fetch(`${API}/daily/dailyrecords`, {
        credentials: "include"
    })
    .then((response) => {
        if(!response.ok) {
            throw new Error ("Failed to fetch daily records")
        }
        return response.json()
    })
    .catch((error) => {
        console.error("Error in fetching all daily records of animal", error)
        return {error: error.message}

    })
}

//get daily record by id

export const getDailyRecordById = (id) => {
    return fetch(`${API}/daily/dailyrecord/${id}`,{
        credentials: "include"
    }
        
     )
     
    .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .catch((error) => {
        console.error("Error during getAnimalById request:", error);
        return { error: "An error occurred while retrieving the animal." };
      });
  };