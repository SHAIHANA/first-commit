import React from 'react'
import {Col,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'



function HomePage() {
  return (
    <div>
      <Row className='m-4 p-3'>
      <Col>
      <img src="https://static.vecteezy.com/system/resources/previews/020/962/999/original/shopping-graphic-clipart-design-free-png.png" width={'100%'} height={'500px'} alt="" />
      </Col>


      <Col>
      <h1>ShopNShop</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo earum id ratione necessitatibus molestiae repellat nisi architecto? Nulla nesciunt, sed totam doloremque ut autem pariatur maxime, beatae ad, itaque aspernatur!</p>
      <Link to={'/Products'}>
      <button className='btn btn-primary mt-3'>Get started</button>
      </Link>
      
      </Col>
      </Row>
    </div>
  )
}

export default HomePage