import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Users, FileText, DollarSign, Eye, Check, X, AlertCircle, Settings, BarChart3 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

const stats = [
  { label: "Total Users", value: "24,521", icon: Users, change: "+12%" },
  { label: "Articles", value: "1,847", icon: FileText, change: "+8%" },
  { label: "Revenue", value: "$45.2K", icon: DollarSign, change: "+23%" },
  { label: "Page Views", value: "1.2M", icon: Eye, change: "+18%" },
];

const pendingJournalists = [
  { id: 1, name: "Peter Omondi", email: "peter@email.com", applied: "2 days ago" },
  { id: 2, name: "Alice Njeri", email: "alice@email.com", applied: "3 days ago" },
];

const recentArticles = [
  { id: 1, title: "Kenya's Tech Sector Investment", author: "Sarah Kimani", status: "published" },
  { id: 2, title: "CBK Rate Decision", author: "David Kamau", status: "review" },
  { id: 3, title: "Market Analysis Report", author: "Grace Wanjiku", status: "draft" },
];

const ads = [
  { id: 1, name: "Homepage Banner", position: "homepage", status: "active", revenue: "$1,200" },
  { id: 2, name: "Sidebar Ad", position: "sidebar", status: "active", revenue: "$800" },
  { id: 3, name: "In-Article Ad", position: "in-article", status: "paused", revenue: "$450" },
];

const AdminDashboard = () => {
  const { isAdmin } = useAuth();
  
  if (!isAdmin) return <Navigate to="/" replace />;

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your platform</p>
          </div>
          <Button variant="outline" className="gap-2"><Settings className="w-4 h-4" />Settings</Button>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <stat.icon className="w-8 h-8 text-accent" />
                  <span className="text-sm text-market-up">{stat.change}</span>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="journalists" className="space-y-6">
          <TabsList>
            <TabsTrigger value="journalists">Journalist Approvals</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="ads">Ad Management</TabsTrigger>
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          </TabsList>

          <TabsContent value="journalists">
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><AlertCircle className="w-5 h-5 text-novel-gold" />Pending Approvals</CardTitle></CardHeader>
              <CardContent>
                {pendingJournalists.map((j) => (
                  <div key={j.id} className="flex items-center justify-between py-4 border-b last:border-0">
                    <div>
                      <div className="font-medium">{j.name}</div>
                      <div className="text-sm text-muted-foreground">{j.email} • Applied {j.applied}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-market-up hover:bg-market-up/90"><Check className="w-4 h-4" /></Button>
                      <Button size="sm" variant="destructive"><X className="w-4 h-4" /></Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader><CardTitle>Recent Articles</CardTitle></CardHeader>
              <CardContent>
                {recentArticles.map((a) => (
                  <div key={a.id} className="flex items-center justify-between py-4 border-b last:border-0">
                    <div>
                      <div className="font-medium">{a.title}</div>
                      <div className="text-sm text-muted-foreground">By {a.author}</div>
                    </div>
                    <Badge variant={a.status === "published" ? "default" : "secondary"}>{a.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ads">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Ad Slots</CardTitle>
                <Button size="sm">Add New Ad</Button>
              </CardHeader>
              <CardContent>
                {ads.map((ad) => (
                  <div key={ad.id} className="flex items-center justify-between py-4 border-b last:border-0">
                    <div>
                      <div className="font-medium">{ad.name}</div>
                      <div className="text-sm text-muted-foreground">{ad.position} • {ad.revenue}/mo</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={ad.status === "active" ? "default" : "secondary"}>{ad.status}</Badge>
                      <Button size="sm" variant="outline">Edit</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscriptions">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-secondary rounded-lg">
                    <div className="text-3xl font-bold">1,247</div>
                    <div className="text-muted-foreground">Active Subscribers</div>
                  </div>
                  <div className="text-center p-6 bg-secondary rounded-lg">
                    <div className="text-3xl font-bold">$12,450</div>
                    <div className="text-muted-foreground">Monthly Revenue</div>
                  </div>
                  <div className="text-center p-6 bg-secondary rounded-lg">
                    <div className="text-3xl font-bold">4.2%</div>
                    <div className="text-muted-foreground">Churn Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
