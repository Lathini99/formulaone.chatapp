import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const SendMessageForm = ({ sendMessage }) => {
  const [msg, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (msg.trim() !== '') {
      sendMessage(msg);
      setMessage('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          value={msg}
          placeholder="Type a message"
          onChange={(e) => setMessage(e.target.value)}
          aria-describedby="send-button"
        />
        <Button variant="primary" id="send-button" type="submit" disabled={!msg.trim()}>
          Send
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SendMessageForm;
