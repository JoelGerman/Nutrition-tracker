import { router } from '@inertiajs/react';

type Product = {
    id: number;
    name: string;
};

type Entry = {
    id: number;
    amount: number | string;
    total_calories: number | string;
    total_protein: number | string;
    total_carbs: number | string;
    total_fat: number | string;
    product: Product;
};

type Totals = {
    calories: number | string;
    protein: number | string;
    carbs: number | string;
    fat: number | string;
};

type Props = {
    entries: Entry[];
    totals: Totals;
};

function toNumber(value: number | string): number {
    return Number(value) || 0;
}

export default function Index({ entries, totals }: Props) {
    return (
        <div className="mx-auto max-w-5xl p-6">
            <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>

            <div className="mb-6 grid grid-cols-4 gap-4">
                <div className="rounded border p-4">
                    <div className="text-sm">Calories</div>
                    <div className="text-2xl font-bold">{Math.round(toNumber(totals.calories))}</div>
                </div>

                <div className="rounded border p-4">
                    <div className="text-sm">Protein</div>
                    <div className="text-2xl font-bold">{toNumber(totals.protein).toFixed(1)}g</div>
                </div>

                <div className="rounded border p-4">
                    <div className="text-sm">Carbs</div>
                    <div className="text-2xl font-bold">{toNumber(totals.carbs).toFixed(1)}g</div>
                </div>

                <div className="rounded border p-4">
                    <div className="text-sm">Fat</div>
                    <div className="text-2xl font-bold">{toNumber(totals.fat).toFixed(1)}g</div>
                </div>
            </div>

            <div className="mb-4">
                <a
                    href="/products"
                    className="inline-block rounded bg-white px-4 py-2 font-medium text-black"
                >
                    Add food
                </a>
            </div>

            <div className="overflow-hidden rounded-lg border">
                <table className="w-full border-collapse text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3">Product</th>
                            <th className="p-3">Amount</th>
                            <th className="p-3">Calories</th>
                            <th className="p-3">Protein</th>
                            <th className="p-3">Carbs</th>
                            <th className="p-3">Fat</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.length === 0 && (
                            <tr>
                                <td className="p-3" colSpan={7}>
                                    No food added today.
                                </td>
                            </tr>
                        )}

                        {entries.map((entry) => (
                            <tr key={entry.id} className="border-b">
                                <td className="p-3">{entry.product.name}</td>
                                <td className="p-3">{toNumber(entry.amount)}g</td>
                                <td className="p-3">{Math.round(toNumber(entry.total_calories))}</td>
                                <td className="p-3">{toNumber(entry.total_protein).toFixed(1)}g</td>
                                <td className="p-3">{toNumber(entry.total_carbs).toFixed(1)}g</td>
                                <td className="p-3">{toNumber(entry.total_fat).toFixed(1)}g</td>
                                <td className="p-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            router.delete(`/daily-entry-products/${entry.id}`);
                                        }}
                                        className="rounded bg-red-600 px-3 py-2 text-sm font-medium text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}