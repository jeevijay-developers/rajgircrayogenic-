"use client";
import { useState } from "react";
import faq_img from "@/assets/img/faq.jpg";
import Image from "next/image";

interface DataType {
  id: number;
  title: string;
  desc: JSX.Element;
  space?: string;
  data_wow_delay: string;
}
[];

const faq_data: DataType[] = [
  {
    id: 1,
    data_wow_delay: ".3s",
    space: "mb-3",
    title: "What products and services do you offer?",
    desc: (
      <>
        <ol type="1">
          <li>
            <b>Liquid Carbon Dioxide (CO₂)</b> – High and low-pressure CO₂
            supply with safe storage and transportation solutions.
          </li>
          <li>
            <b>CO₂ Recovery Plants</b> – Custom-designed systems for breweries,
            fertilizer plants, and fermentation units.
          </li>
          <li>
            <b>Dry Ice Production</b> – High-quality dry ice in blocks or
            pellets for industrial and commercial use.
          </li>
          <li>
            <b>Custom Solutions</b> – Tailored CO₂ systems for various
            industries including medical, food processing, and agriculture.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 2,
    data_wow_delay: ".5s",
    space: "mb-3",
    title: "Which industries do you serve?",
    desc: (
      <>
        <ul>
          <li>We cater to a wide range of industries including:</li>
          <ul>
            <li>Food & Beverage</li>
            <li>Medical & Pharmaceuticals</li>
            <li>Welding & Metal Fabrication</li>
            <li>Agriculture</li>
            <li>Chemical Processing</li>
            <li>Entertainment & Special Effects</li>
          </ul>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    data_wow_delay: ".7s",
    space: "mb-3",
    title: "How is dry ice produced?",
    desc: (
      <>
        Dry ice is made by releasing liquid CO₂ under controlled conditions to
        form snow, which is then compressed into blocks or pellets. The gas
        released during this process is recovered and reused, ensuring minimal
        waste.
      </>
    ),
  },
  {
    id: 4,
    data_wow_delay: ".9s",
    title: "Do you offer customized CO₂ solutions?",
    desc: (
      <>
        Yes, we specialize in designing CO₂ storage, recovery, and transport
        systems tailored to your space, production volume, and operational
        needs.
      </>
    ),
  },
  {
    id: 5,
    data_wow_delay: ".9s",
    title: "What are the safety measures for handling liquid CO₂?",
    desc: (
      <>
        Our CO₂ is stored under pressure in insulated tanks and transported
        using secure road tankers. All systems include temperature and pressure
        controls to ensure safety and stability.
      </>
    ),
  },
  {
    id: 6,
    data_wow_delay: ".9s",
    title: "How can I contact Rajgir Cryogenic Gases?",
    desc: (
      <>
        Please get in touch with us via:
        <table>
          <tbody>
            <tr>
              <td>Email:</td>
              <td> [Your Email]</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td> [Your Contact Number]</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td> [Your Address]</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 7,
    data_wow_delay: ".9s",
    title: "Do you follow eco-friendly practices?",
    desc: (
      <>
        Absolutely. Our CO₂ recovery systems minimize emissions by capturing and
        purifying CO₂ for reuse, reducing environmental impact and supporting
        sustainability.
      </>
    ),
  },
];


const Faq = ({ style }: any) => {
  const [activeId, setActiveId] = useState<number>(1);

  const toggleAccordion = (id: number) => {
    setActiveId((prevActiveId) => (prevActiveId === id ? -1 : id));
  };

  return (
    <>
      {faq_data.map((item) => (
        <div
          key={item.id}
          className={`accordion-item ${style ? "mb-3" : ""} ${
            item.space
          } wow fadeInUp`}
          data-wow-delay={item.data_wow_delay}
        >
          <h5 className="accordion-header">
            <button
              onClick={() => toggleAccordion(item.id)}
              className={`accordion-button ${
                activeId !== item.id ? "collapsed" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#faq${item.id}`}
              aria-expanded="false"
              aria-controls={`${item.id}`}
            >
              {item.title}
            </button>
          </h5>
          <div
            id={`${item.id}`}
            className={`accordion-collapse collapse ${
              activeId === item.id ? "show" : ""
            }`}
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">{item.desc}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
