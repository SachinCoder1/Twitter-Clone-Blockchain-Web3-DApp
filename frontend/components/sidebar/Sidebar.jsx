import React, { useContext, useState } from "react";
import { navData } from "../../data";
import Logo from "../../subcomponents/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../subcomponents/btns/Button";
import { MainContext } from "../../context/MainContext";

export default function Sidebar() {
  const router = useRouter();
  const {currentAccount, currentUser} = useContext(MainContext)
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
          onClick={() => router.push(`${router.pathname}/?mint=${currentAccount}`)}
          disabled={false}
          fullWidth={true}
        />
      </div>
      <div>
       {currentUser.name}
       {currentAccount.slice(0,6)}...{currentAccount.slice(currentAccount.length-4)};
      </div>
    </div>
  );
}
