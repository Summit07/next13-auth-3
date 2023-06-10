"use client";

import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter, redirect } from "next/navigation";

const dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  
  if(!session){
    redirect("/login")
  }

  // useEffect(() => {
  //   if (!session?.user?.email) {
  //     router.push("/login");
  //   }
  // }, [session]);
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <p>Hi {session?.user?.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    </div>
  );
};

export default dashboard;
