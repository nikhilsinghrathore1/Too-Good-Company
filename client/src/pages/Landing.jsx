import React from "react";
import "../App.css"  

const Landing = () => {
  return (
    <div id="main">
      <div class="hero max-w-screen-2xl h-screen bg-[#151519] text-white relative">
        <div class="navbar w-full px-7 pt-4 text-white flex items-center justify-between">
          <div class="flex gap-8 items-center ">
            <div>
              <p class="w-16 h-[1px] bg-white mb-[8px] bg-gradient-to-l from-zinc-400 to-zinc-700 "></p>
              <p class="w-16 h-[1px] bg-white bg-gradient-to-l from-zinc-400 to-zinc-700 "></p>
            </div>
            <h1 class="text-[11.5px] font1 opacity-70">menu</h1>
          </div>
          <div class="w-32 h-10 rounded-full border-[1px] border-white/20 flex items-center justify-center ">
            <p class="text-[11px] font3 opacity-70 tracking-wide ">
              Send request
            </p>
          </div>
        </div>



        <div class="w-full relative flex items-center justify-center flex-col  ">

          <div class=" relative z-10">
            <h1 class="text-[#A9ABB5] text-[19rem]  font1 -tracking-[20px] ">
              Selemen
            </h1>
            <div class="w-10 h-10 rounded-full border-[5px] border-[#A9ABB5]/70 font5 absolute top-[37%] -right-[2%] flex items-center justify-center text-[1.7rem] font-bold  text-[#A9ABB5]">
              R
            </div>
            
          </div>

          {/* this is for the absolute images section */}

          <div>
            <img className="w-52 h-32 object-cover absolute -top-1 left-[34%] z-10" src="https://selemen.liqium.com/img/m2.jpg" alt="not showing" />
            <img className="w-80 h-56 object-cover absolute top-[41%] z-[3] left-[22.6%]" src="https://selemen.liqium.com/img/m1.jpg" alt="not showing" />
            <img className="w-56 h-[330px] object-cover absolute top-[30%] z-[1] left-[37.6%]" src="https://selemen.liqium.com/img/m3.jpg" alt="not showing" />
            <img className="w-80 h-[180px] object-cover absolute top-[81%] z-[2] left-[42.6%]" src="https://selemen.liqium.com/img/m4.jpg" alt="not showing" />
            <img className="w-80 h-[198px] object-cover absolute top-[1.5%] z-[2] left-[51.6%]" src="https://selemen.liqium.com/img/m5.jpg" alt="not showing" />
            <img className="w-80 h-[188px] object-top object-cover absolute top-[40%] z-[0] left-[51.6%]" src="https://selemen.liqium.com/img/m7.jpg" alt="not showing" />
            <img className="w-[300px] h-[188px] object-top object-cover absolute top-[74%] z-[14] left-[55.6%]" src="https://selemen.liqium.com/img/m6.jpg" alt="not showing" />
          </div>




        </div>

          <div className="w-full flex justify-center text-white absolute bottom-7  ">
            
            <p className="font2 text-[13px] tracking-wide opacity-55 ">Nikochan</p>
          
          </div>



      </div>
    </div>


  );
};

export default Landing;
