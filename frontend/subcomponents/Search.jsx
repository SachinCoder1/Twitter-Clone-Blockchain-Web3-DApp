import React from 'react'
import { BiSearch } from 'react-icons/bi'

export default function Search() {
  return (
<div className="flex items-center border-gray-400 border p-2 rounded-3xl">
      <BiSearch className="text-[#8899a6] mr-2" />
      <input
        placeholder="Search Twitter"
        type="text"
        className="bg-transparent outline-none"
      />
    </div>
  )
}
