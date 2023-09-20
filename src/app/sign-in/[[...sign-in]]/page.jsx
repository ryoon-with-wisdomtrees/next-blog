import { SignIn } from "@clerk/nextjs";
import styles from "./loginPage.module.css";
export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <SignIn />
      </div>
    </div>
  );
}
