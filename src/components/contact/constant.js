import { MdEmail, MdDialerSip } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { siteConfig } from "../../data/site";

export const contactDetail = [
  { logo: MdEmail, detail: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { logo: MdDialerSip, detail: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { logo: FaLocationDot, detail: siteConfig.location },
];
