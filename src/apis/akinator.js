import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

axios.defaults.headers = headers;

export const getResult = async (options) => {
  try {
    const response = axios.post(
      `${process.env.REACT_APP_API_URL}/akinator`,
      {
        options: options,
      },
      headers
    );
    return response;
  } catch (error) {
    throw Error(error);
  }
};
