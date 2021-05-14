import React from 'react' 


function Container({notification}){
return(
    <>
    {notification.map((notification)=>{
        const {id,name, time,image,status,color} = notification
   
        return(
            <div key={id}className="info">
            <div>
                <img src={image} alt={name}/>
            </div>
            <div>
               
                <div class="info-contact">
                    <h4 class="info-title">{name}</h4>
                <span class="info-sub">started following you</span>
                </div>
              
                   <div class="info-contact">
                    <span class="info-time">{time}</span>
                    <span class="info-conected">{status}</span>
                    <p className={"dot dot-"+ `${color}`}></p>
                   </div>
              
            </div>
            
        </div> 
        )
   
   })}
    </>
)
}


export default Container