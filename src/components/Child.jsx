import Parent from './Parent'

function Child({setName}) {
    
        
  return (
    <div>
      
        
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter the text:'/>
    </div>
  )
}

export default Child