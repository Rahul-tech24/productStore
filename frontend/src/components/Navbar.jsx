import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Flex, HStack, Text, Button } from '@chakra-ui/react'
import { MdAddBox } from 'react-icons/md'

const Navbar = () => {
  return (
    <Container maxW="container.xl" bg="green.500" color="white" p={4}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">
          <Link to="/">Product Store</Link>
        </Text>
        <HStack spacing={4}>
          <Button as={Link} to="/create" leftIcon={<MdAddBox />} colorScheme="whiteAlpha">
            Add Product
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar


