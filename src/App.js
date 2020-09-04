import React, { useState } from 'react';
import { TimePicker } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import moment from 'moment';
import './App.css'

//mp3 / wav sounds
import metta from './sounds/singingBowl.wav'

const App = () => {
  // Declare a new state variable, which we'll call "count"
  
  //Create the 0 time
  var m = moment().utcOffset(0);
  m.set({ hour: 0, minute: 0, second: 25, millisecond: 0 })
  m.toISOString()
  m.format()
  
  const [audio] = useState(new Audio(metta))

  const [timer, setTimer] = useState({
    time: m,
    timeString: "00:00:01",
    timerOn: false
  });

  if (timer.timerOn) {
    if (timer.timeString === "00:00:00") {
      audio.currentTime = 0
      audio.play()
      setTimer({ ...timer, timerOn: false });
    } else {
      var interval = setTimeout(() => {
        setTimer({
          ...timer,
          timerOn: timer.timerOn,
          time: timer.time.clone().subtract(1, 'seconds'),
          timeString: timer.time.clone().subtract(1, 'seconds').format("HH:mm:ss")
        })
      }, 1000)
    }
  }

  const BeginTimer = () => {
    if (timer.timeString !== "00:00:00" && !timer.timerOn) {
      audio.currentTime = 0
      audio.play()
      setTimer({ ...timer, timerOn: true });
    }
  }

  const StopTimer = () => {
    clearTimeout(interval);
    audio.pause();
    setTimer({ ...timer, timerOn: false });
  }

  console.log(timer)

  return (
    <div className="App">
      <div style={{ marginTop: "200px" }}></div>
      <Timer time={timer.time} />
      <Row style={{ marginTop: "100px" }}>
        <Col>
          <TimePicker onChange={(time, timeString) => {
            if (timer.timerOn) {
              return  
            }
            if (!time || timeString === "") {
              setTimer({ ...timer, time: m, timeString: "00:00:00"})
            } else {
              setTimer({ ...timer, time, timeString })
            }
          }} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type="primary" style={{ marginTop: "10px" }} onClick={BeginTimer}>Begin</Button>
          <Button type="default" style={{ marginTop: "10px" }} onClick={StopTimer}>Stop</Button>
        </Col>
      </Row>
    </div>
  );
}

function Timer({ time }) {
  return (
    <div style={{ margin: "10px" }}>
      <Row>
        <Col span={12} offset={6}>
          <Row style={{ border: "1px solid #D7FCD4", borderRadius: "5px" }}>
            <div style={{ height: "10px" }}></div>
            <Col span={6}>
              <h1 style={{ color: "#D7FCD4", fontSize: "5vw" }}>
                {time.format("HH")}
              </h1>
            </Col>
            <Col span={3}>
              <h1 style={{ color: "#D7FCD4", fontSize: "5vw" }}>:</h1>
            </Col>
            <Col span={6}>
              <h1 style={{ color: "#D7FCD4", fontSize: "5vw" }}>
                {time.format("mm")}
              </h1>
            </Col>
            <Col span={3}>
              <h1 style={{ color: "#D7FCD4", fontSize: "5vw" }}>:</h1>
            </Col>
            <Col span={6}>
              <h1 style={{ color: "#D7FCD4", fontSize: "5vw" }}>
                {time.format("ss")}
              </h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default App;
