import React, { useContext, useState } from "react";
import { navData } from "../../data";
import Logo from "../../subcomponents/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../subcomponents/btns/Button";
import { MainContext } from "../../context/MainContext";
import Modal from "react-modal";
import MintProfileImage from "../minting/MintProfileImage";


const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: '#334250a7',
  },
}

export default function Sidebar() {
  const router = useRouter();
  const { currentAccount, currentUser } = useContext(MainContext);
  return (
    <div>
      <Logo />
      <div className="space-y-3 mb-12 pr-16">
        {navData?.map((item, index) => (
          <Link key={index} href={item.link}>
            <a
              className={`text-xl space-x-4 flex items-center hover:bg-gray-200 hover:rounded-full py-3 px-2 ${
                router.pathname == item.link ? "font-bold" : ""
              }`}
            >
              <span>
                {router.pathname == item.link ? item.icon : item.selectedIcon}
              </span>
              <span>{item.name}</span>
            </a>
          </Link>
        ))}
      </div>
      <div>
        <Button
          text="Mint An Image"
          className="rounded-full"
          onClick={() =>
            router.push(`${router.pathname}/?mint=${currentAccount}`)
          }
          disabled={false}
          fullWidth={true}
        />
      </div>
      {/* <div>
       {currentUser.name}
       {currentAccount.slice(0,6)}...{currentAccount.slice(currentAccount.length-4)};
      </div> */}
      <Modal
        isOpen={Boolean(router.query.mint)}
        onRequestClose={() => router.back()}
        style={customStyles}
      >
        <MintProfileImage />
      </Modal>
    </div>
  );
}
