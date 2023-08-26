import React from "react";
import Todo from "./todo.jsx";
import Footer from "./footer.jsx";

function Home() {
  return (
    <div>
      <div>
        <Todo />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
