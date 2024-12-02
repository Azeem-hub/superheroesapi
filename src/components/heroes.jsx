import React from "react";
import Hero from "./hero";

const Heroes = ({ superheroes, deleteHero, query }) => {
  // console.log(superheroes);

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
        {superheroes
          .filter((mereheroes) => {
            return mereheroes.name.toLowerCase().startsWith(query);
          })
          .map((mereheroes) => {
            return <Hero {...mereheroes} deleteHero={deleteHero} />;
          })}
      </div>
    </>
  );
};
export default Heroes;
