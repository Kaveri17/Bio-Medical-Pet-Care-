const API = "http://localhost:5001/api";

export const getAllVaccines = async () => {
  try {
    const response = await fetch(`${API}/vaccines`, {
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
