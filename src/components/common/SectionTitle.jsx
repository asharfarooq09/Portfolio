import { motion } from "framer-motion";
import "./SectionTitle.css";

const SectionTitle = ({ children, subtitle }) => (
  <motion.div
    className="section-title"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {subtitle && <span className="section-title__subtitle">{subtitle}</span>}
    <h2 className="section-title__heading">{children}</h2>
  </motion.div>
);

export default SectionTitle;
