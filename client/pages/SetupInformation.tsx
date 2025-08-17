import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Upload,
  Eye,
  EyeOff
} from "lucide-react";
import { useState } from "react";

export default function SetupInformation() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Setup & Information</h1>
          <p className="text-muted-foreground">Manage your company settings and information</p>
        </div>

        <div className="space-y-8">
          {/* Company Logo Section */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Company Logo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32 border-2 border-dashed border-border rounded-lg flex items-center justify-center bg-muted">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">Drop File Here</p>
                  <p className="text-xs text-muted-foreground">
                    Drag and drop your<br />
                    company logo here to upload
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    *File must not<br />
                    exceed over 2mb
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Browse File
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Company Information Section */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input 
                    id="company-name" 
                    placeholder="ABC Construction" 
                    className="bg-background"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="info@abcconstruction.com" 
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <div className="flex">
                    <select className="bg-background border border-r-0 border-input rounded-l-md px-3 py-2 text-sm">
                      <option>+60</option>
                      <option>+1</option>
                      <option>+44</option>
                      <option>+91</option>
                    </select>
                    <Input 
                      id="phone" 
                      placeholder="943218967" 
                      className="bg-background rounded-l-none border-l-0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password (optional)</Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••" 
                      className="bg-background pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input 
                    id="address" 
                    placeholder="Ashrey Nagar 1st Block 1st Cross, Bannergatta road, Bangalore 560076" 
                    className="bg-background"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Brief description"
                    className="bg-background min-h-[100px]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-8">
                <Button variant="outline">
                  Cancel
                </Button>
                <Button className="bg-primary text-primary-foreground">
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
