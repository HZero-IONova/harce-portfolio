import { useState } from "react";
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

/* --- Información lateral --- */
const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+52) 665 104 1623" },
  { icon: <FaEnvelope />, title: "Email", description: "rh.arce@outlook.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Tijuana, B.C.N" },
];

/* --- Estado inicial formulario --- */
const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export const metadata = {
  title: "Contact | Hiram Arce",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    alert(res.ok ? "¡Message Sent! 🙌" : "There was an error 😞");
    if (res.ok) setForm(initialForm);
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
              <h3 className="text-4xl text-accent">Let's work together</h3>

              <p className="text-white/60">
                Have a bold idea or a complex challenge? I turn vision into
                reliable, high‑impact digital solutions—on time and on budget.
                Reach out and let’s craft something remarkable.
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
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <Select onValueChange={(v) => setForm({ ...form, service: v })}>
                <SelectValue placeholder="Select a service"></SelectValue>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="portfolio">
                    Web Portfolio / Landing Page
                  </SelectItem>
                  <SelectItem value="pplatform">
                    Microsoft Power Platform
                  </SelectItem>
                  <SelectItem value="ecommerce">E‑commerce Site</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[180px]"
                placeholder="Tell me about your project…"
                value={form.message}
                onChange={handleChange}
              />

              <Button type="submit" disabled={loading} className="max-w-40">
                {loading ? "Sending…" : "Send message"}
              </Button>
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
