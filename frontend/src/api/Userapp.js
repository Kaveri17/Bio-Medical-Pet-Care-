import { API } from "../config";

export const register = (user) => {
    return fetch(`${API}/user/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
//login

export default login = (email, password) => {
    return fetch(`${API}/user/login`, {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email,password})
    })
    .then((response) => response.json())
    .catch((error)=> console.log(error))
};

//forgot password

export const forgotpassword = (email) => {
    return fetch(`${API}/user/forgot-password`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(email)
    })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
//reset password

export const resetpassword = (token,password) => {
    return fetch(`${API}/user/reset-password/${token}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({password})
    })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
//verify email

export const verifyEmail = (code) => {
    return fetch(`${API}/user/verify-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };