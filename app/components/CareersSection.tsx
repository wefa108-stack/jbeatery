"use client";

import React, { useState } from "react";

export default function CareersSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "Server",
    intro: "",
  });
  const [otherPosition, setOtherPosition] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const getEffectivePosition = () => {
    if (formData.position === "Other Position") {
      return otherPosition.trim() ? `Other (${otherPosition.trim()})` : "Other Position";
    }
    return formData.position;
  };

  const triggerMailto = (effectivePos: string) => {
    const subject = encodeURIComponent(`Job Application: ${effectivePos} - ${formData.name}`);
    const body = encodeURIComponent(
      `Job Application Details:\r\n` +
      `----------------------------------------\r\n` +
      `Name: ${formData.name.trim()}\r\n` +
      `Phone: ${formData.phone.trim()}\r\n` +
      `Email: ${formData.email.trim()}\r\n` +
      `Position: ${effectivePos}\r\n\r\n` +
      `About Myself:\r\n${formData.intro.trim()}\r\n\r\n` +
      `Attachment:\r\nResume: ${file ? file.name : "Not attached"}\r\n` +
      `----------------------------------------`
    );
    window.location.href = `mailto:wefa108@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validation Check: Required Fields
    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedIntro = formData.intro.trim();

    if (!trimmedName || !trimmedPhone || !trimmedEmail || !trimmedIntro) {
      setStatus("error");
      setStatusMessage("Please complete all required fields (Name, Phone, Email, Brief Self-Intro).");
      return;
    }

    // 2. Validation Check: If 'Other Position' is selected, custom position title must not be empty
    if (formData.position === "Other Position" && !otherPosition.trim()) {
      setStatus("error");
      setStatusMessage("Please specify your desired position title under 'Other Position'.");
      return;
    }

    // 3. Validation Check: Basic Email Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    const effectivePos = getEffectivePosition();
    setStatus("submitting");
    setStatusMessage("");

    try {
      const data = new FormData();
      data.append("name", trimmedName);
      data.append("phone", trimmedPhone);
      data.append("email", trimmedEmail);
      data.append("position", effectivePos);
      data.append("intro", trimmedIntro);
      if (file) {
        data.append("resume", file);
      }

      // Tier 1: Attempt native /api/careers API endpoint
      const res = await fetch("/api/careers", {
        method: "POST",
        body: data,
      });

      const resData = await res.json().catch(() => ({}));

      if (res.ok && resData.success) {
        setStatus("success");
        setStatusMessage("Thank you for your application! Your details have been sent to wefa108@gmail.com.");
        setFormData({ name: "", phone: "", email: "", position: "Server", intro: "" });
        setOtherPosition("");
        setFile(null);
        return;
      }

      // Tier 2: If /api/careers returns 404 (Cloudflare Pages static hosting without dynamic serverless routes), fallback to FormSubmit AJAX
      if (res.status === 404 || !res.ok) {
        console.warn("Primary API route not available (404/static host). Routing via FormSubmit service...");

        const fsData = new FormData();
        fsData.append("name", trimmedName);
        fsData.append("phone", trimmedPhone);
        fsData.append("email", trimmedEmail);
        fsData.append("position", effectivePos);
        fsData.append("intro", trimmedIntro);
        if (file) {
          fsData.append("attachment", file);
        }
        fsData.append("_subject", `Job Application: ${effectivePos} - ${trimmedName}`);
        fsData.append("_replyto", trimmedEmail);
        fsData.append("_captcha", "false");

        const fsRes = await fetch("https://formsubmit.co/ajax/wefa108@gmail.com", {
          method: "POST",
          body: fsData,
        });

        const fsResData = await fsRes.json().catch(() => ({}));

        if (fsRes.ok && (fsResData.success === "true" || fsResData.success === true)) {
          setStatus("success");
          setStatusMessage("Thank you for your application! Your details have been sent to wefa108@gmail.com.");
          setFormData({ name: "", phone: "", email: "", position: "Server", intro: "" });
          setOtherPosition("");
          setFile(null);
          return;
        } else {
          // Tier 3: Trigger Mailto fallback if both endpoints are unavailable
          triggerMailto(effectivePos);
          setStatus("success");
          setStatusMessage("Application pre-filled! Opening your email client to send to wefa108@gmail.com...");
          return;
        }
      }

    } catch (err: any) {
      console.error("Submission Exception:", err);
      // Final Fallback: Trigger Mailto if network fails
      triggerMailto(getEffectivePosition());
      setStatus("success");
      setStatusMessage("Application pre-filled! Opening your email client to send to wefa108@gmail.com...");
    }
  };

  return (
    <section id="careers-section" className="relative z-10 w-full py-16 md:py-24 px-6 md:px-12 bg-[#f8f2e9] text-[#231916] border-t border-[#3b2e28]/10">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center space-y-8">
        
        {/* Title Section (Huiwen Mingcho Font) */}
        <div className="space-y-3">
          <h2 className="font-huiwen text-base md:text-xl font-normal uppercase tracking-[0.25em] text-[#8c674b]">
            JOIN JBE
          </h2>
          <p className="font-huiwen text-xl md:text-3xl text-[#231916] leading-snug tracking-[0.02em] font-normal">
            We&apos;re looking for great people to grow with our team.
          </p>
          <p className="font-huiwen text-sm md:text-base text-[#3b2e28]/80 tracking-[0.15em] pt-1 font-normal">
            West Village &bull; New York
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full border-b border-[#231916]/20 my-4" />

        {/* Form Header (Huiwen Mingcho Font) */}
        <div className="space-y-2">
          <h3 className="font-huiwen text-base md:text-xl font-normal uppercase tracking-[0.2em] text-[#231916]">
            JOIN OUR TEAM
          </h3>
          <p className="font-huiwen text-base md:text-xl text-[#3b2e28]/90 font-normal leading-relaxed">
            Interested in working with us? Leave your information below.
          </p>
        </div>

        {/* Application Form (Clean Boxed Style matching design) */}
        <form onSubmit={handleSubmit} className="w-full text-left font-mono space-y-0 border border-[#231916]/30 shadow-xs bg-[#f8f2e9]/50">
          
          {/* Name Field */}
          <div className="border-b border-[#231916]/30 p-3.5 focus-within:bg-[#ffffff]/40 transition-colors">
            <label htmlFor="name" className="block text-[11px] uppercase tracking-[0.15em] text-[#3b2e28]/70 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Full Name"
              className="w-full bg-transparent text-sm text-[#231916] placeholder-[#3b2e28]/40 focus:outline-none"
            />
          </div>

          {/* Phone Field */}
          <div className="border-b border-[#231916]/30 p-3.5 focus-within:bg-[#ffffff]/40 transition-colors">
            <label htmlFor="phone" className="block text-[11px] uppercase tracking-[0.15em] text-[#3b2e28]/70 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(123) 456-7890"
              className="w-full bg-transparent text-sm text-[#231916] placeholder-[#3b2e28]/40 focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="border-b border-[#231916]/30 p-3.5 focus-within:bg-[#ffffff]/40 transition-colors">
            <label htmlFor="email" className="block text-[11px] uppercase tracking-[0.15em] text-[#3b2e28]/70 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className="w-full bg-transparent text-sm text-[#231916] placeholder-[#3b2e28]/40 focus:outline-none"
            />
          </div>

          {/* Position Selector */}
          <div className="border-b border-[#231916]/30 p-3.5 focus-within:bg-[#ffffff]/40 transition-colors relative">
            <label htmlFor="position" className="block text-[11px] uppercase tracking-[0.15em] text-[#3b2e28]/70 mb-1">
              Position
            </label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full bg-transparent text-sm text-[#231916] cursor-pointer focus:outline-none appearance-none pr-6"
            >
              <option value="Server">Server</option>
              <option value="Line Cook">Line Cook</option>
              <option value="Bartender">Bartender</option>
              <option value="Other Position">Other Position</option>
            </select>
            <div className="absolute right-4 bottom-4 pointer-events-none text-xs text-[#3b2e28]">
              &#9660;
            </div>
          </div>

          {/* Custom Position Text Field (Appears when 'Other Position' is selected) */}
          {formData.position === "Other Position" && (
            <div className="border-b border-[#231916]/30 p-3.5 bg-[#ffffff]/30 focus-within:bg-[#ffffff]/50 transition-colors animate-fade-in">
              <label htmlFor="otherPosition" className="block text-[11px] uppercase tracking-[0.15em] text-[#8c674b] font-medium mb-1">
                Please Specify Position Title
              </label>
              <input
                type="text"
                id="otherPosition"
                name="otherPosition"
                required={formData.position === "Other Position"}
                value={otherPosition}
                onChange={(e) => setOtherPosition(e.target.value)}
                placeholder="e.g. Sommelier, Host, Busser, Pastry Chef..."
                className="w-full bg-transparent text-sm text-[#231916] placeholder-[#3b2e28]/40 focus:outline-none"
              />
            </div>
          )}

          {/* Intro Field */}
          <div className="border-b border-[#231916]/30 p-3.5 focus-within:bg-[#ffffff]/40 transition-colors">
            <label htmlFor="intro" className="block text-[11px] uppercase tracking-[0.15em] text-[#3b2e28]/70 mb-1">
              Tell us briefly about yourself
            </label>
            <textarea
              id="intro"
              name="intro"
              rows={3}
              required
              value={formData.intro}
              onChange={handleInputChange}
              placeholder="Relevant experience, availability, etc."
              className="w-full bg-transparent text-sm text-[#231916] placeholder-[#3b2e28]/40 focus:outline-none resize-none"
            />
          </div>

          {/* Resume Upload */}
          <div className="p-3.5 bg-[#ffffff]/30 hover:bg-[#ffffff]/60 transition-colors">
            <label className="block text-[11px] uppercase tracking-[0.15em] text-[#3b2e28]/70 mb-1.5 cursor-pointer">
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx,.png,.jpg"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="resume"
              className="inline-flex items-center gap-2 cursor-pointer text-xs uppercase tracking-[0.15em] text-[#8c674b] hover:text-[#231916] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
              </svg>
              <span>{file ? file.name : "ATTACH RESUME (PDF/DOC)"}</span>
            </label>
          </div>

          {/* Submit Application Button inside form */}
          <div className="w-full pt-2 p-3.5 border-t border-[#231916]/20 bg-[#f8f2e9]">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full font-huiwen text-base md:text-lg uppercase tracking-[0.2em] text-[#231916] hover:text-[#8c674b] bg-transparent hover:bg-[#8c674b]/10 border border-[#231916]/40 transition-all duration-300 py-3.5 rounded-none cursor-pointer disabled:opacity-50"
            >
              {status === "submitting" ? "SUBMITTING..." : "SUBMIT APPLICATION"}
            </button>
          </div>

        </form>

        {/* Status Feedback Message */}
        {statusMessage && (
          <div
            className={`p-3.5 text-xs font-mono tracking-wider text-center w-full border ${
              status === "success"
                ? "bg-[#8c674b]/10 text-[#3b2e28] border-[#8c674b]/30"
                : "bg-amber-50 text-amber-800 border-amber-300/60"
            }`}
          >
            {statusMessage}
          </div>
        )}

      </div>
    </section>
  );
}
