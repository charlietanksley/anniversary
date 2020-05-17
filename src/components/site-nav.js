import React from "react"
import { Link } from "gatsby"

export default () => (
  <nav>
    <ul className="site-nav">
      <Link to="/">
        {" "}
        <li>Home</li>
      </Link>
      <Link to="/guestbook">
        {" "}
        <li>Guestbook</li>
      </Link>
      <Link to="/photo-album">
        {" "}
        <li>Photo Album</li>
      </Link>
    </ul>
  </nav>
)
