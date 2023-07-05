'use client'
import { DASHBOARD_ROUTE } from "@/constants/routes";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default async function Home() {
  redirect(DASHBOARD_ROUTE);
  return <main className={styles.main}></main>;
}
