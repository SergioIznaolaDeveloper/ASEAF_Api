import React from "react";

function Tickets () {
  
    return (
      <div className="filtros">
        <div className="getFiltros">
          <button className="filtro" name="filtro" id="filtro">embudo</button>
          <button className="add" name="add" id="add">+</button>
        </div>
        <div id="informacion">
          <p><b>Información</b></p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quaerat debitis, magnam repudiandae magni aspernatur facilis pariatur voluptatem asperiores vel incidunt sapiente consequatur tenetur eius.</p>
          <button className="status" name="status" id="status">Status</button>
        </div>
        <div id="informacion">
          <p><strong>Información</strong> </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quaerat debitis, magnam repudiandae magni aspernatur facilis pariatur voluptatem asperiores vel incidunt sapiente consequatur tenetur eius.</p>
          <button className="status" name="status" id="status">Status</button>
        </div>
        <div id="informacion">
          <p><b>Información</b></p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quaerat debitis, magnam repudiandae magni aspernatur facilis pariatur voluptatem asperiores vel incidunt sapiente consequatur tenetur eius.</p>
          <button className="status" name="status" id="status">Status</button>
        </div>
        
      </div>
    )
}

export default Tickets;
