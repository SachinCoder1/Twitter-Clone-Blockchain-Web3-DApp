import React, { useState } from "react";
import { navData } from "../../data";
import Logo from "../../subcomponents/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../subcomponents/btns/Button";

export default function Sidebar() {
  const router = useRouter();
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
          text="Tweet"
          className="rounded-full"
          // onClick={}
          disabled={false}
          fullWidth={true}
        />
      </div>
    </div>
  );
}