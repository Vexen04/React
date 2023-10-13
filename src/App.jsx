import "./App.css"
import PokemonCard from "./components/PokemonCard"
import React, { useState } from "react"
import NavBar from "./components/NavBar"

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
  const pokemonList = [
    {
      name: "Bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      id: "1",
      desc: "Fleur sur le dos. Plante/Venin",
      pkmnTypes: ["Plante", "Venin"],
    },
    {
      name: "Herbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      id: "2",
      desc: "Gigantesque plante sur le dos. Plante/Venin",
      pkmnTypes: ["Plante", "Venin"],
    },
    {
      name: "Florizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      id: "3",
      desc: "Arbre sur le dos. Plante/Venin",
      pkmnTypes: ["Plante", "Venin"],
    },
    {
      name: "Salamèche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      id: "4",
      desc: "Flamme sur la queue. Feu",
      pkmnTypes: ["Feu"],
    },
    {
      name: "Reptincel",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      id: "5",
      desc: "Queue flamboyante. Feu",
      pkmnTypes: ["Feu"],
    },
    {
      name: "Dracaufeu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      id: "6",
      desc: "Souffle de feu. Feu/Vol",
      pkmnTypes: ["Feu", "Vol"],
    },
    {
      name: "Carapuce",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      id: "7",
      desc: "Coquille sur le dos. Eau",
      pkmnTypes: ["Eau"],
    },
    {
      name: "Carabaffe",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      id: "8",
      desc: "Écailles sur le dos. Eau",
      pkmnTypes: ["Eau"],
    },
    {
      name: "Tortank",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      id: "9",
      desc: "Jet d'eau puissant. Eau",
      pkmnTypes: ["Eau"],
    },
    {
      name: "Chenipan",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
      id: "10",
      desc: "Chenille vorace. Insecte",
      pkmnTypes: ["Insecte"],
    },
    {
      name: "Chrysacier",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
      id: "11",
      desc: "Chrysalide rigide. Insecte",
      pkmnTypes: ["Insecte"],
    },
    {
      name: "Papilusion",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
      id: "12",
      desc: "Papillon en vol. Insecte/Vol",
      pkmnTypes: ["Insecte", "Vol"],
    },
    {
      name: "Aspicot",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
      id: "13",
      desc: "Venin dangereux. Insecte/Poison",
      pkmnTypes: ["Insecte", "Poison"],
    },
    {
      name: "Coconfort",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
      id: "14",
      desc: "Dans une coquille. Insecte/Poison",
      pkmnTypes: ["Insecte", "Poison"],
    },
    {
      name: "Dardargnan",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
      id: "15",
      desc: "Dard acéré. Insecte/Poison",
      pkmnTypes: ["Insecte", "Poison"],
    },
  ]

  const handleNextClick = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1)
    }
  }

  const handlePrevClick = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1)
    }
  }
  return (
    <div>
      <NavBar
        showPrevButton={pokemonIndex > 0}
        showNextButton={pokemonIndex < pokemonList.length - 1}
        onPreviousClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  )
}

export default App

// return (
//   <div>
//     <PokemonCard pokemon={pokemonList[0]} />
//     <PokemonCard pokemon={pokemonList[1]} />
//   </div>
// )

// function App() {
//   const [pokemonIndex, setPokemonIndex] = useState(0)
//   const handleNextClick = () => {
//     if (pokemonIndex < pokemonList.length - 1) {
//       setPokemonIndex(pokemonIndex + 1)
//     }
//   }

//   const handlePrevClick = () => {
//     if (pokemonIndex > 0) {
//       setPokemonIndex(pokemonIndex - 1)
//     }
//   }

//   return (
//     <div>
//       {/* //si est seulement si l'index est supérieur a 0 alors tu affiches le bouton précédant.  */}
//       {pokemonIndex > 0 && <button onClick={handlePrevClick}>Précédent</button>}
//       {pokemonIndex < pokemonList.length - 1 && (
//         <button onClick={handleNextClick}>Suivant</button>
//       )}

//       <PokemonCard pokemon={pokemonList[pokemonIndex]} />
//     </div>
//   )
// }
