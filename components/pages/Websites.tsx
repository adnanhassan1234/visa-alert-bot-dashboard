"use client";

import React, { useState } from "react";

const Websites = () => {
  const [websiteUrl, setWebsiteUrl] = useState(
    ""
  );

  const monitoredWebsites = [
    {
      id: 1,
      name: "US Embassy Islamabad",
      url: "https://ais.usvisa-info.com/en-pk/niv",
      lastChecked: "8/22/2025, 5:08:28 PM",
      status: "ACTIVE",
    },
    {
      id: 2,
      name: "UK VFS Karachi",
      url: "https://visa.vfsglobal.com/pak/en/gbr",
      lastChecked: "8/22/2025, 5:08:28 PM",
      status: "ACTIVE",
    },
    {
      id: 3,
      name: "Canada VFS Lahore",
      url: "https://visa.vfsglobal.com/pak/en/can",
      lastChecked: "8/22/2025, 5:08:28 PM",
      status: "DISABLED",
    },
    {
      id: 4,
      name: "Australia VFS Islamabad",
      url: "https://visa.vfsglobal.com/pak/en/aus",
      lastChecked: "8/22/2025, 5:08:28 PM",
      status: "ACTIVE",
    },
  ];

  const handleAddWebsite = () => {
    console.log("Adding website:", websiteUrl);
  };

  const handleToggleStatus = (id: number, currentStatus: string) => {
    console.log(`Toggling status for website ${id} from ${currentStatus}`);
  };

  return (
    <div className="websites-container">
      {/* Add New Website Section */}
      <div className="add-website-section">
        <h2 className="section-title">Add New Website</h2>
        <p className="section-subtitle">Add embassy websites to monitor</p>

        <div className="url-input-section">
          <label className="url-label">Embassy Website URL</label>
          <div className="input-group">
            <input
              type="text"
              className="url-input"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="https://embassy-website.com/appointments"
            />
            <button className="add-btn" onClick={handleAddWebsite}>
              Add Website
            </button>
          </div>
        </div>
      </div>

      {/* Monitored Websites Section */}
      <div className="monitored-section">
        <h2 className="section-title">Monitored Websites</h2>
        <p className="section-subtitle">All embassy websites being monitored</p>

        <div className="websites-list">
          {monitoredWebsites.map((website) => (
            <div key={website.id} className="website-card">
              <div className="website-info">
                <h3 className="website-name">{website.name}</h3>
                <a
                  href={website.url}
                  className="website-url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {website.url}
                </a>
                <p className="last-checked">
                  Last checked: {website.lastChecked}
                </p>
              </div>

              <div className="website-actions">
                {website.status === "ACTIVE" ? (
                  <>
                    <span className="status-badge active">ACTIVE</span>
                    <button
                      className="action-btn disable-btn"
                      onClick={() =>
                        handleToggleStatus(website.id, website.status)
                      }
                    >
                      Disable
                    </button>
                  </>
                ) : (
                  <>
                    <span className="status-badge disabled">DISABLED</span>
                    <button
                      className="action-btn enable-btn"
                      onClick={() =>
                        handleToggleStatus(website.id, website.status)
                      }
                    >
                      Enable
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Websites;
