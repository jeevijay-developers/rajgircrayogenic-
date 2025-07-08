'use client'

import Image from "next/image";

export default function CO2RecoveryPage() {
  return (
    <div className="container">
      <h1 className="heading">CO₂ Recovery Plants</h1>
      <div className="d-flex justify-content-center  mb-5">
        {/* <Image
          alt="dry ice"
          src="/assets/img/rajgir/17.jpeg"
          className=" rounded-3"
          width={500}
          height={300}
        /> */}
      </div>
      <p className="description">
        We offer CO₂ recovery plants, on turn-key basis, from distilleries,
        breweries and fertilizer plants.
      </p>
      <p className="description">
        Our plants are designed to consume minimum power and are Zero-Discharge
        plants. These plants are PLC-controlled with minimum manual
        interference. Hence, the cost of production in these plants is minimal.
        We have a full-fledged technical team to design these machineries and
        equipment. We design CO₂ plants, which can produce High Purity Liquid
        Carbon dioxide as per ISBT standards.
      </p>
      {/* <p className="description">
        All our products are backed with thorough professional after-sales service.<br />
        To know more about us, please visit us at{' '}
        <a href="https://www.co2recoveryplants.in" target="_blank" rel="noopener noreferrer" className="link">
          www.co2recoveryplants.in
        </a>.
      </p> */}

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem 1rem;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background-color: transparent;
        }

        .heading {
          text-align: center;
          color: #0d6efd;
          font-size: 2rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .description {
          font-size: 1rem;
          color: #fff;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .link {
          color: #0d6efd;
          text-decoration: none;
          font-weight: 500;
        }

        .link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
