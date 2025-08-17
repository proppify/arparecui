import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus,
  Database,
  Globe,
  HardDrive,
  Network,
  Shield,
  Activity,
  Settings,
  Download,
  RefreshCw,
  Wrench,
  BarChart3
} from "lucide-react";

const systemStats = [
  {
    title: "System Statistics",
    stats: [
      { label: "Total Users", value: "1,247" },
      { label: "Active Projects", value: "23" },
      { label: "Storage Used", value: "342 GB" },
      { label: "API Calls Today", value: "45,329" },
      { label: "Last Backup", value: "2 hours ago" }
    ]
  }
];

const quickActions = [
  { label: "Run System Backup", icon: Download },
  { label: "Security Scan", icon: Shield },
  { label: "System Maintenance", icon: Wrench },
  { label: "Generate Report", icon: BarChart3 }
];

const serviceCards = [
  {
    title: "Database",
    subtitle: "PostgreSQL",
    status: "Good",
    statusColor: "bg-green-500",
    icon: Database,
    iconColor: "text-green-500"
  },
  {
    title: "API Services",
    subtitle: "Rest API",
    status: "Good", 
    statusColor: "bg-green-500",
    icon: Globe,
    iconColor: "text-blue-500"
  },
  {
    title: "File Storage",
    subtitle: "S3 Compatible",
    status: "Good",
    statusColor: "bg-green-500", 
    icon: HardDrive,
    iconColor: "text-yellow-500"
  },
  {
    title: "Processing",
    subtitle: "Background Jobs",
    status: "Good",
    statusColor: "bg-green-500",
    icon: Activity,
    iconColor: "text-green-500"
  },
  {
    title: "Network",
    subtitle: "CDN & Security",
    status: "Good",
    statusColor: "bg-green-500",
    icon: Network,
    iconColor: "text-green-500"
  }
];

export default function Administrator() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Administrator</h1>
            <p className="text-muted-foreground">System administration and configuration</p>
          </div>
          <Button className="bg-primary text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" />
            Add Administrator
          </Button>
        </div>

        {/* Service Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {serviceCards.map((service, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  <Badge className={`${service.statusColor} text-white text-xs`}>
                    {service.status}
                  </Badge>
                </div>
                <h3 className="font-semibold text-sm">{service.title}</h3>
                <p className="text-xs text-muted-foreground">{service.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="administrators">Administrators</TabsTrigger>
            <TabsTrigger value="system-settings">System Settings</TabsTrigger>
            <TabsTrigger value="activity-log">Activity Log</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* System Statistics */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>System Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {systemStats[0].stats.map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                        <span className="text-sm font-medium">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {quickActions.map((action, index) => (
                      <Button 
                        key={index}
                        variant="outline" 
                        className="justify-start h-auto p-4"
                      >
                        <action.icon className="h-4 w-4 mr-3" />
                        {action.label}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Activity Overview */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Recent System Activity</CardTitle>
                <CardDescription>Latest system events and maintenance activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">System backup completed successfully</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Security scan initiated</p>
                      <p className="text-xs text-muted-foreground">4 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Database maintenance scheduled</p>
                      <p className="text-xs text-muted-foreground">6 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="administrators">
            <Card className="bg-card border-border">
              <CardContent className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Administrator Management</h3>
                  <p className="text-muted-foreground">Configure administrator accounts and permissions here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system-settings">
            <Card className="bg-card border-border">
              <CardContent className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">System Settings</h3>
                  <p className="text-muted-foreground">Manage system-wide configuration and settings.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity-log">
            <Card className="bg-card border-border">
              <CardContent className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Activity Log</h3>
                  <p className="text-muted-foreground">View detailed system and user activity logs.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
