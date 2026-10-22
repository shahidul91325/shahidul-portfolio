"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  // 'idle' | 'success' | 'error'
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter an inquiry subject.";
    if (!formData.message.trim()) {
      errs.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message should be at least 10 characters long.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setSubmitStatus("error");
      setSubmitError(
        "Contact form is not configured yet. The site owner needs to set NEXT_PUBLIC_FORMSPREE_ENDPOINT in their environment variables."
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitError("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        const msg =
          data?.errors?.map((err) => err.message).join(" ") ||
          "Submission failed. Please try again or email me directly.";
        setSubmitStatus("error");
        setSubmitError(msg);
      }
    } catch {
      setSubmitStatus("error");
      setSubmitError(
        "Network error — please check your connection and try again, or email me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text, type) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#060911]/95 bg-grid-pattern">
      {/* Background ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-gradient-to-t from-sky-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Have a project in mind, need a full-stack developer, or simply want to connect? Send a message or reach out directly.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090f1d]/85 border border-slate-800/90 shadow-xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Direct Contact Info
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Feel free to email or call directly. I typically respond within 24 hours.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/35 transition-all flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 shrink-0 group-hover:bg-sky-500/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 font-medium">Email Address</p>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm font-bold text-slate-100 hover:text-sky-400 truncate block transition-colors"
                      title={profileData.email}
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(profileData.email, "email")}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/35 transition-all flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 shrink-0 group-hover:bg-sky-500/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 font-medium">Phone Number</p>
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-sm font-bold text-slate-100 hover:text-sky-400 block transition-colors"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(profileData.phone, "phone")}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label="Copy phone number"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Location</p>
                  <p className="text-sm font-bold text-slate-100">
                    {profileData.location}
                  </p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 border-t border-slate-800/80">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Connect on Socials
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-slate-200 hover:text-white text-sm font-bold transition shadow-xs"
                    aria-label="Shahidul Islam GitHub profile (opens in new tab)"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-sky-400 hover:text-sky-300 text-sm font-bold transition shadow-xs"
                    aria-label="Shahidul Islam LinkedIn profile (opens in new tab)"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090f1d]/85 border border-slate-800/90 shadow-xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Fill in the details below to dispatch your message directly to my inbox.
                </p>
              </div>

              {/* Success banner */}
              {submitStatus === "success" && (
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-100 text-sm">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Message sent successfully!</p>
                      <p className="text-xs text-emerald-200 mt-0.5 leading-relaxed">
                        Thank you for reaching out. Your message has been delivered to{" "}
                        <span className="font-mono text-white font-semibold">{profileData.email}</span>.
                        I typically respond within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error banner */}
              {submitStatus === "error" && (
                <div className="p-4 sm:p-5 rounded-2xl bg-rose-950/70 border border-rose-500/40 text-rose-100 text-sm">
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Could not send message</p>
                      <p className="text-xs text-rose-200 mt-0.5 leading-relaxed">{submitError}</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-bold text-slate-200">
                      Your Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Tanvir Ahmed"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-900/90 text-white placeholder-slate-500 text-sm border focus:outline-none focus:ring-2 transition min-h-[48px] ${
                        errors.name
                          ? "border-rose-500 focus:ring-rose-500/50"
                          : "border-slate-800 focus:border-sky-400 focus:ring-sky-400/30"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-bold text-slate-200">
                      Email Address <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-900/90 text-white placeholder-slate-500 text-sm border focus:outline-none focus:ring-2 transition min-h-[48px] ${
                        errors.email
                          ? "border-rose-500 focus:ring-rose-500/50"
                          : "border-slate-800 focus:border-sky-400 focus:ring-sky-400/30"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-200">
                    Subject <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity / Web Development"
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-900/90 text-white placeholder-slate-500 text-sm border focus:outline-none focus:ring-2 transition min-h-[48px] ${
                      errors.subject
                        ? "border-rose-500 focus:ring-rose-500/50"
                        : "border-slate-800 focus:border-sky-400 focus:ring-sky-400/30"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-bold text-slate-200">
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or requirements..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-900/90 text-white placeholder-slate-500 text-sm border focus:outline-none focus:ring-2 resize-y transition ${
                      errors.message
                        ? "border-rose-500 focus:ring-rose-500/50"
                        : "border-slate-800 focus:border-sky-400 focus:ring-sky-400/30"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-black text-sm sm:text-base text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-300 hover:from-sky-300 hover:to-cyan-200 shadow-lg shadow-sky-500/25 transition-all duration-200 hover:scale-[1.01] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[50px]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-slate-950" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400 pt-1 font-medium">
                  Your message is delivered securely via Formspree directly to{" "}
                  <span className="text-sky-300 font-semibold">{profileData.email}</span>.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
