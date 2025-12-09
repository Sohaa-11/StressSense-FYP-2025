import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoIosCloudUpload } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineBarChart } from "react-icons/md";

const HowItWorks = () => {
  return (
    <>
    <Navbar/>
    <section className="how-section">
      <h2 className="section-title">How Stress Sense Works</h2>
      <p className="section-subtitle">
        Understand the process of AI-powered stress detection in just three simple steps.
      </p>

      <div className="steps">
        {/* Step 1 */}
        <div className="step">
          <div className="icon-circle">
            <IoIosCloudUpload size={40} />
          </div>
          <h3>Upload Your Data</h3>
          <p>
            Start by uploading a video file in{" "}
            <strong> MP4, or MOV format</strong>, ensuring the file size is under 5MB.
            Once uploaded, our <strong>AI system will analyze your voice patterns and facial
            expressions</strong> to detect stress levels with precision.
          </p>
        </div>

        {/* Step 2 */}
        <div className="step">
          <div className="icon-circle">
            <LuBrainCircuit size ={40} /> 
          </div>
          <h3>AI Stress Analysis</h3>
          <p>
            Our advanced <strong>AI model</strong> accurately detects stress levels by analyzing{" "}
            <strong>vocal patterns, tone variations, and facial expressions</strong> in audio and
            video inputs. The process takes just <strong>a few seconds</strong>, providing a quick
            and precise interpretation of your stress levels.
          </p>
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="icon-circle">
             <MdOutlineBarChart size={40} /> 
          </div>
          <h3>Get Your Results</h3>
          <p>
            View a <strong>detailed report</strong> of your stress levels, including insights on{" "}
            <strong>voice tone variations, stress triggers, and relaxation tips</strong>. Use this
            to improve your <strong>mental well-being</strong> and track stress levels over time for
            better self-awareness and management.
          </p>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default HowItWorks;
