import carFinder from "../../assets/car-finder.png";
import Commerce from "../../assets/e-commerce.png";
import Calender from "../../assets/Calender.png";
import cryptoWeather from "../../assets/crypto-weather.png";

export const Allprojects = [
  {
    image: Commerce,
    link: "https://daring-beauty-production-bc42.up.railway.app/",
    title: "E-Commerce Store",
    description:
      "Modern e-commerce foundation with product discovery, category filters, and authenticated checkout.",
    tags: ["React", "Backend", "Checkout"],
  },
  {
    image: carFinder,
    link: "https://carfindrapp.netlify.app/",
    title: "Car Finder",
    description: "Vehicle discovery app with search filters and detailed listings.",
    tags: ["React", "API", "Responsive"],
  },
  {
    image: Calender,
    link: "https://calenderevnt.netlify.app/",
    title: "Event Calendar",
    description: "Interactive calendar for scheduling and managing events.",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    image: cryptoWeather,
    link: "https://cryptoweathernexusassignment.netlify.app",
    title: "Crypto Weather Nexus",
    description: "Dashboard combining crypto prices and weather data in one view.",
    tags: ["React", "API", "Dashboard"],
  },
];
