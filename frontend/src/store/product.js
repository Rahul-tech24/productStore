import { create } from "zustand" ;
    
const useProductStore = create((set) => ({
  products: [],
    addProduct:
        async (newProduct) => {
            if (!newProduct.name || !newProduct.price || !newProduct.image) {
                throw new Error("All fields are required");
            }
            const res = await fetch("http://localhost:5000/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });
            if (!res.ok) {
                throw new Error("Failed to add product");
            }
            const createdProduct = await res.json();
            // Assuming the backend returns the new product with an id
            set((state) => ({ products: [...state.products, createdProduct] }));
            return {success: true, message: "Product created successfully"};
        },
    setProducts: (products) => set({ products }),
  
    fetchProducts: async () => {
        try {
            const res = await fetch("http://localhost:5000/api/products");
            if (!res.ok) {
                throw new Error("Failed to fetch products");
            }
            const products = await res.json();
            set({ products });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }
    
   


}));

export default useProductStore;



