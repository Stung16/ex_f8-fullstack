import React from "react";
import Link from "next/link";
import "../../assets/style/header.css";
import Stricmode from "./Stricmode";
import ChangeLang from "./ChangeLang";

function Header() {
  return (
    <header>
      <div className="header-left">
        <div className="inner-left">
          <Link href="/">
            <h3>Fullstack.edu.vn F8</h3>
          </Link>
          <Link href="/">
            <h3>Home</h3>
          </Link>
        </div>
      </div>
      <div className="header-right">
        <div className="inner-right">
          <a href="#">F8</a>
          <a href="#">FB</a>
          <a href="#">YTB</a>
          <Stricmode />
          <ChangeLang />
        </div>
      </div>
    </header>
  );
}

export default Header;
