import React, { useState, useEffect } from 'react';
import './App.css';

function Contacts() {
    const [message, setMessage] = useState([])

    useEffect(()=>{
        fetch('http://3.133.129.178:8080/moviesDB/movies').then(res=>{
            return res.json()}).then(data=>{
            const newData = Object.values(data)
            setMessage(newData)

        })
            }, [])

 return (
 <main>
        {message.map(e =>(
            <>
             <ul>
             <li>{e.film_id}</li>
             <li>{e.title}</li>
             <li>{e.description}</li>
             </ul>
             </>
        )
        )}
 </main>
 );
}

export default Contacts;