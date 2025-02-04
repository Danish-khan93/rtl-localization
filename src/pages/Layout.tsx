import { Navbar, Footer } from "@/component";
import { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
