import React, { useEffect, useState } from "react";
import Heroes from "./components/heroes";
import { Button } from "react-bootstrap";

const url =
  "https://www.superheroapi.com/api.php/4d0933484de9779debac30c6ac63c189/search/a";

const Main = () => {
  // All useStates
  const [superheros, setSuperHeroes] = useState([]); //in initial state will be empty array
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //  make function which will get data from url using fetch() call back funciton
  async function fetchHeroes() {
    setIsLoading(true);
    var res = await fetch(url);
    var data = await res.json();
    setSuperHeroes(data.results);
    // console.log(data);
    setIsLoading(false);
  }
  function deleteHero(id) {
    var filterHeroes = superheros.filter((mereheroes) => mereheroes.id !== id);
    setSuperHeroes(filterHeroes);
  }
  function clearHeroes() {
    setSuperHeroes([]); //assign empty array
  }

  useEffect(() => {
    fetchHeroes();
  }, []);

  // below is conditional loading

  if (isLoading) {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center w-100 min-vh-100">
          {/* by default public folder is get in file */}
          <img src="loader.gif" alt="Loader Image" />
        </div>
      </>
    );
  }

  if (superheros.length === 0) {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center w-100 min-vh-100">
          <Button variant="primary" onClick={() => fetchHeroes()}>
            Fetch Heroes
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container p-4">
        <div className="d-flex justify-content-center flex-column align-items-center gap-2">
          <h1 className="text-center mt-4 display-5 fw-bold">
            Super Heroes ({superheros.length})
          </h1>
          <input
            type="text"
            className="form-control w-25 shadow-sm border text-center bg-body-secondary fw-bold"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={clearHeroes}>Clear All</Button>
        </div>
        <Heroes
          superheroes={superheros}
          deleteHero={deleteHero}
          query={query}
        />
      </div>
    </>
  );
};

export default Main;
