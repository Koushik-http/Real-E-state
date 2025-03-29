"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Heart, Home, MessageSquare, Search, Settings, User } from "lucide-react"

export default function UserDashboardSidebar() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/dashboard",
    },
    {
      title: "Profile",
      icon: User,
      href: "/dashboard/profile",
    },
    {
      title: "Favorites",
      icon: Heart,
      href: "/dashboard/favorites",
    },
    {
      title: "Saved Searches",
      icon: Search,
      href: "/dashboard/searches",
    },
    {
      title: "Alerts",
      icon: Bell,
      href: "/dashboard/alerts",
    },
    {
      title: "Messages",
      icon: MessageSquare,
      href: "/dashboard/messages",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
  ]

  return (
    <aside className="w-64 border-r bg-muted/40 hidden md:block">
      <div className="p-6">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}

