import React, { useRef } from "react";
import img from "../../assets/img/fileprint1.png"
import pdf from "../../assets/img/doc.pdf"

const imagenes = ([
  {
    "img": img,
  },
  {
    "img": pdf
  }
])
const PDF = () => {
  const image = useRef(false)
  const handleImg = () => {
    image.src = imagenes[1];
  };

  return (
    <>
      <div className="w-full min-h-[490px] overflow-auto rounded ml-[20px] border border-gray-300">
        <iframe
          src={imagenes[0].img}
          frameborder="0"
          title="Generador-PDF"
          ref={image}
          className="min-w-full h-full m-[0px]"
        />
      </div>
    </>
  );
};

export default PDF;
