import React from "react";
import { FullScreenIntro } from "./FullScreenIntro";
import backgroundImage from "../../assets/DosPersonasViendoComputadora.jpg";

export const Plantilla2 = () => {
  const title = "liderazgo para bienestar en el trabajo";
  const subtitle =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis. Senectus et netus et malesuada fames ac turpis egestas sed. Auctor augue mauris augue neque. Nullam eget felis eget nunc lobortis.";

  return (
    <React.Fragment>
      <FullScreenIntro backgroundImage={backgroundImage} title={title} subtitle={subtitle}></FullScreenIntro>
    </React.Fragment>
  );
};
