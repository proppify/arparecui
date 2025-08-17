import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Check,
  Plus,
  CreditCard,
  Edit
} from "lucide-react";

const planFeatures = [
  "Advanced Permissions",
  "Priority support", 
  "Advanced Analytics",
  "All the Pro",
  "Team collaboration",
  "Priority support"
];

const availablePlans = [
  {
    name: "Basic",
    price: "$9.99",
    period: "per month",
    features: ["Basic features", "5 projects", "Email support"]
  },
  {
    name: "Pro", 
    price: "$19.99",
    period: "per month",
    features: ["All Basic features", "Unlimited projects", "Priority support", "Advanced analytics"]
  },
  {
    name: "Enterprise",
    price: "$49.99", 
    period: "per month",
    features: ["All Pro features", "Custom integrations", "Dedicated support", "SSO"]
  }
];

export default function Subscription() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Package/Subscription</h1>
          </div>
          <Button variant="outline">
            Switch to Annual
          </Button>
        </div>

        {/* Current Plan */}
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">!</span>
              </div>
              <div>
                <h3 className="font-semibold">Current Plan - PRO - Monthly</h3>
                <p className="text-sm text-muted-foreground">$5,499 per month • Next billing on Jan 15, 2025</p>
              </div>
            </div>

            {/* Usage Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">500 GB</h3>
                <p className="text-sm text-muted-foreground mb-4">Storage</p>
                <Progress value={45} className="h-2" />
                <p className="text-xs text-muted-foreground mt-2">225 GB of 500 GB used</p>
                <Badge variant="secondary" className="mt-2">Good</Badge>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">120</h3>
                <p className="text-sm text-muted-foreground mb-4">Active Users</p>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-muted-foreground mt-2">90 out of 120 used</p>
                <Badge variant="secondary" className="mt-2">Good</Badge>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">Unlimited</h3>
                <p className="text-sm text-muted-foreground mb-4">Projects</p>
                <Progress value={30} className="h-2" />
                <p className="text-xs text-muted-foreground mt-2">30 projects created</p>
                <Badge variant="secondary" className="mt-2">Good</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plan Features */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Plan Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {planFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Billing Information */}
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Billing Information</CardTitle>
                <Button variant="outline" size="sm">
                  Change
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                    <span className="text-sm font-medium">Billing Information</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Next billing date: January 15, 2025</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Billing Information</h4>
                  <div className="p-3 border border-border rounded-lg">
                    <p className="text-sm font-medium">123 Business Street, Chennai, Tamil Nadu 612352, India</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Payment Method</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Card
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-6 w-6 text-blue-500" />
                    <div>
                      <p className="text-sm font-medium">•••• •••• •••• 4242</p>
                      <p className="text-xs text-muted-foreground">Expires 12/2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <span className="text-xs text-muted-foreground">Update Payment Method</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available Plans */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Available Plans</CardTitle>
            <CardDescription>Choose a plan that works best for your construction business</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {availablePlans.map((plan, index) => (
                <Card key={index} className="bg-background border-border">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold">{plan.price}</div>
                    <p className="text-sm text-muted-foreground">{plan.period}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={index === 1 ? "default" : "outline"} 
                      className="w-full"
                    >
                      {index === 1 ? "Current Plan" : "Choose Plan"}
                    </Button>
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
