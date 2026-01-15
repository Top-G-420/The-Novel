import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Crown, Pen, Shield, AlertCircle, Check, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth, UserRole, sampleUsers } from "@/contexts/AuthContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const roleOptions: { role: UserRole; label: string; description: string; icon: React.ReactNode }[] = [
  {
    role: "casual",
    label: "Casual Reader",
    description: "Read free articles, react, and follow journalists",
    icon: <User className="w-5 h-5" />,
  },
  {
    role: "premium",
    label: "Premium Subscriber",
    description: "Full access, AI voice reading, ad-light experience",
    icon: <Crown className="w-5 h-5" />,
  },
  {
    role: "journalist_unverified",
    label: "Journalist (Pending)",
    description: "Account awaiting admin verification",
    icon: <AlertCircle className="w-5 h-5" />,
  },
  {
    role: "journalist",
    label: "Verified Journalist",
    description: "Create, edit, and publish articles",
    icon: <Pen className="w-5 h-5" />,
  },
  {
    role: "admin",
    label: "Main Admin",
    description: "Full platform control and management",
    icon: <Shield className="w-5 h-5" />,
  },
];

const AccountModal = ({ isOpen, onClose }: AccountModalProps) => {
  const { user, role, login, logout, isAuthenticated } = useAuth();
  const [selectedRole, setSelectedRole] = useState<UserRole>(role);

  const handleLogin = () => {
    login(selectedRole);
    onClose();
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-novel-dark/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-[10%] md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg bg-card rounded-xl shadow-2xl z-50 max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-serif text-xl font-bold text-foreground">
                {isAuthenticated ? "Account" : "Sign In"}
              </h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {isAuthenticated && user ? (
                <div className="space-y-6">
                  {/* Current User Info */}
                  <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{user.name}</h3>
                        {user.isVerified && (
                          <Check className="w-4 h-4 text-market-up" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded">
                        {roleOptions.find(r => r.role === role)?.label}
                      </span>
                    </div>
                  </div>

                  {/* Switch Account */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Switch to a different role to explore the platform:
                    </p>
                    <div className="space-y-2">
                      {roleOptions.map((option) => (
                        <button
                          key={option.role}
                          onClick={() => login(option.role)}
                          className={`w-full flex items-center gap-4 p-3 rounded-lg border transition-all ${
                            role === option.role
                              ? "border-accent bg-accent/5"
                              : "border-border hover:border-accent/50 hover:bg-secondary"
                          }`}
                        >
                          <div className={`p-2 rounded-full ${role === option.role ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"}`}>
                            {option.icon}
                          </div>
                          <div className="flex-1 text-left">
                            <div className="font-medium text-foreground">{option.label}</div>
                            <div className="text-xs text-muted-foreground">{option.description}</div>
                          </div>
                          {role === option.role && (
                            <Check className="w-5 h-5 text-accent" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Logout */}
                  <Button onClick={handleLogout} variant="outline" className="w-full gap-2">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Choose a role to simulate different user experiences:
                  </p>

                  <div className="space-y-2">
                    {roleOptions.map((option) => {
                      const sampleUser = sampleUsers[option.role];
                      return (
                        <button
                          key={option.role}
                          onClick={() => setSelectedRole(option.role)}
                          className={`w-full flex items-center gap-4 p-4 rounded-lg border transition-all ${
                            selectedRole === option.role
                              ? "border-accent bg-accent/5"
                              : "border-border hover:border-accent/50 hover:bg-secondary"
                          }`}
                        >
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={sampleUser?.avatar} />
                            <AvatarFallback>
                              {option.icon}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 text-left">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground">{option.label}</span>
                              {sampleUser?.name && (
                                <span className="text-xs text-muted-foreground">
                                  ({sampleUser.name})
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-muted-foreground">{option.description}</div>
                          </div>
                          {selectedRole === option.role && (
                            <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                              <Check className="w-3 h-3 text-accent-foreground" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <Button onClick={handleLogin} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Sign In as {roleOptions.find(r => r.role === selectedRole)?.label}
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AccountModal;
