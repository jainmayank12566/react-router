import { useEffect,useState } from 'react';
import {Routes,Route,NavLink, useParams} from 'react-router-dom'
import sayhello from './api/sayhello'
function Home(){
    const[data,setdata]=useState("")
    useEffect(()=>{
        sayhello()
        .then((val)=>{
            setdata(val)
        })
    },[]);
    return(
        <div>
            {data && data.map((val,index)=>(
                <NavLink style={{display:"block"}} key={val.id} to={`/user/${val.id}`}>{val.title}</NavLink>
            ))}
        </div>
    )
}
function User(){
    const params=useParams();
    // console.log(params.userid);
    const[data,setdata]=useState("");
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.userid}`)
        .then((val)=>{
            return val.json()
        })
        .then((val)=>{
            setdata(val);
        })
    },[])
    return(
        <div>
            {data && (
                <div>
                    <h1>{data.id}</h1>
                    <h1>{data.body}</h1>
                </div>
            )}
        </div>
    )
}
function App(){
    return(
        <div>
            {/* <h1>ji</h1> */}
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/user/:userid' element={<User />}/>
            </Routes>
        </div>
    )
}
export default App;