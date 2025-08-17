import { ReactNode, useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FolderOpen,
  Building2,
  FileText,
  Settings,
  Users,
  ShieldCheck,
  Search,
  Bell,
  User,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Menu,
  LogOut,
  UserCircle,
  CreditCard,
  Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Files", href: "/files", icon: FolderOpen },
  { name: "Projects", href: "/projects", icon: Building2 },
  { name: "Templates", href: "/templates", icon: FileText },
  { 
    name: "Settings", 
    icon: Settings,
    submenu: [
      { name: "Setup & Information", href: "/settings/setup" },
      { name: "Subscription", href: "/settings/subscription" },
      { name: "Administrator", href: "/settings/administrator" },
    ]
  },
  { name: "Users", href: "/users", icon: Users },
  { name: "Permissions", href: "/permissions", icon: ShieldCheck },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      {/* Sidebar */}
      <div className={cn(
        "bg-sidebar border-r border-sidebar-border transition-all duration-300 flex-shrink-0",
        sidebarCollapsed ? "w-16" : "w-64"
      )}>
        <div className="flex flex-col h-full overflow-hidden">
          {/* Logo */}
          <div className="p-4 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              {!sidebarCollapsed && (
                <span className="text-sidebar-foreground font-semibold text-lg">Arparec</span>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navigation.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setSettingsOpen(!settingsOpen)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                        "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        location.pathname.startsWith("/settings") && "bg-sidebar-accent text-sidebar-accent-foreground"
                      )}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!sidebarCollapsed && (
                        <>
                          <span className="flex-1 text-left">{item.name}</span>
                          {settingsOpen ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </>
                      )}
                    </button>
                    {settingsOpen && !sidebarCollapsed && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className={cn(
                              "block px-3 py-2 text-sm rounded-lg transition-colors",
                              "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                              isActive(subItem.href) && "bg-sidebar-accent text-sidebar-accent-foreground"
                            )}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href!}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                    "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive(item.href!) && "bg-primary text-primary-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  {!sidebarCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>

          {/* Collapse button */}
          <div className="p-4 border-t border-sidebar-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="w-full justify-center text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {sidebarCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search or type command..."
                  className="pl-9 w-80 bg-background"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="default" size="sm" className="bg-primary text-primary-foreground">
                Ask AI
              </Button>
              
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 h-auto p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>EB</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">Emihan Bonzh</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Emihan Bonzh</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        emihan@company.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <UserCircle className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Palette className="mr-2 h-4 w-4" />
                    <span>Theme</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
