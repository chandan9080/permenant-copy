import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "./comps/Main/Main";
import { setText } from "./Redux/textSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let localText = JSON.parse(localStorage.getItem("text"));
    dispatch(setText(localText));
  }, [dispatch]);
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
};

export default App;
