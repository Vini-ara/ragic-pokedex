import { createRoutes, UseRoutes, path } from "ragic"
import { HomePage } from "./pages/HomePage"
import { ListAllPokemonPage } from "./pages/ListAll"
import { ListPokemonByTypePage } from "./pages/ListByType"
import { ShowPokemonPage } from "./pages/ShowPokemon"

export const routes = createRoutes()
  .path("/", { component: HomePage })
  .path("/type/:type_id", { component: ListPokemonByTypePage })
  .path("/pokemon", {
    component: ListAllPokemonPage,
    children: path("/:pokemonId", { component: ShowPokemonPage }),
  })

export const { Link, Router, useRouteParams } = UseRoutes(routes)
