import alisaImg from '/Alisa-Ustenko.jpg';
import shinjiniImg from '/ebb33bbaaa50a9fba08252e8c3ed9727d1bc3cae.jpg';
import angelaImg from '/0d756c3cc9da32972899a87c1b232d0f6e78a600.jpg';
import aidenImg from '/Aiden-Ng.jpg';
import benImg from '/Ben-Hoppe.jpg';
import cathyImg from '/Cathy-Zhou.png';
import dakshImg from '/Daksh-Mathur.jpg';
import dalaImg from '/Dala-Malaya-Sosa.jpeg';
import eumiImg from '/Eumi-Finlayson.JPG';
import fionaImg from '/Fiona-Gandhi.jpeg';
import jeremyImg from '/Jeremy-Lloyd.jpg';
import kianImg from '/Kian-Chua.JPG';
import miguelImg from '/Miguel-Pascual.jpeg';
import minhalImg from '/Minhal-Hasnain.jpg';
import nathanImg from '/Nathan-Law.jpg';
import parishaImg from '/Parisha-Sehrawat.jpeg';
import sarafImg from '/Saraf-Saiyara.jpeg';
import serifImg from '/Serif-Sav.jpeg';
import sophieImg from '/Sophie_Bhatia.jpg';
import tiffanyImg from '/Tiffany-Hersa.jpeg';
import arlienImg from '/Arielle-Soukantima.JPG';
import chiragImg from '/Chirag-Mishra.png';
import elyzaImg from '/Elyza.jpg';
import joannaImg from '/Joanna.JPG';
import furqanImg from '/Furqan.PNG';

const images = [
  alisaImg, shinjiniImg, angelaImg, aidenImg,
  benImg, cathyImg, dakshImg, dalaImg, eumiImg, fionaImg, jeremyImg, kianImg, miguelImg, minhalImg, nathanImg,
  parishaImg, sarafImg, serifImg, sophieImg, tiffanyImg,  
  arlienImg, chiragImg, elyzaImg, joannaImg, furqanImg,
];

