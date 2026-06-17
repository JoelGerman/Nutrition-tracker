import { router, useForm, usePage } from '@inertiajs/react';

type Product = {
    id: number;
    user_id: number | null;
    name: string;
    category: string;
    calories_per_100g: number;
    protein_per_100g: number;
    carbs_per_100g: number;
    fat_per_100g: number;
};

type Props = {
    products: Product[];
    search?: string;
    category?: string;
    canCreateProducts: boolean;
    canAddToDay: boolean;
    canDeleteProducts: boolean;
    currentUserId: number | null;
};

type PageText = {
    grams: string;
    add: string;
};

function AddToDayForm({
    product,
    text,
}: {
    product: Product;
    text: PageText;
}) {
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
                placeholder={text.grams}
                value={data.amount}
                onChange={(e) => setData('amount', e.target.value)}
                className="w-24 rounded border p-2"
            />

            <button
                type="submit"
                disabled={processing}
                className="rounded bg-white px-3 py-2 text-sm font-medium text-black"
            >
                {text.add}
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
    category = '',
    canCreateProducts,
    canAddToDay,
    canDeleteProducts,
    currentUserId,
}: Props) {
    const page = usePage();
    const locale = (page.props.locale ?? 'en') as 'en' | 'lv';

    const text = {
        en: {
            title: 'Products',
            addProduct: 'Add product',
            searchPlaceholder: 'Search product...',
            allCategories: 'All categories',
            search: 'Search',
            name: 'Name',
            category: 'Category',
            calories: 'Calories / 100g',
            protein: 'Protein / 100g',
            carbs: 'Carbs / 100g',
            fat: 'Fat / 100g',
            addToDay: 'Add to day',
            actions: 'Actions',
            grams: 'grams',
            add: 'Add',
            loginToAdd: 'Login to add',
            edit: 'Edit',
            delete: 'Delete',
            noProducts: 'No products found.',
            categories: {
                Fruits: 'Fruits',
                Vegetables: 'Vegetables',
                Meat: 'Meat',
                Fish: 'Fish',
                Dairy: 'Dairy',
                Grains: 'Grains',
                Porridge: 'Porridge',
                Cereal: 'Cereal',
                Sauces: 'Sauces',
                Drinks: 'Drinks',
                Snacks: 'Snacks',
                Other: 'Other',
            },
        },
        lv: {
            title: 'Produkti',
            addProduct: 'Pievienot produktu',
            searchPlaceholder: 'Meklēt produktu...',
            allCategories: 'Visas kategorijas',
            search: 'Meklēt',
            name: 'Nosaukums',
            category: 'Kategorija',
            calories: 'Kalorijas / 100g',
            protein: 'Olbaltumvielas / 100g',
            carbs: 'Ogļhidrāti / 100g',
            fat: 'Tauki / 100g',
            addToDay: 'Pievienot dienai',
            actions: 'Darbības',
            grams: 'grami',
            add: 'Pievienot',
            loginToAdd: 'Ielogojies, lai pievienotu',
            edit: 'Labot',
            delete: 'Dzēst',
            noProducts: 'Produkti nav atrasti.',
            categories: {
                Fruits: 'Augļi',
                Vegetables: 'Dārzeņi',
                Meat: 'Gaļa',
                Fish: 'Zivis',
                Dairy: 'Piena produkti',
                Grains: 'Graudaugi',
                Porridge: 'Putras',
                Cereal: 'Brokastu pārslas',
                Sauces: 'Mērces',
                Drinks: 'Dzērieni',
                Snacks: 'Uzkodas',
                Other: 'Cits',
            },
        },
    }[locale];

    return (
        <div className="mx-auto max-w-5xl p-6">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold">{text.title}</h1>

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

            {canCreateProducts && (
                <a
                    href="/products/create"
                    className="mb-4 inline-block rounded bg-white px-4 py-2 font-medium text-black"
                >
                    {text.addProduct}
                </a>
            )}

            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    const searchValue = formData.get('search') as string;
                    const categoryValue = formData.get('category') as string;

                    router.get(
                        '/products',
                        { search: searchValue, category: categoryValue },
                        { preserveState: true },
                    );
                }}
                className="mb-4 flex gap-2"
            >
                <input
                    name="search"
                    defaultValue={search}
                    placeholder={text.searchPlaceholder}
                    className="w-full rounded border p-2"
                />

                <select
                    name="category"
                    defaultValue={category}
                    onChange={(e) => {
                        router.get(
                            '/products',
                            { search: search, category: e.target.value },
                            { preserveState: true },
                        );
                    }}
                    className="rounded border bg-white p-2 text-black"
                >
                    <option value="">{text.allCategories}</option>
                    <option value="Fruits">{text.categories.Fruits}</option>
                    <option value="Vegetables">
                        {text.categories.Vegetables}
                    </option>
                    <option value="Meat">{text.categories.Meat}</option>
                    <option value="Fish">{text.categories.Fish}</option>
                    <option value="Dairy">{text.categories.Dairy}</option>
                    <option value="Grains">{text.categories.Grains}</option>
                    <option value="Porridge">{text.categories.Porridge}</option>
                    <option value="Cereal">{text.categories.Cereal}</option>
                    <option value="Sauces">{text.categories.Sauces}</option>
                    <option value="Drinks">{text.categories.Drinks}</option>
                    <option value="Snacks">{text.categories.Snacks}</option>
                    <option value="Other">{text.categories.Other}</option>
                </select>

                <button
                    type="submit"
                    className="rounded bg-white px-4 py-2 font-medium text-black"
                >
                    {text.search}
                </button>
            </form>

            <div className="overflow-hidden rounded-lg border">
                <table className="w-full border-collapse text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3">{text.name}</th>
                            <th className="p-3">{text.category}</th>
                            <th className="p-3">{text.calories}</th>
                            <th className="p-3">{text.protein}</th>
                            <th className="p-3">{text.carbs}</th>
                            <th className="p-3">{text.fat}</th>
                            <th className="p-3">{text.addToDay}</th>
                            <th className="p-3">{text.actions}</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.length === 0 && (
                            <tr>
                                <td className="p-4 text-gray-500" colSpan={8}>
                                    {text.noProducts}
                                </td>
                            </tr>
                        )}

                        {products.map((product) => (
                            <tr key={product.id} className="border-b">
                                <td className="p-3">{product.name}</td>
                                <td className="p-3">{product.category}</td>
                                <td className="p-3">
                                    {product.calories_per_100g}
                                </td>
                                <td className="p-3">
                                    {product.protein_per_100g}
                                </td>
                                <td className="p-3">
                                    {product.carbs_per_100g}
                                </td>
                                <td className="p-3">
                                    {product.fat_per_100g}
                                </td>

                                <td className="p-3">
                                    {canAddToDay ? (
                                        <AddToDayForm
                                            product={product}
                                            text={text}
                                        />
                                    ) : (
                                        <span className="text-sm text-gray-400">
                                            {text.loginToAdd}
                                        </span>
                                    )}
                                </td>

                                <td className="p-3">
                                    <div className="flex gap-2">
                                        {(canDeleteProducts ||
                                            product.user_id ===
                                                currentUserId) && (
                                            <a
                                                href={`/products/${product.id}/edit`}
                                                className="rounded bg-white px-3 py-2 text-sm font-medium text-black"
                                            >
                                                {text.edit}
                                            </a>
                                        )}

                                        {(canDeleteProducts ||
                                            product.user_id ===
                                                currentUserId) && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    router.delete(
                                                        `/products/${product.id}`,
                                                    );
                                                }}
                                                className="rounded bg-red-600 px-3 py-2 text-sm font-medium text-white"
                                            >
                                                {text.delete}
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