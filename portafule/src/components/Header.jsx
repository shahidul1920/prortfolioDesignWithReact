import React from "react";
import menus from "../utils/menus";
import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Header() {
    console.log(menus);
    
  return (
    <div className="bg-[var(--dark)]">
        <header className="container flex justify-between items-center mx-auto p-4">
            <div className="logo">
                <img src="./logo-reeni.png" alt="" />
            </div>
            <div className="menus">
                <ul className="hidden md:flex gap-[1rem]">
                    {menus.map((menu) =>(
                        <NavLink key={menu.id} to={menu.url} className="text-[var(--pure)]">{menu.name}</NavLink>
                    ))}
                </ul>
            </div>
            <div className="socialIcn">
                <ul className="flex gap-[1rem]">
                    <li className="p-3 bg-[var(--mid-dark)] rounded-full">
                        <a href="https://facebook.com" className="text-[var(--primary)]"><Facebook /></a>
                    </li>
                    <li className="p-3 bg-[var(--mid-dark)] rounded-full">
                        <a href="https://twitter.com" className="text-[var(--primary)]"><Twitter /></a>
                    </li>
                    <li className="p-3 bg-[var(--mid-dark)] rounded-full">
                        <a href="https://instagram.com" className="text-[var(--primary)]"><Instagram /></a>
                    </li>
                    <li className="p-3 bg-[var(--mid-dark)] rounded-full">
                        <a href="https://linkedin.com" className="text-[var(--primary)]"><Linkedin /></a>
                    </li>
                </ul>
            </div>
        </header>

    </div>
  );
}
