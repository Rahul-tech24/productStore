import { Container, VStack, Text, SimpleGrid,Box,Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import useProductStore from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {

    const { products, fetchProducts } = useProductStore();

    React.useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    console.log(products);

  return (
    <Container maxW="container.xl" py={12}>
     <VStack spacing={4}>
              <Text fontSize={"30"} fontWeight="bold"
                  bgGradient="linear(to-r, green.400, blue.500, purple.600)"
                  bgClip="text"
                  textAlign="center"
              >
                 Current Products
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="100%">
                  {products.map((product) => (
                     <ProductCard key={product.id} product={product} />
                  ))}
              </SimpleGrid>
            
              {
                  products.length === 0 && (
                       <Text fontSize={"20"} textAlign="center"
              >
                  no products available. Please add some products.
                  <Link to="/create" style={{ color: 'blue', textDecoration: 'underline' }}> Create Product</Link>
          </Text>
                  )
              }
              

             
     </VStack> 
    </Container>
  )
}

export default HomePage
