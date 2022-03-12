import Head from "next/head";
import Image from "next/image";
import DenseAppBar from "../components/AppBar";
import DropDown from "../components/DropDown";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learning Apolo Client and GraphQL </title>>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <DenseAppBar />
      <DropDown />
    </div>
  );
}
