"use client";

import { useActionState } from "react";
import { updateProfile } from "./updateProfile";
import { fetchCharacters } from "./fetchs";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function ProfileForm() {
  const [state, action] = useActionState(updateProfile, {}); 
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function getCharacters() {
      const names = await fetchCharacters(); 
      setCharacters(names.characters);
    }
    getCharacters();
  }, []);

  return (
    <form action={action}>
      <input type="text" name="name" placeholder="Enter new name" />
      <input type="text" name="age" placeholder="Age" />
      <button type="submit">Update</button>

      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state.success && <p style={{ color: "green" }}>{state.success}</p>}


      {characters &&  (
        <div className="flex flex-row flex-wrap gap-10">
          {characters.map((item, i) => (
            <div key={i}>
              <h1>{item.name}</h1>
              <Image src={item.images[0]} width={150} height={150} alt={item.name} unoptimized/>
              <a href={`https://naruto.fandom.com/wiki/${item.name}`}>for more info</a>
            </div> 
          ))}
        </div>
      )}
    </form>
  );
}
