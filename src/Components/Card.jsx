import React from "react";


function Card({ data }) {
    return (
    <div className="card">
        <h2>Tus Preferencias Literarias</h2>
        <div className="card-content">
        <p><strong>Género Favorito:</strong> {data.GeneroFavorito}</p>
        <p><strong>Autor Favorito:</strong> {data.AutorFavorito}</p>
        </div>
    </div>
    );
}


export default Card;
