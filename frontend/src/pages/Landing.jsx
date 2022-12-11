import Hcard from "../components/Hcard";
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';

function Landing(){

      const data = [
            {
              ImgSrc:'https://hemsingh780.github.io/hosted-assest/rideBudget.svg',
              hname:"For any budget",
              data : "From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time."
            },
            {
              ImgSrc:'https://hemsingh780.github.io/hosted-assest/rideDistance.svg',
              hname:"For any distance",
              data : "Book rides within the city with Daily, or take a trip to your favourite destinations outside the city with Outstation."
            },
            {
              ImgSrc:'https://hemsingh780.github.io/hosted-assest/rideDuration.svg',
              hname:"For any duration",
              data : "Easily plan a day out without having to worry about conveyance with an hour-based package from Rental."
            }
          ] 

      return (
          <>
                 {/* <div   
    style={
    {
    // backgroundImage: "url(https://zoomcar-assets.zoomcar.com/images/original/a121667db0d5e435e48884b015120bc180a4ad2f.jpg?1661426287)" ,
    backgroundImage:"url(https://img.freepik.com/free-vector/red-sedan-car-isolated-white-vector_53876-64366.jpg?w=900&t=st=1670460234~exp=1670460834~hmac=1cd37ff37c5b538a5db4cd69acd741cbbf57b33326617f2081df756a7015a501)",
    maxWidth:"100vw",
    // padding:"0",
    backgroundAttachment:"fixed",
    backgroundPosition:"center",
    height:"100vh",
    backgroundSize:"cover",

    // backgroundRepeat:"no-repeat"
    }}
    >
    </div> */}
    <div className="carSlide">
     <Carousel fade 
    
     >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hemsingh780.github.io/hosted-assest/jeep.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>The Joy Of Self Drive</h3>
          <p>ejoy your ride with self drive !</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hemsingh780.github.io/hosted-assest/blueCar.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Any type of Car</h3>
          <p>ride any type or model of car you want !</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hemsingh780.github.io/hosted-assest/mountainCar.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Plan for trip</h3>
          <p>
            plan your trip with SCar !
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
<div>
  <div 
   style={{
    display:"flex",
    justifyContent:"center",
    margin:"3%"
   }}
  >
      <h1 style={{
        fontSize:"38px"
      }}>
         There's an SCar ride for everyone
      </h1>
    </div>
  <div 
    className='Hcard-render'
  >  
      {
      data.map((h,i)=> {
      return (<Hcard 
      key = {i}
      hname={h.hname}
      ImgSrc = {h.ImgSrc}
      data = {h.data}
      />)
      })
      }
  </div>
</div>

          </>
      )
}

export default Landing;