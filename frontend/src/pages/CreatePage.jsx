import { Input, VStack, Container, Heading, Box, Button } from '@chakra-ui/react';
import React from 'react'
import useProductStore from '../store/product.js';


const CreatePage = () => {

    const [newProduct, setNewProduct] = React.useState({
        name: "",
       
        price: "",
        
        image: ""
    });

    const {addProduct} = useProductStore();
    const handleAddClick = async () => {
        try {
            const { success, message } = await addProduct(newProduct);
            console.log(message);
            console.log(success);
            // Handle successful creation (e.g., show a success message, redirect, etc.)
        } catch (error) {
            console.error("Failed to create product", error);
            // Handle error (e.g., show an error message)
        }
        setNewProduct({
            name: "",
            price: "",
            image: ""
        });
    };


    return (

        <Container maxW="container.sm" bg="green.500" color="white" p={4}>
             <VStack spacing={8} >
                <Heading as="h1" size="2xl" mb={8} textAlign="center">
                    Create New Product
                </Heading> 
                <Box w="100%">
                    <VStack spacing={4}>
                        <Input
                            placeholder="Product Name"
                            name='name'
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />

                        <Input
                            placeholder="Price"
                            name='price'
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <Input
                            placeholder="Image"
                            name='image'
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />
                        <Button onClick={handleAddClick} colorScheme="teal" size="lg" w="100%">
                            Create Product
                        </Button>

                    </VStack>
                </Box>
            </VStack>
        </Container>



    )
    
}

export default CreatePage

