import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex justify-content-end bg-info py-2">
        <div className="m-2">
          <Link to="/">Accueil</Link>
        </div>
        <div className="m-2">
          <Link to="/about">A propos</Link>
        </div>
      </div>
      <div className="m-4">
        <Outlet />
      </div>
      <footer className="mt-auto"></footer>
    </div>
  );
}
