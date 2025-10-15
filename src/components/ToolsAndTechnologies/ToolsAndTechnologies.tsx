"use client";

import React from "react";

// Font Awesome Icons
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma,
  FaSwift,
  FaCode,
  FaVuejs,
  FaCss3, // fallback
} from "react-icons/fa";

// Simple Icons
import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiOpenai,
  SiGooglecloud,
  SiVuedotjs,
  SiPostman,
  SiFlutter,
  SiKotlin,
  SiCss3,
  SiHtml5,
  SiMaterialdesign,
  SiExpress,
  SiReact,
  SiGit,
  SiFigma,
} from "react-icons/si";

export default function SalesBenefits() {
  return (
    <section className="sales-benefits-section">
      <style jsx>{`
        .sales-benefits-section {
          background: #000814;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
        }

        @keyframes sales-orbPulse {
          0%,
          100% {
            box-shadow:
              0 0 80px rgba(37, 99, 235, 0.8),
              0 0 120px rgba(37, 99, 235, 0.5),
              inset 0 0 60px rgba(96, 165, 250, 0.3);
          }
          50% {
            box-shadow:
              0 0 100px rgba(37, 99, 235, 1),
              0 0 140px rgba(37, 99, 235, 0.6),
              inset 0 0 60px rgba(96, 165, 250, 0.4);
          }
        }

        @keyframes sales-flowDown {
          0% {
            top: 0;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        .sales-benefits-section .container {
          max-width: 1400px;
          width: 100%;
          position: relative;
        }

        .sales-benefits-section .orb-container {
          display: flex;
          justify-content: center;
          margin-bottom: 0;
          position: relative;
          z-index: 10;
        }

        .sales-benefits-section .orb {
          width: 80px;
          height: 80px;
          top: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow:
            0 0 80px rgba(37, 99, 235, 0.8),
            0 0 120px rgba(37, 99, 235, 0.5),
            inset 0 0 60px rgba(96, 165, 250, 0.3);
          animation: sales-orbPulse 3s ease-in-out infinite;
        }

        .sales-benefits-section .orb::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(
            circle at 35% 25%,
            rgba(255, 255, 255, 0.5) 0%,
            transparent 50%
          );
        }

        .sales-benefits-section .orb svg {
          width: 42px;
          height: 42px;
          fill: white;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
          z-index: 1;
        }

        .sales-benefits-section .connection-lines {
          position: absolute;
          top: 100px;
          left: 50%;
          transform: translateX(-50%);
          width: 1200px;
          height: 200px;
          pointer-events: none;
        }

        .sales-benefits-section .vertical-line {
          position: absolute;
          left: 50%;
          transform: transla8eX(-50%);
          width: 1px;
          height: 190px;
          background: linear-gradient(
            to bottom,
            rgba(37, 99, 235, 0.6),
            rgba(37, 99, 235, 0.3)
          );
          overflow: hidden;
        }

        .sales-benefits-section .vertical-line-1 {
          position: absolute;
          left: 47%;
          top: -16px;
          transform: transla8eX(-50%);
          width: 1px;
          height: 97px;
          background: linear-gradient(
            to bottom,
            rgba(37, 99, 235, 0.6),
            rgba(37, 99, 235, 0.3)
          );
          overflow: hidden;
        }

        .sales-benefits-section .vertical-line-2 {
          position: absolute;
          left: 53%;
          top: -16px;
          transform: transla8eX(-50%);
          width: 1px;
          height: 97px;
          background: linear-gradient(
            to bottom,
            rgba(37, 99, 235, 0.6),
            rgba(37, 99, 235, 0.3)
          );
          overflow: hidden;
        }

        .sales-benefits-section .vertical-line::after {
          content: "";
          position: absolute;
          width: 3px;
          height: 8px;
          background: rgba(147, 197, 253, 0.9);
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
          animation: sales-flowDown 2s ease-in-out infinite;
          box-shadow: 0 0 8px rgba(147, 197, 253, 0.8);
        }

        .sales-benefits-section .horizontal-line {
          position: absolute;
          top: 80px;
          left: 0;
          width: 585px;
          right: 0;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(37, 99, 235, 0.2) 10%,
            rgba(37, 99, 235, 0.4) 50%,
            rgba(37, 99, 235, 0.2) 90%,
            transparent 100%
          );
        }

        .sales-benefits-section .horizontal-line-1 {
          position: absolute;
          top: 80px;
          left: 120;
          width: 585px;
          right: 0;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(37, 99, 235, 0.2) 10%,
            rgba(37, 99, 235, 0.4) 50%,
            rgba(37, 99, 235, 0.2) 90%,
            transparent 100%
          );
        }

        .sales-benefits-section .branch-line {
          position: absolute;
          top: 80px;
          width: 1px;
          height: 100px;

          background: linear-gradient(
            to bottom,
            rgba(37, 99, 235, 0.3),
            rgba(37, 99, 235, 0.1)
          );
        }

        .sales-benefits-section .branch-left {
          left: 16%;
        }
        .sales-benefits-section .branch-center-left {
          left: 50%;
        }
        .sales-benefits-section .branch-center-right {
          right: 40%;
        }
        .sales-benefits-section .branch-right {
          right: 16%;
        }

        .sales-benefits-section .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
          padding-top: 0px;
        }

        .sales-benefits-section .grid-bottom {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .sales-benefits-section .card {
          background: linear-gradient(
            180deg,
            rgba(10, 20, 47, 0.6) 0%,
            rgba(15, 25, 52, 0.4) 100%
          );
          border: 1px solid rgba(37, 99, 235, 0.15);
          border-radius: 20px;
          padding: 45px 35px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .sales-benefits-section .card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: radial-gradient(
            ellipse at top,
            rgba(37, 99, 235, 0.08) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .sales-benefits-section .card:hover {
          transform: translateY(-6px);
          border-color: rgba(37, 99, 235, 0.35);
          background: linear-gradient(
            180deg,
            rgba(10, 20, 47, 0.7) 0%,
            rgba(15, 25, 52, 0.5) 100%
          );
        }

        .sales-benefits-section .card:hover::before {
          opacity: 1;
        }

        .sales-benefits-section .icon-wrapper {
          width: 72px;
          height: 72px;
          margin: 0 auto 28px;
          border-radius: 50%;
          background: rgba(15, 25, 52, 0.8);
          border: 1px solid rgba(37, 99, 235, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.3s ease;
        }

        .sales-benefits-section .card:hover .icon-wrapper {
          border-color: rgba(37, 99, 235, 0.5);
          background: rgba(15, 25, 52, 1);
        }

        .sales-benefits-section .icon-wrapper::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(
            circle at 35% 25%,
            rgba(37, 99, 235, 0.15) 0%,
            transparent 60%
          );
        }

        .sales-benefits-section .icon-wrapper svg {
          width: 28px;
          height: 28px;
          stroke: #60a5fa;
          fill: none;
          stroke-width: 2;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .sales-benefits-section .card:hover .icon-wrapper svg {
          stroke: #93c5fd;
          transform: scale(1.05);
        }

        .sales-benefits-section .card h3 {
          font-size: 26px;
          font-weight: 600;
          color: #f1f5f9;
          margin-bottom: 16px;
          letter-spacing: -0.3px;
        }

        .sales-benefits-section .card p {
          font-size: 16px;
          line-height: 1.65;
          color: #94a3b8;
          font-weight: 400;
        }

        .sales-benefits-section .hover-icons {
          display: flex;
          justify-content: center;
          gap: 12px;
          opacity: 0.04;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }

        .sales-benefits-section .card:hover .hover-icons {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          .sales-benefits-section .grid {
            grid-template-columns: 1fr;
            padding-top: 0px;
          }

          .sales-benefits-section .grid-bottom {
            grid-template-columns: 1fr;
          }

          .sales-benefits-section .connection-lines {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .sales-benefits-section .card {
            padding: 35px 25px;
          }

          .sales-benefits-section .card h3 {
            font-size: 22px;
          }

          .sales-benefits-section .card p {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="container flex flex-col justify-items items-center">
        <div className="orb-container">
          <div className="orb">
            <svg viewBox="0 0 24 24">
              <path
                d="M13.73 4L18.76 8.97V13.73L13.73 18.76H10.27L5.24 13.73V10.27L10.27 5.24H13.73L13.73 4Z"
                fill="white"
                opacity="0.9"
              />
              <path
                d="M12 8L12 12L16 16"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>
        <div className="">
          <img
            src="https://framerusercontent.com/images/7gAlhCkyadHMICtiDI2Q7eWIE.svg"
            alt=""
            className="w-300 h-50"
          />
        </div>

        {/* <div className="connection-lines">
          <div className="vertical-line"></div>
          <div className="vertical-line-1"></div>
          <div className="vertical-line-2"></div>
          <div className="horizontal-line"></div>
          <div className="horizontal-line-1"></div>
          <div className="branch-line branch-left"></div>
          <div className="branch-line branch-center-left"></div>
          <div className="branch-line branch-right"></div>
        </div> */}

        <div className="grid">
          <div className="card flex flex-col justify-items items-center">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24">
                <path
                  d="M6 9H4.5C3.12 9 2 10.12 2 11.5C2 12.88 3.12 14 4.5 14H6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 9H19.5C20.88 9 22 10.12 22 11.5C22 12.88 20.88 14 19.5 14H18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2L14.5 7L20 7.5L16 11.5L17 17L12 14.5L7 17L8 11.5L4 7.5L9.5 7L12 2Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Hover icons container */}
            <div className="icons-card">
              <div className="flex flex-row justify-items items-center text-white gap-2  hover-icons">
                <FaReact className="w-8 h-8" />
                <SiNextdotjs className="w-8 h-8" />
                <FaAngular className="w-8 h-8" />
                <SiJavascript className="w-8 h-8" />
                <SiTailwindcss className="w-8 h-8" />
                <SiBootstrap className="w-8 h-8" />
                <SiMongodb className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div className="card flex flex-col justify-items items-center">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6V12L16 14" />
              </svg>
            </div>

            <div className="flex flex-row justify-items items-center text-white gap-2  hover-icons">
              <SiCss3 className="w-8 h-8" />
              <SiHtml5 className="w-8 h-8" />
              <FaCode className="w-8 h-8" />
              <SiRedux className="w-8 h-8" />
              <FaVuejs className="w-8 h-8" />
              <FaAws className="w-8 h-8" />
              <FaSwift className="w-8 h-8" />
            </div>
          </div>

          <div className="card flex flex-col justify-items items-center">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-row justify-items items-center text-white gap-2  hover-icons">
              <FaNodeJs className="w-8 h-8" />
              <FaPython className="w-8 h-8" />
              <FaJava className="w-8 h-8" />
              <SiExpress className="w-8 h-8" />
              <SiReact className="w-8 h-8" />
              <SiFlutter className="w-8 h-8" />
              <SiKotlin className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="grid-bottom">
          <div className="card flex flex-col justify-items items-center">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-row justify-items items-center text-white gap-2  hover-icons">
              <SiGooglecloud className="w-8 h-8" />
              <FaDocker className="w-8 h-8" />
              <SiKubernetes className="w-8 h-8" />
              <SiGit className="w-8 h-8" />
              <FaCode className="w-8 h-8" />
              <SiFigma className="w-8 h-8" />
              <SiPostman className="w-8 h-8" />
            </div>
          </div>

          <div className="card flex flex-col justify-items items-center">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-row justify-items items-center text-white gap-2  hover-icons">
              <SiPostgresql className="w-8 h-8" />
              <SiMysql className="w-8 h-8" />
              <SiRedis className="w-8 h-8" />
              <SiOpenai className="w-8 h-8" />
              <SiTensorflow className="w-8 h-8" />
              <SiPytorch className="w-8 h-8" />
              <SiHuggingface className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
