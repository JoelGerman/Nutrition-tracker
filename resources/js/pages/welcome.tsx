import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Nutrition Tracker" />

            <div className="min-h-screen bg-white text-gray-900">
                <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
                    <div className="text-xl font-bold">
                        Nutrition Tracker
                    </div>
                </header>

                <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-green-600">
                        Simple daily nutrition tracking
                    </p>

                    <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                        Track your calories and nutrition in one place.
                    </h1>

                    <p className="mb-8 max-w-2xl text-lg text-gray-600">
                        Nutrition Tracker helps you add food to your daily list,
                        calculate calories, protein, carbs and fat, and follow your
                        personal daily calorie goal.
                    </p>
                    

                                        <div className="grid max-w-3xl grid-cols-1 gap-4 text-left md:grid-cols-3">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                            <h2 className="mb-2 font-semibold">Food database</h2>
                            <p className="text-sm text-gray-600">
                                Search default products or add your own custom food.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                            <h2 className="mb-2 font-semibold">Daily tracking</h2>
                            <p className="text-sm text-gray-600">
                                Add products by grams and see daily nutrition totals.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                            <h2 className="mb-2 font-semibold">Calorie goal</h2>
                            <p className="text-sm text-gray-600">
                                Set your own calorie goal and follow your progress.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="rounded bg-green-600 px-5 py-3 font-medium text-white"
                            >
                                Open dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={register()}
                                    className="rounded bg-green-600 px-5 py-3 font-medium text-white"
                                >
                                    Start tracking
                                </Link>

                                <Link
                                    href={login()}
                                    className="rounded border border-gray-300 px-5 py-3 font-medium text-gray-800"
                                >
                                    I already have an account
                                </Link>
                            </>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}