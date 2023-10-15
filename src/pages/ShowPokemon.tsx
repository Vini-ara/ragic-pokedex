import { FC } from "react"
import { usePokemon } from "../api/fetchPokemonInfo"
import { Loading } from "../components/Loading"
import { Navbar } from "../components/Navbar"
import { PageContent } from "../components/PageContent"
import { PageTitle } from "../components/PageTitle"
import { PokeInfoCard } from "../components/PokeInfoCard"
import { useRouteParams } from "../routes"

export const ShowPokemonPage: FC = () => {
  // como o link não está funcionando, vou deixar essa parte comentada
  // const { pokemonId: pokemon_id } = useRouteParams("/pokemon/:pokemonId")

  const pokemon_id = 3

  const pokemon = usePokemon(pokemon_id)

  return (
    <>
      <Navbar />
      <PageContent>
        {!pokemon ? (
          <Loading />
        ) : (
          <>
            <PageTitle>Showing {pokemon.name}</PageTitle>
            <PokeInfoCard pokemon={pokemon} />
          </>
        )}
      </PageContent>
    </>
  )
}
