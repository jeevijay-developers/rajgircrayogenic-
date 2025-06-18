import React from 'react'
import Image from "next/image";
import styles from "./Beverages.module.css";
import { applicationData } from "./applicationData.js";
const Applications = () => {
     return (
    <div className="container my-5">
      {applicationData.map((section, index) => (
        <div className="row align-items-center py-5 my-lg-5" key={index}>
          {section.imageFirst && (
            <div
              className="col-md-6 mb-4 mb-md-0 d-flex"
              style={{ justifyContent: "center" }}
            >
              <Image
                src={section.image}
                alt={section.highlight}
                width={500}
                height={200}
                className={`img-fluid rounded ${styles.customShadow}`}
              />
            </div>
          )}
          <div className="col-md-6">
            <h2 className="fw-bold">
              {section.title}
              <span className={styles.blueText}>{section.highlight}</span>
            </h2>
            <p className={styles.para}>{section.content}</p>
          </div>
          {!section.imageFirst && (
            <div
              className="col-md-6 mb-4 mb-md-0 d-flex"
              style={{ justifyContent: "center" }}
            >
              <Image
                src={section.image}
                alt={section.highlight}
                width={500}
                height={200}
                className={`img-fluid rounded ${styles.customShadow}`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Applications