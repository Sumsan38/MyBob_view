import { useState } from 'react';
import './App.css';

function Test() {
  return (
      <h5>게처럼 걸어요</h5>
  );
}

function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    // console.log(e);
    setUserName(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault(); // 액션을 막는다 form submit은 새로고침이 들어가있어서
    console.log(userName, password);

    // api 호출
    if(userName === 'test@test.com' && password === '1234') {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  }

  // 화면에 랜더링 되는 부분
  return (
    <div className="App">
      <form onSubmit={handleLogin}>
        <input type='email' value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button type='submit'>로그인</button>
      </form>
      {
        isSuccess ? <span>로그인 성공</span> : <span>로그인 실패</span> 
      }
      <Test />
    </div>
  );
}

export default App;
