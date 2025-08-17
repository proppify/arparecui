import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Filter, 
  Plus,
  MoreHorizontal,
  Calendar,
  DollarSign,
  TrendingUp,
  Building2,
  Star,
  CheckCircle2
} from "lucide-react";

const projectStats = [
  { label: "Total Projects", value: "5", icon: Building2, color: "text-blue-500" },
  { label: "Active Projects", value: "2", icon: TrendingUp, color: "text-green-500" },
  { label: "Completed", value: "1", icon: CheckCircle2, color: "text-purple-500" },
  { label: "Budget Spent", value: "$80K", icon: DollarSign, color: "text-orange-500" }
];

const projects = [
  {
    title: "Downtown Office Complex",
    description: "15-story mixed-use commercial building with modern amenities and sustainable design",
    status: "In Progress",
    statusColor: "bg-blue-500",
    priority: "High",
    progress: 75,
    startDate: "12/10/2024",
    tasks: "19/24 tasks",
    budget: "$2.5M",
    spent: "$1.8M",
    team: ["JM", "SR", "DL"],
    actions: "View Details"
  },
  {
    title: "Residential Housing Development",
    description: "50-unit residential complex with community amenities and parking facilities",
    status: "Planning",
    statusColor: "bg-orange-500",
    priority: "Medium",
    progress: 10,
    startDate: "15/12/2024",
    tasks: "5/20 tasks",
    budget: "$4.2M",
    spent: "$250K",
    team: ["MW", "KP", "RL"],
    actions: "View Details"
  },
  {
    title: "Highway Bridge Construction",
    description: "Steel and concrete bridge spanning 200m with advanced traffic management systems",
    status: "Completed",
    statusColor: "bg-green-500",
    priority: "High",
    progress: 100,
    startDate: "1/11/2024",
    tasks: "28/28 tasks",
    budget: "$3.8M",
    spent: "$3.7M",
    team: ["TS", "BK", "AM"],
    actions: "View Details"
  },
  {
    title: "Shopping Mall Renovation",
    description: "Complete renovation of existing shopping center with modernized infrastructure",
    status: "On Hold",
    statusColor: "bg-gray-500",
    priority: "Low",
    progress: 25,
    startDate: "",
    tasks: "",
    budget: "",
    spent: "",
    team: [],
    actions: ""
  },
  {
    title: "Industrial Warehouse Complex",
    description: "Large-scale warehouse facility with automated storage and logistics systems",
    status: "In Progress",
    statusColor: "bg-red-500",
    priority: "Critical",
    progress: 60,
    startDate: "",
    tasks: "",
    budget: "",
    spent: "",
    team: [],
    actions: ""
  }
];

export default function Projects() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground">Manage and track all your construction projects</p>
          </div>
          <Button className="bg-primary text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectStats.map((stat, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-background ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects List */}
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search projects..." className="pl-9 w-80" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <Card key={index} className="bg-background border-border">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                            <div className="flex items-center gap-4">
                              <Badge className={`${project.statusColor} text-white`}>
                                {project.status}
                              </Badge>
                              <Badge variant={project.priority === 'High' ? 'destructive' : project.priority === 'Critical' ? 'destructive' : 'secondary'}>
                                {project.priority}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="text-foreground">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        {project.startDate && (
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{project.startDate}</span>
                          </div>
                        )}
                        {project.tasks && (
                          <div className="text-sm">
                            <span className="text-muted-foreground">Tasks: </span>
                            <span className="text-foreground">{project.tasks}</span>
                          </div>
                        )}
                        {project.budget && (
                          <div className="text-sm">
                            <span className="text-muted-foreground">Budget: </span>
                            <span className="text-foreground">{project.budget}</span>
                          </div>
                        )}
                        {project.spent && (
                          <div className="text-sm">
                            <span className="text-muted-foreground">Spent: </span>
                            <span className="text-foreground">{project.spent}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        {project.team.length > 0 && (
                          <div className="flex -space-x-2">
                            {project.team.map((member, i) => (
                              <Avatar key={i} className="h-8 w-8 border-2 border-background">
                                <AvatarFallback className="text-xs">{member}</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          {project.actions && (
                            <Button variant="outline" size="sm">
                              {project.actions}
                            </Button>
                          )}
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
