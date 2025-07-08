import Head from 'next/head'

const data = [
    { id: 1, parameter: 'Purity', specification: '99.99 % v/v.', ldl: '0.01%' },
    { id: 2, parameter: 'Acetaldehyde', specification: '< 0.2 ppm', ldl: '0.1 ppm' },
    { id: 3, parameter: 'Acidity', specification: 'To pass Test', ldl: 'NA' },
    { id: 4, parameter: 'Ammonia', specification: '< 2.5 ppm', ldl: '0.5 ppm' },
    { id: 5, parameter: 'Carbon Monoxide', specification: '< 10 ppm', ldl: '1 ppm' },
    { id: 6, parameter: 'Hydrogen Sulfide', specification: '< 0.1 ppm', ldl: '0.0001 ppm' },
    { id: 7, parameter: 'Nitrogen dioxide', specification: '< 2.5 ppm', ldl: '0.5 ppm' },
    { id: 8, parameter: 'Phosphine', specification: '< 0.3 ppm', ldl: '0.05 ppm' },
    { id: 9, parameter: 'Sulfur dioxide', specification: '< 1 ppm', ldl: '0.0001 ppm' },
    { id: 10, parameter: 'Taste & Odour', specification: 'No foreign taste or Odour', ldl: 'NA' },
    { id: 11, parameter: 'Moisture', specification: '< 10 ppm', ldl: '0.1 ppm' },
    { id: 12, parameter: 'Appearance', specification: 'No colour', ldl: 'NA' },
    { id: 13, parameter: 'Aromatic Hydrocarbon', specification: '< 20 ppb', ldl: '1 ppb' },
    { id: 14, parameter: 'Nitrous Fumes', specification: '< 2.5 ppm', ldl: '0.04 ppm' },
    { id: 15, parameter: 'Carbonyl Sulfide', specification: '< 0.1 ppm', ldl: '0.0001 ppm' },
    { id: 16, parameter: 'Total Sulfur', specification: '< 0.1 ppm', ldl: '0.0001 ppm' },
    { id: 17, parameter: 'Total Hydrocarbons (as Methane)', specification: 'Less than 50 ppm, of which Non-Methane is less than 20 ppm', ldl: '0.0001 ppm' },
]

export default function HPCL() {
    return (
      <>
        <Head>
          <title>High Purity Liquid CO₂ - Rajgir Cryogenic</title>
        </Head>

        <div className={`container mt-5 page`}>
          <h1 className="text-center mb-3 fw-bold text-primary">
            High Purity Liquid CO₂
          </h1>
          <p className="text-center mb-5">
            Rajgir Cryogenic’s High Purity Liquid Carbon dioxide is used in
            Processing of Fruits and Vegetables, Prawns and Shrimp farming,
            Spice Grinding, & Super Critical Extraction of Spices and Flavors.
          </p>

          <div className="table-responsive">
            <table className={`table table-bordered table-hover customTable`}>
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Parameter</th>
                  <th>Specification</th>
                  <th>Lower Detection Limit</th>
                </tr>
              </thead>
              <tbody>
                {data.map(({ id, parameter, specification, ldl }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{parameter}</td>
                    <td>{specification}</td>
                    <td>{ldl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <style>
            {`
                .page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: transparent;
  padding-bottom: 3rem;
}

.customTable {
  border-radius: 8px;
  overflow: hidden;
  background: transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.customTable th,
.customTable td {
background-color: #e8e8e8
  vertical-align: middle;
  font-size: 0.95rem;
  padding: 12px;
}

.customTable thead th {
  background-color: #e9ecef;
  font-weight: 600;
}

            `}
          </style>
        </div>
      </>
    );
}
