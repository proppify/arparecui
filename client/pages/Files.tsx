import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Download, 
  Upload, 
  Trash2, 
  FolderOpen,
  File,
  MoreHorizontal,
  ChevronRight
} from "lucide-react";

const folders = [
  { name: "MatTrack", items: "23 items" },
  { name: "MatTrack Employees", items: "" },
  { name: "MatTrack Reports", items: "" },
  { name: "MatTrack Quotations", items: "" },
  { name: "ShopInc", items: "" },
  { name: "Cerra.com", items: "" },
  { name: "SuperMed", items: "" }
];

const files = [
  {
    name: "MatTrack Employees",
    owner: "Jeff Lockman",
    size: "",
    updated: "Jan 4, 2025",
    access: "Private",
    type: "folder"
  },
  {
    name: "MatTrack Reports", 
    owner: "Courtney Jacobs",
    size: "",
    updated: "Jan 4, 2025",
    access: "Private",
    type: "folder"
  },
  {
    name: "MatTrack Quotations",
    owner: "Brandy Towne", 
    size: "",
    updated: "Jan 2, 2025",
    access: "Private",
    type: "folder"
  },
  {
    name: "Dashboard prototype FINAL.fig",
    owner: "Lauren Bren MD",
    size: "",
    updated: "Jan 5, 2025", 
    access: "Private",
    type: "file"
  },
  {
    name: "UX Design Guidelines.docx",
    owner: "Melissa Weber",
    size: "",
    updated: "Jan 5, 2025",
    access: "Private", 
    type: "file"
  },
  {
    name: "Dashboard interaction framex",
    owner: "Tiffany Henderson",
    size: "12 MB",
    updated: "Jan 4, 2025",
    access: "Private",
    type: "file"
  },
  {
    name: "App inspiration.png",
    owner: "Sean Mueller",
    size: "800 KB", 
    updated: "Jan 4, 2025",
    access: "Private",
    type: "file"
  },
  {
    name: "App inspiration.png",
    owner: "Janet Satterfield",
    size: "800 KB",
    updated: "Jan 4, 2025", 
    access: "Private",
    type: "file"
  }
];

export default function Files() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Files</h1>
            <p className="text-muted-foreground">Manage and track all your project files</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Organization Drive Sidebar */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-sm">Organization Drive</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {folders.map((folder, index) => (
                <div key={index} className="flex items-center gap-2 p-2 rounded hover:bg-accent cursor-pointer">
                  <FolderOpen className="h-4 w-4 text-blue-500" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{folder.name}</p>
                    {folder.items && (
                      <p className="text-xs text-muted-foreground">{folder.items}</p>
                    )}
                  </div>
                  <ChevronRight className="h-3 w-3 text-muted-foreground" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Files List */}
          <div className="lg:col-span-3 space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>MatTrack • 23 items</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download all
                    </Button>
                    <Button variant="outline" size="sm">
                      Create folder
                    </Button>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search" className="pl-9" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="grid grid-cols-5 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
                    <div>File name</div>
                    <div>Owner</div>
                    <div>File size</div>
                    <div>Last updated</div>
                    <div>Access</div>
                  </div>
                  
                  {files.map((file, index) => (
                    <div key={index} className="grid grid-cols-5 gap-4 text-sm py-3 border-b border-border last:border-0 hover:bg-accent rounded">
                      <div className="flex items-center gap-2">
                        {file.type === 'folder' ? (
                          <FolderOpen className="h-4 w-4 text-orange-500" />
                        ) : (
                          <File className="h-4 w-4 text-blue-500" />
                        )}
                        <span className="text-foreground">{file.name}</span>
                      </div>
                      <div className="text-muted-foreground">{file.owner}</div>
                      <div className="text-muted-foreground">{file.size}</div>
                      <div className="text-muted-foreground">{file.updated}</div>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{file.access}</Badge>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
