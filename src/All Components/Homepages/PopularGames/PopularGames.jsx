
import {useState } from "react";
import Title from "../../Component/Title/Title";
import Game from "../PopularGames/Game/Game"



const PopularGames = () => {
  const[game,setGame]=useState([])
  const [showAll,setShowAll]=useState(false);
  const viewGame=()=>{
    setShowAll(prevState=>!prevState);
  }
  const allGames=showAll ? game : game.slice(0,3)
  


fetch("https://server-j567ib6mn-halifaxs-projects.vercel.app/games")
.then(res=>res.json())
.then(data=>{
  setGame(data)})



  return (
    <>
      <Title
        subHeading={"--Try your Luck in Jackpot--"}
        heading={"JACKPOT GAMES"}
      />
    <section className="mx-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4 mx-auto">
        {
          allGames.map((send) => (
            <Game key={send.id} received={send} />
          ))
        }
      
      </div>
      <div className="text-center my-5"><button className="bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded" onClick={viewGame}>{showAll ? "Less more games":"Show all games"}</button></div>
   
       </section>
      
    </>
  );
};

export default PopularGames;
