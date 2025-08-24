"use client";

import { Image } from "react-bootstrap";

export default function ImageSistem() {
  return (
    <Image
      src="/payment.avif"
      alt="Imagem de sistema de pagamentos"
      fluid
      className="rounded mx-auto d-block"
      style={{ height: "80vh", objectFit: "cover" }}
    />
  );
}