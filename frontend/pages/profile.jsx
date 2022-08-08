import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import Widget from "../components/widgets/Widget";
import Button from "../subcomponents/btns/Button";
import Loading from "../subcomponents/loading/Loading";
import { MainContext } from "../context/MainContext";
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import OwnerProfile from "../components/main/OwnerProfile";

const Profile = () => {

  return (
   <MainLayout>
     <OwnerProfile />
   </MainLayout>
  );
};

export default Profile;
