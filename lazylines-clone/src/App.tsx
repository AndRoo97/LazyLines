import React from 'react';
import './App.css';
import SignInForm from './components/SignInForm';
import Comments from './components/Comments';

function App() {
  return (
    <div className="app-container">
      <SignInForm />
      <div className="comments-container-wrapper">
        <Comments />
      </div>
    </div>
  );
}

export default App;