import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }} class="form-inline my-2 my-lg-0">
      <input
        class="form-control mr-sm-2"
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => setCity(e.target.value)}
      />
      <input class="btn btn-outline-success my-2 my-sm-0" type="submit" value="Agregar" />
    </form>
  );
}
