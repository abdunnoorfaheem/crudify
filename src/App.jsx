import "./App.css";
import { useState,useEffect } from "react";
import { getDatabase, ref, set,push,onValue  } from "firebase/database";

function App() {
  let [task, setTask] = useState("");
  let [emptyInput, setEmptyInput] = useState("");
  let [taskView,setTaskView]=useState([]);
  const db = getDatabase();
  //data write start
  let handleInput = (e) => {
    setTask(e.target.value);
  };
  let handleTaskClick = () => {
    if (!task) {
      setEmptyInput("Task is Empty");
    } else {
      set(push(ref(db, "todoTask/")), {
        taskName: task,
        
      }).then(()=>{
        alert("successful");
        setTask("")
      }).catch(()=>{
        alert("Error");
      });
    }
  };
   //data write End
  // read data start
   useEffect(() => {
    let todoDataR=ref(db, "todoTask/");
    onValue(todoDataR,(snapshot)=>{
      let arr=[];
      // console.log(snapshot);
      snapshot.forEach((item)=>{
        // console.log(item.key);
        
        arr.push({...item.val(),id:item.key})
        // console.log(item.val());
        
      })
      setTaskView(arr);
    });
  },[]);
  // read data end
 

  return (
    <>
      <div className="bg-amber-50 py-[60px] min-h-screen">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="w-full sm:w-[90%] md:w-[700px] rounded-3xl mx-auto">
            <input
              type="text"
              value={task}
              onChange={handleInput}
              placeholder="Enter a Task"
              className="py-[12px] px-5 w-full outline-0 rounded-3xl border-2 border-amber-500 text-amber-700 text-sm sm:text-base"
            />
            {emptyInput && (
              <div className="text-red-600 pl-5 pt-1">{emptyInput}</div>
            )}

            <div className="mt-5 text-center">
              <button
                className="px-6 sm:px-8 bg-amber-400 text-white py-2 rounded-2xl font-medium hover:bg-amber-500 transition"
                onClick={handleTaskClick}
              >
                Add Task
              </button>
            </div>
          </div>

          <div className="w-full sm:w-[90%] md:w-[60%] bg-sky-200 rounded-2xl overflow-hidden shadow-lg mx-auto mt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[400px]">
                <thead>
                  <tr className="bg-sky-300 text-white">
                    <th className="py-3 px-4 sm:px-6 font-semibold text-sm sm:text-base">
                      Task
                    </th>
                    <th className="py-3 px-4 sm:px-6 font-semibold text-center text-sm sm:text-base">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                 {taskView.map((item)=>(
                   <tr className="bg-sky-100 text-gray-800 transition hover:bg-sky-50">
                    <td className="py-3 px-4 sm:px-6 text-sm sm:text-base ">
                      {item.taskName}
                    </td>
                    <td className="py-3 px-4 sm:px-6 flex justify-center gap-2 sm:gap-3">
                      <button className="bg-green-400 text-white font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-green-500 transition text-sm sm:text-base">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-red-600 transition text-sm sm:text-base">
                        Delete
                      </button>
                    </td>
                  </tr>
                 ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
