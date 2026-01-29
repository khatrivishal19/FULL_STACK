import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Paper, Button } from "@mui/material";
import "./App.css";

export default function App() {
  // ✅ Current Date-Time State
  const [now, setNow] = useState(new Date());

  // ✅ Listening Blink
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((prev) => !prev), 600);
    return () => clearInterval(blinkTimer);
  }, []);

  const dateStr = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const dayStr = now.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="zyra-root">
      <Container fluid className="p-0 m-0">
        <div className="container">

          {/* UPPER */}
          <div className="upper">
            <Paper elevation={3} className="upper-left">
              <p className="date">{dateStr}</p>
              <p className="time">{timeStr}</p>
              <p className="day">{dayStr}</p>
            </Paper>

            <Paper elevation={3} className="upper-middle">
              <p className="name">ZYRA</p>
              <p className="FullName">Zenith of Your Reliable Assistant</p>
            </Paper>

            <Paper elevation={3} className="upper-right">
              <p className="itset">Internet-status : Online</p>
              <p className="down">Downloading Speed : 20kb/s</p>
              <p className="upload">Uploading Speed : 20kb/s</p>
              <p className="wifi">Wifi Status : Connected</p>
            </Paper>
          </div>

          {/* MIDDLE */}
          <div className="middle">

            {/* LEFT */}
            <div className="middle-left">
              <Paper elevation={3} className="middle-left-up">
                <p className="message">Messages</p>
                <div className="mess">
                  <p>WhatsApp: hlo How are you?</p>
                  <p>YouTube: what is cryogenic engine</p>
                </div>
              </Paper>

              {/* ✅ Reminders replaced with Debug Window */}
              <Paper elevation={3} className="middle-left-down">
                <p className="debug">Debug Window</p>
                <div className="deb">
                  <p>Sleeping mode activated</p>
                  <p>Listening is under Usage..</p>
                </div>
              </Paper>
            </div>

            {/* CENTRE */}
            <Paper elevation={3} className="middle-centre">
              <div className="middle-centre-above">
                <p className="undergoing">Undergoing Task</p>
                <div className="under">
                  {/* ✅ Listening Blinking */}
                  <p style={{ opacity: blink ? 1 : 0.3, transition: "0.2s" }}>
                    Listening..
                  </p>
                </div>
              </div>

              <div className="middle-centre-middle">
                <div className="btn-start">
                  <p>START</p>
                </div>

                <div className="visualizer-box">
                  <div className="visualizer-ring"></div>
                  <div className="visualizer-ring2"></div>
                  <div className="visualizer-core"></div>
                </div>

                <div className="btn-stop">
                  <p>STOP</p>
                </div>
              </div>

              <div className="middle-centre-below">
                <p className="input">Input Command</p>
                <div className="inp">
                  <p>Hello! Zyra</p>
                </div>

                <div style={{ display: "flex", gap: "12px", marginTop: "10px", paddingLeft: "10%" }}>
                  <Button variant="contained" color="success" size="small">
                    Run
                  </Button>
                  <Button variant="outlined" color="error" size="small">
                    Clear
                  </Button>
                </div>
              </div>
            </Paper>

            {/* RIGHT */}
            <div className="middle-right">
              <Paper elevation={3} className="middle-right-up">
                <p className="weather">Weather Details</p>

                <div className="wea">
                  <div className="temp">
                    <p>Temp 21°C</p>
                  </div>

                  <div className="overall">
                    <div className="detail">
                      <p>Pressure:10pa</p>
                      <p>Humidity:54%</p>
                      <p>Wind : 6m/s</p>
                    </div>

                    <div className="state">
                      <p>Mostly Cloudy</p>
                    </div>
                  </div>
                </div>
              </Paper>

              <Paper elevation={3} className="middle-right-down">
                <p className="system">System Status and Usage</p>
                <div className="sys">
                  <p>Battery Power : 20%</p>
                  <p>Sound : 62%</p>
                  <p>CPU Usage : 4% 1.55GHz</p>
                  <p>Memory Usage : 3.9|7.3GB(53%)</p>
                  <p>Disk Usage : SSD 2%</p>
                </div>
              </Paper>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="bottom">
            {/* ✅ Bottom Left now becomes Reminders */}
            <Paper elevation={3} className="bottom-left">
              <p className="remainder">Reminders</p>
              <div className="rem">
                <p>Alarm at 4:30 pm</p>
                <p>Meeting with Joy</p>
                <p>Have a new project that is electric cycle</p>
              </div>
            </Paper>

            <Paper elevation={3} className="bottom-right">
              <p className="modes">Operating Modes</p>
              <div className="button">
                <button type="button" className="btn">Voice Input</button>
                <button type="button" className="btn">Fully Operational</button>
                <button type="button" className="btn">Voice Output</button>
              </div>
            </Paper>
          </div>

        </div>
      </Container>
    </div>
  );
}
