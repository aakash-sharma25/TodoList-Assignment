import { useEffect } from "react";
import "./App.css";
import DisplayLlist from "./component/DisplayLlist";
import InputText from "./component/InputText";
import { useDispatch } from "react-redux";
import { restoreTodo } from "./redux/slices/todoSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const allTodos = localStorage.getItem("allTodos");
    if (allTodos) {
      dispatch(restoreTodo(JSON.parse(allTodos)));
    }
  }, []);
  return (
    <>
      <div
        className=" flex flex-col items-center 
        justify-center  w-[100vw] gap-5"
      >
        <h1 className=" text-2xl font-bold text-green-700 mt-10">TODO LIST</h1>
        <InputText />
        <DisplayLlist />
      </div>
    </>
  );
}

export default App;
