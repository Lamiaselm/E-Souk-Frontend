import axios from "axios";
import { api } from "./scripts/api";

export const login = async (user) => {
  api
    .post(
      "user/client/signin",
      {
        num_telephone: user.num_telephone,
        motDePasse: user.motDePasse,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      console.log(response);
      localStorage.setItem("usertoken", response.data.token);
      console.log(localStorage.getItem("usertoken"));
      console.log(user);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
