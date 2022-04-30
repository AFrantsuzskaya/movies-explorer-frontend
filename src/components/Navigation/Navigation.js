import React from "react";
import "./Navigation.css";

function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className={`${isOpen ? "navigation" : ""}`}>
      <div>dheuyw</div>
    </section>
  );
}

export default Navigation;
