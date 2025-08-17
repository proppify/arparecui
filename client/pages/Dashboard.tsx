import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  Building2, 
  FileText, 
  Calendar,
  MoreHorizontal,
  ExternalLink,
  File
} from "lucide-react";

const stats = [
  {
    title: "Projects",
    value: "3,782",
    change: "+10%",
    changeType: "positive",
    period: "vs last month",
    icon: Building2,
    color: "text-blue-500"
  },
  {
    title: "User Groups",
    value: "20",
    change: "+5%",
    changeType: "positive", 
    period: "vs last month",
    icon: Users,
    color: "text-green-500"
  },
  {
    title: "Projects",
    value: "15",
    change: "+8%",
    changeType: "positive",
    period: "vs last month", 
    icon: Building2,
    color: "text-purple-500"
  },
  {
    title: "Templates",
    value: "35",
    change: "+15%",
    changeType: "positive",
    period: "vs last month",
    icon: FileText,
    color: "text-orange-500"
  }
];

const chartData = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 300 },
  { month: "Mar", value: 600 },
  { month: "Apr", value: 400 },
  { month: "May", value: 700 },
  { month: "Jun", value: 500 },
  { month: "Jul", value: 800 },
  { month: "Aug", value: 600 },
  { month: "Sep", value: 900 },
  { month: "Oct", value: 700 },
  { month: "Nov", value: 1000 },
  { month: "Dec", value: 800 }
];

const activities = [
  {
    id: 1,
    type: "New Colleague onboarded",
    user: "A",
    description: "Good idea about that City collaborate",
    time: "5:07 PM",
    bgColor: "bg-blue-500"
  },
  {
    id: 2,  
    type: "New Project",
    user: "M",
    description: "We have a new project that fits Lets work together",
    time: "5:07 PM",
    bgColor: "bg-purple-500"
  },
  {
    id: 3,
    type: "New Folder Created", 
    user: "B",
    description: "We have a new project that fits Lets work together",
    time: "1:15 PM",
    bgColor: "bg-green-500"
  }
];

const recentFiles = [
  {
    name: "Project Proposal.pdf",
    size: "2.5 MB",
    modified: "2 hours ago",
    icon: File
  },
  {
    name: "Project Proposal.pdf", 
    size: "2.5 MB",
    modified: "2 hours ago",
    icon: File
  },
  {
    name: "Project Proposal.pdf",
    size: "2.5 MB", 
    modified: "2 hours ago",
    icon: File
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <span className={`text-sm ${stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">{stat.period}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-background ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Statistics Chart */}
        <Card className="lg:col-span-2 bg-card border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-foreground">Statistics</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Target you've set for each month
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="default" size="sm">1 Month</Button>
                <Button variant="outline" size="sm">6 Days</Button>
                <Button variant="outline" size="sm">7 Days</Button>
                <Button variant="outline" size="sm">15 Feb - 15 March</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-end justify-between gap-2 px-4 py-8">
              {chartData.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div 
                    className="w-8 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                    style={{ height: `${(item.value / 1000) * 200}px` }}
                  />
                  <span className="text-xs text-muted-foreground">{item.month}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-muted-foreground">May 16, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-muted-foreground">Commission 15%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                <span className="text-muted-foreground">Best 3</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded"></div>
                <span className="text-muted-foreground">Projects 3</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Storage */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Storage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50" 
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-muted"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40" 
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${70 * 2.51} ${100 * 2.51}`}
                    className="text-blue-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">70%</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">150 GB of 200 GB used</p>
              <p className="text-xs text-muted-foreground mt-1">200 MB remaining</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activities */}
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-foreground">Activities</CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">
                View All <ExternalLink className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full ${activity.bgColor} flex items-center justify-center text-white text-sm font-medium`}>
                  {activity.user}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{activity.type}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Files */}
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-foreground">Recent Files</CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">
                View All <ExternalLink className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentFiles.map((file, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                  <File className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.size} • {file.modified}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
