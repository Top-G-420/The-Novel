import React, { createContext, useContext, useState, ReactNode } from "react";

export type UserRole = "guest" | "casual" | "premium" | "journalist_unverified" | "journalist" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
  bio?: string;
  joinedAt?: string;
  articlesCount?: number;
  followersCount?: number;
  isVerified?: boolean;
}

export const sampleUsers: Record<UserRole, User | null> = {
  guest: null,
  casual: {
    id: "user-casual-1",
    name: "John Mwangi",
    email: "john.mwangi@email.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    role: "casual",
    joinedAt: "January 2024",
  },
  premium: {
    id: "user-premium-1",
    name: "Jane Wanjiku",
    email: "jane.wanjiku@email.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    role: "premium",
    joinedAt: "March 2023",
  },
  journalist_unverified: {
    id: "journalist-unverified-1",
    name: "Peter Omondi",
    email: "peter.omondi@email.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    role: "journalist_unverified",
    bio: "Aspiring financial journalist with focus on East African markets.",
    joinedAt: "December 2024",
    articlesCount: 0,
    followersCount: 0,
    isVerified: false,
  },
  journalist: {
    id: "journalist-1",
    name: "Sarah Kimani",
    email: "sarah.kimani@thenovel.com",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    role: "journalist",
    bio: "Senior Business Editor at The Novel. Covering Kenyan markets, fintech, and economic policy for over a decade.",
    joinedAt: "June 2020",
    articlesCount: 247,
    followersCount: 12500,
    isVerified: true,
  },
  admin: {
    id: "admin-1",
    name: "Michael Njoroge",
    email: "admin@thenovel.com",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80",
    role: "admin",
    bio: "Platform Administrator",
    joinedAt: "January 2020",
    isVerified: true,
  },
};

interface AuthContextType {
  user: User | null;
  role: UserRole;
  login: (role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isPremium: boolean;
  isJournalist: boolean;
  isVerifiedJournalist: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole>("guest");
  const user = sampleUsers[role];

  const login = (newRole: UserRole) => {
    setRole(newRole);
  };

  const logout = () => {
    setRole("guest");
  };

  const value: AuthContextType = {
    user,
    role,
    login,
    logout,
    isAuthenticated: role !== "guest",
    isPremium: role === "premium" || role === "admin",
    isJournalist: role === "journalist" || role === "journalist_unverified",
    isVerifiedJournalist: role === "journalist",
    isAdmin: role === "admin",
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
