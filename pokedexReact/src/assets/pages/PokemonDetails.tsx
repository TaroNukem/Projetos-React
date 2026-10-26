import { useParams } from "react-router";
import { Link } from "react-router";
import dados from "../data/pokedex-data.json";

export default function PokemonDetails() {
  const { id } = useParams();

  const pokemon = dados.pokemon.find((pokemon) => pokemon.id === Number(id));

  if (!pokemon) {
    return <h1>Página não encontrada</h1>;
  }
  return (
    <div>
        <Link to={`/`}>
        <button>{" ⟸"}</button> <br /><h1>#{pokemon.id}</h1>
      </Link><br />
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt={pokemon.name}
      />
      <h1>{pokemon.name}</h1>
      <h2>
        Tipos:{" "}
        {pokemon.types.map((tipo) => `${tipo.name}: ${tipo.id}`).join(", ")}{" "}
        <br />
      </h2>
      <p>
        Vida:
        <br />
        {"I".repeat(Number(pokemon.stats.hp))}:{pokemon.stats.hp}
        <br />
        Ataque:
        <br />
        {"I".repeat(Number(pokemon.stats.attack))}:{pokemon.stats.attack}
        <br />
        Defesa:
        <br />
        {"I".repeat(Number(pokemon.stats.defense))}:{pokemon.stats.defense}
        <br />
        Ataque Especial:
        <br />
        {"I".repeat(Number(pokemon.stats.specialAttack))}:
        {pokemon.stats.specialAttack}
        <br />
        Defesa Especial:
        <br />
        {"I".repeat(Number(pokemon.stats.specialDefense))}:
        {pokemon.stats.specialDefense}
        <br />
        Velocidade:
        <br />
        {"I".repeat(Number(pokemon.stats.speed))}:{pokemon.stats.speed}
        <br />
      </p>
      {(Number(pokemon.id) > 1) ? <Link to={`/pokemon/${pokemon.id - 1}`}>
        <button>Anterior</button>
      </Link> : <button>Anterior</button>}

      {(Number(pokemon.id) < 151) ? <Link to={`/pokemon/${pokemon.id + 1}`}>
        <button>Proximo</button>
      </Link> : <button>Proximo</button>}
    </div>
  );
}
