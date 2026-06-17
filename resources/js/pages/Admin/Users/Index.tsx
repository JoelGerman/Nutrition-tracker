import { router } from '@inertiajs/react';

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    calorie_goal: number;
};

type Props = {
    users: User[];
};

export default function Index({ users }: Props) {
    function updateRole(userId: number, role: string) {
        router.put(`/admin/users/${userId}/role`, {
            role,
        });
    }

    return (
        <div className="mx-auto max-w-5xl p-6">
            <h1 className="mb-6 text-2xl font-bold">User management</h1>

            <div className="overflow-hidden rounded-lg border">
                <table className="w-full border-collapse text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Role</th>
                            <th className="p-3">Calorie goal</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3">{user.role}</td>
                                <td className="p-3">{user.calorie_goal}</td>
                                <td className="p-3">
                                    <select
                                        value={user.role}
                                        onChange={(e) => {
                                            updateRole(user.id, e.target.value);
                                        }}
                                        className="rounded border bg-white p-2 text-black"
                                    >
                                        <option value="user">user</option>
                                        <option value="admin">admin</option>
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