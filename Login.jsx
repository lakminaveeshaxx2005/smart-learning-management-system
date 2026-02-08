import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    // TODO: replace with real auth call
    if (email.toLowerCase().endsWith('@admin.com')) {
      navigate('/admin/dashboard');
    } else {
      navigate('/student/dashboard');
    }
  }

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'80vh'}}>
      <form onSubmit={handleSubmit} style={{width:320,padding:20,border:'1px solid #e6e6e6',borderRadius:8,background:'#fff'}}>
        <h2 style={{margin:0,marginBottom:12}}>Login</h2>

        <label style={{display:'block',fontSize:13,marginBottom:8}}>Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{width:'100%',padding:8,marginTop:6,border:'1px solid #ccc',borderRadius:4}}
          />
        </label>

        <label style={{display:'block',fontSize:13,marginBottom:8}}>Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{width:'100%',padding:8,marginTop:6,border:'1px solid #ccc',borderRadius:4}}
          />
        </label>

        <button type="submit" style={{width:'100%',padding:10,marginTop:12,background:'#2563eb',color:'#fff',border:'none',borderRadius:4,cursor:'pointer'}}>Sign in</button>
      </form>
    </div>
  );
}