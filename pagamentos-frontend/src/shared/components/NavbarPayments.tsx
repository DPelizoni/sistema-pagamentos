import { Container, Navbar } from "react-bootstrap";
import PaymentIcon from "@mui/icons-material/Payment";

export default function NavbarPayments() {
  return (
    <>
      <Navbar fixed="top" bg="primary" data-bs-theme="dark">
        <Container className="d-flex align-items-start">
          <Navbar.Brand href="/">
            <PaymentIcon fontSize="large" />
            Sistema de Pagamentos
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
