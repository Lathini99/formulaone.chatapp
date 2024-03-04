const MessageContainer = ({ messages }) => {
    if (!messages || !messages.length) {
        return <div>No messages to display</div>;
    }

    return (
        <div>
            {
                messages.map((msg, index) =>
                    <table striped bordered key={index}>
                        <tbody>
                            <tr>
                                <td>{msg.msg} - {msg.username}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            }
        </div>
    );
}

export default MessageContainer;
