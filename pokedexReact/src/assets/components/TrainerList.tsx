import dados from "../data/pokedex-data.json";
import "../css/PokemonList.css";
interface Props {
  pesquisa: string;
}

export default function TrainerList({ pesquisa }: Props) {
  const treinadorFilter = dados.trainers.filter(
    (treinador) =>
      treinador.name.toLowerCase().includes(pesquisa) ||
      treinador.id.toString().includes(pesquisa),
  );

  return (
    <div className="Pokemons">
      {treinadorFilter.map((treinador) => (
        <li>
          <h1>{treinador.name} #{treinador.id}</h1>
          <p>Insignias: {treinador.badges}</p>
            {treinador.pokemonIds.map((pokemonId) => {
              const pokemon = dados.pokemon.find(
                (pokemon) => pokemon.id === pokemonId,
              );
              if (!pokemon) return null;

              return (
                <p key={pokemon.id}>
                  #{pokemon.id} - {pokemon.name}
                </p>
              );
            })}
          
        </li>
      ))}
    </div>
  );
}
