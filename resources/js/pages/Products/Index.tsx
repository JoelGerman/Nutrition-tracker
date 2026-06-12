type Product = {
    id: number;
    name: string;
    calories_per_100g: number;
    protein_per_100g: number;
    carbs_per_100g: number;
    fat_per_100g: number;
};

type Props = {
    products: Product[];
};

export default function Index({ products }: Props) {
    return (
        
        <div className="mx-auto max-w-5xl p-6">
            <h1 className="mb-6 text-2xl font-bold">Products</h1>
            <a
                href="/products/create"
                className="mb-4 inline-block rounded bg-white px-4 py-2 font-medium text-black"
            >
                Add product
            </a>
            <div className="overflow-hidden rounded-lg border">
                <table className="w-full border-collapse text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3">Name</th>
                            <th className="p-3">Calories / 100g</th>
                            <th className="p-3">Protein / 100g</th>
                            <th className="p-3">Carbs / 100g</th>
                            <th className="p-3">Fat / 100g</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b">
                                <td className="p-3">{product.name}</td>
                                <td className="p-3">{product.calories_per_100g}</td>
                                <td className="p-3">{product.protein_per_100g}</td>
                                <td className="p-3">{product.carbs_per_100g}</td>
                                <td className="p-3">{product.fat_per_100g}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}