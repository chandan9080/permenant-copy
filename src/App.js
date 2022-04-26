import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "./comps/Main/Main";
import { setText } from "./Redux/textSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem("text")) {
      localStorage.setItem("text", JSON.stringify([]));
    }
    dispatch(setText());
  }, []);

  return (
    <div className="App">
      <Main></Main>
    </div>
  );
};

export default App;
