import React from 'react'
import Carousel from './Carousel'
import firstTemplate from '../assets/template1.png'
import secondTemplate from '../assets/template2.png'
import thirdTemplate from '../assets/template3.png'
import fourthTemplate from '../assets/template4.png'
import fifthTemplate from '../assets/template5.png'
import sixthTemplate from '../assets/template6.png'
import seventhTemplate from '../assets/template7.png'
import eightTemplate from '../assets/template8.png'

const images = [
  firstTemplate,
  sixthTemplate,
  secondTemplate,
  seventhTemplate,
  thirdTemplate,
  eightTemplate,
  fourthTemplate,
  firstTemplate,
  fifthTemplate,

 ...Array(10).fill(firstTemplate), // Add more images for more templates
]

const Templates = () => {
  return (
    <div className='pt-32'>
      <div className='overflow-hidden text-center bg-[rgb(253,233,219)]'>
        <div className='max-w-4xl mx-auto mt-10 '>
          <h2 className='text-5xl font-bold text-gray-800 pb-5'>Templates designed to sell</h2>
          <p className='p-5'>Choose from 100s of designs</p>
          <Carousel images={images} />
        </div>
      </div>
    </div>
  )
}

export default Templates