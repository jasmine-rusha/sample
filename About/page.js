"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // ✅ Import Link
import Menu from "../Component/Menu";

const images = [
  "/Images/9.jpeg",
  "/Images/10.jpg",
  "/Images/12.jpeg",
  "/Images/11.jpg",
  "/Images/12.webp",
  "/Images/13.jpeg",
  "/Images/14.jpeg",
];

// 🔥 Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Delay between each letter
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const title = "ABOUT US"; // Text to animate

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between relative">
      {/* ✅ Logo at Top Center with Link to Home */}
      <div className="pt-6">
        <Link href="/">
          <Image
            src="/Images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain cursor-pointer"
            style={{ marginLeft: "850px" }}
          />
        </Link>
      </div>

      {/* Title Animated Letter by Letter */}
      <motion.h1
        className="absolute top-1/2 left-1/2 font-bold text-center -translate-x-1/2 -translate-y-1/2 flex gap-4"
        style={{
          color: "white",
          fontSize: "200px",
          lineHeight: "1",
          marginLeft: "400px",
          marginTop: "100px",
        }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {title.split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Right Side Text */}
      <div
        className="absolute top-1/3 right-12 text-gray-300 max-w-xs text-left"
        style={{ marginLeft: "1300px", color: "white", fontSize: "20px" }}
      >
        <p>
          The forefront of innovation <br />
          &gt; Seamlessly blending creativity <br />
          with technology to deliver <br />
          stunning visual experiences.
        </p>
      </div>

      {/* 🔥 Image Row Auto Slide */}
      <div className="w-full overflow-hidden mt-[400px]">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`slide-${i}`}
              width={250}
              height={250}
              className="rounded-lg"
              style={{ marginTop: "100px" }}
            />
          ))}
        </motion.div>
      </div>

      {/* 🔽 New Section */}
      <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-12 mt-40">
        {/* Left Big Text */}
        <div className="text-left max-w-2xl mt-12 md:mt-0">
          <h2
            className="text-6xl font-light leading-snug text-white"
            style={{ color: "white", fontSize: "70px", marginTop: "100px" }}
          >
            Design is at the <br />
            <span className="font-normal">Heart of</span> <br />
            <span className="text-gray-400">Everything We Create.</span>
          </h2>
        </div>

        {/* Right Globe Image + Description */}
        <div className="flex flex-col items-center max-w-md mt-12 md:mt-0">
          <Image
            src="/Images/13.webp"
            alt="Design Globe"
            width={300}
            height={300}
            className="object-contain"
            style={{ marginLeft: "1200px", borderRadius: "500px" }}
          />
          <p
            className="text-gray-300 text-sm mt-6 text-center"
            style={{ color: "white", fontSize: "15px", marginLeft: "1200px" }}
          >
            Specializing in cutting-edge digital solutions, our team <br />
            fuses technology and creativity to deliver visionary <br />
            results that stand at the forefront of design.
          </p>
        </div>
      </section>

      <Menu />
    </div>
  );
}
