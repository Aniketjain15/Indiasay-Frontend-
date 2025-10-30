import React, { useState } from "react";
import InputField from "../components/InputField";
import UserTypeSelector from "../components/UserTypeSelector";

export default function RegisterPage() {
  const [selectedType, setSelectedType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!selectedType) {
      alert("Please select your user type.");
      return;
    }
    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    console.log({ name, email, password, selectedType });
    // remove console log and Integrate backend register API here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Create Account</h1>
        <UserTypeSelector selectedType={selectedType} setSelectedType={setSelectedType} />

        <form onSubmit={handleRegister} className="mt-6">
          <InputField label="Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            label="Confirm Password"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>

          <p className="text-sm text-center mt-4 text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
