import { useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        category: 'Other',
        calories_per_100g: '',
        protein_per_100g: '',
        carbs_per_100g: '',
        fat_per_100g: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();

        post('/products');
    }

    return (
        <div className="mx-auto max-w-2xl p-6">
            <h1 className="mb-6 text-2xl font-bold">Add product</h1>

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
                    <label className="block text-sm font-medium text-gray-700">
                        Category
                    </label>
                        <select
                            value={data.category}
                            onChange={(e) => setData('category', e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300"
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
                            <div className="text-sm text-red-600">{errors.category}</div>
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
                    className="rounded bg-white px-4 py-2 font-medium text-black"
                >
                    Save product
                </button>
            </form>
        </div>
    );
}