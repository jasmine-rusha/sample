import Link from "next/link";

export default function Menu() {
  return (
    <div style={
        {
            position:"fixed",
            top:800,
            left:650,
            height:"70px",
            width:"600px",
            backgroundColor:"grey",
            gap:"30px",
            borderRadius:"20px",
            padding:"20px",
            display:"block",
            
        }}>
    <nav className="flex space-x-4">
      <a href="/Home" style={{ textDecoration:"none",marginLeft:"55px",fontSize:"20px"}} className="text-gray-400 hover:text-white">HOME</a>
      <a href="/About"  style={{ textDecoration:"none",marginLeft:"55px",fontSize:"20px"}} className="text-gray-400 hover:text-white">ABOUT</a>
      <a href="/contact"  style={{ textDecoration:"none",marginLeft:"55px",fontSize:"20px"}} className="text-gray-400 hover:text-white">CONTACT</a>
      <a href="/More"   style={{ textDecoration:"none",marginLeft:"55px",fontSize:"20px"}}className="text-gray-400 hover:text-white">MORE ▼</a>
          </nav>
        </div>

  );
}