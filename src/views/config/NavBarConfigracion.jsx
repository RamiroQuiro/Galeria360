import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarConfigracion() {
  return (
    <div className=" flex flex-wrap w-8/12 mx-auto  text-gray-200 font-medium">
      <NavLink
        className={({ isActive }) =>
          (isActive ? "border-b border-pink-500" : ``) + "relative flex-1 p-4"
        }
        to={"/config"}
      >
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 flex-shrink-0 text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>

          <span className="ml-3 text-sm font-medium">
            {" "}
            Configuracion Empresa{" "}
          </span>
        </div>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          (isActive ? "border-b border-pink-500" : ``) + "relative flex-1 p-4"
        }
        to={"/configuracionGaleria"}
      >
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 flex-shrink-0 text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>

          <span className="ml-3 text-sm font-medium">
            {" "}
            Configuracion Galería{" "}
          </span>
        </div>
      </NavLink>
    </div>
  );
}
