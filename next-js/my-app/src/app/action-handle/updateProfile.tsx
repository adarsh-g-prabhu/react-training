"use server";

import axios from "axios";

export async function updateProfile(prevState, formData) {
  try {
    const { data } = await axios.get("https://dattebayo-api.onrender.com/characters");

    const newName = formData.get("name");
    const age = formData.get("age");

    if (!newName) {
      return { error: "Name cannot be empty!" };
    }

    return { success: `Profile updated to "${newName}", ${age}!`, anime: data };
  } catch (error) {
    return { error: "Failed to fetch anime data." };
  }
}
