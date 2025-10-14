import React from "react";
import { Link, useParams } from "react-router-dom";
import {useState} from "react";
import { getDatabase, ref,update  } from "firebase/database";

const Edit = () => {
  const db = getDatabase();
  let [updateTask,setUpdateTask]=useState();
  // console.log(updateTask);
  const {id} =useParams();

  let handleUpdate = () => {
  update(ref(db, "todoTask/" + id), {
    taskName: updateTask,
  })
    .then(() => {
      alert("Task Updated Successfully!");
    })
    .catch((error) => {
      alert("Update Failed: " + error.message);
    });
};

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBEA] px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden border border-amber-200">
       
        <div className="bg-amber-300 text-black font-semibold text-lg text-center py-3">
          Edit Task
        </div>

        
        <div className="p-6 flex flex-col items-center">
          <input
            type="text"
            onChange={(e)=>setUpdateTask(e.target.value)}
            placeholder="Update your task"
            className="w-full border-2 border-amber-400 rounded-full px-5 py-2 outline-none text-gray-700 placeholder:text-gray-400 text-sm sm:text-base focus:ring-2 focus:ring-amber-200"
          />

          <div className="flex justify-center gap-4 mt-6 w-full">
            <button className="flex-1 bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition-all" onClick={handleUpdate}>
              Update
            </button>
            <Link to={"/todo"}>
            <button className="flex-1 bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition-all px-16">
              Cancel
            </button></Link>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Edit;
