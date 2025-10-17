import { Box, Heading, HStack, Text, Image  } from '@chakra-ui/react'
import useProductStore from '../store/product'
const ProductCard = ({ product }) => {
    const { updateProduct, deleteProduct } = useProductStore()
       
    const handleEdit = async () => {
        try {
            const name = window.prompt('Update name', product.name)
            if (name === null) return
            const priceStr = window.prompt('Update price', String(product.price))
            if (priceStr === null) return
            const price = Number(priceStr)
            if (Number.isNaN(price)) return
            const image = window.prompt('Update image URL', product.image)
            if (image === null) return
            await updateProduct(product._id, { name, price, image })
        } catch (e) {
            console.error(e)
        }
    }


    const handleDelete = async () => {
        const { success, message } = await deleteProduct(product._id) 
        if (success) {
            alert(message)
        }else {
            alert(message)
        }
      
    }

    return (
        <Box
            shadow='lg'
            rounded='lg'
            overflow="hidden"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}>
            <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

            <Box p={4} >
                <Heading as="h3" size="md" mb = {2}>
                     {product.name}
                </Heading>
                <Text fontWeight = 'bold' fontSize='xl'  mb = {4} >
                    {product.price}
                </Text>
                <HStack>
                    <button onClick={handleEdit} >edit the product</button>
                    <button onClick={handleDelete}>delete</button>
              </HStack>     


            </Box>
            
            
        </Box>
        
  )
}

export default ProductCard
