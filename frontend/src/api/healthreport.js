// let API = "http://localhost:5000/api";

// // Generate weekly health report
// export const generateWeeklyReport = (id) => {
//   return fetch(`${API}/report/getWeeklyReport/${id}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       // "Authorization": `Bearer ${token}`, // Pass the token in the Authorization header
//     },
//     credentials: "include", // Include credentials for session handling (if required)
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.errors) {
//         return { error: data.errors.message || "An error occurred" };
//       }
//       return data;
//     })
//     .catch((error) => {
//       return { error:  error.message ||"An error occurred while communicating with the server." };
//     });
// };
let API = "http://localhost:5000/api";

// Generate weekly health report
export const generateWeeklyReport = (id, startDate, endDate) => {
  return fetch(`${API}/report/getWeeklyReport/${id}?startDate=${startDate}&endDate=${endDate}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${token}`, // Uncomment if token is required
    },
    credentials: "include", // Include credentials for session handling (if required)
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.errors) {
        return { error: data.errors.message || "An error occurred" };
      }
      return data;
    })
    .catch((error) => {
      return { error: error.message || "An error occurred while communicating with the server." };
    });
};
