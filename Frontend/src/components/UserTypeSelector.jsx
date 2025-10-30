import React from "react";

export default function UserTypeSelector({ selectedType, setSelectedType }) {
  const types = [
    { id: "provider", label: "I'm a Service Provider" },
    { id: "client", label: "I'm a Client" },
  ];

  return (
    <div className="flex justify-center gap-4 mt-4">
      {types.map((type) => (
        <button
          key={type.id}
          onClick={() => setSelectedType(type.id)}
          className={`px-4 py-2 rounded-xl border-2 ${
            selectedType === type.id
              ? "border-blue-600 bg-blue-50 text-blue-700"
              : "border-gray-300 text-gray-600"
          } hover:border-blue-600 transition`}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
}
