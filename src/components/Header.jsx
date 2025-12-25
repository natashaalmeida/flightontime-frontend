import { logout } from "@services/auth";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="flex justify-between items-center bg-indigo-600 text-white px-6 py-4">
      <h1 className="text-xl font-bold">FlightOnTime</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
      >
        Sair
      </button>
    </header>
  );
}
