import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "../src/assets/Ashar_Resume.pdf");

const doc = new PDFDocument({ margin: 50, size: "A4" });
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

const accent = "#1a1a1a";
const muted = "#444444";

const heading = (text) => {
  doc.moveDown(0.6).font("Helvetica-Bold").fontSize(11).fillColor(accent).text(text.toUpperCase());
  doc.moveDown(0.15).strokeColor("#cccccc").lineWidth(0.5).moveTo(50, doc.y).lineTo(545, doc.y).stroke();
  doc.moveDown(0.35);
};

const body = (text, options = {}) => {
  doc.font("Helvetica").fontSize(10).fillColor(muted).text(text, { lineGap: 3, ...options });
};

const bullet = (text) => {
  doc.font("Helvetica").fontSize(10).fillColor(muted).text(`•  ${text}`, { indent: 10, lineGap: 2 });
};

// Header
doc.font("Helvetica-Bold").fontSize(22).fillColor(accent).text("ASHAR FAROOQ");
doc.moveDown(0.2);
doc.font("Helvetica").fontSize(12).fillColor(muted).text("Software Development Engineer I (Frontend)");
doc.moveDown(0.3);
doc.font("Helvetica").fontSize(9).fillColor(muted).text(
  "+91 7599942225  |  farooqashar09@gmail.com  |  github.com/asharfarooq09  |  linkedin.com/in/ashar-farooq-6543b830b"
);

heading("Summary");
body(
  "Software Development Engineer I (Frontend) with experience building scalable design systems, reusable component libraries, and modern web applications using React, TypeScript, Node.js, and Storybook. Passionate about accessibility, performance optimization, and delivering maintainable, production-ready user interfaces."
);

heading("Experience");

doc.font("Helvetica-Bold").fontSize(10.5).fillColor(accent).text("Software Development Engineer I");
doc.font("Helvetica").fontSize(10).fillColor(muted).text("Uzence Design Studio  |  Aug 2025 — Present");
doc.moveDown(0.25);
[
  "Build reusable React/TypeScript components, framework and design system infrastructure.",
  "Improve developer workflows, documentation, and performance.",
  "Led a team in successfully delivering a complex engineering project on time and within allocated budget.",
  "Collaborate with cross-functional teams to deliver production-ready UI.",
].forEach(bullet);
doc.moveDown(0.4);

doc.font("Helvetica-Bold").fontSize(10.5).fillColor(accent).text("Frontend Developer Intern");
doc.font("Helvetica").fontSize(10).fillColor(muted).text("Uzence Design Studio  |  May 2025 — Jul 2025");
doc.moveDown(0.25);
[
  "Developed reusable Storybook components, design tokens, and Storybook testing.",
  "Conducted comprehensive project analyses, identifying and rectifying discrepancies in engineering designs.",
  "Assisted in publishing and maintaining reusable NPM packages for internal UI libraries.",
  "Worked on component documentation and interactive examples within Storybook to improve developer experience.",
].forEach(bullet);

heading("Education");
doc.font("Helvetica-Bold").fontSize(10.5).fillColor(accent).text("Bachelor of Business Administration");
doc.font("Helvetica").fontSize(10).fillColor(muted).text("Jagdish Saran Hindu College  |  2020 — 2023");
doc.moveDown(0.3);
doc.font("Helvetica-Bold").fontSize(10.5).fillColor(accent).text("Intermediate");
doc.font("Helvetica").fontSize(10).fillColor(muted).text("Radha Krishna Public School  |  2019 — 2020  |  82%");

heading("Skills");
const skillGroups = [
  ["Frontend", "React.js, Redux, Storybook, Tailwind CSS"],
  ["Build Tools", "Vite, Rollup, NPM, Webpack"],
  ["Tools & Platforms", "Git, GitHub, Firebase, Netlify, Style Dictionary"],
  ["Backend & APIs", "Node.js, REST APIs, JSON"],
  [
    "Core Skills",
    "Design Systems, Component Libraries, Design Tokens, Responsive Design, Accessibility (WCAG), Performance Optimization, UI/UX Development, State Management, Component Testing, Visual Regression Testing, Developer Experience (DX), Monorepo, Package Publishing",
  ],
];

skillGroups.forEach(([label, items]) => {
  doc.font("Helvetica-Bold").fontSize(10).fillColor(accent).text(`${label}: `, { continued: true });
  doc.font("Helvetica").fontSize(10).fillColor(muted).text(items, { lineGap: 4 });
  doc.moveDown(0.15);
});

doc.end();

stream.on("finish", () => {
  const publicPath = path.join(__dirname, "../public/Ashar_Resume.pdf");
  fs.copyFileSync(outputPath, publicPath);
  console.log(`Resume PDF generated: ${outputPath}`);
  console.log(`Copied to: ${publicPath}`);
});
