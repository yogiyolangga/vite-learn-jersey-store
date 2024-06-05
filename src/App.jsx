import { MdOutlineMenuOpen } from "react-icons/md";
import { AiTwotoneCloseCircle } from "react-icons/ai";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Jumbo />
      <Testimoni />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

function Navbar() {
  function navScroll() {
    let nav = document.getElementById("navbar");
    if (window.scrollY > 10) {
      nav.classList.remove("bg-opacity-30");
    } else {
      nav.classList.add("bg-opacity-30");
    }
  }

  window.addEventListener("scroll", navScroll);
  
  function menu() {
    let menuIcon = document.getElementById("menu-icon");
    let closeMenu = document.getElementById("close-menu");
    let navMenu = document.getElementById("nav-menu");
    menuIcon.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
    navMenu.classList.toggle("-translate-x-48");
  }
  
  function closeMenu() {
    let menuIcon = document.getElementById("menu-icon");
    let closeMenu = document.getElementById("close-menu");
    let navMenu = document.getElementById("nav-menu");
    menuIcon.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
    navMenu.classList.toggle("-translate-x-48");
  }

  return (
    <div id="nav" className="relative mx-auto max-w-5xl">
      <div
        id="navbar"
        className="fixed w-full z-50 max-w-5xl mx-auto py-2 flex lg:flex justify-between items-center bg-slate-400 px-3 rounded-b-lg bg-opacity-30 duration-1000"
      >
        <a href="/">
          <img src="assets/img/roshirt-logo.png" alt="Roshirt" className="h-10" />
        </a>
        <MdOutlineMenuOpen id="menu-icon" className="text-3xl cursor-pointer lg:hidden" onClick={menu} />
        <AiTwotoneCloseCircle id="close-menu" className="text-3xl cursor-pointer hidden lg:hidden" onClick={closeMenu} />
        <ul id="nav-menu" className="lg:flex fixed -right-40 lg:right-0 lg:relative lg:bg-opacity-70 lg:px-4 lg:top-0 lg:w-fit duration-100 top-10 bg-pink-600 rounded-md p-2 w-32 text-white gap-5 text-lg">
          <li>
            <a href="#join">Join</a>
          </li>
          <li>
            <a href="#product">Product</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <>
      <div className="container mx-auto max-w-5xl py-5 pt-16 lg:pt-5 lg:flex items-center justify-evenly lg:h-[60vh] relative">
        <div className="flex flex-col items-center gap-4 w-full lg:w-1/2">
          <h1 className="text-4xl text-white lg:text-6xl tracking-wider lg:w-2/3 text-center">
            Find and Make Your Jersey
          </h1>
          <p className="text-white w-full lg:w-2/3 text-center">
            here you can find what you need for your club
          </p>
          <div className="flex gap-2 h-14 items-center">
            <a
              href="#request"
              className="py-1 px-3 rounded-3xl flex items-center justify-center border-b-2 border-pink-600 bg-white hover:scale-105 active:border-none duration-75"
            >
              Request
            </a>
            <a
              href="#getdesign"
              className="py-1 px-3 rounded-3xl flex items-center justify-center border-b-2 border-white bg-pink-600 hover:scale-105 active:border-none duration-75"
            >
              Get Design
            </a>
          </div>
        </div>
        <div className="py-3 w-full lg:w-1/2">
          <img
            src="assets/img/jersey-1.png"
            alt="RoShirt"
            className="w-64 mx-auto"
          />
        </div>
        <BgGlow />
      </div>
    </>
  );
}

function BgGlow() {
  return (
    <div className="h-[60vh] hidden max-w-5xl lg:flex justify-between container mx-auto absolute -z-10">
      <div className="h-80 w-80 bg-pink-600 rounded-full blur-[90px] -translate-y-14"></div>
      <div className="flex items-end">
        <div className="h-80 w-80 bg-slate-300 rounded-full blur-[90px] -translate-x-10"></div>
      </div>
    </div>
  );
}

function Brands() {
  return (
    <>
      <div className="container max-w-3xl mx-auto bg-slate-200 h-20 rounded-3xl flex items-center justify-evenly z-20 relative overflow-x-auto">
        <img src="assets/img/nike.png" alt="Nike" className="h-[60%]" />
        <img
          src="assets/img/adidas.png"
          alt="Adidas"
          className="h-[60%]"
        />
        <img
          src="assets/img/reebok.png"
          alt="Reebok"
          className="h-[60%]"
        />
        <img
          src="assets/img/jordan.png"
          alt="Jordan"
          className="h-[60%]"
        />
        <img
          src="assets/img/new-balance.png"
          alt="New Balance"
          className="h-[60%]"
        />
        <img src="assets/img/fila.png" alt="Fila" className="h-[60%]" />
      </div>
    </>
  );
}

