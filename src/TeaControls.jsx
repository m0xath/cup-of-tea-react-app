// container component for all tea controls
function TeaControls({ tea, nameRef, updateNameFromRef, updateWaterAmount, updateSugarCubes, updateTeaBags }) {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: '20px', 
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #e0e0e0',
      minWidth: '200px'
    }}>
      
      {/* name Input Control */}
      <div style={{ textAlign: 'center' }}>
        <h4>A cup for ...</h4>
        <div style={{ marginTop: '10px' }}>
          <input 
            type="text" 
            ref={nameRef}
            placeholder="Enter a name"
            style={{ 
              padding: '8px', 
              border: '2px solid #ccc', 
              borderRadius: '10px', 
              fontSize: '16px', 
              textAlign: 'center', 
              width: '120px',
              marginBottom: '10px'
            }}
          />
          <br />
          <button 
            onClick={updateNameFromRef}
            style={{ 
              padding: '8px 16px',
              border: 'none', 
              borderRadius: '10px', 
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Update Name
          </button>
        </div>
        <p style={{ fontSize: '12px' }}>Click button to save name</p>
      </div>
      
      {/* tea Bag Controls */}
      <div style={{ textAlign: 'center' }}>
        <h4>Tea Bags</h4>
        <div style={{ marginTop: '10px' }}>
          <button 
            onClick={() => tea.teaBags > 0 && updateTeaBags(tea.teaBags - 1)} 
            disabled={tea.teaBags === 0}
            style={{ padding: '8px 12px', margin: '0 5px', fontSize: '16px' }}
          >
            -
          </button>
          <span style={{ margin: '0 15px', fontSize: '18px' }}>{tea.teaBags}</span>
          <button 
            onClick={() => tea.teaBags < 5 && updateTeaBags(tea.teaBags + 1)} 
            disabled={tea.teaBags === 5}
            style={{ padding: '8px 12px', margin: '0 5px', fontSize: '16px' }}
          >
            +
          </button>
        </div>
        <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Max 5</p>
      </div>
      
      {/* sugar Cube Controls */}
      <div style={{ textAlign: 'center' }}>
        <h4>Sugar Cubes</h4>
        <div style={{ marginTop: '10px' }}>
          <button 
            onClick={() => tea.sugarCubes > 0 && updateSugarCubes(tea.sugarCubes - 1)} 
            disabled={tea.sugarCubes === 0}
            style={{ padding: '8px 12px', margin: '0 5px', fontSize: '16px' }}
          >
            -
          </button>
          <span style={{ margin: '0 15px', fontSize: '18px' }}>{tea.sugarCubes}</span>
          <button 
            onClick={() => tea.sugarCubes < 5 && updateSugarCubes(tea.sugarCubes + 1)} 
            disabled={tea.sugarCubes === 5}
            style={{ padding: '8px 12px', margin: '0 5px', fontSize: '16px' }}
          >
            +
          </button>
        </div>
        <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Max 5</p>
      </div>
      
      {/* water Amount Controls */}
      <div style={{ textAlign: 'center' }}>
        <h4>Water Amount</h4>
        <div style={{ marginTop: '10px' }}>
          <input 
            type="number" 
            value={tea.waterAmount}
            onChange={(evt) => {
              const value = parseInt(evt.target.value) || 0
              const clampedValue = Math.min(Math.max(value, 0), 250)
              updateWaterAmount(clampedValue)
            }}
            min="0"
            max="250"
            style={{ 
              padding: '8px', 
              border: '2px solid #ccc', 
              borderRadius: '10px', 
              fontSize: '16px', 
              textAlign: 'center', 
              width: '100px' 
            }}
          />
        </div>
        <p style={{ fontSize: '12px', marginTop: '5px' }}>0-250 ml</p>
      </div>
      
    </div>
  )
}

export default TeaControls 