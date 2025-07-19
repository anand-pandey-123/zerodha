import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const username = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/login");
    } catch (error) {
      alert("Sign Up Failed", error.message);
      console.log(error.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8f9fa",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          width: "100%",
          maxWidth: "350px",
        }}
      >
        <h2
          style={{
            color: "#0d6efd",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Sign Up
        </h2>
        <div style={{ marginBottom: "1.2rem" }}>
          <label htmlFor="name">Name</label>
          <input
            ref={username}
            type="text"
            id="name"
            style={{
              width: "100%",
              padding: "0.7rem",
              border: "1px solid #ced4da",
              borderRadius: "6px",
              fontSize: "1rem",
            }}
            placeholder="Enter your name"
            required
          />
        </div>
        <div style={{ marginBottom: "1.2rem" }}>
          <label htmlFor="email">Email</label>
          <input
            ref={email}
            type="email"
            id="email"
            style={{
              width: "100%",
              padding: "0.7rem",
              border: "1px solid #ced4da",
              borderRadius: "6px",
              fontSize: "1rem",
            }}
            placeholder="Enter your email"
            required
          />
        </div>
        <div style={{ marginBottom: "1.2rem" }}>
          <label htmlFor="password">Password</label>
          <input
            ref={password}
            type="password"
            id="password"
            style={{
              width: "100%",
              padding: "0.7rem",
              border: "1px solid #ced4da",
              borderRadius: "6px",
              fontSize: "1rem",
            }}
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.7rem",
            fontSize: "1.1rem",
            borderRadius: "6px",
            backgroundColor: "#0d6efd",
            color: "#fff",
            border: "none",
            marginTop: "0.5rem",
          }}
        >
          Sign Up
        </button>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#0d6efd",
            marginTop: "3px",
          }}
        >
          Login Now
        </Link>
      </form>
    </div>
  );
}
