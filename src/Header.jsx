import React from "react";
import hero from "/hero.png";

const Header = () => {
  //   const handleScrollToContent = () => {
  //     const contentSection = document.getElementsByClassName("intro")[0];
  //     contentSection.scrollIntoView({ behavior: "smooth" });
  //   };

  return (
    <>
      <div className="header">
        <div className="hero-img">
          <img src={hero} alt="" />
        </div>
        <div className="hero-info">
          <h1>SENSACIÓN, SIGNIFICADO Y APLICACIÓN DEL COLOR</h1>
          <hr />
          <p>
            En el mundo material, las teorías modernas del color integran
            esferas físicas y perceptuales, vinculando el color a sensaciones
            internas. Se acepta ampliamente que objetos como la hierba y el
            cielo no poseen inherentemente colores como el verde o el azul; el
            color es una interpretación dependiente de la luz y el sistema
            visual humano. La complejidad de la percepción del color se
            manifiesta en condiciones lumínicas cambiantes y el fenómeno del
            metamerismo. Este último implica que objetos con el mismo color bajo
            ciertas condiciones lumínicas no coinciden bajo otras. En diseño,
            comprender el color es crucial, ya que su uso y distribución
            reflejan la personalidad y mente creativa del diseñador, influyendo
            en la transmisión de sensaciones específicas en piezas gráficas.
          </p>
          <hr />
          {/* <Links /> */}
        </div>
        {/* <button id="next-button" onClick={handleScrollToContent}>
          ▼
        </button> */}
      </div>
    </>
  );
};

export default Header;
