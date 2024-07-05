import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyForm from "./Components/MyForm";
import MyStats from "./Components/MyStats";
import MyFooter from "./Components/MyFooter";

function App() {
  const [defaultCity, setDefaultCity] = useState("Milano");

  const handleCityChange = (newCity) => {
    setDefaultCity(newCity);
  };

  return (
    <>
      <div className="container mt-4">
        <MyNav />
        <MyForm onCityChange={handleCityChange} />
        <div className="mt-5">
          <MyStats defaultCity={defaultCity} />
        </div>
      </div>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
