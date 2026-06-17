import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';

export default function Welcome() {
    const page = usePage();

    const auth = page.props.auth as { user: unknown };
    const locale = (page.props.locale ?? 'en') as 'en' | 'lv';

    const text = {
        en: {
            label: 'Simple daily nutrition tracking',
            title: 'Track your calories and nutrition in one place.',
            description:
                'Nutrition Tracker helps you add food to your daily list, calculate calories, protein, carbs and fat, and follow your personal daily calorie goal.',
            foodDatabase: 'Food database',
            foodDatabaseText: 'Search default products or add your own custom food.',
            dailyTracking: 'Daily tracking',
            dailyTrackingText: 'Add products by grams and see daily nutrition totals.',
            calorieGoal: 'Calorie goal',
            calorieGoalText: 'Set your own calorie goal and follow your progress.',
            startTracking: 'Start tracking',
            alreadyAccount: 'I already have an account',
            openDashboard: 'Open dashboard',
        },
        lv: {
            label: 'Vienkārša ikdienas uztura uzskaite',
            title: 'Seko kalorijām un uzturam vienā vietā.',
            description:
                'Nutrition Tracker palīdz pievienot ēdienus dienas sarakstam, aprēķināt kalorijas, olbaltumvielas, ogļhidrātus un taukus, kā arī sekot savam dienas kaloriju mērķim.',
            foodDatabase: 'Produktu datubāze',
            foodDatabaseText: 'Meklē noklusētos produktus vai pievieno savus produktus.',
            dailyTracking: 'Dienas uzskaite',
            dailyTrackingText: 'Pievieno produktus gramos un skaties dienas uztura kopsummas.',
            calorieGoal: 'Kaloriju mērķis',
            calorieGoalText: 'Iestati savu kaloriju mērķi un seko progresam.',
            startTracking: 'Sākt uzskaiti',
            alreadyAccount: 'Man jau ir konts',
            openDashboard: 'Atvērt paneli',
        },
    }[locale];

    return (
        <>
            <Head title="Nutrition Tracker" />

            <div className="min-h-screen bg-white text-gray-900">
                <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
                    <div className="text-xl font-bold">
                        Nutrition Tracker
                    </div>

                    <div className="flex items-center gap-2">
                        <Link
                            href="/language/en"
                            className="rounded border border-gray-300 px-3 py-1 text-sm"
                        >
                            EN
                        </Link>

                        <Link
                            href="/language/lv"
                            className="rounded border border-gray-300 px-3 py-1 text-sm"
                        >
                            LV
                        </Link>
                    </div>
                </header>

                <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-green-600">
                        {text.label}
                    </p>

                    <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                        {text.title}
                    </h1>

                    <p className="mb-8 max-w-2xl text-lg text-gray-600">
                        {text.description}
                    </p>

                    <div className="grid max-w-3xl grid-cols-1 gap-4 text-left md:grid-cols-3">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                            <h2 className="mb-2 font-semibold">
                                {text.foodDatabase}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {text.foodDatabaseText}
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                            <h2 className="mb-2 font-semibold">
                                {text.dailyTracking}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {text.dailyTrackingText}
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                            <h2 className="mb-2 font-semibold">
                                {text.calorieGoal}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {text.calorieGoalText}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="rounded bg-green-600 px-5 py-3 font-medium text-white"
                            >
                                {text.openDashboard}
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={register()}
                                    className="rounded bg-green-600 px-5 py-3 font-medium text-white"
                                >
                                    {text.startTracking}
                                </Link>

                                <Link
                                    href={login()}
                                    className="rounded border border-gray-300 px-5 py-3 font-medium text-gray-800"
                                >
                                    {text.alreadyAccount}
                                </Link>
                            </>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}