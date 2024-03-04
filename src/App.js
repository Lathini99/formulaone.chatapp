import { Col, Row, Container } from 'react-bootstrap';
import './App.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import WaitingRoom from './Components/waitingroom';
import { useState } from "react";
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import ChatRoom from './Components/ChatRoom';

function App() {
  const [conn, setConnection]= useState(null); // Initialize conn state as null
  const [messages, setMessages]= useState([]); // Initialize messages state as an empty array

  const joinChatRoom = async (username, chatroom) => {
    try {
      // Initiate a connection
      const conn = new HubConnectionBuilder().withUrl("http://localhost:5280/chat").configureLogging(LogLevel.Information).build();
      // Set up handler
      conn.on("JoinSpecificChatRoom", (username, msg) => {
        console.log("msg: ", msg);
      });
      conn.on("ReceiveSpecificMessage", (username, msg) => {
        setMessages(prevMessages => [...prevMessages, { username, msg }]);
      });

      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", { username, chatroom });
      setConnection(conn);
    } catch (e) {
      console.log(e);
    }
  }

  const sendMessage = async (message) => {
    try {
      await conn.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <main>
        <Container fluid>
          <Row className='justify-content-center mt-5'>
            <Col sm={8}>
              <h1 className='text-center font-weight-light'>Welcome to the ChatApp</h1>
            </Col>
          </Row>
          <Row className='justify-content-center mt-5'>
            <Col sm={8}>
              {!conn
                ? <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
                : <ChatRoom messages={messages} sendMessage={sendMessage}></ChatRoom>
              }
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
