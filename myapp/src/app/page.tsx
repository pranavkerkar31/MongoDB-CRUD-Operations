"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl">
        {/* Add Course Button */}
        <div className="flex justify-between items-center mb-6 ">
          <h1 className="text-xl font-bold text-gray-800">📘 Top Courses</h1>
          <Link href="/addcourse" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition">
            ➕ Add Course
          </Link>
        </div>

        <ul className="list bg-base-100 rounded-box shadow-sm space-y-4">
          {/* Course 1 */}
          <li className="flex items-center justify-between p-4 rounded-md">
            <div>
              <div className="font-medium">Dio Lupa</div>
              <div className="text-xs opacity-60">Remaining Reason</div>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-sm btn-ghost text-blue-600">Edit</button>
              <button className="btn btn-sm btn-ghost text-red-600">Delete</button>
            </div>
          </li>

          <li className="flex items-center justify-between p-4 rounded-md">
            <div>
              <div className="font-medium">Ellie Beilish</div>
              <div className="text-xs opacity-60">Bears of a fever</div>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-sm btn-ghost text-blue-600">Edit</button>
              <button className="btn btn-sm btn-ghost text-red-600">Delete</button>
            </div>
          </li>

          {/* Course 3 */}
          <li className="flex items-center justify-between p-4 rounded-md">
            <div>
              <div className="font-medium">Sabrino Gardener</div>
              <div className="text-xs opacity-60">Cappuccino</div>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-sm btn-ghost text-blue-600">Edit</button>
              <button className="btn btn-sm btn-ghost text-red-600">Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
