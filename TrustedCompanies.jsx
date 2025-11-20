
import React from "react";
import { siteContent } from "../data";

const TrustedCompanies = () => {
  const { trustedCompanies } = siteContent;

  return (
    <section className="trusted-section">
      <div className="container trusted-content">
        <p className="trusted-tagline">{trustedCompanies.tagline}</p>
        <p className="trusted-description">{trustedCompanies.description}</p>

        <div className="trusted-logos">
          {trustedCompanies.companies.map((company) => (
            <div key={company.id} className="trusted-logo">
              <span className="trusted-logo-text">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
