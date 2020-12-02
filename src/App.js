import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
     db.collection('messages')
     .orderBy('timestamp', 'desc')
     .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id , message: doc.data()})))
    });
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, [])

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/127885454_394667791582356_5651638727708096428_n.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=7l270Cr09zkAX__1H5K&_nc_ht=scontent.flhe3-1.fna&oh=c8eb258062a896b962064c4d421346e5&oe=5FEA4F71"/>
      <h1>Hello!</h1>
      <h2>Welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
            
            <Input
              className="app__input"
              placeholder="Enter a message..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />


            <IconButton className="app__iconButton" disabled={!input}
              onClick={sendMessage} type="submit" color="primary" variant="contained">
                <SendIcon />
              </IconButton>

        </FormControl>
      </form>


     <FlipMove> 
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))
      }
     </FlipMove>

    </div>
  );
}

export default App;
