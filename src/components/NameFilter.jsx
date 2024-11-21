import React, { useState } from 'react';

function NameList() {
  const [names] = useState([
    'Mariana',
    'Bruno',
    'Fernanda',
    'Wagner',
    'Alessandro'
  ])
  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

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