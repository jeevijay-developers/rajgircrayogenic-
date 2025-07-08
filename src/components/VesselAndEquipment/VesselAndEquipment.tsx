'use client'
export default function VesselsAndEquipmentPage() {
  return (
    <div className="container">
      {/* <h1 className="heading">Vessels and Equipment</h1> */}

      <div className="section">
        <h2 className="subheading">Process Vessels</h2>
        <p className="description">
          Dryers, Purifiers and Scrubbers.
        </p>
      </div>

      <div className="section">
        <h2 className="subheading">CO₂ Plant Equipment</h2>
        <p className="description">
          Dry Ice Press, Cylinder Filling Pumps, Cylinder Filling Manifold, etc.
        </p>
      </div>

      <div className="section">
        <h2 className="subheading">Vessels</h2>
        <p className="description">
          Storage Tanks and Mobile Tankers.
        </p>
      </div>

      <div className="section">
        <h2 className="subheading">Other Equipment</h2>
        <p className="description">
          Natural Draft Vaporizers, Liquid Transfer Pumps and PUF Insulation.
        </p>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: transparent;
        }

        .heading {
          text-align: center;
          color: #0d6efd;
          font-size: 2rem;
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .subheading {
          color: #fff;
          font-size: 1.25rem;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .description {
          font-size: 1rem;
          color: #ccc;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .section {
          margin-bottom: 1.5rem;
        }
      `}</style>
    </div>
  )
}
