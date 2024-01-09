import React from "react";

import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
 function CarouselEvento() {
    return (
      <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://arumbear.com/ve/wp-content/uploads/2022/02/CarmenWeb.jpg' class="d-block w-100"  alt="First slide" width="900px" height="400px"   />
        <MDBCarouselCaption>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://haciendasantateresa.com.ve/wp-content/uploads/2020/08/cata-hacienda-santa-teresa.jpg' class="d-block w-100" alt="Second slide"  width="900px" height="400px"/>
        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://lustermagazine.com/wp-content/uploads/2019/05/26114750_10155946950475097_7132996687893555371_o-e1558556178503.jpg' class="d-block w-100"  alt="Third slide" width="900px" height="400px"/>
        <MDBCarouselCaption>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={4}>
     
        <img src='https://oceandrive.com.ve/wp-content/uploads/2021/04/ron-santa-teresa-1796-conquistando-fronteras-portada-696x392.jpg' class="d-block w-100" alt="  four slide" width="900px" height="400px"/>
       
        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={5}>
     
      <img src='https://deventosreport.files.wordpress.com/2022/06/cacique-llega-al-mercado-colombiano-2.jpeg?w=1024' class="d-block w-100" alt="five slide"   width="900px" height="400px"/>
     
      <MDBCarouselCaption>
       
      </MDBCarouselCaption>
    </MDBCarouselItem>

    </MDBCarousel>
    );
}
export default CarouselEvento;