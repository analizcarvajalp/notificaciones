import React, { useState } from 'react'
import people from './people'
import Container from './Container'

function App() {
 const [notification, setNotification] = useState(people)

return <div className="container">
<h1>Notifications</h1>

<Container notification={notification}/>

<div className="notifications">
<p>{notification.length} Notifications</p>
<button onClick={()=> setNotification([])}>
    Clear All
  </button>
</div>


</div>



}


export default App