import { Facebook, Instagram, Linkedin, Locate, Mail, Phone, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[var(--grayish)] text-[var(--pure)] py-[6rem]">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] p-4 mx-auto">
        <div className="brand flex flex-col gap-4">
          <img width={120} src="./logo-reeni.png" alt="" />
          <p>
            The personal portfolio category includes websites or physical
            displays.
          </p>
          <div className="social">
            <div className="socialIcn">
              <h3 className="text-[var(--pure)] mb-4">Connect with me:</h3>
              <ul className="flex gap-[.6rem]">
                <li className="size-[35px] flex items-center justify-center bg-[var(--mid-dark)] rounded-full">
                  <a
                    href="https://facebook.com"
                    className="text-[var(--primary)]"
                  >
                    <Facebook className="h-[16px]" />
                  </a>
                </li>
                <li className="size-[35px] flex items-center justify-center bg-[var(--mid-dark)] rounded-full">
                  <a
                    href="https://twitter.com"
                    className="text-[var(--primary)]"
                  >
                    <Twitter className="h-[16px]" />
                  </a>
                </li>
                <li className="size-[35px] flex items-center justify-center bg-[var(--mid-dark)] rounded-full">
                  <a
                    href="https://instagram.com"
                    className="text-[var(--primary)]"
                  >
                    <Instagram className="h-[16px]" />
                  </a>
                </li>
                <li className="size-[35px] flex items-center justify-center bg-[var(--mid-dark)] rounded-full">
                  <a
                    href="https://linkedin.com"
                    className="text-[var(--primary)]"
                  >
                    <Linkedin className="h-[16px]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="menus">
          <h3 className="text-[var(--primary)] text-2xl font-bold">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#exp">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#expert">Expertise</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="contact">
          <h3 className="text-[var(--primary)] text-2xl font-bold">Contact</h3>
          <div className="contactDetails grid gap-2 mt-[1rem]">
            <div className="mail flex gap-3 items-center">
              <div className="icn border-1 border-[var(--dark)] rounded-full size-[40px] flex justify-center items-center">
                <Mail className="size-[20px] text-[var(--dark)]" />
              </div>
              <div className="info flex flex-col">
                <span className="text-[var(--primary)]">Email</span>
                <span className="text-[var(--pure)]">
                  shahidulshakil@proton.me
                </span>
              </div>
            </div>
            <div className="mail flex gap-3 items-center mt-4">
              <div className="icn border-1 border-[var(--dark)] rounded-full size-[40px] flex justify-center items-center">
                <Locate className="size-[20px] text-[var(--dark)]" />
              </div>
              <div className="info flex flex-col">
                <span className="text-[var(--primary)]">Location</span>
                <span className="text-[var(--pure)]">
                  Uttara, Dhaka, Bangladesh
                </span>
              </div>
            </div>
            <div className="mail flex gap-3 items-center mt-4">
              <div className="icn border-1 border-[var(--dark)] rounded-full size-[40px] flex justify-center items-center">
                <Phone className="size-[20px] text-[var(--dark)]" />
              </div>
              <div className="info flex flex-col">
                <span className="text-[var(--primary)]">Phone</span>
                <span className="text-[var(--pure)]">+880 1879 539832</span>
              </div>
            </div>
          </div>
        </div>


        <div className="newsletter">
          <h3 className="text-[var(--primary)] text-2xl font-bold">
            Newsletter
          </h3>
          <p>Subscribe to our newsletter to get updates on our latest news</p>
          <form action="" className="form grid gap-4 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input p-4 bg-[var(--mid-dark)] border-1 border-[var(--grayish)] rounded-[10px] text-[var(--pure)]"
            />
            <button className="btn bg-[var(--primary)] text-[var(--pure)] p-4 rounded-[10px]">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
