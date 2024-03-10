import {Col, Row } from "react-bootstrap";
import MessageContainer from "./MesssageContainer";
import SendMessageForm from "./SendMessageForm";


const ChatRoom = ({ messages, sendMessage }) => (
    <div>
      <Row className="px-5 py-3">
        <Col sm={12}>
          <h2 className="text-center">Chat Room</h2>
        </Col>
      </Row>
      <Row className="px-5 py-3">
        <Col sm={12}>
          <div className="message-container">
            <MessageContainer messages={messages} />
          </div>
          <div className="send-message-form">
            <SendMessageForm sendMessage={sendMessage} />
          </div>
        </Col>
      </Row>
    </div>
  );
  
  export default ChatRoom;