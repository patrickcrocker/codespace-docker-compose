import { useState, useEffect } from 'react'

function App() {
  const [items, setItems] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/items')
      if (!response.ok) throw new Error('Failed to fetch items')
      const data = await response.json()
      setItems(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description }),
      })
      if (!response.ok) throw new Error('Failed to create item')
      setName('')
      setDescription('')
      fetchItems()
    } catch (err) {
      setError(err.message)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Failed to delete item')
      fetchItems()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="container">
      <h1>Items Manager</h1>
      <p className="subtitle">React + Spring Boot + PostgreSQL</p>
      
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>

      {error && <p className="error">{error}</p>}
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="items-list">
          {items.length === 0 ? (
            <li className="empty">No items yet. Add one above!</li>
          ) : (
            items.map((item) => (
              <li key={item.id} className="item">
                <div>
                  <strong>{item.name}</strong>
                  {item.description && <p>{item.description}</p>}
                </div>
                <button onClick={() => handleDelete(item.id)} className="delete-btn">
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  )
}

export default App
