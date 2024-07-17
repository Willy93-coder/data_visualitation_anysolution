"use client";

import { useEffect } from "react";
import { GridLayoutComponent } from "@/components/grid-layout-component/grid-layout-component";

const data = async () => {
  try {
    const response = await fetch("http://www.anysolution.org:1027/v2/entities");

    if (!response.ok) {
      throw new Error(
        `Failed to connect to context broker: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to connect to context broker: ${error}`);
    throw new Error(`Failed to connect to context broker: ${error}`);
  }
};

export default function Home() {
  // Peticion a la API de queries que traera los datos estaticos
  // useEffect(() => {
  //   data().then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  // Peticion al webhook que traera los datos en tiempo real
  // useEffect(() => {
  //   data().then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  return (
    <main>
      <GridLayoutComponent />
    </main>
  );
}
