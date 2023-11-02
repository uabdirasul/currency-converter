import React from "react";
import RoutesWrapper from "./RoutesWrapper";

import { NavLink } from "react-router-dom";

// Styles
import "../styles/Main.css";

const Main = () => {
  return (
    <div className="main">
      <ul className="main__links">
        <NavLink to="/" className="main__links__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={16}
            height={16}
          >
            <path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7l-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z" />
          </svg>
          <span>Converter</span>
        </NavLink>
        <NavLink to="/currencies" className="main__links__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={16}
            height={16}
          >
            <path d="M512 80c0 18-14.3 34.6-38.4 48-29.1 16.1-72.5 27.5-122.3 30.9-3.7-1.8-7.4-3.5-11.3-5-39.4-16.5-91.8-25.9-148-25.9-8.3 0-16.4.2-24.5.6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80s192 35.8 192 80zm-351.3 81.1c10.2-.7 20.7-1.1 31.3-1.1 62.2 0 117.4 12.3 152.5 31.4 24.8 13.5 39.5 30.3 39.5 48.6 0 4-.7 7.9-2.1 11.7-4.6 13.2-17 25.3-35 35.5-.1.1-.3.1-.4.2-.3.2-.6.3-.9.5-35 19.4-90.8 32-153.6 32-59.6 0-112.9-11.3-148.2-29.1-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4 10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4 28.3-4.4 54.2-11.4 76.2-20.5 16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9-14.6 7.4-32.4 13.7-52.4 18.5.1-1.8.2-3.5.2-5.3zm-32 96c0 18-14.3 34.6-38.4 48-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336v-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9 6.1-3.4 11.8-7.2 17.2-11.2 1.5-1.1 2.9-2.3 4.3-3.4V336zm32 0v-57.9c19-4.2 36.5-9.5 52.1-16 16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9-16.3 16.3-45 29.7-81.3 38.4.1-1.7.2-3.5.2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9 16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432v-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z" />
          </svg>
          <span>Currencies</span>
        </NavLink>
      </ul>
      <RoutesWrapper />
    </div>
  );
};

export default Main;
