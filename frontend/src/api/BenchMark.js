let API = "http://localhost:5000/api";

// Fetch all BenchMark
export const getAllBenchMark = async () => {
  try {
    const response = await fetch(`${API}/benchmark/getallbenchmark`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch benchmark data");
    }
    const data = await response.json();
    return data.benchmarks; 
  } catch (error) {
    console.error("Error fetching benchmarkdata:", error);
    throw error;
  }
};


// Delete an benchmark data by ID
export const deleteBenchmark = (id) => {
  return fetch(`${API}/benchmark/deletebenchmark/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error during deletebenchmark request:", error);
      return { error: "An error occurred while deleting the benchmark data." };
    });
};

export const addBenchmark = (animalType, breed) => {
  return fetch(`${API}/benchmark/addbenchmark`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(animalType, breed),
    credentials: "include", // Send cookies with the request if needed
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.errors) {
        // Handle server-side errors in response
        return { error: data.errors.message || "An error occurred" };
      }
      return data; // Return the successful response data
    })
    .catch((error) => {
      console.error("Error during addBenchmark request:", error);
      // Return a generic error message if network error or any other issue
      return { error: "An error occurred while communicating with the server." };
    });
};

// get benchmark data by its id
export const getBenchmarkById = async (id) => {
  try {
    const response = await fetch(`${API}/benchmark/getbenchmark/${id}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching benchmark:", error.message);
    throw new Error(error.message || "Failed to fetch benchmark");
  }
};