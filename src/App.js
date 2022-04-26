import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "./comps/Main/Main";
import { setText } from "./Redux/textSlice";

const App = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);
  console.log("text: ", text);
  useEffect(() => {
    let localText = JSON.parse(localStorage.getItem("text"));
    dispatch(setText(localText));
    console.log("helo");
  }, []);

  return (
    <div className="App">
      <Main></Main>
    </div>
  );
};

export default App;
