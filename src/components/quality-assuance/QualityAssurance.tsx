'use client';
import React, { useEffect } from 'react';

const QualityAssurance = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js' as any);
  }, []);

  return (
    <div className="container my-5 bg-dark text-light p-4 rounded">
      <div className="d-flex align-items-center justify-content-center mb-3">
  <div className="w-25 border-top border-secondary mx-3"></div>
  <h2 className="fw-bold text-white m-0">Quality Assurance</h2>
  <div className="w-25 border-top border-secondary mx-3"></div>
</div>


      <p className="text-center fs-5 fw-semibold">
        Punjab Carbonic follows the latest international processes and SOPs for quality assurance checks. 
        Quality analysis is done at various stages of production.
      </p>

      <div className="accordion mt-4" id="qualityAccordion">
        {/* 1. Process */}
        <div className="accordion-item bg-dark text-light border border-secondary">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed bg-dark text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              1. Process
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            
          >
            <div className="accordion-body">
              We ensure production and delivery of high-quality products by having best quality processes for production.
            </div>
          </div>
        </div>

        {/* 2. Implementation */}
        <div className="accordion-item bg-dark text-light border border-secondary">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed bg-dark text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2. Implementation
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            
          >
            <div className="accordion-body">
              Implementation of quality policies and procedures across all departments ensures consistency and reliability.
            </div>
          </div>
        </div>

        {/* 3. Compliance */}
        <div className="accordion-item bg-dark text-light border border-secondary">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed bg-dark text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3. Compliance
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            
          >
            <div className="accordion-body">
              Our compliance checks align with national and international standards for safety, sustainability, and excellence.
            </div>
          </div>
        </div>

        {/* 4. Customer Satisfaction */}
        <div className="accordion-item bg-dark text-light border border-secondary">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed bg-dark text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              4. Customer Satisfaction
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            
          >
            <div className="accordion-body">
              We actively monitor customer feedback and implement improvements to deliver exceptional service.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance;
