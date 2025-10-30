import React, { useState } from "react";
import InputField from "../components/InputField";
import UserTypeSelector from "../components/UserTypeSelector";

export default function LoginPage() {
  const [selectedType, setSelectedType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedType) {
      alert("Please select your user type.");
      return;
    }
    console.log({ email, password, selectedType });
    // remove console log and integrate backend login API here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>
        <UserTypeSelector selectedType={selectedType} setSelectedType={setSelectedType} />

        <form onSubmit={handleSubmit} className="mt-6">
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          <p className="text-sm text-center mt-4 text-gray-500">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
