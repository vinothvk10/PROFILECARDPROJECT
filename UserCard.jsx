import React from 'react'
const userData=[
    {
        name:"Daniel",
        city:"manchester",
        desc:"Backend-Developer",
        skills:["NODEJS,MYSQL,JAVA,SPRINGBOOT"],
        online:true,
        profile:"/patrick_img.jpeg",
    },
    {
        name:"Jenny",
        city:"NewYork",
        desc:"Software-Developer",
        skills:["oracle,MYSQL,JAVA,DEVOps"],
        online:true,
        profile:"/img1.jpeg",
    },
    {
        name:"Harry",
        city:"Perth",
        desc:"Design Engineer",
        skills:["AutoCad,CATIA,SolidWorks"],
        online:true,
        profile:"/img2.jpeg"
    },
    {
        name:"Harry",
        city:"Perth",
        desc:"Design Engineer",
        skills:["AutoCad,CATIA,SolidWorks"],
        online:true,
        profile:"/img2.jpeg"
    },
    {
        name:"Harry",
        city:"Perth",
        desc:"Design Engineer",
        skills:["AutoCad,CATIA,SolidWorks"],
        online:true,
        profile:"/img2.jpeg"
    },{
        name:"Harry",
        city:"Perth",
        desc:"Design Engineer",
        skills:["AutoCad,CATIA,SolidWorks"],
        online:true,
        profile:"/img2.jpeg"
    },{
        name:"Harry",
        city:"Perth",
        desc:"Design Engineer",
        skills:["AutoCad,CATIA,SolidWorks"],
        online:true,
        profile:"/img2.jpeg"
    },
]


function User({name,city,desc,skills,profile,online}){
    return(
    <div className='card-container'>
        <div class=" row ">
            <div class="card-header">
              
            <span className={online?"pro online":"pro offline"} >{online?"ONLINE":"OFFLINE"}</span>
                <img class=" img-thumbnail  mt-5" src={profile} alt="user" id='img' />
                </div>
                <div className="card-Body">
                
                 <h3>{name}</h3>
                 <h2>{city}</h2>
                <p>{desc}</p>
                </div>
                <div>
                
                <button class="btn btn-primary m-2" id="body-buttons" href="#">Message</button>

            <button class="btn btn-outline-primary m-2" id="body-buttons">Following</button>
        </div>
        <div className="skills">
        <button class="btn btn-outline-warning m-1 mb-3" id="skills-btn">Skills</button>
        <ul >
        {skills.map((skills,index)=>(
            <li key={index}>{skills}</li>
        ))}
        </ul>
        </div>
         </div>   
        </div>
    
          
      
       
        
        
    );
}
function UserCard() {
  return (
  
        // <User name="Daniel"city="Gergia" desc="Backend-Developer" skills={["NODEJS","MYSQL","JAVA","SPRINGBOOT"]}  online ={false} profile="/patrick_img.jpeg"/>
        <>
        {
            userData.map((user,index)=>(
                <User key={index} 
                name={user.name}
                city={user.city}
                desc={user.desc}
                online={user.online}
                profile={user.profile}
                skills={user.skills}/>
            ))
        }
        </>
    
  )
}

export default UserCard;