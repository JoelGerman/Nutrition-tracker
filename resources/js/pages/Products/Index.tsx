import { router, useForm } from '@inertiajs/react';

type Product = {
    id: number;
    user_id: number | null;
    name: string;
    calories_per_100g: number;
    protein_per_100g: number;
    carbs_per_100g: number;
    fat_per_100g: number;
};

type Props = {
    products: Product[];
    search?: string;
    canCreateProducts: boolean;
    canAddToDay: boolean;
    canDeleteProducts: boolean;
    currentUserId: number | null;
};

function AddToDayForm({ product }: { product: Product }) {
    const { data, setData, post, processing, errors } = useForm({
        product_id: product.id,
        amount: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();

        post('/daily-entries');
    }

    return (
        <form onSubmit={submit} className="flex items-center gap-2">
            <input
                type="number"
                min="1"
                step="1"
                placeholder="grams"
                value={data.amount}
                onChange={(e) => setData('amount', e.target.value)}
                className="w-24 rounded border p-2"
            />

            <button
                type="submit"
                disabled={processing}
                className="rounded bg-white px-3 py-2 text-sm font-medium text-black"
            >
                Add
            </button>

            {errors.amount && (
                <div className="text-sm text-red-500">{errors.amount}</div>
            )}
        </form>
    );
}

export default function Index({
    products,
    search = '',
    canCreateProducts,
    canAddToDay,
    canDeleteProducts,
    currentUserId,
}: Props) {
    return (
        <div className="mx-auto max-w-5xl p-6">
            <h1 className="mb-6 text-2xl font-bold">Products</h1>

            {canCreateProducts && (
                <a
                    href="/products/create"
                    className="mb-4 inline-block rounded bg-white px-4 py-2 font-medium text-black"
                >
                    Add product
                </a>
            )}

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
                            <th className="p-3">Add to day</th>
                            <th className="p-3">Actions</th>
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

                                <td className="p-3">
                                    {canAddToDay ? (
                                        <AddToDayForm product={product} />
                                    ) : (
                                        <span className="text-sm text-gray-400">Login to add</span>
                                    )}
                                </td>

                                <td className="p-3">
                                    <div className="flex gap-2">
                                        {(canDeleteProducts || product.user_id === currentUserId) && (
                                            <a
                                                href={`/products/${product.id}/edit`}
                                                className="rounded bg-white px-3 py-2 text-sm font-medium text-black"
                                            >
                                                Edit
                                            </a>
                                        )}

                                        {(canDeleteProducts || product.user_id === currentUserId) && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    router.delete(`/products/${product.id}`);
                                                }}
                                                className="rounded bg-red-600 px-3 py-2 text-sm font-medium text-white"
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}