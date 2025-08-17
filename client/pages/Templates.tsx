import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  Plus,
  Eye,
  Download,
  Edit,
  Star,
  FileText,
  Users,
  DollarSign,
  BarChart3,
  FolderOpen
} from "lucide-react";

const templateStats = [
  { label: "Total Templates", value: "6", icon: FileText, color: "text-blue-500" },
  { label: "Published", value: "5", icon: BarChart3, color: "text-orange-500" }
  
];

const categories = [
  "All",
  "Project Management", 
  "Documentation",
  "Finance",
  "HR",
  "Marketing",
  "Risk Management"
];

const templates = [
  {
    title: "Residential Building Project",
    category: "Project Management",
    description: "Complete folder structure for residential construction projects including permits, plans, inspections, and documentation",
    status: "Published",
    statusColor: "bg-green-500",
    author: "Sarah Johnson",
    modified: "3 days ago",
    folders: ["01-Planning", "02-Permits", "03-Design", "04-Construction", "05-Inspections", "06-Documentation"]
  },
  {
    title: "Commercial Office Building",
    category: "Project Management",
    description: "Comprehensive folder structure for commercial construction with safety compliance and contractor management",
    status: "Published",
    statusColor: "bg-green-500",
    author: "Mike Wilson",
    modified: "1 week ago",
    folders: ["01-Project-Setup", "02-Legal-Documents", "03-Design-Plans", "04-Contractor-Management", "05-Safety-Compliance", "06-Progress-Reports"]
  },
  {
    title: "Infrastructure Development",
    category: "Project Management",
    description: "Specialized folder structure for infrastructure projects including environmental assessments and public documentation",
    status: "Draft",
    statusColor: "bg-gray-500",
    author: "Emily Davis",
    modified: "4 days ago",
    folders: ["01-Environmental-Assessment", "02-Public-Documents", "03-Engineering-Plans", "04-Construction-Phases", "05-Quality-Control"]
  },
  {
    title: "Renovation Project Template",
    category: "Quality Control",
    description: "Folder structure template for renovation projects with before/after documentation and historical preservation",
    status: "Published",
    statusColor: "bg-green-500",
    author: "John Smith",
    modified: "2 weeks ago",
    folders: ["01-Assessment", "02-Historical-Documents", "03-Renovation-Plans", "04-Progress-Photos", "05-Final-Documentation"]
  },
  {
    title: "Multi-Phase Construction",
    category: "Documentation",
    description: "Template for large multi-phase construction projects with phase-specific folder organization",
    status: "Published",
    statusColor: "bg-green-500",
    author: "Lisa Anderson",
    modified: "5 days ago",
    folders: ["Phase-1-Foundation", "Phase-2-Structure", "Phase-3-MEP", "Phase-4-Finishes", "Phase-5-Handover"]
  },
  {
    title: "Safety-First Construction",
    category: "Risk Management",
    description: "Template emphasizing safety documentation and compliance folder structure for high-risk construction projects",
    status: "Published",
    statusColor: "bg-green-500",
    author: "David Miller",
    modified: "1 week ago",
    folders: ["01-Safety-Plans", "02-Risk-Assessments", "03-Training-Records", "04-Incident-Reports", "05-Compliance-Documents"]
  }
];

export default function Templates() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Templates</h1>
            <p className="text-muted-foreground">Create, manage, and share project folder structure templates</p>
          </div>
          <Button className="bg-primary text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" />
            Create Template
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templateStats.map((stat, index) => (
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

        {/* Filters and Search */}
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search templates..." className="pl-9 w-80" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template, index) => (
                <Card key={index} className="bg-background border-border hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <FileText className="h-8 w-8 text-blue-500 mb-2" />
                      <Badge className={`${template.statusColor} text-white`}>
                        {template.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{template.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {template.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{template.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <p>Author: {template.author}</p>
                      <p>Last modified: {template.modified}</p>
                    </div>

                    {(template as any).folders && (
                      <div className="text-xs">
                        <p className="font-medium text-foreground mb-2">Folder Structure:</p>
                        <div className="space-y-1 max-h-20 overflow-y-auto">
                          {(template as any).folders.slice(0, 3).map((folder: string, i: number) => (
                            <div key={i} className="flex items-center gap-1 text-muted-foreground">
                              <FolderOpen className="h-3 w-3" />
                              <span>{folder}</span>
                            </div>
                          ))}
                          {(template as any).folders.length > 3 && (
                            <p className="text-muted-foreground">+{(template as any).folders.length - 3} more folders</p>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                      <Button variant="default" size="sm" className="flex-1">
                        Use Template
                      </Button>
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
