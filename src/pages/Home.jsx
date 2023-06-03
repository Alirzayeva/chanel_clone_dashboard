import React from "react";
import { Link } from "react-router-dom";
import chanel from "../assets/images/chanel.webp";
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <img src={chanel} alt="chanel" />
        <h2>CHANEL Admin Panel</h2>
        <button>
          <Link to="/all-products">All Product page go</Link>
        </button>
      </div>
    </section>
  );
};

export default Home;
