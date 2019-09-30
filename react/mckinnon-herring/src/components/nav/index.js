import React from "react";

function Nav() {

  return (
    <div className="header">
    <div className="name">
        <h1><a href="index.html" className="nameLink">MCKINNON HERRING</a></h1>
    </div>
    <div className="links">
            <p><a href="/about">about</a></p>
            <p><a href="/gallery">gallery</a></p>
            <p><a href="/contact">contact</a></p>
    </div>
</div>
  );
}

export default Nav;