// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import jwt_decode from "jwt-decode";

// const getRole = () => {
//   let bearerToken = localStorage.getItem("token");
//   if (bearerToken) {
//     let jwt = bearerToken.split(" ")[1];
//     return jwt_decode(jwt).role;
//   }
// };
// const TechnicanRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       getRole() === "Technican" ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/",
//             state: { from: props.location },
//           }}
//         />
//       )
//     }
//   />
// );

// export default TechnicanRoute;
