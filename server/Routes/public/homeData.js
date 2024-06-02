const data = {

               mainProducts:
                           
                              [
                                             {
                                                            text:"pantry",
                                                            Insideimages:[
                                                                           "https://cdn.sanity.io/images/w8f1ak3c/production/ff380ebfee344ff98d24d4156ded6b9dc22a2a2a-5000x5000.png/Change-The-Course-Cookbook-Two-Good-Co.png?w=320&h=320&auto=format",
                                                                           "https://cdn.sanity.io/images/w8f1ak3c/production/adb77436d60e62d2b5b0574016abcc864b8e65b0-4498x2999.png/DSC0078_Dexter%20Kim.png?rect=470,108,3458,2760&fp-x=0.4888698630136987&fp-y=0.49614340367765025&w=320&h=255&fit=crop&crop=focalpoint&auto=format"
                                                            ],
                                                            Insidetext:[
                                                                           "change the course",
                                                                           "cookbook",
                                                                           "change the course",
                                                                           "cook kit"
                                                            ],
                                                            mainImg:'https://cdn.sanity.io/images/w8f1ak3c/production/9032e317a6741221ae543fdae5d05160819f9a44-1500x2250.jpg/DSC0079_Dexter%20Kim.jpg?rect=0,0,1500,2008&fp-x=0.47794117647058826&fp-y=0.4461323529411765&w=640&h=1067&fit=crop&crop=focalpoint&auto=format',
                                                            color:"#F5DFCF",

                                             },
                                             {
                                                            text:"home",
                                                            Insideimages:[
                                                                           "https://cdn.sanity.io/images/w8f1ak3c/production/67981d5df16a3773320a12b140c52689e532c068-2000x2000.png/GreyRust.png?w=320&h=320&auto=format",
                                                                           "https://cdn.sanity.io/images/w8f1ak3c/production/51bed63763d7dd75a8a04a6452d5806f71b43a67-2000x2000.png/WhiteLilac.png?w=320&h=320&auto=format"
                                                            ],
                                                            Insidetext:[
                                                                           "Jacket + Blanket",
                                                                           "grey/rust",
                                                                           "Jacket + Blanket",
                                                                           "white/lilac"
                                                            ],
                                                            mainImg:"https://cdn.sanity.io/images/w8f1ak3c/production/138e191deead80c5c8e9a982c20987f8f83c1f27-5504x8256.jpg/JTG_2919%20copy.jpg?rect=276,0,4952,8256&w=640&h=1067&fit=min&auto=format",
                                                            color:'#EDF3FF',
                                             },
                                             {
                                                            text:"bath",
                                                            Insideimages:[
                                                                           "https://cdn.sanity.io/images/w8f1ak3c/production/63474079ab0c7723b75bd63b24d8bbc652349640-1408x1408.png/Cleanse%20&%20Nourish%20Hand%20Wash%20Two%20Good%20Co.png?w=320&h=320&auto=format",
                                                                           "https://cdn.sanity.io/images/w8f1ak3c/production/99866b12faf44f7490e6037dc197947334ce0a72-1408x1408.png/Nourish%20&%20Soothe%20Hand%20Lotion%20Two%20Good%20Co.png?w=320&h=320&auto=format"

                                                            ],
                                                            Insidetext:[
                                                                           "cleanse and nourish",
                                                                           "hand wash",
                                                                           "nourish and soothe",
                                                                           "hand lotion"
                                                            ],
                                                            mainImg:"https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format",
                                                            color:"#FFFFFF"
                                             }

                              ]
               
}

const products = [
               {
                              id:1,
                              url:"https://cdn.sanity.io/images/w8f1ak3c/production/67981d5df16a3773320a12b140c52689e532c068-2000x2000.png/GreyRust.png?w=1024&h=1024&auto=format",
                              text:"jac + jack buy 1 give 1 blanket - grey/rust", 
                              price:"$380"
               },
               {
                              id:2,
                              url:"https://cdn.sanity.io/images/w8f1ak3c/production/51bed63763d7dd75a8a04a6452d5806f71b43a67-2000x2000.png/WhiteLilac.png?w=1024&h=1024&auto=format",
                              text:"jac + jack buy 1 give 1 blanket - grey/lilac", 
                              price:"$380"
               },
               {
                              id:3,
                              url:"https://cdn.sanity.io/images/w8f1ak3c/production/d38a94692dcb9250bb49632883f8e31c4a11e123-1408x1408.png/Two%20Hugs%20Candle%20Two%20Good%20Co.png?w=1024&h=1024&auto=format",
                              text:"too hug candle", 
                              price:"$68"
               },
               {
                              id:3,
                              url:"https://cdn.sanity.io/images/w8f1ak3c/production/5ff174456e7f3a000b5bcdd6768155d29570c39b-5000x5000.png/Good-Nights-Sleep-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format",
                              text:"the good night sleep care pack", 
                              price:"$125"
               },
]


module.exports = {
               data , 
               products
};