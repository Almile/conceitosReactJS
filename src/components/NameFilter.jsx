import React, { useState } from 'react';
// filtra uma lista de nomes
function NameList() {
  // Estado com a lista de nomes
  const [names] = useState([
    'Mariana',
    'Bruno',
    'Fernanda',
    'Wagner',
    'Alessandro'
  ])
  // Estado com o valor do filtro e função
  const [filter, setFilter] = useState('')
  // Função para atualizar o estado do filtro com o valor do input
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
 // Filtra os nomes com base no valor do filtro, ignorando maiúsculas e minúsculas
  const filteredNames = names.filter((name) => {
    return name.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <div className='content'>
      <ul>
      <h2>Filtro de Lista</h2>
      <input type="text" placeholder="Search name..." value={filter} onChange={handleFilterChange}/>
      <ul>
        {filteredNames.map((name) => (
            <li key={name} className="name-list">
                {name}
            </li>
        ))}
      </ul>
      </ul>
    </div>
  )
}

export default NameList