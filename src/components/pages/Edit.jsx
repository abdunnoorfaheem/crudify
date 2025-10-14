import React from "react";

const Edit = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBEA] px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden border border-amber-200">
       
        <div className="bg-amber-300 text-black font-semibold text-lg text-center py-3">
          Edit Task
        </div>

        
        <div className="p-6 flex flex-col items-center">
          <input
            type="text"
            placeholder="Update your task"
            className="w-full border-2 border-amber-400 rounded-full px-5 py-2 outline-none text-gray-700 placeholder:text-gray-400 text-sm sm:text-base focus:ring-2 focus:ring-amber-200"
          />

          <div className="flex justify-center gap-4 mt-6 w-full">
            <button className="flex-1 bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition-all">
              Update
            </button>
            <button className="flex-1 bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition-all">
              Cancel
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Edit;
