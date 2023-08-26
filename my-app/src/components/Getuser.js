import './Getuser.css'
import React, { useState } from "react";

export default function Getuser() 
{
        const loader = document.getElementById('loader');
        const dataContainer = document.getElementById('data');
        const [users,setUser]=useState([]);

        const load_user=async()=>
        {
            const response=await fetch("https://api.github.com/users");
            const jsonResponse=await response.json();
            setUser(jsonResponse)        
        };

        // Simulate API call delay
        function fetchData() {
            return new Promise(resolve => {
            setTimeout(() => {
                resolve('API data fetched successfully!');
            }, 300);
            });
        }

        async function displayData() {
            try {
              loader.style.display = 'block';
              const result = await fetchData();
              loader.style.display = 'none';
              dataContainer.style.display = 'block';
              dataContainer.textContent = result;
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
          
          displayData();

    return(
        <div className="App">
            <h2>Users:</h2>
            <div>
                <div class="loader" id="loader"/>
                <button class="Button" onClick={load_user}>Click Me For User Details</button>
                <div class="data" id="data"/>
            </div>

            <div>
            {
                users.map((u)=>(

                    <div key={u.id} className="card">
                        <div className='avator'><img src={u["avatar_url"]}/></div>
                        <div className='content'>
                            <div className='name'><b>Name : </b>{u["login"]}</div>
                            <div className='name'><b>Repos Link : </b>{u["repos_url"]}</div> 
                            <div className='name'><b>Followers Link : </b>{u["followers_url"]}</div>
                             <div className='name'><b>Following Links : </b>{u["following_url"]}</div> 
                            <div className='name'><b>Organization Link : </b>{u["organizations_url"]}</div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
        );
}