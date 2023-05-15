const Btns =({status,Start,Resume,Reset,Stop})=>{
    return (<>
      <div className='btn-container'>
      {(status === 0)? 
          <button className="stopwatch-btn stopwatch-btn-gre"
          onClick={Start}>Start</button> : ""
        }
  
        {(status === 1)? 
          <div>
            <button className="stopwatch-btn stopwatch-btn-red"
                    onClick={Stop}>Stop</button>
            <button className="stopwatch-btn stopwatch-btn-yel"
                    onClick={Reset}>Reset</button>
          </div> : ""
        }
        {(status === 2)? 
          <div>
            <button className="stopwatch-btn stopwatch-btn-gre"
                    onClick={Resume}>Resume</button>
            <button className="stopwatch-btn stopwatch-btn-yel"
                    onClick={Reset}>Reset</button>
          </div> : ""
        }
      </div>
    </>)
  }
  
  export default Btns;