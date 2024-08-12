"use client";
import { useEffect } from "react";
import { GridLayoutComponent } from "@/components/grid-layout-component/grid-layout-component";
// import { sql } from "@/db";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import AuthStatus from "@/components/authStatus";

const data = () => {
  try {
    return fetch("http://www.anysolution.org:1027/v2/entities")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to connect to context broker: ${response.status}`
          );
        }
        return response.json();
      })
      .catch((error) => {
        console.error(`Failed to connect to context broker: ${error}`);
        throw new Error(`Failed to connect to context broker: ${error}`);
      });
  } catch (error) {
    console.error(`Failed to connect to context broker: ${error}`);
    throw new Error(`Failed to connect to context broker: ${error}`);
  }
};

export default function Home() {
  return (
    <main>
      <GridLayoutComponent />
    </main>
  );
}
