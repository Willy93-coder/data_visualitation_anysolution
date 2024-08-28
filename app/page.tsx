"use client";
import IconButtonComponent from "@/components/buttons-components/icon-button-component";
import { GridLayoutComponent } from "@/components/grid-layout-component/grid-layout-component";
import { Modal } from "@/components/modal/modal";
import { CREATE_CHART } from "@/lib/utils";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { chartConfig } from "@/lib/utils";

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
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  // const xs = await sql`SELECT * FROM example`;
  // console.log(xs);
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
    <main className="p-2">
      <IconButtonComponent icon={PlusIcon} onClick={handleOpenModal} />
      <GridLayoutComponent chart={chartConfig} />
      <Modal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
        cancelColorBtn="transparent"
        title={CREATE_CHART}
      />
    </main>
  );
}
