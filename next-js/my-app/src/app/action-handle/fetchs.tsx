"use server";
import axios from "axios";

export async function fetchCharacters() {
  try {
    const { data } = await axios.get("https://dattebayo-api.onrender.com/characters");
    return data;
  } catch (error) {
    return [];
  }
}
