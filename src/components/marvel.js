import React, { useState, useEffect } from 'react';
import MD5 from "crypto-js/md5";

function Marvel() {

  const [Marvel, setMarvel] = useState();

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("marvel") === null) {
        setMarvel("Loading...")
      } else {
        var local = localStorage.getItem("marvel");
        setMarvel(JSON.parse(local));
      }
    } else {
      fetchMarvel();
    }
  }, []);

  const fetchMarvel = async () => {
    const md5 = MD5(`1234567809${process.env.REACT_APP_PRIVATE_KEY}${process.env.REACT_APP_PUBLIC_KEY}`).toString()
    const URL = `https://gateway.marvel.com/v1/public/characters?ts=1234567809&hash=${md5}&apikey=${process.env.REACT_APP_PUBLIC_KEY}`;
    const dataMarvel = await fetch(URL);
    const dataJson = await dataMarvel.json();
    const rta = dataJson.data.results.map((t) => {
      return {
        id: t.id,
        name: t.name,
        description: t.description
      }
    });
    setMarvel(rta);
    localStorage.setItem("marvel", JSON.stringify(rta));
  }

  return (
    <div>
      {
        Marvel?.map?.((m) => (
          <>
          <h1>----------------------</h1>
          <h1>{m.id}</h1>
          <h1>{m.name}</h1>
          <p>{m.description}</p>
          </>
        ))
      }
    </div>
  );
}

export default Marvel;