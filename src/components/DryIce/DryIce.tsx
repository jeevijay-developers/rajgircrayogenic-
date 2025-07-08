"use client";

import Image from "next/image";

export default function DryIcePage() {
  return (
    <div className="container">
      <h1 className="heading">Dry Ice</h1>
      <div className="d-flex justify-content-center  mb-5">
        <Image
          alt="dry ice"
          src="/assets/img/rajgir/17.jpeg"
          className="  rounded-3"
          width={500}
          height={300}
        />
      </div>
      <p className="description">
        Solid CO₂ is, generally, known as Dry Ice. It has this distinct nature
        of changing into vapor from solid state, unlike normal ice. Because of
        its very cold temperature, it is used for refrigerating food products
        and perishables. We produce High Density Solid CO₂, in cylindrical
        blocks. Each piece weighs about 8 – 10 kgs. The density of our Solid CO₂
        is so high, that the evaporation rate is very minimal, resulting in
        lesser losses and better productivity.
      </p>
      <p className="description">
        We supply Dry Ice throughout the year and across the country.
      </p>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem 1rem;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background: transparent;
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
      `}</style>
    </div>
  );
}
