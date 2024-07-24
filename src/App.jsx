import {  useEffect, useState } from "react";
import Info from "./Info";

function App() {
  const [bgcolor, setbgColor] = useState('skyblue');
  const [textColor, settextColor] = useState('black');
  const [Color1, setColor1] = useState('red');
  const [Color2, setColor2] = useState('green');
  const [Color3, setColor3] = useState('blue');
  const [Color4, setColor4] = useState('yellow');

  const theme = (bgcolor, textColor) => {
    setbgColor(bgcolor);
    settextColor(textColor);
  };
  
  const Bgmaker = () => {
    const str = "0123456789ABCDEF";
    let gradient = "#";
    for (let i = 0; i < 6; i++) {
      gradient += str[Math.floor(Math.random() * 16)];
    }
    return gradient;
  };

  const aplyGreadient = () => {
    setColor3( Bgmaker());
    setColor4(  Bgmaker() );
    console.log(Color3 , Color4)
    setbgColor(`linear-gradient(45deg, ${Color3}, ${Color4})`);  
  };

  const handleInput = (e) => {

    const value = e.target.value;
    const id = e.target.id;
    console.log(Color1 , Color2)
    if(id === 'clr1'){
       setColor1(value);
    }else if(id === 'clr2'){
       setColor2(value);
    }
   

  }
  const aplyGreadientbyInput = () => {
    setbgColor(`linear-gradient(45deg, ${Color1}, ${Color2})`);
  
  };

 

  return (
    <div
      className="w-full h-screen duration-700"
      style={{
        background: bgcolor,
        color: textColor
       
        
      }}
    >
      <Info aplyGreadient={aplyGreadient} aplyGreadientbyInput = {aplyGreadientbyInput} handleInput={handleInput} />
      <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            onClick={() => theme("red", "black")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            onClick={() => theme("green", "black")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            onClick={() => theme("blue", "white")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            onClick={() => theme("pink", "black")}
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            onClick={() => theme("black", "white")}
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            onClick={() => theme("olive", "black")}
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg"
            onClick={() => theme("gray", "black")}
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
