const dev = {
  baseUrl: "http://localhost:3001",
};

const prod = {
  baseUrl: "https://varys",
};

export const config = process.env.REACT_APP_ENV === "prod" ? prod : dev;
