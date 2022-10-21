import React from "react";
import pdf from "../../assets/img/doc.pdf"

const PDF = () => {
  return (
    <>
      <div className="w-full min-h-[520px] ml-[20px] border border-gray-300">
        <iframe
          src={pdf}
          frameborder="0"
          title="Generador-PDF"
          className="min-w-[100%] h-full m-[0px]"
        />
      </div>
    </>
  );
};

export default PDF;
