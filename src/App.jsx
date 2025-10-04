import "./App.css";

function App() {
  return (
    <>
      <div className="bg-amber-200 py-[100px]">
        <div className="max-w-[1320px] m-auto">
          <div className="w-[700px]  rounded-3xl m-auto">
            <input
              type="text"
              placeholder="Enter a Task"
              className="py-[12px] px-5 w-[700px] outline-0 m-auto rounded-3xl border-2 border-amber-500 text-amber-700"
            />

            <div className="mt-5 ">
              <button className="px-8 bg-amber-300 text-white py-2 rounded-2xl font-medium">
                Add
              </button>
            </div>
          </div>
          <div className="w-[60%] max-w-4xl bg-sky-200 rounded-2xl overflow-hidden shadow-lg m-auto mt-5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-sky-300 text-white">
                  <th className="py-3 px-6 font-semibold">Name</th>

                  <th className="py-3 px-6 font-semibold text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-sky-100 text-gray-800  transition">
                  <td className="py-3 px-6">John Doe</td>

                  <td className="py-3 px-6 flex justify-center gap-3">
                    <button className="bg-green-400 text-white font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
