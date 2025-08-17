import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
  Plus,
  Shield,
  Edit,
  Eye,
  Check,
  X
} from "lucide-react";

const roles = [
  {
    name: "Super Admin",
    users: "2 users",
    description: "Full system access with all permissions",
    permissions: {
      users: { read: true, write: true, delete: true },
      projects: { read: true, write: true, delete: true },
      templates: { read: true, write: true, delete: true },
      settings: { read: true, write: true, delete: true },
      billing: { read: true, write: true, delete: true }
    },
    color: "bg-red-100 text-red-800"
  },
  {
    name: "Admin",
    users: "5 users",
    description: "Administrative access with most permissions",
    permissions: {
      users: { read: true, write: true, delete: false },
      projects: { read: true, write: true, delete: true },
      templates: { read: true, write: true, delete: true },
      settings: { read: true, write: true, delete: false },
      billing: { read: true, write: false, delete: false }
    },
    color: "bg-orange-100 text-orange-800"
  },
  {
    name: "Project Manager",
    users: "8 users",
    description: "Manage projects and team members",
    permissions: {
      users: { read: true, write: false, delete: false },
      projects: { read: true, write: true, delete: true },
      templates: { read: true, write: true, delete: false },
      settings: { read: true, write: false, delete: false },
      billing: { read: false, write: false, delete: false }
    },
    color: "bg-blue-100 text-blue-800"
  },
  {
    name: "Editor",
    users: "12 users",
    description: "Create and edit content",
    permissions: {
      users: { read: false, write: false, delete: false },
      projects: { read: true, write: true, delete: false },
      templates: { read: true, write: true, delete: false },
      settings: { read: false, write: false, delete: false },
      billing: { read: false, write: false, delete: false }
    },
    color: "bg-green-100 text-green-800"
  },
  {
    name: "Viewer",
    users: "23 users",
    description: "Read-only access to content",
    permissions: {
      users: { read: false, write: false, delete: false },
      projects: { read: true, write: false, delete: false },
      templates: { read: true, write: false, delete: false },
      settings: { read: false, write: false, delete: false },
      billing: { read: false, write: false, delete: false }
    },
    color: "bg-gray-100 text-gray-800"
  }
];

const permissionCategories = ["Users", "Projects", "Templates", "Settings", "Billing"];

export default function Permissions() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Permissions</h1>
            <p className="text-muted-foreground">Manage roles and permissions for users</p>
          </div>
          <Button className="bg-primary text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" />
            Create Role
          </Button>
        </div>

        <Tabs defaultValue="roles" className="space-y-6">
          <TabsList>
            <TabsTrigger value="roles">Roles</TabsTrigger>
            <TabsTrigger value="user-permissions">User Permissions</TabsTrigger>
            <TabsTrigger value="permission-matrix">Permission Matrix</TabsTrigger>
          </TabsList>

          <TabsContent value="roles" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {roles.map((role, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge className={role.color}>{role.name}</Badge>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardTitle className="text-lg">{role.users}</CardTitle>
                    <CardDescription className="text-sm">{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">PERMISSIONS OVERVIEW</h4>
                      {permissionCategories.map((category) => {
                        const categoryKey = category.toLowerCase() as keyof typeof role.permissions;
                        const perms = role.permissions[categoryKey];
                        const hasAnyPermission = perms && (perms.read || perms.write || perms.delete);

                        return (
                          <div key={category} className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{category}</span>
                            <div className="flex items-center gap-1">
                              {perms?.read && <Check className="h-3 w-3 text-green-500" />}
                              {perms?.write && <Edit className="h-3 w-3 text-blue-500" />}
                              {perms?.delete && <X className="h-3 w-3 text-red-500" />}
                              {!hasAnyPermission && <span className="text-xs text-muted-foreground">-</span>}
                            </div>
                          </div>
                        );
                      })}

                      <div className="flex gap-2 pt-3">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="user-permissions" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>User Permissions</CardTitle>
                <CardDescription>Manage individual user permissions and role assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">User Permission Management</h3>
                  <p className="text-muted-foreground mb-4">View and modify permissions for individual users</p>
                  <Button variant="outline">
                    Manage User Permissions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="permission-matrix" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Permission Matrix</CardTitle>
                <CardDescription>Overview of all roles and their permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-medium">Role</th>
                        {permissionCategories.map((category) => (
                          <th key={category} className="text-center p-3 font-medium">{category}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {roles.map((role, index) => (
                        <tr key={index} className="border-b border-border hover:bg-muted">
                          <td className="p-3">
                            <Badge className={role.color}>{role.name}</Badge>
                          </td>
                          {permissionCategories.map((category) => {
                            const categoryKey = category.toLowerCase() as keyof typeof role.permissions;
                            const perms = role.permissions[categoryKey];

                            return (
                              <td key={category} className="p-3 text-center">
                                <div className="flex items-center justify-center gap-1">
                                  {perms?.read && <Check className="h-3 w-3 text-green-500" title="Read" />}
                                  {perms?.write && <Edit className="h-3 w-3 text-blue-500" title="Write" />}
                                  {perms?.delete && <X className="h-3 w-3 text-red-500" title="Delete" />}
                                  {!perms?.read && !perms?.write && !perms?.delete && (
                                    <span className="text-muted-foreground">-</span>
                                  )}
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
