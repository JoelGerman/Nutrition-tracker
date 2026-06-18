import { router, usePage } from '@inertiajs/react';

type User = {
    id: number;
    name: string;
    email: string;
    role: 'user' | 'admin';
    calorie_goal: number;
};

type Props = {
    users: User[];
};

export default function Index({ users }: Props) {
    const page = usePage();
    const locale = (page.props.locale ?? 'en') as 'en' | 'lv';

    const text = {
        en: {
            title: 'User management',
            name: 'Name',
            email: 'Email',
            role: 'Current role',
            calorieGoal: 'Calorie goal',
            changeRole: 'Change role',
            admin: 'Admin',
            user: 'User',
            kcal: 'kcal',
            noUsers: 'No users found.',
        },
        lv: {
            title: 'Lietotāju pārvaldība',
            name: 'Vārds',
            email: 'E-pasts',
            role: 'Pašreizējā loma',
            calorieGoal: 'Kaloriju mērķis',
            changeRole: 'Mainīt lomu',
            admin: 'Administrators',
            user: 'Lietotājs',
            kcal: 'kcal',
            noUsers: 'Lietotāji nav atrasti.',
        },
    }[locale];

    function updateRole(userId: number, role: string) {
        router.put(
            `/admin/users/${userId}/role`,
            { role },
            {
                preserveScroll: true,
            },
        );
    }

    function roleLabel(role: User['role']) {
        return role === 'admin' ? text.admin : text.user;
    }

    return (
        <div className="mx-auto max-w-5xl p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                    {text.title}
                </h1>
            </div>

            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                <table className="w-full border-collapse text-left">
                    <thead className="bg-gray-50">
                        <tr className="border-b">
                            <th className="p-4 text-sm font-semibold text-gray-600">
                                {text.name}
                            </th>
                            <th className="p-4 text-sm font-semibold text-gray-600">
                                {text.email}
                            </th>
                            <th className="p-4 text-sm font-semibold text-gray-600">
                                {text.role}
                            </th>
                            <th className="p-4 text-sm font-semibold text-gray-600">
                                {text.calorieGoal}
                            </th>
                            <th className="p-4 text-sm font-semibold text-gray-600">
                                {text.changeRole}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.length === 0 && (
                            <tr>
                                <td
                                    className="p-5 text-center text-gray-400"
                                    colSpan={5}
                                >
                                    {text.noUsers}
                                </td>
                            </tr>
                        )}

                        {users.map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="p-4 font-medium text-gray-900">
                                    {user.name}
                                </td>

                                <td className="p-4 text-gray-700">
                                    {user.email}
                                </td>

                                <td className="p-4">
                                    <span
                                        className={
                                            user.role === 'admin'
                                                ? 'rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700'
                                                : 'rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700'
                                        }
                                    >
                                        {roleLabel(user.role)}
                                    </span>
                                </td>

                                <td className="p-4 text-gray-700">
                                    {user.calorie_goal} {text.kcal}
                                </td>

                                <td className="p-4">
                                    <select
                                        value={user.role}
                                        onChange={(e) => {
                                            updateRole(user.id, e.target.value);
                                        }}
                                        className="rounded-lg border bg-white px-3 py-2 text-black"
                                    >
                                        <option value="user">
                                            {text.user}
                                        </option>
                                        <option value="admin">
                                            {text.admin}
                                        </option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}