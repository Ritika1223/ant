import React, { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function TopHeader() {
  const { t, i18n } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="bg-white border-b text-sm font-medium text-gray-700 relative">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Left side location & toll-free */}
        <div className="flex items-center gap-4 flex-grow md:ml-auto">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-location-dot text-red-600" />
            <select className="bg-transparent border-none outline-none text-sm">
              <option>B-128 Transport Nagar, Sector-69, Noida</option>
              <option>A-24 Industrial Area, Sector-5, Noida</option>
              <option>C-56/12 Tech Park, Sector-62, Noida</option>
            </select>
          </div>
          <span className="hidden md:inline">
            Toll Free 24x7 - <span className="text-blue-600">1800 1027 408</span>
          </span>
        </div>

        {/* Desktop Right side links */}
        <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
          <span className="relative">
            {t("offer")} <span className="ml-1 bg-red-600 text-white text-xs px-1 rounded-full">10</span>
          </span>
          <span>{t("tracking")}</span>
          <span>{t("faq")}</span>
          <span>{t("support")}</span>
          <span>{t("wallet")}</span>

          {/* Language Dropdown */}
          <select
            onChange={(e) => handleChangeLanguage(e.target.value)}
            className="bg-white border border-gray-300 px-2 py-1 rounded"
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
          </select>
        </div>

        {/* Hamburger for mobile */}
        <button onClick={() => setShowSidebar(!showSidebar)} className="md:hidden">
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar for Mobile */}
      {showSidebar && (
        <>
          <div
            onClick={() => setShowSidebar(false)}
            className="fixed inset-0 bg-black opacity-50 z-40"
          ></div>
          <div className="md:hidden fixed top-0 right-0 w-73 bg-white shadow-md z-50 p-4 transition-all duration-300 ease-in-out">
            <button
              onClick={() => setShowSidebar(false)}
              className="text-right w-full mb-4 text-gray-700 text-lg"
            >
              ×
            </button>
            <ul className="space-y-4 text-gray-700">
              <li>
                {t("offer")}{" "}
                <span className="ml-1 bg-red-600 text-white text-xs px-1 rounded-full">10</span>
              </li>
              <li>{t("tracking")}</li>
              <li>{t("faq")}</li>
              <li>{t("support")}</li>
              <li>{t("wallet")}</li>
              <li>
                <select
                  onChange={(e) => handleChangeLanguage(e.target.value)}
                  className="bg-white border border-gray-300 px-2 py-1 rounded w-full"
                >
                  <option value="en">English</option>
                  <option value="hi">हिंदी</option>
                </select>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
