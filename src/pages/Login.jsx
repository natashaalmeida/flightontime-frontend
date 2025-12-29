export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">
          Flight On Time ✈️
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full mb-4 p-2 border rounded"
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Entrar
        </button>
      </div>
    </div>
  );
}

