import React from "react";
import { ColorCard } from "./ColorCard";
import { useState, useEffect } from "react";

const colors = [
  {
    id: "yellow",
    code: "#ffe000",
    font: "black",
    name: "AMARILLO",
    data: 'Amarillo, del latín "amarellus" y vinculado a "amārus", sugiere un pájaro carpintero con trino áspero. Proviene del árabe "ambari" y del griego "amarysso", simbolizando resplandor. Representa luz solar, mediodía y oro, marcando el camino intermedio. Asocia optimismo y enojo, siendo también el color de la madurez y amor sensual. El amarillo verdoso indica enfermedad y maldad. En formas triangulares, redondas y angulosas, se asocia con contenido específico en envases. Preferido por el 6%, predomina entre mayores. Su relación con la advertencia, toxicidad y la peste se destaca. Amarillo: un matiz complejo entre la positividad y la advertencia.',
  },
  {
    id: "blue",
    code: "#21254f",
    font: "white",
    name: "AZUL",
    data: 'El azul, derivado del persa "lazhward" o "lapislázuli", refleja el color del cielo y del mar para los griegos, asociado al dios marino Glaucos. Ubicado entre el verde e índigo, simboliza el firmamento, el mar y el aire, representando esperanza, fidelidad, serenidad y libertad. Evoca la profundidad inmaterial y del frío, siendo el color más frío térmicamente. Asociado a la eternidad y lo irreal, representa la paz, los derechos humanos y es el color de Europa. Además de su conexión con lo masculino e intelectual, es preferido por la mayoría, siendo el color de la nobleza en la Edad Media y popularizado con los Jeans en 1850.',
  },
  {
    id: "white",
    code: "#ffffff",
    font: "black",
    name: "BLANCO",
    data: 'Blanco, del germánico "blank" y francés "blanch", simboliza luz y pureza. Representa el inicio, la honestidad y la paz. Es positivo y estimulante, contrario al negro y rojo, asociados al poder. En el simbolismo de china, pertenece al yin femenino y simboliza la debilidad. Además, representa la limpieza, la higiene y la virginidad. Utilizado en entornos médicos y moda en el siglo XIX. Aunque preferido en interiores, su perfección puede distanciar un poco. Solo el 2% lo prefiere, pero su relevancia persiste en diversos contextos. La simplicidad del blanco encierra una profundidad de significados que van más allá de su aparente neutralidad.',
  },
  {
    id: "brown",
    code: "#864414",
    font: "white",
    name: "CAFÉ",
    data: 'Café, del turco "kahve" y árabe "qahwa", no espectral, ubicado visualmente entre 580 y 620 nm. Representa la tierra, con ambivalencia: oscurecimiento del amarillo, tristeza, pero también goce, vigor y dignidad. Este color ha tenido un pasado político siniestro, ya que fue asociado al nacionalsocialismo alemán. Simboliza pereza y humildad, evocando la Edad Media de campesinos y siervos. Aceptado en moda por su versatilidad. Representa lo anticuado y es rechazado por el 17% de mujeres y el 22% de hombres. El café es muy utilizado en la decoración de viviendas, proporcionando una sensación de calidez.',
  },
  {
    id: "grey",
    code: "#bdbcbc",
    font: "black",
    name: "GRIS",
    data: 'Gris, del alemán "gris" y holandés "grij" (anciano o canoso), no espectral, visualmente entre 580 y 620 nm. Representa la indecisión, pasividad y falta de energía, lo apagado. Neutro y pasivo, simboliza mediocridad, humildad y tristeza. Asociado a la vejez, lejanía, pobreza y modestia. También a lo barato, basto y desagradable. Representa teoría, reflexión y secreto. En la naturaleza, sugiere mal tiempo y camuflaje. Solo el 1% de hombres lo prefiere, el 13% lo rechaza. Prácticamente ninguna mujer lo elige como favorito, y el 14% lo menosprecia. La preferencia o aversión refleja los sentimientos asociados.',
  },
  {
    id: "orange",
    code: "#e84e0e",
    font: "black",
    name: "NARANJA",
    data: 'Naranja, del árabe "nāranj" y persa "nārang," derivado del sánscrito "nārangah" (fruta que gusta al elefante), tiene longitud de onda entre 590 y 620 nm. Es una combinación de rojo y amarillo, con un papel secundario en nuestro pensamiento y simbolismo. Representa entusiasmo, exaltación y, en tonalidades más rojizas, ardor y pasión. Kandinsky lo asocia con fuerza, energía, ambición, alegría y triunfo. Símbolo de fertilidad, es el color de la diversión, sociabilidad y alegría. Asociado al peligro y visibilidad en la oscuridad, es común en chalecos salvavidas y señales de advertencia. Aunque contrasta con el mar, no es popular en autos.',
  },
  {
    id: "black",
    code: "#000000",
    font: "white",
    name: "NEGRO",
    data: "El negro, carente de color propio, es la ausencia total de colores, de luz. Simboliza el fin, el duelo, y la dualidad entre bien y mal. Representa la oscuridad, la noche, el misterio y la muerte, así como lo prohibido y las organizaciones secretas. Desde el punto de vista estético, el negro se percibe como elegante, anguloso y dominante. Aunque no se clasifica como un color, goza de preferencia, especialmente entre los jóvenes, vinculado a la moda y el lujo. En contraste con el blanco, representa el cierre y la oscuridad, destacando su singular simbolismo en la paleta de colores, con una notable presencia.",
  },
  {
    id: "red",
    code: "#e30613",
    font: "white",
    name: "ROJO",
    data: 'El rojo, originado del latín "russus" o "rufus," es el color más antiguo con simbolismo arraigado en el fuego y la sangre. Representa poder, amor, guerra y dinamismo, siendo omnipresente en publicidad, deportes de motor y marcas. Aunque apreciado por hombres y mujeres, su exceso puede resultar abrumador. Desde tonos claros simbolizando el corazón hasta oscuros representando la noche y la feminidad, el rojo tiene una rica diversidad. Su presencia en anuncios y señales de peligro le confiere un papel destacado en la comunicación visual. Un color polifacético que fusiona intensidad, emociones y presencia visual.',
  },
  {
    id: "pink",
    code: "#f29dac",
    font: "black",
    name: "ROSA",
    data: 'El rosa, del griego rhódon, es un color propio, vinculado a la flor de la rosa. Simboliza encanto, cortesía, sensibilidad y lo femenino. Asociado a la infancia, representa ternura erótica y mucha delicadeza. En el Rococó, fue parte de la moda pastel. Es el color de la ilusión y el romanticismo, de lo "color de rosa". Aunque despreciado por algunos como "infantil" o "femenino", es apreciado por mujeres mayores. El 3% de las mujeres lo prefiere, pero muchos hombres lo perciben sin distinción. Representa lo agradable, etéreo y dulce, asociado al aroma de la rosa. El rosa es un color único y positivo con su propia identidad y muy marcada.',
  },
  {
    id: "green",
    code: "#1da438",
    font: "white",
    name: "VERDE",
    data: "El verde, derivado de virIdis, refiere a la vidria o col. Es la esencia de la naturaleza y simboliza conciencia medioambiental. Resulta de la mezcla de azul y amarillo, siendo un matiz de transición. Asociado a la primavera, juventud y vida, representa crecimiento y lo saludable. Utilizado en la cosmética y medicina verde, también es vinculado a movimientos ecologistas como Greenpeace. Aunque evoca lo venenoso, es símbolo de tranquilidad y alivio. Funcionalmente, aparece en semáforos y carteles de emergencia. Predilecto entre los mayores, a algunos no les agrada. Es identificativo de la Aspirina, representando alivio.",
  },
];

const Color = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorId, setSelectedColorId] = useState(null);

  useEffect(() => {
    const initialColor = colors[0];
    setSelectedColor(initialColor);
    setSelectedColorId(initialColor.id);
  }, []);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedColorId(color.id);
  };

  const handleCardClick = () => {
    const currentIndex = colors.findIndex(
      (color) => color.id === selectedColorId
    );
    const newIndex = (currentIndex + 1) % colors.length;

    const newColor = colors[newIndex];
    setSelectedColor(newColor);
    setSelectedColorId(newColor.id);
  };

  return (
    <>
      <div className="colors">
        <div className="radio-buttons">
          {colors.map((color) => (
            <input
              key={color.id}
              type="radio"
              name="colors"
              id={color.id}
              onChange={() => handleColorChange(color)}
              checked={color.id === selectedColorId}
            />
          ))}
        </div>
        <div
          onClick={handleCardClick}
          style={{ cursor: "pointer", outline: "none" }}
        >
          <ColorCard {...selectedColor} />
        </div>
      </div>
    </>
  );
};

export default Color;
