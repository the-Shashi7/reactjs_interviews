const Timer = ({time}) =>{
    return<>
      <span>{(time.m < 10) ? "0"+time.m:time.m}</span> :
      <span>{(time.s < 10) ? "0"+time.s:time.s}</span> :
      <span>{(time.ms < 10)? "0"+time.ms:time.ms}</span>
    </>
  }
  export default Timer;