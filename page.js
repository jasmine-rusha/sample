// pages/index.js
"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Menu from "./Component/Menu";

export default function Home() {
  // 🔹 Counter Hook with start control
  const useCounter = (end, duration, start) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return;
      let current = 0;
      const increment = end / (duration / 16); // ~60fps
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, 16);
      return () => clearInterval(timer);
    }, [end, duration, start]);

    return count;
  };

  // 🔹 Stats visibility control
  const [visible, setVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // one-time start
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Counters (start only when visible)
  const clients = useCounter(37, 2000, visible);
  const projects = useCounter(85, 2500, visible);
  const team = useCounter(12, 2000, visible);

  // 🔹 Sliders
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const textSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  const contentSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
  };

  // 🔹 Content Slides
  const slides = [
    { img: "/Images/5.jpg", title: "Design", desc: "We create user-focused designs that bring your brand’s vision to life." },
    { img: "/Images/6.jpeg", title: "Marketing", desc: "Our marketing solutions drive growth and elevate your brand's presence." },
    { img: "/Images/7.jpeg", title: "Branding", desc: "Building strong brand identities that connect with your audience." },
    { img: "/Images/8.jpg", title: "Development", desc: "We craft fast, scalable and modern web applications." },
    { img: "/Images/9.jpeg", title: "Concept", desc: "We develop innovative ideas that form the foundation of standout projects." },
  ];

  return (
    <div className="container">
      {/* 🔹 Fixed Logo */}
      <div style={{ position: "fixed", top: "20px", left: "50%", transform: "translateX(-50%)", zIndex: 9999 }}>
        <Link href="/" passHref>
          <Image src="/Images/logo.png" alt="Logo" width={120} height={80} className="cursor-pointer" />
        </Link>
      </div>

      {/* 🔹 Menu */}
      <div style={{ position: "fixed", top: "30px", right: "40px", zIndex: 9999 }}>
        <Menu />
      </div>

      {/* 🔹 Section 1: Gallery */}
      <section className="section homepage" style={{ paddingTop: "120px" }}>
        <div className="wrapper">
          <div className="gallery left">
            <Image src="/Images/1.jpeg" alt="img1" width={100} height={100} />
            <Image src="/Images/2.jpeg" alt="img2" width={100} height={100} />
            <Image src="/Images/3.jpeg" alt="img3" width={100} height={100} />
            <Image src="/Images/4.jpeg" alt="img4" width={100} height={100} />
          </div>
          <div className="center">
            <h1 className="flip-text"><span className="text1">STUDIO</span><span className="text2">WARP®</span></h1>
            <p>From Concept to Creation — Beautiful design has the power to captivate audiences.</p>
          </div>
          <div className="gallery right">
            <Image src="/Images/5.jpg" alt="img5" width={100} height={100} />
            <Image src="/Images/6.jpeg" alt="img6" width={100} height={100} />
            <Image src="/Images/7.jpeg" alt="img7" width={100} height={100} />
            <Image src="/Images/8.jpg" alt="img8" width={100} height={100} />
          </div>
        </div>
      </section>

      {/* 🔹 Section 2: Hero */}
      <section className="section hero">
        <div style={{ marginRight: "1000px", color:"white",fontSize:"40px",marginTop:"150px" }}>
          <h1>We Don’t Just Design for the Present — We Craft Experiences for the Future.</h1>
          <p style={{fontSize:"20px",marginLeft:"400px"}}>Specializing in creating visually captivating designs that leave a lasting impression by transforming your ideas into stunning visuals.</p>
        </div>
      </section>

      {/* 🔹 Section 3: Logo Slider */}
      <section style={{ padding: "50px 0", marginTop: "10px" }}>
        <Slider {...settings}>
          {["/Images/logo0.png","/Images/logo2.png","/Images/logo3.png","/Images/logo4.png","/Images/logo2.jpeg","/Images/logo5.jpeg","/Images/logo6.png"].map((logo, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ border: "1px solid #333", borderRadius: "12px", padding: "40px", width: "200px", height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image src={logo} alt={`logo-${i}`} width={120} height={80} />
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* 🔹 Section 4: Works */}
      <section style={{ background: "black", color: "white", textAlign: "center", padding: "100px 0" }}>
        <h1 style={{ fontSize: "100px", fontWeight: "bold", marginBottom: "50px" }}>WORKS</h1>
        <Image src="/Images/shoe.jpg" alt="shoe" width={700} height={500} />
        <div style={{ marginTop: "50px" ,fontSize:"40px"}}>
          <Slider {...textSettings}>{Array(20).fill("Sport").map((w, i) => <h2 key={i} style={{ fontSize: "60px", fontWeight: "bold" }}>{w}</h2>)}</Slider>
        </div>
      </section>

      {/* 🔹 Section 5: Modern */}
      <section style={{ background: "black", color: "white", textAlign: "center", padding: "100px 0" }}>
        <Image src="/Images/8.jpg" alt="modern" width={700} height={400} />
        <div style={{ marginTop: "50px" ,fontSize:"40px"}}>
          <Slider {...textSettings}>{Array(20).fill("Modern").map((w, i) => <h2 key={i} style={{ fontSize: "50px", fontWeight: "bold" }}>{w}</h2>)}</Slider>
        </div>
      </section>

      {/* 🔹 Section 6: Future */}
      <section style={{ background: "black", color: "white", textAlign: "center", padding: "100px 0" }}>
        <Image src="/Images/4.jpeg" alt="future car" width={700} height={400} style={{ borderRadius: "12px" }} />
        <div style={{ marginTop: "50px",fontSize: "40px"}}>
          <Slider {...textSettings}>{Array(20).fill("Future").map((w, i) => <h2 key={i} style={{ fontSize: "80px", fontWeight: "bold" }}>{w}</h2>)}</Slider>
        </div>
      </section>

      {/* 🔹 Section 7: Services */}
      <section style={{ background: "black", color: "white", textAlign: "center", padding: "150px 0" }}>
        <h1 style={{ fontSize: "120px", fontWeight: "bold" }}>SERVICES</h1>
      </section>

      {/* 🔹 Section 8: Auto Slider */}
      <section style={{ background: "black", color: "white", textAlign: "center", padding: "120px 0" }}>
        <Slider {...contentSettings}>
          {slides.map((s, i) => (
            <div key={i}>
              <Image src={s.img} alt={s.title} width={500} height={350} style={{ borderRadius: "12px", margin: "0 auto" }} />
              <div style={{ marginTop: "40px" }}>
                <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>{s.title}</h1>
                <p style={{ fontSize: "20px", maxWidth: "600px", margin: "20px auto" }}>{s.desc}</p>
                <button style={{ background: "white", borderRadius: "50%", width: "55px", height: "55px", border: "none", cursor: "pointer", fontSize: "22px" }}>↑</button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* 🔹 Section 9: Stats */}
      <section ref={statsRef} style={{ background: "black", color: "white", padding: "120px 80px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ maxWidth: "600px" }}>
          <h1 style={{ fontSize: "50px", fontWeight: "300" }}>Every number tells a story.</h1>
          <h2 style={{ fontSize: "40px", fontWeight: "200", color: "gray" }}>And we’re here to help you make sense of it.</h2>
          <p style={{ fontSize: "16px", marginTop: "30px", color: "lightgray" }}>
            We don’t just design—we drive results. Our creative strategies are built to grow your business by increasing visibility, engagement, and revenue.
          </p>
        </div>
        <div style={{ textAlign: "center", flex: "1", minWidth: "300px",marginLeft:"500px" }}>
          <div style={{ marginBottom: "60px" }}>
            <h1 style={{ fontSize: "80px", fontWeight: "bold" }}>{clients}</h1>
            <p style={{ fontSize: "14px", color: "gray" }}>LOYAL CLIENTS</p>
          </div>
          <div style={{ marginBottom: "60px" }}>
            <h1 style={{ fontSize: "80px", fontWeight: "bold" }}>{projects}</h1>
            <p style={{ fontSize: "14px", color: "gray" }}>PROJECTS COMPLETED</p>
          </div>
          <div>
            <h1 style={{ fontSize: "80px", fontWeight: "bold" }}>{team}</h1>
            <p style={{ fontSize: "14px", color: "gray" }}>TEAM MEMBERS</p>
          </div>
        </div>
      </section>
    </div>
  );
} 