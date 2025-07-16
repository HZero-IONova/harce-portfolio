"use client";

import { useState } from "react";
import ButtonForm from "@/components/ButtonForm";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+52) 665 104 1623" },
  { icon: <FaEnvelope />, title: "Email", description: "rh.arce@outlook.com" },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Tijuana, B.C.N",
  },
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  pain: "",
  company: "",
  budget: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // 👉 Manejador específico para budget que sólo deja números y un punto
  const handleBudgetChange = (e) => {
    // Remueve TODO lo que no sea dígito o punto
    let clean = e.target.value.replace(/[^0-9.]/g, "");
    // Si hay más de un punto, deja sólo el primero
    const parts = clean.split(".");
    if (parts.length > 2) {
      clean = parts.shift() + "." + parts.join("");
    }
    setForm((prev) => ({ ...prev, budget: clean }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSubmitted(false);
        setForm(initialForm);
      }, 3000);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* ---------- Formulario ---------- */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">
                Let's Build Something Powerful
              </h3>

              <p className="text-white/60">
                Have a bold idea or a complex challenge? Let’s Architect Clarity
                and Advance with Precision.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                />
                <Input
                  name="lastName"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  type="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                <Input
                  name="company"
                  placeholder="Company"
                  value={form.company}
                  onChange={handleChange}
                />
                <Input
                  name="budget"
                  type="number" // mantenemos number para validación nativa
                  placeholder="Budget (USD)"
                  value={form.budget}
                  onChange={handleBudgetChange}
                />
              </div>

              <Select onValueChange={(v) => setForm({ ...form, service: v })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AI Automation">
                    🔁 Strategic Business Automation
                  </SelectItem>
                  <SelectItem value="Web Services">
                    🌐 High-Impact Web Presence
                  </SelectItem>
                  <SelectItem value="E-commerce">
                    🛒 Revenue-Driven Online Stores
                  </SelectItem>
                  <SelectItem value="Strategic Advisory">
                    🧠 Technical Strategy & Innovation
                  </SelectItem>
                  <SelectItem value="Custom">
                    🧩 Not sure yet — I need guidance
                  </SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                name="pain"
                className="h-[90px]"
                placeholder="Tell me about your pains… I will Fix them."
                value={form.pain}
                onChange={handleChange}
              />

              <div className="w-full flex flex-col items-center mt-2 space-y-2 md:space-y-4">
                <ButtonForm
                  text={
                    loading
                      ? "Sending..."
                      : submitted
                        ? "Done Deal!"
                        : "Send Message"
                  }
                  disabled={loading || submitted}
                  success={submitted}
                />
                {submitted && (
                  <p className="text-green-400 text-sm text-center animate-fadeIn">
                    We will contact you soon.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* ---------- Información lateral ---------- */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, i) => (
                <li key={i} className="flex items-center gap-6">
                  <div
                    className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                      bg-[#27272c] text-accent rounded-md
                      flex items-center justify-center"
                  >
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
