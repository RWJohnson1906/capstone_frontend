  import React from 'react';
  import { UncontrolledCarousel } from 'reactstrap';
  
  const items = [
    {
      src: 'https://images.unsplash.com/photo-1605514449459-5a9cfa0b9955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90aXZhdGlvbmFsJTIwcXVvdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      altText: 'Test 1',
      key: '1'
    },
    {
      src: 'https://images.unsplash.com/photo-1592496431160-00dee11029cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdGl2YXRpb25hbCUyMHF1b3Rlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      altText: 'Test 2',
      key: '2'
    },
    {
      src: 'https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdGl2YXRpb25hbCUyMHF1b3Rlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      altText: 'Test 2',
      key: '3'
    },
  ];
  
  const CarouselComponent = () => (
    <UncontrolledCarousel items={items} />
  );
  
  export default CarouselComponent;
  

