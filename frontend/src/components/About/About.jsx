import React from 'react'
import about from '../../assets/images/about.jpeg'
import { Link } from 'react-router-dom'
const About = () => {
  return <section>
    <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap:0 flex-col lg:flex-row">
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={about} alt="" />
                    
                    {/* content */}
                    
            </div>
            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                        <h2 className='heading'>Proud to be a Employed Housewife</h2>
                        <p className='text__para'>
                        Varanasi, there is a bridal mehndi artist by the name of Bhardwaj Mehandi Art. It is a mehndi designing service that strives for 
                        both creative excellence and technical excellence. She hàn designs and talents that will transform any bride into a lovely bride, She decorates your hands and feet with both contemporary and conventional metindi themes, turning them become works of art. 
                        </p>
                        <p className='text__para mt:[30px]'>
                        She designs mehndi patterns based on the tastes and desires of her clients. Bhardwaj Mehandi Art has become well-known for its bridal mehndi designs due to the range and diversity of her work as well as her spectacular creative endeavours,

                            The mehndi patterns by Bhardwaj Mehandi Art are full of exquisite intricacies and vintage elements. She offers finely crafted impressions of flora and wildlife, romantic couples,
 or any other pattern that matches your preferences and wedding theme.
                        </p>
                        <Link to='/'>
                            <button className="btn">Learn More</button>
                        </Link>
                    </div>
        </div>
    </div>
  </section>
}
export default About;
