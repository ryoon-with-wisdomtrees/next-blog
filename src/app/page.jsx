import styles from "./homepage.module.css";
import Featured from "@/component/featured/Featured";
import CategoryList from "@/component/categoryList/CategoryList";
import Link from "next/link";
import CardList from "@/component/cardList/CardList";
import Menue from "@/component/Menue/Menue";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menue />
      </div>
    </div>
  );
}