function Jumbo() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#C4215C]/25 to-[#D9D9D9]/25 container max-w-4xl md:rounded-[90px] mx-auto -mt-10 bg-opacity-20">
        <div className="flex pt-14 justify-evenly items-center">
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="assets/img/best-price.png"
              alt="Best Price"
              className="w-[300]"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center gap-3 px-4">
            <h1 className="text-white text-3xl">Good Price good stuf</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique sapiente praesentium maxime? Quibusdam quo natus eaque
              voluptatum.
            </p>
            <div className="h-10 flex items-center">
              <a
                href="#check"
                className="py-1 px-3 bg-pink-600 hover:scale-105 active:border-none duration-75 rounded-xl border-b-2 border-white flex justify-center items-center"
              >
                Check Product
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 mx-auto py-3 px-4 rounded-2xl bg-slate-300 shadow-lg shadow-slate-900 mt-4">
          <h1 className="text-center text-3xl">Our Design</h1>
          <p className="text-center text-slate-600">
            you can chose or redesign
          </p>
        </div>
        <div className="flex flex-wrap gap-2 py-3 px-4 justify-center items-center">
          <img
            src="assets/img/jersey-4.png"
            alt="Jersey"
            className="w-[30%]"
          />
          <img
            src="assets/img/jersey-5.png"
            alt="Jersey"
            className="w-[30%]"
          />
          <img
            src="assets/img/jersey-6.png"
            alt="Jersey"
            className="w-[30%]"
          />
          <img
            src="assets/img/jersey.png"
            alt="Jersey"
            className="w-[30%]"
          />
          <img
            src="assets/img/jersey-3.png"
            alt="Jersey"
            className="w-[30%]"
          />
          <img
            src="assets/img/jersey-2.png"
            alt="Jersey"
            className="w-[30%]"
          />
        </div>
      </div>
    </>
  );
}

function Testimoni() {
  return (
    <>
      <div className="container max-w-4xl mx-auto py-14 px-10">
        <h1 className="font-bold text-white text-4xl text-center">
          Testimonial
        </h1>
        <div className="flex justify-between flex-wrap gap-y-20 items-center pt-24">
          <div className="px-4 pb-4 text-center bg-[#D9D9D9] rounded-md rounded-tr-[30%] rounded-bl-[30%] relative w-full md:w-[25%] bg-opacity-90">
            <img
              src="assets/img/user-1.png"
              alt="User"
              className="w-[95px] h-[95] rounded-full mx-auto -mt-[45px]"
            />
            <p className="text-slate-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nulla
              consectetur nobis omnis rerum dolor!
            </p>
            <h3 className="text-xl font-semibold">Stephanie</h3>
          </div>
          <div className="px-4 pb-4 text-center bg-[#D9D9D9] rounded-md rounded-tr-[30%] rounded-bl-[30%] relative w-full md:w-[25%] bg-opacity-90 md:scale-125">
            <img
              src="assets/img/user-2.png"
              alt="User"
              className="w-[95px] h-[95] rounded-full mx-auto -mt-[45px]"
            />
            <p className="text-slate-900 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nulla
              consectetur nobis omnis rerum dolor!
            </p>
            <h3 className="text-xl font-semibold">Turner</h3>
          </div>
          <div className="px-4 pb-4 text-center bg-[#D9D9D9] rounded-md rounded-tr-[30%] rounded-bl-[30%] relative w-full md:w-[25%] bg-opacity-90">
            <img
              src="assets/img/user-3.png"
              alt="User"
              className="w-[95px] h-[95] rounded-full mx-auto -mt-[45px]"
            />
            <p className="text-slate-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nulla
              consectetur nobis omnis rerum dolor!
            </p>
            <h3 className="text-xl font-semibold">Lucy</h3>
          </div>
        </div>
      </div>
    </>
  );
}

function Contact() {
  return (
    <>
      <div id="contact" className="container max-w-4xl mx-auto px-10 py-10">
        <div className="bg-gradient-to-r from-[#C4215C] to-[#DB9816] rounded-3xl flex flex-col items-center justify-evenly gap-3 lg:gap-10 py-10 text-white">
          <p className="font-light text-lg">contact us here : </p>
          <h1 className="lg:text-6xl text-2xl text-shadow">
            youremailhere@ymail.com
          </h1>
          <h2 className="lg:text-5xl text-xl text-shadow">+0123456789456</h2>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="container max-w-4xl mx-auto py-10 gap-y-5 flex flex-wrap justify-between text-white px-10">
        <div className="w-full lg:w-[20%]">
          <h1 className="text-3xl">Roshirt</h1>
        </div>
        <div className="flex justify-center w-full lg:w-[30%]">
          <div className="flex flex-col justify-center items-center w-full md:w-[50%] gap-4">
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Price</a>
            <a href="#">Address</a>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-[50%] gap-4">
            <a href="#">Product</a>
            <a href="#">Testimonial</a>
            <a href="#">Interest</a>
            <a href="#">Make Offer</a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center w-full lg:w-[30%]">
          <h3 className="text-lg self-start">Email</h3>
          <div className="w-full h-10 bg-slate-400 rounded-xl flex flex-row justify-between items-center">
            <input
              type="text"
              placeholder="youremail@gmail.com"
              className="bg-slate-400 active:border-none px-1 w-[70%] rounded-xl h-10 font-light text-xs"
            />
            <a
              href="#"
              className="rounded-xl bg-[#1B39A4] flex items-center justify-center h-9 m-1 text-xs font-light w-[30%] "
            >
              Submit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
