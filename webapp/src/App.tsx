import  { AppCollections, ClickRepositoryProvider } from "./RxBb/index"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { RxDatabase } from "rxdb";
import { DatabaseContext } from "./RxBb/index";

interface AppProps {
  database:  RxDatabase<AppCollections, any, any>
}

const App = (props: AppProps) => {
  const { database } = props;
  const setPosition = (evt: React.MouseEvent<HTMLHeadingElement>) => {
    database.clicks.insert({
          id: Date.now().toString(),
          positionX: evt.clientX,
          positionY: evt.clientY
      });
  }


  return (
    <div className="app-container">
      <DatabaseContext.Provider value={database}>
        <ClickRepositoryProvider database={database}>
          <div onClick={setPosition} style={{backgroundColor: "green"}}>
            <button>Click</button>
          </div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ClickRepositoryProvider>
      </DatabaseContext.Provider>
    </div>
  );
}

export default App;
