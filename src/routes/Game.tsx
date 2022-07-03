
//import '../game/Game.css'

import { useEffect, useRef } from "react";

const Game = () => {
  const canvasRef: any = useRef(null);

  useEffect(() => {
    // if (readyToLaunch) {
    //   BCBA.init(canvasRef, player as IPlayer, false)
    // }

    return () => {
      
        // BCBA.terminate();
    }
  },[])

  return (<>
<h1>game goes here</h1>

    <canvas id="game-canvas" ref={canvasRef}></canvas>
    </>
  );
}

export default Game;
