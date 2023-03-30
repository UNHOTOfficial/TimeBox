"use client";

import { handleEdit, handleReset, handleSave } from "@/services/Handlers";

export default function Buttons({ action }: any) {
  return (
    <div className="flex flex-col w-full mt-8">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleSave}
      >
        Save
      </button>

      <button
        type="button"
        className="text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-500 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
        onClick={handleEdit}
      >
        Edit
      </button>

      <button
        type="reset"
        onClick={handleReset}
        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Reset
      </button>
    </div>
  );
}
