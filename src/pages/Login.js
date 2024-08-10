import React, { useState } from "react";
import axiosInstance from "../services/axiosInstance";

const Loign = () => {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post("/member/login", {
        email,
        password,
      });

      if (response.data.status !== 200) {
        setError(response.data.message || "로그인에 실패했습니다.");
      }
    } catch (error) {
      if (error.response && error.response.data.status === 400) {
        setError(error.response.data.message || "로그인에 실패했습니다.");
      } else {
        setError("로그인 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEamil(e.target.value)}
        placeholder="이메일"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      <button onClick={handleLogin}>로그인</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Loign;
