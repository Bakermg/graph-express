import React from "react";

export const Header = () => {
  return (
    <nav className="navbar bg-dark mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src="https://files.readme.io/566e583-Optimizely_Symbol_Mono_Light_1.svg" alt="" />
            <div className="fw-bold">ProjectMgmt</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
