import React from "react";

import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
 function CarouselCatalogo() {
    return (
      <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://www.licoresmundiales.com/pub/media/catalog/product/cache/44723bf6bd8bc387d74cb69cb056bee1/r/o/ron_blanco01.jpg' class="d-block w-100"  alt=""   />
        <MDBCarouselCaption>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://www.licoresmundiales.com/pub/media/catalog/product/cache/44723bf6bd8bc387d74cb69cb056bee1/r/o/ron_blanco02.jpg' class="d-block w-100" alt="" />
        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>

      
      

      
      
 

    </MDBCarousel>
    );
}
export default CarouselCatalogo;