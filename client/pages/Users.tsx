import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Users as UsersIcon
} from "lucide-react";

const users = [
  {
    id: "JS",
    name: "John Smith",
    email: "john.smith@company.com",
    lastLogin: "2 hours ago",
    role: "Admin",
    status: "Active",
    avatar: "/placeholder.svg"
  },
  {
    id: "SJ",
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    lastLogin: "1 day ago",
    role: "Editor",
    status: "Active",
    avatar: "/placeholder.svg"
  },
  {
    id: "MW",
    name: "Mike Wilson",
    email: "mike.wilson@company.com",
    lastLogin: "1 week ago",
    role: "Viewer",
    status: "Inactive",
    avatar: "/placeholder.svg"
  },
  {
    id: "ED",
    name: "Emily Davis",
    email: "emily.davis@company.com",
    lastLogin: "5 hours ago",
    role: "Editor",
    status: "Active",
    avatar: "/placeholder.svg"
  }
];

const userGroups = [
  { name: "Construction Managers", members: 12 },
  { name: "Site Engineers", members: 8 },
  { name: "Project Coordinators", members: 15 },
  { name: "Safety Officers", members: 6 }
];

export default function Users() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Users & Groups</h1>
            <p className="text-muted-foreground">Manage users and user groups</p>
          </div>
          <Button className="bg-primary text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="user-groups">User Groups</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Search users..." className="pl-9 w-80" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <div className="flex items-center gap-4 pb-3 border-b border-border">
                    <div className="flex items-center gap-2">
                      <UsersIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium text-sm">All Users ({users.length})</span>
                    </div>
                  </div>

                  {users.map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-muted rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {user.id}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          <p className="text-xs text-muted-foreground">Last login: {user.lastLogin}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <Badge variant={user.role === 'Admin' ? 'destructive' : user.role === 'Editor' ? 'default' : 'secondary'}>
                          {user.role}
                        </Badge>
                        <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                          {user.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="user-groups" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>User Groups</CardTitle>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Group
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {userGroups.map((group, index) => (
                    <Card key={index} className="bg-background border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium text-foreground">{group.name}</h3>
                            <p className="text-sm text-muted-foreground">{group.members} members</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
