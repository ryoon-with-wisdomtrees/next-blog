import styles from "./homepage.module.css";
import Featured from "@/component/featured/Featured";
import CategoryList from "@/component/categoryList/CategoryList";
import Link from "next/link";
import CardList from "@/component/cardList/CardList";
import Menu from "@/component/Menu/Menu";
import Pagination from "@/component/pagination/Pagination";
// import { currentUser } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        {/* <CardList /> */}
        {/* <Pagination /> */}
        <Menu />
      </div>
    </div>
  );
}
