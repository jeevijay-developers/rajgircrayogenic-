'use client'
import Image from 'next/image'
import styles from './Beverages.module.css'

const BeveragesAndBreweries = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0 d-flex" style={{justifyContent: "center"}}>
          <Image
            src="/assets/img/Applications/breweries.jpg" // put your image in public/images folder
            alt="Beverages"
            width={500}
            height={200}
            
            className={`img-fluid rounded ${styles.customShadow}`}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="fw-bold">
            Beverages & <span className={styles.blueText}>Breweries</span>
          </h2>
          <p className={styles.para}>
            Carbon dioxide, CO2, is used in beverages for carbonation. It provides the FIZZ in soft drinks.
            Apart from this, CO2 provides product stability, attractive and fresh visual presentation
            and the tingly taste. Punjab Carbonic produces High Purity Liquid Carbon dioxide. Using our
            CO2 reduces foaming, hence reducing rejection. Due to the High Purity, there is elimination
            of vent from Carbonator. Punjab Carbonic gets their product analyzed from Atlantic Analytical
            Laboratory, New Jersey, USA. Punjab Carbonic produces High Purity Liquid Carbon dioxide in
            line with International Society for Beverage Technologists’ standards. All these efforts have
            resulted in getting the privilege of servicing to the requirements of major global soft drink
            producers in India. Punjab Carbonic supplies High Purity Liquid Carbon dioxide to major
            breweries in India.
          </p>
        </div>
      </div>

    <div className="row align-items-center my-lg-5">
        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="fw-bold">
            MIG & <span className={styles.blueText}>Welding</span>
          </h2>
          <p className={styles.para}>
            Carbon dioxide is used in Metal Inert Gas welding, as shielding gas. As CO2 is heavier than air, it is blanketed around the area to be welded, thereby eliminating Oxygen from entering this atmosphere. Using High Purity Liquid Carbon dioxide, increases weld bead appearance, eliminates blowholes and reduces spatter. Naturally, this results in reduction of rejection and re-working and increase in productivity. Punjab Carbonic supplies their CO2 to major automobile and engineering companies in the country
          </p>
        </div>
                {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0 d-flex" style={{justifyContent: "center"}}>
          <Image
            src="/assets/img/Applications/welding.jpg" // put your image in public/images folder
            alt="Beverages"
            width={500}
            height={200}
            
            className={`img-fluid rounded ${styles.customShadow}`}
          />
        </div>
      </div>

    <div className="row align-items-center my-lg-5">

                {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0 d-flex" style={{justifyContent: "center"}}>
          <Image
            src="/assets/img/Applications/airline.jpg" // put your image in public/images folder
            alt="Beverages"
            width={500}
            height={200}
            
            className={`img-fluid rounded ${styles.customShadow}`}
          />
        </div>
                {/* Text Section */}
        <div className="col-md-6">
          <h2 className="fw-bold">
            Airline <span className={styles.blueText}>Catering</span>
          </h2>
          <p className={styles.para}>
Airlines catering companies use food trolleys equipped with Dry Ice packages to preserve the food quality and freshness. Punjab Carbonic supplies their Dry Ice to major airline-catering companies in India.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BeveragesAndBreweries;
