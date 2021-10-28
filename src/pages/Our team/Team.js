import React, { useEffect, useState } from 'react';
import './Team.css'

const Team = () => {
    const [teams, setTeams] = useState([])

    useEffect( () => {
        fetch('teamData.json')
        .then(res => res.json())
        .then(data => console.log(data))
    } ,[])

    return (
        <div className='team'>
            <div className='container'>
                <div className='row text-center'>
                    <h1 className='team-title text-primary'>Our Team</h1>
                    <p className='mb-5'>We have the best Doctors</p>
                    <div>
                        {

                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Team;