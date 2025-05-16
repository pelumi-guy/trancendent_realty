// app/(admin)/layout.tsx
'use client';

import React from "react";
import { Refine, AuthProvider } from "@pankod/refine-core";
import { notificationProvider, ReadyPage, ErrorComponent } from "@pankod/refine-mui";
import dataProvider from "@pankod/refine-simple-rest"; // This will now point to your Next.js API routes
import routerProvider from "@pankod/refine-react-router-v6";
import axios from "axios"; // Keep if refine-simple-rest uses it or you need it
import { useSession, signOut, signIn } from 'next-auth/react';

// Import your layout components (Sider, Header, Title)
// These might need some adjustments to work as client components
import { Title, Sider, Layout as AdminLayout, Header } from "@/components/layout/sider";

// Import icons
import { AccountCircleOutlined, ChatBubbleOutline, PeopleAltOutlined, StarOutlineRounded, VillaOutlined, Dashboard } from "@mui/icons-material";

// If axiosInstance is still needed by refine-simple-rest or other parts
const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(async (request: any) => {
  // If you need to inject a token for refine-simple-rest, do it here
  // However, next-auth handles session, so direct token manipulation might not be needed for Refine's dataProvider
  // if it's configured to make relative requests to /api/
  return request;
});

export default function AdminAreaLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  const authProvider: AuthProvider = {
    login: async (params) => {
      // The actual Google Sign-In is handled by NextAuth via /api/auth/signin/google
      // This login might be triggered by Refine if session is lost or for other reasons.
      // You can redirect to NextAuth's Google sign-in page or show a custom modal.
      // For simplicity, we assume NextAuth handles the primary login flow.
      // If Refine requires a specific login action, this might need more complex handling
      // or rely on NextAuth's `signIn` function.
      await signIn('google', { callbackUrl: '/admin/dashboard' }); // Redirect to dashboard after login
      return Promise.resolve();
    },
    logout: async () => {
      await signOut({ redirect: true, callbackUrl: '/login' });
      return Promise.resolve();
    },
    checkError: (error) => {
      if (error && error.statusCode === 401) { // Example error check
        return Promise.reject();
      }
      return Promise.resolve();
    },
    checkAuth: async () => {
      if (status === "loading") {
        return new Promise(() => {}); // Suspend rendering while loading
      }
      if (status === "authenticated") {
        return Promise.resolve();
      }
      return Promise.reject(); // Redirects to login via Refine's catchAll or router
    },
    getPermissions: () => Promise.resolve(session?.user?.isAdmin ? ['admin'] : ['user']), // Example
    getUserIdentity: async () => {
      if (session?.user) {
        return Promise.resolve({
          ...session.user,
          id: (session.user as any).id, // From NextAuth session callback
          avatar: session.user.image || undefined,
        });
      }
      return Promise.reject();
    },
  };

  if (status === 'loading') {
    return <ReadyPage />; // Or a custom loading component
  }

  // The dataProvider URL now points to your Next.js API routes
  // Make sure your API routes under /api/v1/ handle the refine-simple-rest conventions
  const API_URL = "/api/v1"; // Relative path to your Next.js API

  return (
    <Refine
      dataProvider={dataProvider(API_URL, axiosInstance)}
      notificationProvider={notificationProvider}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />} // Or redirect to login page
      resources={[
        { name: "dashboard", list: "/admin/dashboard", meta: { label: "Dashboard", icon: <Dashboard /> } },
        { name: "properties", list: "/admin/properties", create: "/admin/properties/create", edit: "/admin/properties/edit/:id", show: "/admin/properties/show/:id", icon: <VillaOutlined />, },
        { name: "agents", list: "/admin/agents", show: "/admin/agents/show/:id", icon: <PeopleAltOutlined />, },
        // { name: "reviews", list: "/admin/reviews", icon: <StarOutlineRounded />, }, // Adjust routes
        // { name: "messages", list: "/admin/messages", icon: <ChatBubbleOutline />, }, // Adjust routes
        { name: "my-profile", options: { label: "My Profile" }, list: "/admin/my-profile", icon: <AccountCircleOutlined />, meta: { canDelete: false } },
      ]}
      Title={Title}
      Sider={Sider}
      Layout={AdminLayout} // Your Refine Layout component
      Header={Header}     // Your Refine Header component
      routerProvider={routerProvider}
      authProvider={authProvider}
      LoginPage={"/login"} // Redirect to NextAuth handled login if Refine needs to
      DashboardPage={"/admin/dashboard"}
    >
      {children}
    </Refine>
  );
}