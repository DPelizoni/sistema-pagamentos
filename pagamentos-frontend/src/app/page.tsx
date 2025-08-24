"use client";

import Link from "next/link";
import { ButtonGroup } from "react-bootstrap";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import PaymentIcon from "@mui/icons-material/Payment";
import ImageSistem from "@/shared/components/ImageHome";

export default function Home() {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <ButtonGroup className="d-flex gap-2" size="lg">
          <Link href={`/payments/create`} className="btn btn-success">
            <AddBoxOutlinedIcon /> Cadastrar
          </Link>

          <Link href={`/payments`} className="btn btn-primary">
            <PaymentIcon /> Listagem
          </Link>
        </ButtonGroup>
      </div>

      <ImageSistem />
    </div>
  );
}
