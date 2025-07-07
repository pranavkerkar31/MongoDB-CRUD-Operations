"use client";
import { useState } from "react";

export default function AddCourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // You can add API call logic here

        setSubmitted(true);
        setTitle("");
        setDescription("");

        // Hide the message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className=" p-6 rounded-xl shadow-lg w-full max-w-xl">
                <h1 className="text-xl font-bold text-gray-800 mb-6 text-center">Edit Topic</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium  mb-1">Course Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter course title"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-gray-800"
                            required
                        />

                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter course description"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring text-gray-800"
                            rows={4}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>

                {/* Message on Submit */}
                {submitted && (
                    <div className="mt-4 text-green-600 text-center font-medium">
                        ✅ Topic added successfully!
                    </div>
                )}
            </div>
        </div>
    );
}
