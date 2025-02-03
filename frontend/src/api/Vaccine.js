const API = "http://localhost:5000/api"; 

// Fetch all vaccines
// export const getAllVaccines = async () => {
//   try {
//     const response = await fetch(`${API}/vaccine/getallvaccine`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials:'include'
//     });

//     if (!response.ok) {
//       // Log the status and response text
//       const errorData = await response.text();  // Use .text() for plain text responses
//       console.error("Error fetching vaccines:", errorData);
//       throw new Error(`Failed to fetch vaccines. Status: ${response.status} - ${errorData}`);
//     }

//     const data = await response.json();
//     return data.vaccines;
//   } catch (error) {
//     console.error("Error fetching vaccines:", error);
//     throw error;
//   }
// };


// Add a new vaccine
export const addVaccine = async (newVaccine) => {
  try {
    console.log("Sending vaccine data:", newVaccine); // Debugging: Log the payload being sent

    const response = await fetch(`${API}/vaccine/addvaccine`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVaccine),
      credentials: "include", // Send the new vaccine data as JSON
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to add vaccine");
    }

    const data = await response.json();
    return data; // Return the newly added vaccine data
  } catch (error) {
    console.error("Error adding vaccine:", error.message); // Log the error message
    throw error;
  }
};

// Fetch all vaccines
export const getAllVaccine = async () => {
  try {
    const response = await fetch(`${API}/vaccine/getallvaccine`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch vaccines");
    }
    const data = await response.json();
    return data.vaccines;
  } catch (error) {
    console.error("Error fetching vaccines:", error);
    throw error;
  }
};

// Accept a vaccine
export const acceptVaccine = async (id,vaccineId) => {
  try {
    const response = await fetch(`${API}/vaccine/accept-vaccine`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id,vaccineId }),
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to accept vaccine");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error accepting vaccine:", error.message);
    throw error;
  }
};

// Reject a vaccine
export const rejectVaccine = async (id,vaccineId) => {
  try {
    const response = await fetch(`${API}/vaccine/reject-vaccine`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id,vaccineId }),
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to reject vaccine");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error rejecting vaccine:", error.message);
    throw error;
  }
};

// Recommend vaccines for an animal
export const recommendVaccines = async (id) => {
  try {
    const response = await fetch(`${API}/vaccine/recommend/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to recommend vaccines");
    }

    const data = await response.json();
    console.log(data)
    return data.recommendedVaccines; // Return the recommended vaccines
  } catch (error) {
    console.error("Error recommending vaccines:", error.message);
    throw error;
  }
}; 

export const getAllAcceptedVaccines = async () => {
  try {
    const response = await fetch(`${API}/vaccine/getallaccept`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch accepted vaccines");
    }

    const data = await response.json();
    console.log(data);
    return data; // Return the accepted vaccines
  } catch (error) {
    console.error("Error fetching accepted vaccines:", error.message);
    throw error;
  }
};

export const getAllRejectedVaccines = async () => {
  try {
    const response = await fetch(`${API}/vaccine/getallreject`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch rejected vaccines");
    }

    const data = await response.json();
    console.log(data);
    return data; // Return the rejected vaccines
  } catch (error) {
    console.error("Error fetching rejected vaccines:", error.message);
    throw error;
  }
};

// Fetch vaccine by ID
export const getVaccineById = async (vaccineId) => {
  try {
    const response = await fetch(`${API}/vaccine/getbyid/${vaccineId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      
      },
      credentials: "include", 
    });

    if (!response.ok) {
      throw new Error("Failed to fetch vaccine details");
    }

    const data = await response.json();
    return data.vaccine;  
  } catch (error) {
    console.error("Error fetching vaccine details:", error);
    throw error;
  }
};

///
export const getAcceptedVaccines = async (userAnimalId) => {
  try {
    const response = await fetch(`${API}/vaccine/getacceptedvaccine/${userAnimalId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch accepted vaccines");
    }

    const data = await response.json();
    return data.acceptedVaccines;
  } catch (error) {
    console.error("Error fetching accepted vaccines:", error);
    throw error;
  }
};


// 
export const getRejectedVaccines = async (userAnimalId) => {
  try {
    const response = await fetch(`${API}/vaccine/getrejectedvaccine/${userAnimalId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch rejected vaccines");
    }

    const data = await response.json();
    return data.rejectedVaccines;
  } catch (error) {
    console.error("Error fetching rejected vaccines:", error);
    throw error;
  }
};