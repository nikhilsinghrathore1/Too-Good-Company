import axios from "axios";
import { atom, selector } from "recoil";


export const LandingAtom = atom({
               key:"landingAtom",
               default:selector({
                              key:"landingAtom/selector",
                              get:async()=>{
                                             const payload = await axios.get("http://localhost:3000/home/store/product") 
                                             return payload.data;
                              }
               })
})

export const mainProducts = atom({
               key:"mainProducts",
               default:selector({
                              key:"mainProducts/selector",
                              get:async()=>{
                                             const res = await axios.get("http://localhost:3000/home/store/mainProducts");
                                             return res.data
                              }
               })
})