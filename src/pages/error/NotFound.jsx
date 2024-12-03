import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h2>Error 404 | Page Not Found</h2>
        <Link to="/" className="text-center">Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
