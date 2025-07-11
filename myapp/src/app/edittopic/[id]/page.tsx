"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditTopic() {
  const router = useRouter();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Fetch the topic by ID
  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const res = await fetch(`/api/topics/${id}`);
        const data = await res.json();
        setTitle(data.title);
        setDescription(data.description);
      } catch (err) {
        console.error("Error fetching topic:", err);
      }
    };

    fetchTopic();
  }, [id]);

  // Update handler
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle: title, newDescription: description }),
      });

      if (res.ok) {
        router.push("/"); // Redirect to home after update
      } else {
        alert("Failed to update topic");
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="p-6 rounded-xl shadow-lg w-full max-w-xl">
        <h1 className="text-xl font-bold text-gray-800 mb-6 text-center">✏️ Edit Topic</h1>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Course Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none text-gray-800"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
