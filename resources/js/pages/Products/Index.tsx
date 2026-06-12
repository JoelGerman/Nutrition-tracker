import { router } from '@inertiajs/react';

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
    search?: string;
};

export default function Index({ products, search = '' }: Props) {
    return (
        <div className="mx-auto max-w-5xl p-6">
            <h1 className="mb-6 text-2xl font-bold">Products</h1>
            <a
                href="/products/create"
                className="mb-4 inline-block rounded bg-white px-4 py-2 font-medium text-black"
            >
                Add product
            </a>
            
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    const searchValue = formData.get('search') as string;

                    router.get('/products', { search: searchValue }, { preserveState: true });
                }}
                className="mb-4 flex gap-2"
            >
                <input
                    name="search"
                    defaultValue={search}
                    placeholder="Search product..."
                    className="w-full rounded border p-2"
                />

                <button
                    type="submit"
                    className="rounded bg-white px-4 py-2 font-medium text-black"
                >
                    Search
                </button>
            </form>

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