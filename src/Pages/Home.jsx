import Background from "../Backgroud";
import Logo from "../Components/logo";
import Upload from "../Components/Upload";
import Weather from "../Components/Weather";
import "./Home.css"
import GenerateOutput from "./GenerateOutput.jsx";
import { useState } from "react";

const Home = () => {
  const [showOutput, setShowOutput] = useState(false);

  const handleButtonClick = () => {
    setShowOutput(true);
  };
  return (
    <>
      <Background />
      <Logo />
      <Weather/>
      <br />
      <center><p>Upload the image the image of the crop to detect the type of the disease</p></center>
      <br />
      <Upload/>
      <center><button onClick={()=>handleButtonClick()}>Generate Output</button></center>
      {showOutput && <GenerateOutput value={10}/>}
    </>
  );
};

export default Home;
