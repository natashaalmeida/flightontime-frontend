import { useEffect } from "react";
import api from "./services/api";

function App() {

  useEffect(() => {
    api.get("/v3/api-docs")
      .then(response => {
        console.log("Backend conectado ✅", response.data);
      })
      .catch(error => {
        console.error("Erro ao conectar ❌", error);
      });
  }, []);

  return (
    <div>
      <h1>Frontend conectado ao Backend</h1>
    </div>
  );
}

export default App;
