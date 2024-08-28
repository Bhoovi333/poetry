import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }

  return (
    <>
    <div className="footer">
      <h2>Subscribe to our newsletter!</h2>
      {!isEmailValid ? <p>Please enter a valid email address</p> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address "
          value={email}
          onChange={handleInput}
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #ddd",
            borderRadius: "5px",marginLeft:"25px",textAlign:"center"
          }}
        />
        <button 
          type="submit"
          style={{
            margin: "10px",marginLeft:"35px",
            padding: "10px",
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
            justifyContent:"center"
          }}
        >
          Subscribe
        </button>
      </form>
      <p>© Copyright 2024 PEOPLE'S POETRY HAVEN</p>
      </div>
    </>
  );
}

export default Newsletter;