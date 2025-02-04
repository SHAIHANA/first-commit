import React from 'react'
import { Link } from 'react-router-dom';
import ProjectCard from '../Components/ProjectCard';

function Home() {
    return (
        <div>
            <section style={{ height: '100vh', width: '100%', background: 'linear-gradient(90deg, #fff8e1, #f7e4b7, #edd6a3)' }}>
                <div style={{ display: 'flex', }}>

                    <div>
                        <img style={{ height: '90vh', width: '100%', margin: '5px', marginLeft: '10%' }} src="https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/pose_40.png" alt="" />
                    </div>

                    <div style={{ padding: '5px', marginTop: '10%' }}>

                        <h1 style={{ fontSize: '80px', color: 'black', marginLeft: '10%', fontFamily: 'Protest Guerrilla, sans-serif;' }}>PROJECT FAIR</h1>

                        <h3 style={{ color: 'white', fontFamily: ' "Gowun Batang", serif', marginLeft: '5%', padding: '5%' }}>One Stop Destination For All Software Development Projects</h3>
                        
                        <Link to={'/login'}>
                        <button> Get Start</button>
                        </Link>
                       
                    </div>

                </div>
            </section>
            <section className='text-center'>

                <h1 style={{ marginTop: '6%' }}>Explore Our Projects</h1>
                <ProjectCard/>
            </section>
            

        </div>
    )
}

export default Home