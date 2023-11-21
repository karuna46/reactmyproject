import React from 'react'
import Image from './image/kohli.webp'
import image from './image/supra.jpg'
import imag from './image/fri.avif'
const Home = () => {
  return (
    <div>
      <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop:'100px'}}>
      <h1>KING KOHLI</h1>
      <img src={Image} alt="images" height={300} width={600}></img>
      <p> Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team<br/>He currently represents Royal Challengers Bangalore in the IPL and Delhi in domestic cricket<br/> He is the real goat of ODI cricket .he comlete 50centurays in his ODI crear</p>
      <h2><marquee>SUPRA MK4</marquee></h2>
      <img src={image} alt="images" height={300} width={600}></img>
      <h3>About supra mk4</h3>
      <ul>
        <p> Although Toyota stopped Mk4 production in 2002, this fourth-generation Supra is still a superstar. We're gonna tell the whole truth about Japanese domestic version Supras</p>
      </ul>
      <h1>World cup Final match</h1>
      <img src={imag} alt="images" height={300} width={600}/>

    </div>
    </div>

  )
}

export default Home