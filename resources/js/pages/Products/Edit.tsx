import { useForm } from '@inertiajs/react';

type Product = {
    id: number;
    name: string;
    category: string;
    calories_per_100g: number | string;
    protein_per_100g: number | string;
    carbs_per_100g: number | string;
    fat_per_100g: number | string;
};

type Props = {
    product: Product;
};

export default function Edit({ product }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: product.name,
        category: product.category,
        calories_per_100g: String(product.calories_per_100g),
        protein_per_100g: String(product.protein_per_100g),
        carbs_per_100g: String(product.carbs_per_100g),
        fat_per_100g: String(product.fat_per_100g),
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();

        put(`/products/${product.id}`);
    }

    return (
        <div className="mx-auto max-w-2xl p-6">
            <h1 className="mb-6 text-2xl font-bold">Edit product</h1>

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <label className="block font-medium">Name</label>
                    <input
                        className="mt-1 w-full rounded border p-2"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    {errors.name && <div className="text-sm text-red-500">{errors.name}</div>}
                </div>
                <div>
                    <label className="block font-medium">Category</label>

                    <select
                        value={data.category}
                        onChange={(e) => setData('category', e.target.value)}
                        className="mt-1 w-full rounded border p-2"
                >       
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Meat">Meat</option>
                        <option value="Fish">Fish</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Grains">Grains</option>
                        <option value="Porridge">Porridge</option>
                        <option value="Cereal">Cereal</option>
                        <option value="Sauces">Sauces</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Other">Other</option>
                    </select>

                    {errors.category && (
                    <div className="text-sm text-red-500">{errors.category}</div>
                    )}
                </div>

                <div>
                    <label className="block font-medium">Calories / 100g</label>
                    <input
                        type="number"
                        step="0.01"
                        className="mt-1 w-full rounded border p-2"
                        value={data.calories_per_100g}
                        onChange={(e) => setData('calories_per_100g', e.target.value)}
                    />
                    {errors.calories_per_100g && (
                        <div className="text-sm text-red-500">{errors.calories_per_100g}</div>
                    )}
                </div>

                <div>
                    <label className="block font-medium">Protein / 100g</label>
                    <input
                        type="number"
                        step="0.01"
                        className="mt-1 w-full rounded border p-2"
                        value={data.protein_per_100g}
                        onChange={(e) => setData('protein_per_100g', e.target.value)}
                    />
                    {errors.protein_per_100g && (
                        <div className="text-sm text-red-500">{errors.protein_per_100g}</div>
                    )}
                </div>

                <div>
                    <label className="block font-medium">Carbs / 100g</label>
                    <input
                        type="number"
                        step="0.01"
                        className="mt-1 w-full rounded border p-2"
                        value={data.carbs_per_100g}
                        onChange={(e) => setData('carbs_per_100g', e.target.value)}
                    />
                    {errors.carbs_per_100g && (
                        <div className="text-sm text-red-500">{errors.carbs_per_100g}</div>
                    )}
                </div>

                <div>
                    <label className="block font-medium">Fat / 100g</label>
                    <input
                        type="number"
                        step="0.01"
                        className="mt-1 w-full rounded border p-2"
                        value={data.fat_per_100g}
                        onChange={(e) => setData('fat_per_100g', e.target.value)}
                    />
                    {errors.fat_per_100g && (
                        <div className="text-sm text-red-500">{errors.fat_per_100g}</div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700 disabled:opacity-50"
>
                    Save changes
                </button>
            </form>
        </div>
    );
}