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
    },
    updateProduct: async (id, updates) => {
        if (!id) {
            throw new Error("Product id is required to update");
        }
        const res = await fetch(`http://localhost:5000/api/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updates),
        });
        if (!res.ok) {
            throw new Error("Failed to update product");
        }
        const updated = await res.json();
        set((state) => ({
            products: state.products.map((p) => (p._id === updated._id ? updated : p)),
        }));
        return { success: true, message: "Product updated successfully" };
    },
    deleteProduct: async (id) => {
        if (!id) {
            throw new Error("Product id is required to delete");
        }
        const res = await fetch(`http://localhost:5000/api/products/${id}`, {
            method: "DELETE",
        });
        if (!res.ok) {
            throw new Error("Failed to delete product");
        }
        set((state) => ({ products: state.products.filter((p) => p._id !== id) }));
        return { success: true, message: "Product deleted successfully" };
    }
    
   


}));

export default useProductStore;
