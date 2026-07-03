import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../serviceCard/ServiceCard";
import { services } from "./constant";
import "./Services.css";

const Services = () => (
  <div className="services">
    <SectionTitle subtitle="What I do">Expertise</SectionTitle>
    <div className="services__grid">
      {services.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </div>
  </div>
);

export default Services;
