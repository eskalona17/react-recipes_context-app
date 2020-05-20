import React, { useContext } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {
  const {categorias} = useContext(CategoriasContext);
  console.log(categorias)
  return (
    <form action="" className="col-12">
      <fieldset className="text-center">
        <legend>Busca bebidas por categoría o Ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            placeholder="Buscar por ingrediente"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <select name="categoria" className="form-control">
            <option value="">-- Selecciona categoria --</option>
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
