import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// icons
import locationicon from "./assets/images/icons/locationicon.png"
import searchicon from "./assets/images/icons/searchicon.png"
import usericon from "./assets/images/icons/usericon.png"
import menuicon from "./assets/images/icons/menuicon.png"

// logo
import marlonlogo from "./assets/images/logo/marlonlogo.png"
import rhinobrand from "./assets/images/logo/rhinobrand.png"
import shoremaster from "./assets/images/logo/shoremaster.jpg"
import karavan from "./assets/images/logo/karavan.png"

// ant design icons
import { DownOutlined, LeftOutlined, RightOutlined, UpOutlined } from '@ant-design/icons'

// ant design components
import { Card, Row, Col, Space } from 'antd';

// Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faSquareThreads, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
// <FontAwesomeIcon icon={faEnvelope} />



function App() {

  return (
    <>
      <div
        className='flex justify-between flex-col h-screen bg-[url("/images/home-page-section-1background-image.jpg")] p-12 bg-no-repeat bg-cover bg-center'
      >
        <div className='flex justify-between text-center'>
          <img src={marlonlogo} alt="" />
          <ul className='list-none m-0 p-0 overflow-hidden'>
            <li className='float-left'>
              <a href="#" className='block text-center text-black p-4 no-underline'>
                <img src={searchicon} alt="" />
              </a>
            </li>
            <li className='float-left'>
              <a href="#" className='block text-center text-black p-4 no-underline'>
                <img src={locationicon} alt="" />
              </a>
            </li>
            <li className='float-left'>
              <a href="#" className='block text-center text-black p-4 no-underline'>
                <img src={usericon} alt="" />
              </a>
            </li>
            <li className='float-left'>
              <a href="#" className='block text-center text-black p-4 no-underline'>
                <img src={menuicon} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className='w-auto text-center'>
          <h1 className='home-page-first-title text-white font-light leading-normal'>
            North America's best manufacturer of <br />
            {/* <span className='font-bold text-right bg-red-700'>Boating Products.</span> */}
          </h1>
          <h2 className='home-page-first-title-2 text-white font-semibold text-right mr-64'>Boating Products.</h2>
        </div>
        <div className='text-8xl text-white text-left ml-10'>
          <DownOutlined />
        </div>

        <div className='overlay-color-upper-right absolute top-0 right-0 w-2/4 h-3/4 opacity-50'></div>
        <div className='overlay-color-bottom-left absolute bottom-0 left-0 w-1/2 h-2/4 opacity-80'></div>
      </div>

      <div className='h-screen flex'>
        <div className='w-20 flex items-center mr-4'>
          <div className='home-page-section-2-sm-sidebar-fixed'>
            <a href="#" className='sidebar-social-media-icons' title='Instagram'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className='sidebar-social-media-icons' title='Facebook'><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className='sidebar-social-media-icons' title='LinkedIn'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#" className='sidebar-social-media-icons' title='Tiktok'><FontAwesomeIcon icon={faTiktok} /></a>
            <a href="#" className='sidebar-social-media-icons' title='Threads'><FontAwesomeIcon icon={faSquareThreads} /></a>
            <a href="#" className='sidebar-social-media-icons' title='Youtube'><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>

        <div className='section-2-rightside-products w-full'>

          <div className="home-page-section-2-sm-sidebar-fixed-content grid gap-10 grid-cols-2 grid-rows-1 mb-32">
            <div className='text-7xl font-medium'>
              <h1>We've got you covered.</h1>
            </div>
            <div>
              <p className='text-lg font-normal' id='home-page-section-2-sm-sidebar-fixed-content-description'>
                Our boats, trailers, docks, hoists, truck decks and accessories are <br /> engineered to work hard
                and play harder, just like we do. We constantly <br /> update our products based on your feedbacks, and we
                are always innovating <br /> new ways to make the good life, well, better and sustainable.
              </p>
            </div>
          </div>

          <div className='home-page-section-2-sm-sidebar-fixed-content grid gap-4 grid-cols-4 grid-rows-1'>
            <div className="card-products-preview">
              <img src="/images/cardimg2.jpg" alt=""/>
              
              <div className="card-products-preview-category absolute bottom-7 left-0 p-2 ml-5 text-white font-semibold">
                {/* <h2 className='text-white text-5xl font-semibold'>Products</h2>
                <p className="text-white text-xl">See More</p> */}
                Products <br />
                <span className='text-xl'>See More</span>
                {/* <p className='text-white text-5xl font-semibold'>
                  Products <br />
                  <span className='text-xl'>See More</span>
                </p> */}
              </div>
            </div>
            <div className="card-products-preview">
              <img src="/images/cardimg3.jpg" alt=""/>
              
              <div className="card-products-preview-category absolute bottom-7 left-0 p-2 ml-5 text-white font-semibold">
                {/* <h2 className='text-white text-5xl font-semibold'>Products</h2>
                <p className="text-white text-xl">See More</p> */}
                Find a Dealer <br />
                <span className='text-xl'>See More</span>
                {/* <p className='text-white text-5xl font-semibold'>
                  Products <br />
                  <span className='text-xl'>See More</span>
                </p> */}
              </div>
            </div>
            <div className="card-products-preview">
              <img src="/images/cardimg2.jpg" alt=""/>
              
              <div className="card-products-preview-category absolute bottom-7 left-0 p-2 ml-5 text-white font-semibold">
                {/* <h2 className='text-white text-5xl font-semibold'>Products</h2>
                <p className="text-white text-xl">See More</p> */}
                Become a <br />Dealer <br />
                <span className='text-xl'>See More</span>
                {/* <p className='text-white text-5xl font-semibold'>
                  Products <br />
                  <span className='text-xl'>See More</span>
                </p> */}
              </div>
            </div>
            <div className="card-products-preview">
              <img src="/images/cardimg3.jpg" alt=""/>
              
              <div className="card-products-preview-category absolute bottom-7 left-0 p-2 ml-5 text-white font-semibold">
                {/* <h2 className='text-white text-5xl font-semibold'>Products</h2>
                <p className="text-white text-xl">See More</p> */}
                Marlon Gear <br />
                <span className='text-xl'>See More</span>
                {/* <p className='text-white text-5xl font-semibold'>
                  Products <br />
                  <span className='text-xl'>See More</span>
                </p> */}
              </div>
            </div>
          </div>

        </div>

        
      </div>

      <div className='who-we-are-section flex'>
        <div className='w-24 flex items-center mr-4'>
          <UpOutlined className='ml-3.5 text-4xl font-extrabold' />
        </div>
        <div className='w-full text-center items-center flex justify-center flex-col'>
          <p className='font-extrabold tracking-widest text-2xl mb-14'>WHO WE ARE</p>
          <h1 className='who-we-are-section-description font-bold tracking-widest mb-12'>
            We build and represent quality products <br /> that make the outdoors more fun.
          </h1>
          <a href="#" className='who-we-are-section-description-btn text-white bg-gray-700 p-5 w-48 text-xl'>
            Learn More
          </a>
        </div>
      </div>

      <div className='sellers-reviews-section pt-32 pb-32 px-20' style={{height: "2000px"}}>
        <p className='font-extrabold tracking-widest text-2xl mb-6'>BEST SELLERS</p>
        <h1 className='who-we-are-section-description font-bold tracking-widest mb-12'>
          Elevate your leisure with the hottest <br /> recreational products of the year.
        </h1>

        <div className="grid gap-4 grid-cols-3" style={{"marginBottom": "70px"}}>
          {/* <div className='bg-slate-400'>fdsf</div> card-products-preview*/ }
          <div className="relative w-full" style={{"borderRadius": "15px"}}>
            <img src="/images/cardimg2.jpg" alt="" style={{"borderRadius": "15px"}}/>
            <div className="card-products-preview-category absolute bottom-7 left-0 p-2 ml-5 text-white font-semibold">
              Pontoon Boats <br />
              <span style={{"fontSize": "23px"}}>See More</span>
            </div>
          </div>
          <div className="relative w-full" style={{"borderRadius": "15px"}}>
            <img src="/images/cardimg2.jpg" alt="" style={{"borderRadius": "15px"}}/>
            <div className="card-products-preview-category absolute bottom-7 left-0 p-2 ml-5 text-white font-semibold">
              Welded Boats <br />
              <span style={{"fontSize": "23px"}}>See More</span>
            </div>
          </div>
          <div className="relative w-full" style={{"borderRadius": "15px"}}>
            <img src="/images/cardimg2.jpg" alt="" style={{"borderRadius": "15px"}}/>
            <div className="card-products-preview-category absolute bottom-7 left-0 p-2 ml-5 text-white font-semibold">
              Truck Decks <br />
              <span style={{"fontSize": "23px"}}>See More</span>
            </div>
          </div>
        </div>

        <div className='relative' style={{"marginBottom": "180px"}}>
          <a href="#" className='who-we-are-section-description-btn text-white bg-gray-700 p-5 w-48 text-xl'>
            View All Products
          </a>
        </div>

        <div className='relative text-center'>
          <h1 className='who-we-are-section-description font-bold tracking-widest mb-12'>
            What our customer say.
          </h1>

          <div className='flex justify-between'>
            <div className='flex items-center text-start' style={{"width": "200px"}}>
              <div>
                <LeftOutlined style={{
                  "fontSize": "50px", "padding": "20px", "borderRadius": "10px"
                }} className='bg-white font-extrabold'/>
              </div>
            </div>
            <div style={{"width": "1250px"}}>
              <fieldset style={{"borderRadius": "10px", "padding": "40px"}} className='bg-white'>
                <legend style={{"textAlign": "center"}}> <img src="/images/cardimg2.jpg" alt="" width={180} height={180} style={{"borderRadius": "50%"}}/></legend>
                  <p className='text-lg font-normal' id='home-page-section-2-sm-sidebar-fixed-content-description' style={{"marginBottom": "35px"}}>
                    Marlon’s customer service team was incredibly knowledgeable and helpful, guiding me through the 
                    process of finding the perfect products tailored to my needs. They truly understood my passion for 
                    recreational activities and went above and beyond to ensure I had the best equipment possible. It's 
                    evident that they genuinely care about their customers and their satisfaction.
                  </p>
                  <p className='font-semibold text-2xl mb-6'>Denise Sanders</p>
              </fieldset>
            </div>
            <div className='flex items-center justify-end' style={{"width": "200px"}}>
              <RightOutlined  style={{"fontSize": "50px", "padding": "20px", "borderRadius": "10px"}} className='bg-white font-extrabold'/>
            </div>
          </div>
        </div>
      </div>


      <div className='text-center' style={{"height": "700px", "paddingTop": "250px"}}>
        <h2 className='font-normal' style={{"fontSize": "35px", "marginBottom": "100px"}}>The brands we work with.</h2>
        <div className='flex justify-start'>
          <img src={karavan} alt="" style={{"marginRight": "170px"}}/>
          <img src={marlonlogo} alt="" style={{"marginRight": "170px"}}/>
          <img src={shoremaster} alt="" style={{"marginRight": "170px"}}/>
          <img src={rhinobrand} alt="" style={{"marginRight": "60px"}}/>
          <img src={shoremaster} alt="" style={{"marginRight": "170px"}}/>
          {/* <img src={karavan} alt="" style={{"marginRight": "170px"}}/> */}
        </div>
      </div>


      <div className='h-screen bg-[url("/images/keepuptodatebackground.webp")] bg-no-repeat bg-cover bg-center flex'>
        <div className='w-5/12 pt-36 text-center '>
          <div className='keep-up-to-date-left-section text-start'>
            <p className='font-extrabold tracking-widest text-2xl text-white mb-14'>
              KEEP UP-TO-DATE
            </p>
            <h1 className='who-we-are-section-description font-bold tracking-widest mb-12 text-white'>
              Latest news <br /> and updates.
            </h1>
            <a href="#" className='keep-up-to-date-left-section-btn bg-white font-medium'>
              View All
            </a>
          </div>
        </div>
        <div className='w-full pt-36'>
          <Space direction='horizontal' size={"small"}>
            {/* <Col span={12} className='bg-slate-500'>
              <div className='keep-up-to-date-left-section-card w-9/12 bg-white'>
                <img src="/images/keepuptodatefeature2.jpg" alt="" className='w-full rounded-xl h-5/6' />
                <div className="keep-up-to-date-left-section-container pt-10 px-9 pb-9">
                  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <h3 style={{"fontSize": "30px", "fontWeight": "bold"}}>Best Boats of 2023</h3>
                    <p style={{"marginBottom": "17px"}}>
                        Lorem ipsum dolor sit amet consectetur. 
                      Quisque scelerisque turpis elit vitae in vulputate 
                      imperdiet. Iaculis nisl in in dolor gravida. Duis 
                      quis laoreet quam suspendis. 
                    </p>
                    <a href=""
                      className='text-white font-semibold'
                      style={{
                        "backgroundColor": "#3d3d3d",
                        "borderRadius": "15px", "fontSize": "17px",
                        "padding": "20px 40px 20px 40px"
                      }}
                    >
                      Read More
                    </a>
                  </Space>
                </div>
              </div>
            </Col> */}
               <div className='keep-up-to-date-left-section-card w-10/12 bg-white'>
                <img src="/images/keepuptodatefeature2.jpg" alt="" className='w-full rounded-xl h-5/6' />
                <div className="keep-up-to-date-left-section-container pt-10 px-9 pb-9">
                  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <h3 style={{"fontSize": "30px", "fontWeight": "bold"}}>Best Boats of 2023</h3>
                    <p style={{"marginBottom": "17px"}}>
                        Lorem ipsum dolor sit amet consectetur. 
                      Quisque scelerisque turpis elit vitae in vulputate 
                      imperdiet. Iaculis nisl in in dolor gravida. Duis 
                      quis laoreet quam suspendis. 
                    </p>
                    <a href=""
                      className='text-white font-semibold'
                      style={{
                        "backgroundColor": "#3d3d3d",
                        "borderRadius": "15px", "fontSize": "17px",
                        "padding": "20px 40px 20px 40px"
                      }}
                    >
                      Read More
                    </a>
                  </Space>
                </div>
              </div>
              <div className='keep-up-to-date-left-section-card w-10/12 bg-white'>
                <img src="/images/keepuptodatefeature2.jpg" alt="" className='w-full rounded-xl h-5/6' />
                <div className="keep-up-to-date-left-section-container pt-10 px-9 pb-9">
                  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <h3 style={{"fontSize": "30px", "fontWeight": "bold"}}>Best Boats of 2023</h3>
                    <p style={{"marginBottom": "17px"}}>
                        Lorem ipsum dolor sit amet consectetur. 
                      Quisque scelerisque turpis elit vitae in vulputate 
                      imperdiet. Iaculis nisl in in dolor gravida. Duis 
                      quis laoreet quam suspendis. 
                    </p>
                    <a href=""
                      className='text-white font-semibold'
                      style={{
                        "backgroundColor": "#3d3d3d",
                        "borderRadius": "15px", "fontSize": "17px",
                        "padding": "20px 40px 20px 40px"
                      }}
                    >
                      Read More
                    </a>
                  </Space>
                </div>
              </div>
            {/* <Col span={12} className='bg-slate-600'>
              <div className='keep-up-to-date-left-section-card w-9/12 bg-white'>
                <img src="/images/keepuptodatefeature2.jpg" alt="" className='w-full rounded-xl h-5/6' />
                <div className="keep-up-to-date-left-section-container pt-10 px-9 pb-9">
                  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <h3 style={{"fontSize": "30px", "fontWeight": "bold"}}>Best Boats of 2023</h3>
                    <p style={{"marginBottom": "17px"}}>
                        Lorem ipsum dolor sit amet consectetur. 
                      Quisque scelerisque turpis elit vitae in vulputate 
                      imperdiet. Iaculis nisl in in dolor gravida. Duis 
                      quis laoreet quam suspendis. 
                    </p>
                    <a href=""
                      className='text-white font-semibold'
                      style={{
                        "backgroundColor": "#3d3d3d",
                        "borderRadius": "15px", "fontSize": "17px",
                        "padding": "20px 40px 20px 40px"
                      }}
                    >
                      Read More
                    </a>
                  </Space>
                </div>
              </div>
            </Col> */}
          </Space>
        </div>
      </div>

    </>
  )
}

export default App
