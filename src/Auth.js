import axios from "axios";

export const login = (user) => {
  return axios
    .post(
      "user/signin",
      {
        email: user.email,
        password: user.password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      localStorage.setItem("usertoken", response.data.token);
      console.log(localStorage.getItem("usertoken"));
      console.log(user);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
