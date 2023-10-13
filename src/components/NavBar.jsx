import React from "react"

function NavBar({
  onPreviousClick,
  onNextClick,
  isPreviousDisabled,
  isNextDisabled,
}) {
  return (
    <div className="nav-bar">
      <button onClick={onPreviousClick} disabled={isPreviousDisabled}>
        Précédent
      </button>
      <button onClick={onNextClick} disabled={isNextDisabled}>
        Suivant
      </button>
    </div>
  )
}

export default NavBar
// import React from "react"

// function App() {
//     const [pokemonIndex, setPokemonIndex] = useState(0)
//     const handleNextClick = () => {
//       if (pokemonIndex < pokemonList.length - 1) {
//         setPokemonIndex(pokemonIndex + 1)
//       }
//     }

//     const handlePrevClick = () => {
//       if (pokemonIndex > 0) {
//         setPokemonIndex(pokemonIndex - 1)
//       }
//     }

//     return (
//       <div>
//         {/* //si est seulement si l'index est supérieur a 0 alors tu affiches le bouton précédant.  */}
//         {pokemonIndex > 0 && <button onClick={handlePrevClick}>Précédent</button>}
//         {pokemonIndex < pokemonList.length - 1 && (
//           <button onClick={handleNextClick}>Suivant</button>
//         )}

//         <PokemonCard pokemon={pokemonList[pokemonIndex]} />
//       </div>
//     )
//   }

//   export default App
