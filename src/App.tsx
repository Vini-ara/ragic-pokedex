import { QueryClient } from "./api/queryClient"
import { Router } from "./routes"
import { GlobalStyles } from "./styles/globalStyles"

function App() {
  return (
    <QueryClient>
      <GlobalStyles />
      <Router />
      {/* Aqui seria legal botarmos as nossas rotas do app, né */}
      {/* Aqui seria legal botarmos as nossas rotas do app, né */}
      {/* Aqui seria legal botarmos as nossas rotas do app, né */}
    </QueryClient>
  )
}

export default App
