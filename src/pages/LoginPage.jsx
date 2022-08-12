import React, { useState } from 'react'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
;

  return (
    <div>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button>Login</button>
    </div>
  )
}

export default LoginPage