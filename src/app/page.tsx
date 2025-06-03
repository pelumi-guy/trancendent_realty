import Image from "next/image";
import styles from "./page.module.css";
import SearchForYourDreamHome from "@/components/user/landing/SearchForYourDreamHome";

export default function Home() {
  return (
    <main>
      <SearchForYourDreamHome />
    </main>
  );
}