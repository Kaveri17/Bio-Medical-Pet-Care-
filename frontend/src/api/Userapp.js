// import { API } from "../../config";

let API = "http://localhost:5000/api";
export const register = (user) => {
    return fetch(`${API}/user/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: 'include', 
    })
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
//login

export const login = (email, password) => {
  //   console.log(API);
  return fetch(`${API}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',// This ensures cookies are sent with the request
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};



//forgot password

export const forgotpassword = (email) => {
    return fetch(`${API}/user/forgot-password`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
        credentials: 'include',
    })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
//reset password
export const resetPassword = (token, password) => {
    return fetch(`${API}/user/reset-password/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
      credentials: 'include',
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

//verify email

export const verifyEmail = (code) => {
    return fetch(`${API}/user/verify-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
      credentials: 'include',
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

  export const authenticate = (data) => {
    return fetch(`${API}/user/check-auth`, {
      method: 'GET', // or 'POST', depending on your route
      credentials: 'include',  // This ensures cookies are sent with the request
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data received:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    
}
// to check if logged in
export const isAuthenticate = () => {
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else {
        return false
    }
}