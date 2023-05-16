"use client"
import Image from "next/image";
import Banner from "./Banner";
import axios from './apis/Axios';
import requests from './apis/Request';

export default function Home() {
  return (
    <div>
      <Banner />
    </div>
  );
}
