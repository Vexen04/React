import React from "react"
import PropTypes from "prop-types"

function PokemonCard({ pokemon }) {
  if (!pokemon) {
    return (
      <div className="pokemon-card">
        <h2>Sélectionnez un Pokémon</h2>
      </div>
    )
  }

  return (
    <div className="pokemon-card">
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>{pokemon.desc}</p>
      <p>Types: {pokemon.pkmnTypes.join(", ")}</p>
    </div>
  )
}

// function PokemonCard({ pokemon }) {
//   return (
//     <figure>
//       {pokemon.imgSrc ? (
//         <img src={pokemon.imgSrc} alt={pokemon.name} />
//       ) : (
//         <p>???</p>
//       )}
//       <figcaption>{pokemon.name}</figcaption>
//     </figure>
//   )
// }

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }),
}

export default PokemonCard
