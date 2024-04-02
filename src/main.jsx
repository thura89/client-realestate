import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-85pp36xyyxhy8mio.us.auth0.com"
      clientId="SOykqMZJI7Ub8oPQiOejZ8IdNAsaTLi0"
      authorizationParams={{
        redirect_uri: "http://localhost:5173",
      }}
      audience="http://localhost:3000"
      scope="OpenId Profile Email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
