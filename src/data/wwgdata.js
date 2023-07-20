const dashboard = "/images/dashboard.png";
const memoryimg = "/images/memory.png";

const brand1 = "/images/brand1.png";
const brand2 = "/images/brand2.png";
const brand3 = "/images/brand3.png";
const brand4 = "/images/brand4.png";
const brand5 = "/images/brand5.png";

const place1 = "/images/img1.webp";
const place2 = "/images/img2.webp";
const place3 = "/images/img3.webp";
const place4 = "/images/img4.webp";
const place5 = "/images/img5.jpg";
const place6 = "/images/img6.webp";
const place7 = "/images/img7.webp";
const place8 = "/images/img8.webp";
const place9 = "/images/img9.webp";
const place10 = "/images/img10.webp";

const standardicon = "/images/standardicon.png";
const preminumicon = "/images/preminum.png";
const checkbox = "/images/checkbox.svg";
const uncheckbox = "/images/uncheckbox.svg";

const facebook = '/images/facebook.svg';
const instagram = '/images/instagram.svg';
const twitter = '/images/twitter.svg';
const youtube = '/images/youtube.svg';

const banner = '/images/banner.webp';

export const brands = [
  { iconSrc: brand1 },
  { iconSrc: brand2 },
  { iconSrc: brand3 },
  { iconSrc: brand4 },
  { iconSrc: brand5 },
];


export const navlinks = [
  { link: "Home", path: "/" },
  { link: "About", path: "/about" },
  { link: "Order", path: "/store" },
  { link: "FAQ", path: "/blogs" },
  // { link: "Contact", path: "/contact" },
];


export const hero = {
  "title": "Wizard Web Group",
  "subtitle": "Digital Agency",
  "text": "We assure the provision of best digital services of the utmost quality. Cutting-Edge Solutions, Promising Website and Impressive Experience.",
  "btn1": "Order Now!",
  "btn2": "Watch Demo",
  "img": dashboard,
};

export const herotwo = {
  "title": "It's Easy to Order",
  // "subtitle": "",
};

export const memory = {
  "title": "Do you need Website, Software or Online Services?",
  "subtitle": "Don't know what kind of ?",
  "text": "What we have always taken care is always prioritizing the comfort of our users. We are offering EASY order services!",
  "img": memoryimg,
  "experience": [
    { "number": "1", "title": "Go to Menu!" },
    { "number": "2", "title": "Choose your Needs." },
    { "number": "3", "title": "Pick Features." },
    { "number": "4", "title": "Order!" },
  ],
};





export const bannerAPI = {
  "title": "The Greet Outdoors",
  "text": "Whislist Curated By WWG.",
  "imgSrc": banner,
  "btnText": "Explore More"
}

export const footerAPI = {
  "titles": [ {"title": "About"},{"title": "Company"},{"title": "Support"} ],
  "links": [
    [
      {"link": "About US"},
      {"link": "Features"},
      {"link": "News"},
      {"link": "Menu"},
    ],
    [
      {"link": "Why Wizard Web Group?"},
      {"link": "Partner with Us"},
      {"link": "FAQ"},
      {"link": "Blog"},
    ],
    [
      {"link": "Account"},
      {"link": "Support Center"},
      {"link": "Feedback"},
      {"link": "Contact Us"},
      {"link": "Accesbility"},
    ],
  ],
  "sociallinks": [
    {"icon": facebook},{"icon": instagram},{"icon": twitter},{"icon": youtube},
  ]
};
