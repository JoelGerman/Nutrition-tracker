import { Link, usePage } from '@inertiajs/react';
import { LayoutDashboard, Package, Users } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

export function AppSidebar() {
    const page = usePage();

    const auth = page.props.auth as { user?: { role?: string } };
    const isAdmin = auth.user?.role === 'admin';

    const locale = (page.props.locale ?? 'en') as 'en' | 'lv';

    const text = {
        en: {
            dashboard: 'Dashboard',
            products: 'Products',
            userManagement: 'User management',
        },
        lv: {
            dashboard: 'Panelis',
            products: 'Produkti',
            userManagement: 'Lietotāju pārvaldība',
        },
    }[locale];

    const mainNavItems: NavItem[] = [
        {
            title: text.dashboard,
            href: dashboard(),
            icon: LayoutDashboard,
        },
        {
            title: text.products,
            href: '/products',
            icon: Package,
        },
    ];

    if (isAdmin) {
        mainNavItems.push({
            title: text.userManagement,
            href: '/admin/users',
            icon: Users,
        });
    }

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}