import React from "react";

import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
 function Carouselcomponet() {
    return (
      <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://media.licdn.com/dms/image/C4E1BAQEFfPT6XlJ_JQ/company-background_10000/0/1592847051256/roncarupano_cover?e=2147483647&v=beta&t=GY7lakKbr75HtJqUOLwwjIv8xXFod7gawrYwFcFlTWQ' class="d-block w-100"  alt="First slide" width="400px" height="400px"   />
        <MDBCarouselCaption>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://ronclassico.com.mx/cdn/shop/files/Recurso_2.png?v=1635369914' class="d-block w-100" alt="Second slide"  width="400px" height="500px"/>
        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://djx5h8pabpett.cloudfront.net/wp-content/uploads/sites/4/2022/05/24102443/Ron-Roble-premium-rum-full-range.png' class="d-block w-100"  alt="Third slide" width="400px" height="570px"/>
        <MDBCarouselCaption>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={4}>
     
        <img src='https://revistaelconocedor.com/wp-content/uploads/2019/04/ExperienciasElConcoedorRon-1024x536.jpg' class="d-block w-100" alt="  four slide" width="400px" height="550px" />
       
        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={5}>
     
      <img src='https://elestimulo.com/wp-content/uploads/2018/08/diplomatico-1100x572.jpg' class="d-block w-100" alt="five slide"   width="399px" height="580px"/>
     
      <MDBCarouselCaption>
       
      </MDBCarouselCaption>
    </MDBCarouselItem>

    </MDBCarousel>
    );
}
export default Carouselcomponet;