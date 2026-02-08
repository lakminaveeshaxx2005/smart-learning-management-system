import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Rejister() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }
    // TODO: call registration API
    alert('Account created (demo)');
    navigate('/login');
  }

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'80vh'}}>
      <form onSubmit={handleSubmit} style={{width:360,padding:20,border:'1px solid #e6e6e6',borderRadius:8,background:'#fff'}}>
        <h2 style={{margin:0,marginBottom:12}}>Register</h2>

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

        <label style={{display:'block',fontSize:13,marginBottom:8}}>Confirm password
          <input
            type="password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            required
            style={{width:'100%',padding:8,marginTop:6,border:'1px solid #ccc',borderRadius:4}}
          />
        </label>

        <button type="submit" style={{width:'100%',padding:10,marginTop:12,background:'#059669',color:'#fff',border:'none',borderRadius:4,cursor:'pointer'}}>Create account</button>
      </form>
    </div>
  );
}