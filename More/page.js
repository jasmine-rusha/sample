"use client";
import { useState } from "react";
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
    transition: { staggerChildren: 0.2 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const title = "ABOUT US";

  const awards = [
    { year: "2022", project: "Entity", award: "Webby Winner", org: "Webby Awards" },
    { year: "2023", project: "Cube", award: "Site Of The Day", org: "Awwwards" },
    { year: "2024", project: "Imagine", award: "Best UI Design", org: "CSS Design Awards" },
    { year: "2024", project: "Concept", award: "Developer Award", org: "Awwwards" },
    { year: "2025", project: "Visual", award: "Site Of The Day", org: "FWA" },
  ];

  // ✅ Track selected row
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between relative">
      {/* ✅ Logo at Top Center */}
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

      {/* Title Animated */}
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

      {/* 🔥 Auto Sliding Images */}
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

      {/* 🔽 Design Section */}
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

      {/* 🔽 Our Team Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white mt-40 relative">
        <h1
          className="text-6xl font-bold text-center"
          style={{
            color: "white",
            marginTop: "100px",
            fontSize: "100px",
            marginLeft: "600px",
          }}
        >
          Our Team
        </h1>
        <p
          className="text-gray-400 text-center mt-4 max-w-lg"
          style={{ color: "white", marginLeft: "500px" }}
        >
          Our team of talented designers and developers bring expertise
          and creativity to every project.
        </p>

        {/* Cross Layout Container */}
        <div
          className="relative w-full h-[900px] mt-20"
          style={{ marginTop: "200px", color: "white" }}
        >
          {/* John White - Top Left */}
          <div
            className="absolute top-0 left-[20%] group"
            style={{ marginLeft: "300px" }}
          >
            <Image
              src="/Images/dev1.webp"
              alt="John White"
              width={300}
              height={400}
              className="rounded-xl shadow-lg transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500"
            />
            <div className="mt-4 text-left">
              <p className="text-gray-400 uppercase text-sm">CEO</p>
              <h3 className="text-3xl font-semibold">John White</h3>
              <p className="text-gray-300 text-sm">john@agency.com</p>
            </div>
          </div>

          {/* Tina Wright - Center */}
          <div
            className="absolute top-[35%] left-[40%] group"
            style={{ color: "white", marginLeft: "500px" }}
          >
            <Image
              src="/Images/dev2.webp"
              alt="Tina Wright"
              width={320}
              height={420}
              className="rounded-xl shadow-lg transform rotate-[5deg] group-hover:rotate-0 transition-transform duration-500"
            />
            <div className="mt-4 text-left">
              <p className="text-gray-400 uppercase text-sm">Developer</p>
              <h3 className="text-3xl font-semibold">Tina Wright</h3>
              <p className="text-gray-300 text-sm">tina@agency.com</p>
            </div>
          </div>

          {/* Nick Smith - Bottom Right */}
          <div
            className="absolute bottom-0 right-[20%] group"
            style={{ marginLeft: "800px" }}
          >
            <Image
              src="/Images/dev3.webp"
              alt="Nick Smith"
              width={300}
              height={400}
              className="rounded-xl shadow-lg transform rotate-[-3deg] group-hover:rotate-0 transition-transform duration-500"
            />
            <div className="mt-4 text-left">
              <p className="text-gray-400 uppercase text-sm">Designer</p>
              <h3 className="text-3xl font-semibold">Nick Smith</h3>
              <p className="text-gray-300 text-sm">nick@agency.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔽 Awards Section (with proper gaps) */}
      <section
        className="w-full min-h-screen bg-black text-white flex flex-col items-start justify-center px-20"
        style={{ fontSize: "60px", marginTop: "200px" }}
      >
        {/* Title + Right Side Text */}
        <div
          className="w-full flex items-start justify-between"
          style={{ textAlign: "center", color: "white" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold">Our Awards</h1>
          <p
            className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed"
            style={{ fontSize: "20px" }}
          >
            We specialize in creating visually captivating designs that leave a
            lasting impression by transforming your ideas into stunning visuals.
          </p>
        </div>

        {/* Table */}
        <div
          className="w-full max-w-6xl mt-16 overflow-x-auto"
          style={{ color: "white", marginLeft: "550px", fontSize: "30px", marginTop: "100px" }}
        >
          <table className="w-full border-separate border-spacing-x-8 border-spacing-y-4">
            <thead>
              <tr className="text-gray-300 text-lg md:text-xl">
                <th className="py-4 text-left">Year</th>
                <th className="py-4 text-left">Project</th>
                <th className="py-4 text-left">Award</th>
                <th className="py-4 text-left">Organization</th>
              </tr>
            </thead>
            <tbody>
              {awards.map((item, i) => (
                <motion.tr
                  key={i}
                  className={`text-lg md:text-2xl cursor-pointer transition-all duration-300
                    ${selectedRow === i ? "bg-white text-black" : "bg-zinc-900 hover:bg-zinc-800"}
                  `}
                  onClick={() => setSelectedRow(i)}
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <td className="py-6 px-4 rounded-l-lg">{item.year}</td>
                  <td className="py-6 px-4">{item.project}</td>
                  <td className="py-6 px-4">{item.award}</td>
                  <td className="py-6 px-4 rounded-r-lg">{item.org}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Menu />
    </div>
  );
}
