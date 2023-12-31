import { Box, Heading, Skeleton, SkeletonText, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Image } from '@chakra-ui/react'
import "./product.css"
import { Link } from 'react-router-dom'

const BoxSave = ({ allData, loading }) => {
  const { type, price, location, description, image, id } = allData
  const [effect, setEffect] = useState(false)
  const handleProductHover = () => {
    setEffect(true)
  }
  const closeProductHover = () => {
    setEffect(false)
  }
  let style = {
    position: "relative",
  }

  return (
    <Box border="2px  red" shadow="base" w={{ base: "80vw", sm: "55vw", md: "32vw", lg: "23vw", xl: "23vw", '2xl': "23vw", }} h={{ base: "375px", sm: "375px", md: "385px", lg: "385px", xl: "385px", '2xl': "385px", }} style={style}>

      <Skeleton isLoaded={loading}>  <Box className="image">
        <Link to={`${id}`}> <Image className="img" src={image} alt={id} height="255px" width="315px" margin="auto" /> </Link>
      </Box>
      </Skeleton>
      <SkeletonText mt='4' noOfLines={3} spacing='5' skeletonHeight='4' isLoaded={loading} animation="none">
        <Box id='productDataDesc' position="absolute" bottom="20px" onMouseOut={closeProductHover} onMouseOver={handleProductHover} style={{ border: "2px   #EBECEE", height: "auto", padding: "10px 10px 10px 10px", cursor: 'pointer' }} w={{ base: "79vw", sm: "54vw", md: "31vw", lg: "22vw", xl: "22vw", '2xl': "22vw", }}>
          {effect && <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Heading fontSize="15.5px" fontWeight="600" color="#303030" textAlign="left">{location}</Heading>
            </Box>

          </Box>}
          {!effect && <Heading fontSize="15.5px" fontWeight="600" color="#303030" textAlign="left">{type}</Heading>}
          {!effect && <Text fontSize='14px' className='control' fontWeight="500" color="#727272" textAlign="left"  >{description}</Text>}
          <Box style={{ display: 'flex', alignItems: "center" }}>
            <Heading fontSize='18px' fontWeight="600" color="#303030" mt={1.5} textAlign="left">₹ {price}</Heading>
          </Box>
        </Box>
      </SkeletonText>
    </Box>
  )
}

export { BoxSave }
