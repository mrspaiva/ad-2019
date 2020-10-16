import React, { useState, useEffect } from 'react';
import api from './services/api';
import './app.css';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/');

      setUsers(response.data);
    }

    loadUsers();
  }, []);

  async function handleSorteio() {
    const nomes = users.map(user => user.name)
    let name = nomes[Math.ceil(Math.random() * (nomes.length - 1))];
    alert(name)
  } 

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/', {
      name,
      email
    })

    setName('');
    setEmail('');

    setUsers([...users, response.data])
  }

  async function handleDelete(id) {
    await api.delete('/')

    setUsers(users.filter(user => user._id !== id));
  }

  return (
    <div className="app">
      <aside>
        <strong>Cadastrar</strong>
          <form onSubmit={handleSubmit}>
            <div className="input-block">
              <label htmlFor="Nome">Nome</label>
              <input 
              placeholder="Digite seu nome" 
              name="Nome" id="Nome" 
              required
              value={name}
              onChange={e => setName(e.target.value)}
              />
            </div>
              
            <div className="input-block">
              <label htmlFor="email">E-mail</label>
              <input 
              placeholder="Digite seu e-mail" 
              name="email" id="email" 
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
            </div> 
            <button type="submit">Cadastrar</button>
          </form>
          <button onClick={() => handleSorteio()}className="sorteio">Sortear amigo</button>

      </aside>

      <ul>
        {users.map(user => (
          <li key={user._id}>
          <div className="user-list">
            <strong>{user.name}</strong>
            <span>{user.email}</span>
            <span>amigo sorteado</span>
          </div>
          <div className="button">
            <button onClick={() => handleDelete(user._id)}className="delete">Deletar</button>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
