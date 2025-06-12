import teaBag from './assets/tea-bag_808767.png'
import cubeSugar from './assets/Cube sugar 2.svg'
import mug from './assets/mug.png'
import classes from './Mug.module.css'

// container component for all tea visuals
function TeaVisuals({ tea }) {
  // dynamic color based on number of tea bags
  const getFluidColor = (teaBags) => {
    switch(teaBags) {
      case 0:
        return 'linear-gradient(to bottom, #87CEEB 0%, #B0E0E6 100%)' // light blue (plain water)
      case 1:
        return 'linear-gradient(to bottom,rgb(220, 94, 52) 0%,rgb(223, 139, 71) 100%)' // light tan
      case 2:
        return 'linear-gradient(to bottom,rgb(161, 78, 37) 0%,rgb(184, 72, 31) 100%)' // medium tan
      case 3:
        return 'linear-gradient(to bottom,rgb(130, 59, 30) 0%,rgb(167, 82, 43) 100%)' // light brown
      case 4:
        return 'linear-gradient(to bottom,rgb(45, 20, 9) 0%,rgb(116, 50, 22) 100%)' // medium brown
      case 5:
        return 'linear-gradient(to bottom,rgb(32, 16, 4) 0%,rgb(50, 20, 6) 100%)' // dark brown (strong tea)
      default:
        return 'linear-gradient(to bottom, #87CEEB 0%, #B0E0E6 100%)' // default to water
    }
  }

  // convert ml (0-250) to height percentage (0-50%) specific to the mug
  const fluidHeight = (tea.waterAmount / 250) * 50

  // based on the number of tea bags, create a simple list of tea bag JSX elements
  const teaBagList = []
  for (let i = 0; i < tea.teaBags; i++) {
    teaBagList.push(
      <img 
        key={i}
        src={teaBag} 
        alt="Tea Bag" 
        style={{ width: '80px', height: '80px', margin: '5px' }} 
      />
    )
  }

  // based on the number of sugar cubes, create a simple list of sugar cube JSX elements  
  const sugarCubeList = []
  for (let i = 0; i < tea.sugarCubes; i++) {
    sugarCubeList.push(
      <img 
        key={i}
        src={cubeSugar} 
        alt="Sugar Cube" 
        style={{ width: '80px', height: '80px', margin: '5px' }} 
      />
    )
  }

  return (
    <div style={{ 
      display: 'flex', 
      gap: '40px', 
      justifyContent: 'center', 
      alignItems: 'flex-start', 
      marginBottom: '30px',
      padding: '30px',
      borderRadius: '10px',
      border: '2px solid #ddd'
    }}>
      
      {/* tea Bags Visual */}
      <div style={{ textAlign: 'center' }}>
        <p>Tea Bags: {tea.teaBags}</p>
        <div>
          {teaBagList}
        </div>
      </div>
      
      {/* sugar Cubes Visual */}
      <div style={{ textAlign: 'center' }}>
        <p>Sugar Cubes: {tea.sugarCubes}</p>
        <div>
          {sugarCubeList}
        </div>
      </div>
      
      {/* mug Visual */}
      <div style={{ textAlign: 'center' }}>
        <div className={classes['mug-container']}>
          <div 
            className={classes['mug-fluid']} 
            style={{ 
              height: `${fluidHeight}%`,
              background: getFluidColor(tea.teaBags)
            }}
          ></div>
          <img src={mug} alt="Mug" className={classes['mug-image']} />
        </div>
        <p style={{ marginTop: '10px' }}>
          {tea.waterAmount} ml - {tea.teaBags === 0 ? 'Plain water' : `${tea.teaBags} tea bag${tea.teaBags > 1 ? 's' : ''}`}
        </p>
      </div>
      
    </div>
  )
}

export default TeaVisuals 