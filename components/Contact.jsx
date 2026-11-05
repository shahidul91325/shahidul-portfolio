"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { AlertCircle, Check, Copy, Mail, MapPin, Phone, Send, X } from "lucide-react";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");
  const [copiedTarget, setCopiedTarget] = useState("");

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) nextErrors.email = "Please enter a valid email address.";
    if (!formData.subject.trim()) nextErrors.subject = "Please add a subject.";
    if (!formData.message.trim()) nextErrors.message = "Please enter a message.";
    else if (formData.message.trim().length < 10) nextErrors.message = "Please use at least 10 characters.";
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    if (submitStatus !== "idle") setSubmitStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) return;

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setSubmitStatus("error");
      setSubmitError("The contact form is not configured. Please email me directly.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitError("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        setSubmitStatus("error");
        setSubmitError(result?.errors?.map((error) => error.message).join(" ") || "The message could not be sent. Please try again or email me directly.");
        return;
      }
      setSubmitStatus("success");
      setFormData(initialForm);
      setErrors({});
    } catch {
      setSubmitStatus("error");
      setSubmitError("A network issue prevented the message from being sent. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyValue = async (text, target) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedTarget(target);
      window.setTimeout(() => setCopiedTarget(""), 1800);
    } catch {
      setCopiedTarget("");
    }
  };

  const fieldClass = (field) => `contact-input ${errors[field] ? "contact-input-error" : ""}`;

  return (
    <section id="contact" className="section-wrap contact-section">
      <SectionHeading
        eyebrow="Get in touch"
        title={<>Have something in mind? <span className="text-gradient-cyan">Let&apos;s talk.</span></>}
        description="For project inquiries, collaboration, or a conversation about full-stack development, send me a message."
      />

      <div className="contact-layout">
        <aside className="contact-sidebar">
          <div className="contact-panel surface-card">
            <span className="eyebrow">Contact details</span>
            <h3>Reach me directly</h3>
            <p className="contact-panel-intro">Choose the channel that works best for you.</p>

            <div className="contact-detail-list">
              <div className="contact-detail-card">
                <span className="contact-detail-icon"><Mail size={18} /></span>
                <div className="contact-detail-copy"><small>Email</small><a href={`mailto:${profileData.email}`}>{profileData.email}</a></div>
                <button type="button" className="contact-copy-button" onClick={() => copyValue(profileData.email, "email")} aria-label="Copy email address" title="Copy email">
                  {copiedTarget === "email" ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </div>
              <div className="contact-detail-card">
                <span className="contact-detail-icon"><Phone size={18} /></span>
                <div className="contact-detail-copy"><small>Phone</small><a href={`tel:${profileData.phone}`}>{profileData.phone}</a></div>
                <button type="button" className="contact-copy-button" onClick={() => copyValue(profileData.phone, "phone")} aria-label="Copy phone number" title="Copy phone">
                  {copiedTarget === "phone" ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </div>
              <div className="contact-detail-card">
                <span className="contact-detail-icon"><MapPin size={18} /></span>
                <div className="contact-detail-copy"><small>Location</small><span>{profileData.location}</span></div>
              </div>
            </div>

            <div className="contact-social-row">
              <a href={profileData.github} target="_blank" rel="noopener noreferrer"><GithubIcon className="w-[17px] h-[17px]" /> GitHub</a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon className="w-[17px] h-[17px]" /> LinkedIn</a>
            </div>
          </div>
          <div className="contact-aside-note"><span className="contact-aside-mark">MSI</span><p>Full-stack web development<br />Dhaka, Bangladesh</p></div>
        </aside>

        <div className="contact-form-panel surface-card">
          <div className="contact-form-heading"><span className="eyebrow">Send a message</span><h3>Tell me a little about it.</h3><p>Fields marked with * are required.</p></div>

          <div className={`contact-status contact-status-success ${submitStatus === "success" ? "contact-status-visible" : ""}`} role="status" aria-live="polite">
            <Check size={17} /><span>Your message was accepted. Thank you for reaching out.</span>
          </div>
          {submitStatus === "error" && <div className="contact-status contact-status-error" role="alert"><X size={17} /><span>{submitError}</span></div>}

          <form onSubmit={handleSubmit} noValidate className="contact-form">
            <div className="contact-fields-two">
              <div className="contact-field"><label htmlFor="contact-name">Name <span>*</span></label><input className={fieldClass("name")} id="contact-name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} placeholder="Your name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />{errors.name && <small className="contact-field-error" id="contact-name-error"><AlertCircle size={13} />{errors.name}</small>}</div>
              <div className="contact-field"><label htmlFor="contact-email">Email <span>*</span></label><input className={fieldClass("email")} type="email" id="contact-email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} />{errors.email && <small className="contact-field-error" id="contact-email-error"><AlertCircle size={13} />{errors.email}</small>}</div>
            </div>
            <div className="contact-field"><label htmlFor="contact-subject">Subject <span>*</span></label><input className={fieldClass("subject")} id="contact-subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project inquiry, collaboration..." aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "contact-subject-error" : undefined} />{errors.subject && <small className="contact-field-error" id="contact-subject-error"><AlertCircle size={13} />{errors.subject}</small>}</div>
            <div className="contact-field"><label htmlFor="contact-message">Message <span>*</span></label><textarea className={fieldClass("message")} id="contact-message" name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Share the details, goals, or questions..." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} />{errors.message && <small className="contact-field-error" id="contact-message-error"><AlertCircle size={13} />{errors.message}</small>}</div>
            <button className="contact-submit button-primary" type="submit" disabled={isSubmitting}><span>{isSubmitting ? "Sending message…" : "Send message"}</span>{isSubmitting ? <span className="contact-spinner" aria-hidden="true" /> : <Send size={16} />}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
