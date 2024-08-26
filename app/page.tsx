"use client";
import { GridLayoutComponent } from "@/components/grid-layout-component/grid-layout-component";

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
