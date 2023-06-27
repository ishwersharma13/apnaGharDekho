import React from 'react'
import { Box, Heading, Text, Img } from '@chakra-ui/react'
import MainImage from "../Images/MainBox.jpg"

const MainBox = () => {
  return (
    <Box border='2px  red' height="auto" width="80%" m="20px auto" p="10px">
      <Heading margin="16px" fontWeight="400" color="#46484A" fontFamily="Raleway">Embark on a journey to find your dream property through our innovative real estate listings.
      </Heading>
      <Text margin="15px" color="#7d7b7b" fontWeight="400" fontSize="15px" mt="12px" >Our customizable real estate solutions are designed to cater to your specific requirements, offering both full and partial outsourcing options.</Text>

      <Box width="100%" border="2px  black" display="flex" p="10px" mt="10px" flexDirection={{ base: "column-reverse", sm: "column-reverse", md: "row", lg: "row", xl: "row", '2xl': "row" }}  >
        <Box width={{ base: "100%", md: "50%", lg: "50%", xl: "50%", "2xl": "50%" }} border="2px  black" p="10px">
          <Text color="#7d7b7b" fontWeight="400" fontSize="15px" >With our cost-effective and user-friendly platform, real estate professionals can streamline their day-to-day operations using advanced technology and techniques. Our online platform eliminates the need for physical data movement, ensuring fast and accurate data capture.</Text>
          <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px" >By utilizing precise planning and expert domain compliance, our solution simplifies processes for real estate agencies, business owners, and property owners. You can say goodbye to the hassle of managing physical files, bills, and records, as all source documents can be instantly accessed online.</Text>
          <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px">Our team of experts works remotely and flexibly to maximize efficiency and productivity. You can bid farewell to paperwork and physical data, and welcome our innovative solution for the real estate industry.</Text>
          <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px" >Additionally, our solution provides comprehensive reporting and analytics tools, empowering you to track and analyze your real estate performance and make informed decisions based on data.</Text>
          <Text color="#7d7b7b" fontWeight="400" fontSize="15px" mt="15px" >Rest assured, our solution incorporates top-notch security measures to ensure the confidentiality and safety of your data and transactions, giving you peace of mind in all your real estate operations.</Text>
        </Box>
        <Box width={{ base: "100%", sm: "50%", md: "50%", lg: "50%", xl: "50%", "2xl": "50%" }} pb="5px" border="2px  black" m={{ base: "auto", md: "0px", lg: "0px", xl: "0px", "2xl": "0px" }}>
          <Img src={MainImage} height="100%" width="100%" alt="innovative" />
        </Box>
      </Box>
    </Box>
  )
}

export { MainBox }
