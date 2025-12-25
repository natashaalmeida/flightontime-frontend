import { logout } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white p-4 flex justify-between">
        <h1 className="font-bold text-lg">FlightOnTime</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
        >
          Sair
        </button>
      </header>

      <main className="p-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">
            Bem-vindo ao Dashboard ✈️
          </h2>
          <p className="text-gray-600">
            Você está autenticado com JWT.
          </p>
        </div>
      </main>
    </div>
  );
}
