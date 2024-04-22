import { Routes, Route } from "react-router-dom";


import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/signin/signin.component";

const App = () => {

  const Shop = () => {
    return <h1>SHOP PAGE</h1>
  };

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;