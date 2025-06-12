// summary component
function Summary({ tea }) {
  // conditional messages based on tea choices
  const getTeaMessage = () => {
    if (tea.waterAmount < 100) {
      return "This is not a tea!"
    }
    if (tea.teaBags > 3) {
      return "How do you like your tea this dark?"
    }
    if (tea.sugarCubes > 3) {
      return "Your tea is so sweet like you!"
    }
    return "This is the perfect tea!"
  }

  return (
    <div style={{ 
      padding: '20px', 
      borderRadius: '10px', 
      border: '2px solid #e0e0e0',
      minWidth: '200px'
    }}>
      <h3 style={{ textAlign: 'center' }}>Your Tea Recipe</h3>
      <p><strong>For:</strong> {tea.name || 'Someone'}</p>
      <p><strong>Water:</strong> {tea.waterAmount} ml</p>
      <p><strong>Sugar Cubes:</strong> {tea.sugarCubes}</p>
      <p><strong>Tea Bags:</strong> {tea.teaBags}</p>
      
      {/* conditional message */}
      <div style={{ 
        marginTop: '15px', 
        padding: '10px', 
        borderRadius: '10px', 
        backgroundColor: '#f5f5f5',
        textAlign: 'center'
      }}>
        <p style={{ 
          fontSize: '25px',
          margin: '0'
        }}>
          {getTeaMessage()}
        </p>
      </div>
    </div>
  )
}

export default Summary 