import { useState, useRef } from 'react'
import './App.css'
import TeaControls from './TeaControls'
import TeaVisuals from './TeaVisuals'
import Summary from './Summary'

function App() {
  // central tea state object
  const [tea, setTea] = useState({
    name: '',                // name of the tea drinker
    waterAmount: 0,          // ml of water (0-250)
    sugarCubes: 0,           // number of sugar cubes
    teaBags: 0               // number of tea bags
  })

  // summary visibility state
  const [showSummary, setShowSummary] = useState(false)

  // name input ref
  const nameRef = useRef(null)

  // function to update name from ref
  const updateNameFromRef = () => {
    const nameValue = nameRef.current.value
    setTea(prev => ({ ...prev, name: nameValue }))
  }

  // function to update water amount
  const updateWaterAmount = (amount) => {
    setTea(prev => ({ ...prev, waterAmount: amount }))
  }

  // function to update sugar cubes
  const updateSugarCubes = (cubes) => {
    setTea(prev => ({ ...prev, sugarCubes: cubes }))
  }

  // function to update tea bags
  const updateTeaBags = (bags) => {
    setTea(prev => ({ ...prev, teaBags: bags }))
  }

  // conditional rendering logic for Summary (JavaScript above JSX)
  const summaryComponent = showSummary ? (
    <div style={{ flex: '0 0 auto' }}>
      <Summary tea={tea} />
    </div>
  ) : null

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Make Your Go-to Tea</h1>
        
        {/* summary toggle */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button 
            className="summary-toggle-btn"
            onClick={() => setShowSummary(!showSummary)}
            style={{ 
              padding: '8px 16px', 
              backgroundColor: showSummary ? '#e91e63' : '#ffcdd2', // pink when showing, light pink when not showing
              border: 'none', 
              borderRadius: '10px', 
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            {showSummary ? 'Hide Summary' : 'Show Summary'}
          </button>
        </div>
        
        {/* horizontal layout: controls -> visuals -> summary */}
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          alignItems: 'flex-start',
          marginTop: '20px'
        }}>
          
          {/* controls (left) */}
          <div style={{ flex: '0 0 auto' }}>
            <TeaControls 
              tea={tea}
              nameRef={nameRef}
              updateNameFromRef={updateNameFromRef}
              updateWaterAmount={updateWaterAmount}
              updateSugarCubes={updateSugarCubes}
              updateTeaBags={updateTeaBags}
            />
          </div>

          {/* visuals (middle) */}
          <div style={{ flex: '1' }}>
            <TeaVisuals tea={tea} />
          </div>

          {/* summary (right) - only show if checkbox is checked */}
          {summaryComponent}

        </div>
        
      </div>
    </>
  )
}

export default App
