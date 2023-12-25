import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {

//     <div className="App">
//       <Route path="/" component={Homepage} exact />
//       <Route path="/chats" component={Chatpage} />
//     </div>
// export default App;

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return ( 
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
       <Route path="/" component={Homepage} exact />
       <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
