import { useDispatch, useSelector } from "react-redux";
import { changeTodoStatus, removeTodo } from "../redux/slices/todoSlice";
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

export default function DisplayLlist() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className=" w-full flex flex-col items-center gap-3">
        {todos?.map((todo) => {
          return (
            <div
              key={todo?.id}
              className=" flex items-center justify-center gap-2 min-w-[80%] max-w-[80%] lg:min-w-[60%] lg:max-w-[60%]"
            >
              <p
                className={`w-[70%] p-3  break-words  shadow-blue-300 shadow-md rounded-md ${
                  todo.completed ? "bg-green-500 line-through" : "bg-green-200"
                } `}
              >
                {todo?.text}
              </p>
              <div className=" flex gap-2">
                <button
                  onClick={() => dispatch(changeTodoStatus(todo.id))}
                  className=" ml-2 py-2 px-3 bg-blue-400 rounded-md  text-white"
                >
                  {todo.completed ? <RxCross1 /> : <FaCheck />}
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className=" px-4 py-1 bg-red-600 rounded-md  text-white"
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
    // <div className=" flex gap-3 flex-col items-center">
    //   <h1 className=" text-xl font-bold">All todos</h1>
    //   <div className=" flex flex-col gap-3 items-center justify-center">
    //     {/* {todos?.map((todo) => {
    //       return (
    //         <>
    //           <p
    //             key={todos?.id}
    //             className=" w-[60%] p-3  shadow-blue-300 shadow-md"
    //           >
    //             {todo?.text}
    //           </p>
    //           <div>
    //             <button
    //               onClick={() => console.log(todos)}
    //               className=" ml-2 py-2 px-3 bg-red-600 rounded-md  text-white"
    //             >
    //               Show
    //             </button>
    //             <button className=" ml-2 py-2 px-3 bg-red-600 rounded-md  text-white">
    //               sldj
    //             </button>
    //           </div>
    //         </>
    //       );
    //     })} */}
    //   </div>
    // </div>
  );
}
