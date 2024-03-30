import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

export default function InputText() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    if (inputText.trim() === "") {
      setInputText("");
      alert("No input");
      return;
    }
    dispatch(addTodo(inputText));
    setInputText("");
  };
  return (
    <div className="w-full items-center justify-center mt-10 flex gap-5">
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        className=" py-3 px-2 border-blue-700 rounded-md w-[70%] lg:w-[50%] border-2"
      />
      <button
        onClick={addTodoHandler}
        className=" border-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 text-white"
      >
        Add
      </button>
    </div>
  );
}
