import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="w-full min-h-[77vh] flex items-center justify-center p-4">
      <h1 className="text-xl md:text-3xl font-bold text-justify">
        Welcome! Go to Cars for Sale Page to Purcahse Cars
      </h1>
    </div>
  );
}
