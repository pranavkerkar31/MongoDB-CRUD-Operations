"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Topic {
  _id: string;
  title: string;
  description: string;
}

export default function Home() {
  const [topics, setTopics] = useState<Topic[]>([]);

  const fetchTopics = async () => {
    try {
      const res = await fetch("/api/topics", { cache: "no-store" });
      const data = await res.json();
      setTopics(data);
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this topic?");
    if (!confirmed) return;

    try {
      await fetch(`/api/topics?id=${id}`, {
        method: "DELETE",
      });
      fetchTopics(); 
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-800">📘 Top Courses</h1>
          <Link
            href="/addcourse"
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
          >
            ➕ Add Course
          </Link>
        </div>

        <ul className="space-y-4">
          {topics.map((t) => (
            <li key={t._id} className="flex items-center justify-between p-4 border rounded-md">
              <div>
                <div className="font-medium text-black">{t.title}</div>
                <div className="text-xs font-medium text-black">{t.description}</div>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/edittopic/${t._id}`}
                  className="btn btn-sm btn-ghost text-blue-600"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(t._id)}
                  className="btn btn-sm btn-ghost text-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
