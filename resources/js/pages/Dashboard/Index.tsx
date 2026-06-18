import { router, useForm, usePage } from '@inertiajs/react';

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
    calorieGoal: number;
};

function toNumber(value: number | string): number {
    return Number(value) || 0;
}

export default function Index({ entries, totals, calorieGoal }: Props) {
    const page = usePage();
    const locale = (page.props.locale ?? 'en') as 'en' | 'lv';

    const text = {
        en: {
            title: 'Dashboard',
            subtitle: "Track today's calories and nutrition.",
            addFood: 'Add food',
            dailyCalorieProgress: 'Daily calorie progress',
            dailyCalorieGoal: 'Daily calorie goal',
            saveGoal: 'Save goal',
            calories: 'Calories',
            protein: 'Protein',
            carbs: 'Carbs',
            fat: 'Fat',
            todaysFood: "Today's food",
            product: 'Product',
            amount: 'Amount',
            actions: 'Actions',
            noFood: 'No food added today.',
            delete: 'Delete',
        },
        lv: {
            title: 'Panelis',
            subtitle: 'Seko šodienas kalorijām un uzturam.',
            addFood: 'Pievienot ēdienu',
            dailyCalorieProgress: 'Dienas kaloriju progress',
            dailyCalorieGoal: 'Dienas kaloriju mērķis',
            saveGoal: 'Saglabāt mērķi',
            calories: 'Kalorijas',
            protein: 'Olbaltumvielas',
            carbs: 'Ogļhidrāti',
            fat: 'Tauki',
            todaysFood: 'Šodienas ēdiens',
            product: 'Produkts',
            amount: 'Daudzums',
            actions: 'Darbības',
            noFood: 'Šodien vēl nav pievienots ēdiens.',
            delete: 'Dzēst',
        },
    }[locale];

    const calories = toNumber(totals.calories);
    const progress = Math.min((calories / calorieGoal) * 100, 100);

    const { data, setData, put, processing, errors } = useForm({
        calorie_goal: String(calorieGoal),
    });

    function updateGoal(e: React.FormEvent) {
        e.preventDefault();

        put('/dashboard/calorie-goal');
    }

    return (
                <div className="mx-auto max-w-5xl p-6">
            <div className="mb-6">
                <div className="mb-6 flex items-center justify-between">
                    <div className="text-xl font-bold">
                        Nutrition Tracker
                    </div>

                    <div className="flex items-center gap-2">
                        <a
                            href="/language/en"
                            className="rounded border border-gray-300 px-3 py-1 text-sm"
                        >
                            EN
                        </a>

                        <a
                            href="/language/lv"
                            className="rounded border border-gray-300 px-3 py-1 text-sm"
                        >
                            LV
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">{text.title}</h1>
                        <p className="mt-1 text-sm text-gray-400">
                            {text.subtitle}
                        </p>
                    </div>

                    <a
                    href="/products"
                    className="rounded-lg bg-green-600 px-5 py-3 font-medium text-white"
                >
                    {text.addFood}
                </a>
                </div>
            </div>

            <div className="mb-6 rounded-lg border p-5">
                <div className="mb-3 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold">
                            {text.dailyCalorieProgress}
                        </h2>
                        <p className="text-sm text-gray-400">
                            {Math.round(calories)} / {calorieGoal} kcal
                        </p>
                    </div>

                    <div className="text-2xl font-bold">
                        {Math.round(progress)}%
                    </div>
                </div>

                <div className="h-5 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                    className="h-full rounded-full bg-green-600"
                    style={{ width: `${progress}%` }}
                />
                </div>

                <form onSubmit={updateGoal} className="mt-4 flex items-end gap-2">
                    <div>
                        <label className="block text-sm text-gray-400">
                            {text.dailyCalorieGoal}
                        </label>

                        <input
                            type="number"
                            min="1"
                            max="10000"
                            value={data.calorie_goal}
                            onChange={(e) =>
                                setData('calorie_goal', e.target.value)
                            }
                            className="mt-1 rounded border bg-white p-2 text-black"
                        />

                        {errors.calorie_goal && (
                            <div className="text-sm text-red-500">
                                {errors.calorie_goal}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="rounded bg-white px-4 py-2 font-medium text-black"
                    >
                        {text.saveGoal}
                    </button>
                </form>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="rounded-lg border p-4">
                    <div className="text-sm text-gray-400">
                        {text.calories}
                    </div>
                    <div className="mt-1 text-2xl font-bold">
                        {Math.round(calories)}
                    </div>
                </div>

                <div className="rounded-lg border p-4">
                    <div className="text-sm text-gray-400">
                        {text.protein}
                    </div>
                    <div className="mt-1 text-2xl font-bold">
                        {toNumber(totals.protein).toFixed(1)}g
                    </div>
                </div>

                <div className="rounded-lg border p-4">
                    <div className="text-sm text-gray-400">
                        {text.carbs}
                    </div>
                    <div className="mt-1 text-2xl font-bold">
                        {toNumber(totals.carbs).toFixed(1)}g
                    </div>
                </div>

                <div className="rounded-lg border p-4">
                    <div className="text-sm text-gray-400">
                        {text.fat}
                    </div>
                    <div className="mt-1 text-2xl font-bold">
                        {toNumber(totals.fat).toFixed(1)}g
                    </div>
                </div>
            </div>

            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-xl font-semibold">{text.todaysFood}</h2>
            </div>

            <div className="overflow-hidden rounded-lg border">
                <table className="w-full border-collapse text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3">{text.product}</th>
                            <th className="p-3">{text.amount}</th>
                            <th className="p-3">{text.calories}</th>
                            <th className="p-3">{text.protein}</th>
                            <th className="p-3">{text.carbs}</th>
                            <th className="p-3">{text.fat}</th>
                            <th className="p-3">{text.actions}</th>
                        </tr>
                    </thead>

                    <tbody>
                        {entries.length === 0 && (
                            <tr>
                                <td className="p-3 text-gray-400" colSpan={7}>
                                    {text.noFood}
                                </td>
                            </tr>
                        )}

                        {entries.map((entry) => (
                            <tr key={entry.id} className="border-b">
                                <td className="p-3">{entry.product.name}</td>
                                <td className="p-3">
                                    {toNumber(entry.amount)}g
                                </td>
                                <td className="p-3">
                                    {Math.round(
                                        toNumber(entry.total_calories),
                                    )}
                                </td>
                                <td className="p-3">
                                    {toNumber(entry.total_protein).toFixed(1)}g
                                </td>
                                <td className="p-3">
                                    {toNumber(entry.total_carbs).toFixed(1)}g
                                </td>
                                <td className="p-3">
                                    {toNumber(entry.total_fat).toFixed(1)}g
                                </td>
                                <td className="p-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            router.delete(
                                                `/daily-entry-products/${entry.id}`,
                                            );
                                        }}
                                        className="rounded bg-red-600 px-3 py-2 text-sm font-medium text-white"
                                    >
                                        {text.delete}
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