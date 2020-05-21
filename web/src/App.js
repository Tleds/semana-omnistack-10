import React, { useEffect, useState } from 'react';
import './global.css'
import './App.css'
import './SideBar.css'
import './Main.css'
import api from './services/api'
import DevItens from './components/DevItens'
import DevForm from './components/DevForm'
//Componente: É um bloco isolado de HTML,CSS e JS, o qual não interfere no restante
// da aplicacação
//Propriedade: Informações que um componente pai passa para o componente filho.
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade).

function App() {
  //Renderiza o componente apenas uma vez com o array vazio, se o array tivesse 
  //alguma variável, o componente vai se renderizar se o estado dessa variável mudar.
  const [devs,setDevs]=useState([]);
  
  async function handleAddDev(data){
        
    const response = await api.post('/devs',data);
    
    setDevs([...devs,response.data]);
  }
  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  },[])
  
  return (
    <div id="app">
      <aside>
    <strong>Cadastrar</strong>
      <DevForm onSubmit={handleAddDev} />
    </aside>
      <main>
        <ul>
          {devs.map(devs=>(
            <DevItens devs={devs} key={devs.id} />
          ))}
        </ul>

      </main>
    </div>
  );
}

export default App;
