import type { NextPage } from 'next'
import { Container, Flex, Text } from '@chakra-ui/react'
import CustomConnect from '../components/customConnect'

const Home: NextPage = () => {
  return (
    <Container maxW="fill" h='100vh' style={{ backgroundColor: '#212121' }} >
      <Flex flexDirection="column" w="100%" h="100%" justifyContent='center' >
        <Flex justifyContent="center" m={2}>
        <Text fontSize='6xl' color='gray.200'>Metamask auth!</Text>
        </Flex>
        <Flex justifyContent="center" m={6}>
          <CustomConnect />
        </Flex>
      </Flex>
    </Container>
  )
}

export default Home
