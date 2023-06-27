import { Box, Heading, Img , Text } from '@chakra-ui/react'
import React from 'react'
import about from "../Images/aboutus.jpg"

const Aboutus = () => {
  return (
    <Box border="1px  black" background="#f1f0f0" display="flex" flexDirection={{base:"column", sm: "column", md: "row", lg: "row",xl: "row",'2xl': "row"}} >
        <Box border="1px  red" m={{base:"auto", md:"0px",lg:"0px" ,xl:"0px" ,"2xl":"0px"}} width={{base:"100%", sm: "80%", md: "50%", lg: "50%",xl: "50%",'2xl': "50%"}} p="25px" display="flex" justifyContent={{base:"center", sm: "center", md: "flex-end", lg: "flex-end",xl: "flex-end",'2xl': "flex-end"}}>
        <Img src={about} alt="about" width="auto" height={{base:"200px", sm: "350px", md: "650px", lg: "480px",xl: "520px",'2xl': "520px"}} />
        </Box>

        <Box border="1px  red" width={{base:"100%", sm: "100%", md: "50%", lg: "40%",xl: "40%",'2xl': "40%"}} p="15px" >
      <Heading color="#05a0e8" fontWeight="400" textAlign="center" borderBottom="1px solid #05a0e8" width="170px" m="auto"  p="5px" >About us</Heading>

      <Text color="#415B89" fontWeight="400" fontSize="15px" mt="12px">Welcome to PropertyHub, your ultimate destination for all your real estate requirements. We are a pioneering property platform committed to transforming the way individuals engage in buying, selling, and renting properties....</Text>
     
       <Text color="#415B89" fontWeight="400" fontSize="15px" mt="12px">With a team of seasoned professionals possessing extensive expertise in the real estate sector, we boast a profound comprehension of market intricacies. Leveraging our profound insights and cutting-edge technologies, we have developed a user-friendly, dependable, and highly efficient platform.</Text>
 
 <Text color="#415B89" fontWeight="400" fontSize="15px" mt="12px" >At Real State Property Deal, we prioritize a hassle-free experience when it comes to buying or selling properties. Our platform is thoughtfully designed to equip you with comprehensive tools and resources, ensuring that you can make well-informed decisions. Whether you're a first-time buyer, an experienced investor, or a homeowner seeking to sell your property, rest assured that we have everything you need to navigate the process with ease.</Text>

 <Text color="#415B89" fontWeight="400" fontSize="15px" mt="12px" >Don't miss out on this opportunity! Join our platform now and embark on a remarkable journey through the realm of real estate. Real State Property Deal is here to accompany you every step of the way, serving as your trusted partner for all your property transactions. Start today and unlock the endless possibilities that await you in the world of real estate.</Text>
        </Box>
    </Box>
  )
}

export  {Aboutus}