export const preloadImages = () => {
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

const teamData = [
  // Presidential
  {
    name: "Alisa Ustenko",
    role: "Co-President",
    type: "Current",
    desc: "Writing my own plot twist.",
    img: alisaImg,
    linkedin: "https://www.linkedin.com/in/alisa-ustenko/",
    instagram: "https://www.instagram.com/alisaustenko",
    email: "alisaustenko.15@gmail.com",
  },
  {
    name: "Shinjini Manchanda",
    role: "Co-President",
    type: "Current",
    desc: "Riding the E-Ship wave.",
    img: shinjiniImg,
    linkedin: null,
    instagram: "https://www.instagram.com/shinjini.manchanda",
    email: "shinjinimanchanda@gmail.com",
  },
  {
    name: "Dala Malaya Sosa",
    role: "Vice President",
    type: "Current",
    desc: "Aspire to inspire before you expire.",
    img: dalaImg,
    linkedin: "https://www.linkedin.com/in/dalasosa",
    instagram: null,
    email: "dalamalaya09@gmail.com",
  },
  {
    name: "Sophie Bhatia",
    role: "Vice President",
    type: "Current",
    desc: "If it makes you happy then it's not a waste of time.",
    img: sophieImg,
    linkedin: "https://www.linkedin.com/in/sophia-bhatia",
    instagram: "https://www.instagram.com/soph_b4/",
    email: null,
  },

  // Finance
  {
    name: "Daksh Mathur",
    role: "VP Finance",
    type: "Current",
    desc: "Finance OS bringing the capital to fuel eProjects.",
    img: dakshImg,
    linkedin: "https://www.linkedin.com/in/daksh-mathur/",
    instagram: "https://www.instagram.com/_daksh_mathur",
    email: "daksh.mathur@outlook.com",
  },
  {
    name: "Benjamin Hoppe",
    role: "Finance Coordinator",
    type: "Current",
    desc: "Fall seven times, rise eight.",
    img: benImg,
    linkedin: null,
    instagram: null,
    email: "benbhoppe@gmail.com",
  },
  {
    name: "Jeremy Lloyd",
    role: "Finance Coordinator",
    type: "Current",
    desc: "Looking forward to the year.",
    img: jeremyImg,
    linkedin: "https://ca.linkedin.com/in/jeremy-lloyd-45129b326",
    instagram: null,
    email: "jeremy50@student.ubc.ca",
  },

  // Operations
  {
    name: "Aiden Ng",
    role: "Operations Director",
    type: "Current",
    desc: "Don't hate me cause I'm beautiful.",
    img: aidenImg,
    linkedin: "https://www.linkedin.com/in/aidenng273",
    instagram: null,
    email: "aidenng273@gmail.com",
  },
  {
    name: "Fiona Gandhi",
    role: "Operations Coordinator",
    type: "Current",
    desc: "Remember your why.",
    img: fionaImg,
    linkedin: "https://linkedin.com/in/fiona-gandhi",
    instagram: null,
    email: "fionatgandhi@gmail.com",
  },
  {
    name: "Kian Chua",
    role: "Operations Coordinator",
    type: "Current",
    desc: "A sleepy boy in a wakey world.",
    img: kianImg,
    linkedin: "https://www.linkedin.com/in/kian-colin-chua/",
    instagram: null,
    email: "kiancnchua@gmail.com",
  },
  {
    name: "Tiffany Hersa Gautama",
    role: "Operations Coordinator",
    type: "Current",
    desc: "Everything happens for a reason.",
    img: tiffanyImg,
    linkedin: null,
    instagram: "https://www.instagram.com/tiffanyhersa",
    email: "hersatiffany@gmail.com",
  },

  // Technology
  
  {
    name: "Angela Chang",
    role: "Technology Coordinator",
    type: "Current",
    desc: "Can't go a day without g-cal.",
    img: angelaImg,
    linkedin: "https://www.linkedin.com/in/angela-cheng-0062a5237/",
    instagram: "https://www.instagram.com/angela.chengg_",
    email: "angelacheng369@gmail.com",
  },
  {
    name: "Parisha Sehrawat",
    role: "Technology Coordinator",
    type: "Current",
    desc: "Chasing Wonder.",
    img: parishaImg,
    linkedin: "https://www.linkedin.com/in/parishasehrawat/",
    instagram: "https://www.instagram.com/parisha.sehrawat",
    email: "sehrawatparisha@gmail.com",
  },

  // Marketing (Director, Design, Visual Media)
  {
    name: "Nathan Law",
    role: "Marketing Director",
    type: "Current",
    desc: "\"Growth is painful. Change is painful. But nothing is as painful as staying stuck somewhere you don't belong.\" - Mandy Hale.",
    img: nathanImg,
    linkedin: "https://www.linkedin.com/in/nathanlaw07/",
    instagram: "https://www.instagram.com/nathanlaw350",
    email: "law.nathan06@gmail.com",
  },
  {
    name: "Cathy Zhou",
    role: "Design Coordinator",
    type: "Current",
    desc: "Dream big, stay kind and sparkle louder.",
    img: cathyImg,
    linkedin: null,
    instagram: "https://www.instagram.com/cathy.z31",
    email: "my_cathy@outlook.com",
  },
  {
    name: "Minhal Hasnain",
    role: "Design Coordinator",
    type: "Current",
    desc: "Punchlines, pranks, and plenty of thanks.",
    img: minhalImg,
    linkedin: "https://www.linkedin.com/in/minhal-hasnain-a8464b2b0/",
    instagram: null,
    email: "minhal.hasnain05@gmail.com",
  },
  {
    name: "Eumi Finlayson",
    role: "Visual Media Coordinator",
    type: "Current",
    desc: "I'm a curious mind with too many Google Docs open, and can make chaos look kind of coordinated.",
    img: eumiImg,
    linkedin: null,
    instagram: "https://www.instagram.com/eumi_f",
    email: "eumi.finlayson@gmail.com",
  },
  {
    name: "Saraf Saiyara",
    role: "Visual Media Coordinator",
    type: "Current",
    desc: "I speak fluent CapCut, raw footage, and \"Yes, this is the final final final edit\".",
    img: sarafImg,
    linkedin: "http://www.linkedin.com/in/sarafsaiyara",
    instagram: "https://www.instagram.com/sarafsaiyara_",
    email: "sarafsaiyara0@gmail.com",
  },

  // Corporate Relations (Director first, then Coordinators)
  {
    name: "Şerif Sav",
    role: "Corporate Relations Director",
    type: "Current",
    desc: "Sheriff of UBC and Future President of Turkey",
    img: serifImg,
    linkedin: "https://www.linkedin.com/in/%C5%9Ferif-sherif-sav-511419326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram: "https://www.instagram.com/seriffsavayev",
    email: "serifsav02@gmail.com",
  },
  {
    name: "Arielle Soukantima",
    role: "Corporate Relations Coordinator",
    type: "Current",
    desc: "Please ask me about my Notion setup.",
    img: arlienImg,
    linkedin: "https://www.linkedin.com/in/ariellesktm/",
    instagram: null,
    email: "ariellesktm@gmail.com",
  },
  {
    name: "Miguel Pascual",
    role: "Corporate Relations Coordinator",
    type: "Current",
    desc: "Food tastes better when shared.",
    img: miguelImg,
    linkedin: "https://www.linkedin.com/in/miguel-david-pascual",
    instagram: null,
    email: "miggydescalona@gmail.com",
  },
  {
    name: "Furqan Zaheer",
    role: "Corporate Relations Coordinator",
    type: "Current",
    desc: "",
    img: furqanImg,
    linkedin: null,
    instagram: null,
    email: null,
  },

  // Internal
  {
    name: "Chirag Mishra",
    role: "Internal Director",
    type: "Current",
    desc: "Everything works itself out.",
    img: chiragImg,
    linkedin: "http://linkedin.com/in/chiragmishra07",
    instagram: null,
    email: "mishra.chirag2879@gmail.com",
  },

  // First Year Representatives
  {
    name: "Elyza Castro",
    role: "First Year Representative",
    type: "Current",
    desc: "",
    img: elyzaImg,
    linkedin: null,
    instagram: null,
    email: null,
  },
  {
    name: "Joanna Yin",
    role: "First Year Representative",
    type: "Current",
    desc: "",
    img: joannaImg,
    linkedin: null,
    instagram: null,
    email: null,
  },
];


export default teamData;
