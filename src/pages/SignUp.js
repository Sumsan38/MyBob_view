import React, { useState } from "react";
import axiosInstance from "../services/axiosInstance";

const SingUp = () => {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      await axiosInstance.post("member/join", { email, password });
      alert("회원가입 성공");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data.message || "회원 가입에 실패했습니다.");
      } else {
        setError("회원가입 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
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
      <button onClick={handleSignUp}>회원가입</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SingUp;
