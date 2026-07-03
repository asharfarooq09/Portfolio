import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import "./ServiceCard.css";

const ServiceCard = ({ index, service }) => (
  <motion.article
    className="service-card"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ delay: index * 0.06, duration: 0.5 }}
    whileHover={{ y: -6 }}
  >
    <span className="service-card__index">0{index + 1}</span>
    <h3 className="service-card__title">{service.title}</h3>
    <p className="service-card__desc">{service.description}</p>
    <div className="service-card__link">
      <span>Learn more</span>
      <FaArrowRightLong />
    </div>
  </motion.article>
);

export default ServiceCard;
