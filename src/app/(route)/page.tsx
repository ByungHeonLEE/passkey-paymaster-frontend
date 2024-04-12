"use client";
import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface } from "flowbite";
import { Alert } from "flowbite-react";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <div>
      <Alert color="info">Alert!</Alert>
      <Button>Click me</Button>
    </div>
  );
}
