import { Locate, Mail, MoveRight, Phone } from "lucide-react";
import React from "react";

export default function FormSec() {
  const inputStyle =
    "input p-4 bg-[var(--mid-dark)] border-1 border-[var(--grayish)] rounded-[10px] text-[var(--pure)]";
  return (
    <div className="formSec bg-[var(--dark)] py-[6rem]" id="formSec">
      <div className="formSection max-w-[1200px] mx-auto bg-[var(--mid-dark)] p-14 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="textSection">
          <span className="text-[var(--primary)] font-bold text-2xl">
            Contact Me
          </span>
          <h1 className="text-[var(--pure)] my-4 text-4xl">
            Get in Touch With Me
          </h1>
          <p className="text-[var(--pure)] text-[16px] mt-4 max-w-[650px]">
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organ izational Business consulting consultants provide
          </p>
          <div className="contactDetails grid gap-5 mt-[2rem]">
            <div className="mail flex gap-4 items-center">
                <div className="icn border-1 border-[var(--grayish)] rounded-full size-[50px] flex justify-center items-center">
                    <Mail className='text-[var(--grayish)]' />
                </div>
                <div className="info flex flex-col gap-1">
                    <span className="text-[var(--primary)]">Email</span>
                    <span className="text-[var(--pure)]">shahidulshakil@proton.me</span>
                </div>
            </div>
            <div className="mail flex gap-4 items-center mt-4">
                <div className="icn border-1 border-[var(--grayish)] rounded-full size-[50px] flex justify-center items-center">
                    <Locate className='text-[var(--grayish)]' />
                </div>
                <div className="info flex flex-col gap-1">
                    <span className="text-[var(--primary)]">Location</span>
                    <span className="text-[var(--pure)]">Uttara, Dhaka, Bangladesh</span>
                </div>
            </div>
            <div className="mail flex gap-4 items-center mt-4">
                <div className="icn border-1 border-[var(--grayish)] rounded-full size-[50px] flex justify-center items-center">
                    <Phone className='text-[var(--grayish)]' />
                </div>
                <div className="info flex flex-col gap-1">
                    <span className="text-[var(--primary)]">Phone</span>
                    <span className="text-[var(--pure)]">+880 1879 539832</span>
                </div>
            </div>

          </div>
        </div>
        <form action="" className="form grid grid-cols-1 gap-4 mt-8">
          <input type="text" placeholder="Your Name" className={inputStyle} />
          <input type="email" placeholder="Your Email" className={inputStyle} />
          <input type="text" placeholder="Subject" className={inputStyle} />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            className={inputStyle}
          ></textarea>
          <button
            type="submit"
            className="max-w-[250px] justify-center gap-1 flex items-center btn p-4 text-[var(--pure)] bg-[var(--primary)] rounded-full"
          >
            <p>Appointment Now</p>
            <MoveRight />
          </button>
        </form>
      </div>
    </div>
  );
}
