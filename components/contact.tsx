"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Une erreur est survenue. Réessayez.");
    }
  };

  return (
    <section id="contact" className="container py-12 max-w-md mx-auto">
      <h2 className="text-3xl font-bold tracking-tighter mb-6">Contactez-moi</h2>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name">Nom</label>
            <Input id="name" value={formData.name} onChange={handleChange} placeholder="Votre nom" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Votre adresse email" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message">Message</label>
            <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Votre message" />
          </div>
          <Button type="submit">Envoyer</Button>
          {status && <p className="text-sm">{status}</p>}
        </div>
      </form>
    </section>
  );
}
