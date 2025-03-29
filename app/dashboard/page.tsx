import Link from "next/link"
import { Building, ChevronRight, Home, LogOut, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import UserDashboardSidebar from "@/components/user-dashboard-sidebar"
import UserFavoriteProperties from "@/components/user-favorite-properties"
import UserRecentSearches from "@/components/user-recent-searches"

export default function UserDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <Building className="h-6 w-6" />
              <span>EstateHub</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/properties" className="text-sm font-medium transition-colors hover:text-primary">
                Buy
              </Link>
              <Link href="/properties?type=rent" className="text-sm font-medium transition-colors hover:text-primary">
                Rent
              </Link>
              <Link href="/sell" className="text-sm font-medium transition-colors hover:text-primary">
                Sell
              </Link>
              <Link href="/agents" className="text-sm font-medium transition-colors hover:text-primary">
                Agents
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard/settings">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/logout">
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Log out</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link href="/dashboard/profile">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <UserDashboardSidebar />
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, John Doe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-primary/10 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Saved Properties</h3>
                <Home className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-bold">12</p>
              <Link href="/dashboard/favorites" className="text-sm text-primary flex items-center mt-2 hover:underline">
                View all <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-primary/10 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Saved Searches</h3>
                <Settings className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-bold">5</p>
              <Link href="/dashboard/searches" className="text-sm text-primary flex items-center mt-2 hover:underline">
                View all <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-primary/10 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Property Alerts</h3>
                <Settings className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-bold">3</p>
              <Link href="/dashboard/alerts" className="text-sm text-primary flex items-center mt-2 hover:underline">
                View all <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Favorite Properties</h2>
              <Link href="/dashboard/favorites" className="text-sm text-primary hover:underline">
                View all
              </Link>
            </div>
            <UserFavoriteProperties />
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Recent Searches</h2>
              <Link href="/dashboard/searches" className="text-sm text-primary hover:underline">
                View all
              </Link>
            </div>
            <UserRecentSearches />
          </div>
        </main>
      </div>
    </div>
  )
}

