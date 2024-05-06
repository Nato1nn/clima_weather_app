import React, {useState} from "react";
import fetchData from "./services/api";
import initialData from "./halpers/initialData";
import Card from "./components/Card";

function App() {
  const [city, setcity] = useState('');
  const [data, setdata] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(city).then((response) =>{
      setdata(response);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center sm:justify-center p-4">

      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full flex p-4 sm:relative justify-center">
        <input type="text" placeholder="Cidade" className="p-3 rounded-lg outline-none w-full sm:max-w-[300px] flex-1" value={city} onChange={({target: {value}}) => setcity(value)}/>
        <button type="submit" className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold">Pesquisar</button>
      </form>

      <Card data={data} />

    </div>
  );
}

export default App;
