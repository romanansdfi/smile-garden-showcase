import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight, Award, CalendarDays, Check, ChevronRight, Clock3, Facebook,
  HeartHandshake, Instagram, Leaf, Mail, MapPin, Menu, MessageCircle, Phone,
  ShieldCheck, Sparkles, Stethoscope, Syringe, X, Youtube, Zap,
} from "lucide-react";
import { SiteButton } from "../components/site-button";
import heroImage from "../assets/dental-hero.jpg";
import clinicImage from "../assets/clinic-interior.jpg";
import galleryImage from "../assets/dental-gallery.jpg";
import teamImage from "../assets/dental-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smile Garden Dental Clinic | Where Your Smile Grows" },
      { name: "description", content: "Explore a proposed premium website experience for Smile Garden Dental Clinic, featuring modern care and a calm, patient-first approach." },
      { property: "og:title", content: "Smile Garden Dental Clinic | Where Your Smile Grows" },
      { property: "og:description", content: "A premium website concept for thoughtful, modern dental care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Stethoscope, title: "General Dentistry", copy: "Thoughtful routine care designed around lasting oral health." },
  { icon: Sparkles, title: "Cosmetic Dentistry", copy: "Refined treatments that celebrate your natural smile." },
  { icon: ShieldCheck, title: "Dental Implants", copy: "Modern restorative options planned with precision and care." },
  { icon: Zap, title: "Root Canal Treatment", copy: "Comfort-focused treatment to protect and preserve your tooth." },
  { icon: Award, title: "Orthodontics", copy: "Personalized alignment options for confident, healthy smiles." },
  { icon: Syringe, title: "Teeth Whitening", copy: "Professionally guided care for a naturally brighter smile." },
];

const benefits = [
  { icon: Award, title: "Experienced Dental Care", copy: "A considered approach to every stage of your care journey." },
  { icon: Zap, title: "Modern Technology", copy: "Contemporary tools supporting precise, efficient treatment." },
  { icon: Leaf, title: "Comfortable Environment", copy: "Calm spaces created to make every visit feel reassuring." },
  { icon: HeartHandshake, title: "Personalized Treatment", copy: "Clear plans shaped around your needs and priorities." },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className={`flex items-center gap-3 ${light ? "text-primary-foreground" : "text-primary"}`} aria-label="Smile Garden Dental Clinic home">
      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${light ? "bg-primary-foreground/10" : "bg-leaf-pale"}`}>
        <Leaf className="h-6 w-6" strokeWidth={1.7} />
      </span>
      <span className="leading-none">
        <strong className="block font-serif text-xl font-bold">Smile Garden</strong>
        <span className="mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.2em]">Dental Clinic</span>
      </span>
    </a>
  );
}

function SectionTitle({ eyebrow, title, copy, centered = false }: { eyebrow: string; title: string; copy?: string; centered?: boolean }) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-secondary">{eyebrow}</p>
      <h2 className="text-4xl font-semibold leading-[1.05] text-primary sm:text-5xl">{title}</h2>
      {copy && <p className="mt-5 leading-7 text-muted-foreground">{copy}</p>}
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navItems = ["Home", "About", "Services", "Our Doctors", "Gallery", "Contact"];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main id="home" className="bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
        <div className="section-shell grid min-h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-sm font-medium text-foreground transition hover:text-secondary">{item}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 xl:flex">
            <a href="#appointment" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-soft"><CalendarDays className="h-4 w-4" /> Book Appointment</a>
            <a href="#contact" aria-label="Contact on WhatsApp" className="grid h-11 w-11 place-items-center rounded-full border border-primary/20 text-primary transition hover:bg-leaf-pale"><MessageCircle className="h-5 w-5" /></a>
          </div>
          <SiteButton className="h-11 w-11 p-0 lg:hidden" variant="secondary" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </SiteButton>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-4 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="section-shell grid gap-1">
              {navItems.map((item) => <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase().replace(" ", "-")}`} className="rounded-lg px-4 py-3 font-medium hover:bg-leaf-pale">{item}</a>)}
              <a href="#appointment" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-5 font-semibold text-primary-foreground">Book Appointment</a>
            </div>
          </nav>
        )}
      </header>

      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-primary">
        <img src={heroImage} alt="Smiling patient in a calm, modern dental clinic" width={1440} height={1104} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[64%_center] opacity-75" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--primary)_0%,color-mix(in_oklab,var(--primary)_88%,transparent)_38%,color-mix(in_oklab,var(--primary)_22%,transparent)_75%,color-mix(in_oklab,var(--primary)_8%,transparent)_100%)]" />
        <div className="section-shell relative flex min-h-[calc(100svh-5rem)] items-center py-16">
          <div className="max-w-2xl text-primary-foreground">
            <div className="mb-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em]"><span className="h-px w-9 bg-leaf" /> Welcome to Smile Garden</div>
            <h1 className="text-5xl font-semibold leading-[0.94] sm:text-7xl lg:text-[6.2rem]">Healthy Smiles.<br /><em className="font-medium text-leaf">Brighter Futures.</em></h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-primary-foreground/80 sm:text-lg">Your trusted dental clinic for comprehensive care, modern treatments, and a healthier, more confident smile.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#appointment" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-leaf px-7 font-bold text-primary transition hover:brightness-105">Book an Appointment <ArrowRight className="h-4 w-4" /></a>
              <a href="#services" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-primary-foreground/35 bg-primary-foreground/10 px-7 font-semibold text-primary-foreground backdrop-blur-sm transition hover:bg-primary-foreground/20">Explore Our Services</a>
            </div>
          </div>
          <div className="leaf-drift absolute bottom-12 right-4 hidden max-w-[16rem] items-center gap-3 text-primary-foreground lg:flex"><Leaf className="h-12 w-12 text-leaf" strokeWidth={1} /><span className="font-script text-3xl leading-tight">Where Your<br />Smile Grows</span></div>
        </div>
        <a href="#services" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/70 md:block">Discover <span className="ml-2">↓</span></a>
      </section>

      <section id="services" className="py-24 sm:py-32">
        <div className="section-shell">
          <SectionTitle eyebrow="Our services" title="Complete Dental Care, Thoughtfully Delivered" copy="From everyday care to advanced treatments, every service is designed to feel clear, comfortable, and considered." />
          <div className="mt-14 grid border-y border-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, copy }, index) => (
              <article key={title} className={`group relative p-7 transition duration-300 hover:bg-card sm:p-9 ${index % 3 !== 2 ? "lg:border-r" : ""} ${index < 3 ? "border-b" : ""} border-border`}>
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-full bg-leaf-pale text-primary transition group-hover:bg-leaf"><Icon className="h-5 w-5" strokeWidth={1.6} /></div>
                <h3 className="text-2xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{copy}</p>
                <a href="#appointment" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">Learn More <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-ivory-deep py-24 sm:py-32">
        <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative">
            <img src={clinicImage} alt="Demo view of a premium dental treatment room" width={1200} height={1008} loading="lazy" className="image-wash aspect-[5/6] w-full rounded-[2rem] object-cover" />
            <div className="absolute -bottom-6 right-5 max-w-52 rounded-2xl bg-primary p-5 text-primary-foreground shadow-xl sm:right-[-1.5rem]"><p className="font-serif text-2xl">Calm by design.</p><p className="mt-1 text-xs leading-5 text-primary-foreground/70">A welcoming setting for thoughtful care.</p></div>
          </div>
          <div>
            <SectionTitle eyebrow="About us" title="More Than Just a Dental Clinic" copy="We believe exceptional dental care begins by listening. Our proposed patient experience brings modern treatment, an inviting environment, and a personalized approach together in one calm, confident journey." />
            <p className="mt-5 leading-7 text-muted-foreground">From the first conversation to every follow-up, the focus stays on comfort, clarity, and helping each patient feel genuinely cared for.</p>
            <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {["Patient-Centered Care", "Modern Treatments", "Personalized Approach"].map((item) => <div key={item}><Check className="mb-3 h-5 w-5 text-secondary" /><p className="text-sm font-bold text-primary">{item}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="our-doctors" className="py-24 sm:py-32">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionTitle eyebrow="Our team" title="Meet Our Dental Team" copy="A preview of how the clinic's professionals can be introduced. Final profiles will use verified clinic details." /><span className="w-fit rounded-full bg-leaf-pale px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">Demo profiles</span></div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {["Dental Professional 01", "Dental Professional 02", "Dental Professional 03"].map((name, index) => (
              <article key={name} className="group overflow-hidden rounded-2xl bg-card shadow-[0_18px_50px_-36px_color-mix(in_oklab,var(--primary)_50%,transparent)]">
                <div className="aspect-[4/4.5] overflow-hidden"><img src={teamImage} alt={`${name} demo profile placeholder`} width={1200} height={912} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" style={{ objectPosition: [`15% center`, `50% center`, `86% center`][index] }} /></div>
                <div className="p-6"><span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-secondary">Placeholder profile</span><h3 className="mt-2 text-2xl font-semibold text-primary">{name}</h3><p className="mt-2 text-sm font-semibold text-foreground">Qualification · Specialty</p><p className="mt-3 text-sm leading-6 text-muted-foreground">Verified biography and clinical credentials to be provided by the clinic.</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-primary-foreground sm:py-28">
        <div className="section-shell">
          <SectionTitle eyebrow="Why Smile Garden" title="Care That Feels Different" centered />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, copy }) => <article key={title} className="bg-primary p-8"><Icon className="h-8 w-8 text-leaf" strokeWidth={1.4} /><h3 className="mt-7 text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/65">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 sm:py-32">
        <div className="section-shell">
          <SectionTitle eyebrow="A closer look" title="The Smile Garden Experience" copy="A visual framework for the clinic's future photography. All images shown here are presentation placeholders." />
          <div className="mt-14 grid auto-rows-[15rem] gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {[
              [clinicImage, "Clinic Interior", "lg:col-span-7 lg:row-span-2"], [galleryImage, "Modern Equipment", "lg:col-span-5"], [teamImage, "Our Team", "lg:col-span-5"], [heroImage, "Patient Experience", "lg:col-span-5"], [galleryImage, "Dental Treatment", "lg:col-span-7"],
            ].map(([image, label, classes]) => <figure key={label} className={`group relative overflow-hidden rounded-2xl ${classes}`}><img src={image} alt={`${label} demo image`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" /><figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-[linear-gradient(transparent,color-mix(in_oklab,var(--primary)_90%,transparent))] p-6 pt-16 text-primary-foreground"><span className="font-serif text-2xl">{label}</span><span className="text-[0.6rem] font-bold uppercase tracking-[0.16em]">Demo image</span></figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="botanical-grid bg-leaf-pale py-24 sm:py-32">
        <div className="section-shell">
          <SectionTitle eyebrow="Kind words" title="A Patient-First Impression" centered copy="Sample content showing how verified patient experiences could be presented on the final website." />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {["The atmosphere felt calm and every step was explained with care.", "A thoughtful, comfortable experience from the first welcome onward.", "The proposed patient journey feels clear, modern, and genuinely reassuring."].map((quote, index) => <blockquote key={quote} className="rounded-2xl border border-primary/10 bg-background p-8"><span className="text-5xl leading-none text-gold">“</span><p className="mt-3 font-serif text-2xl leading-snug text-primary">{quote}</p><footer className="mt-8 border-t border-border pt-5 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Demo testimonial {String(index + 1).padStart(2, "0")} · Not a patient review</footer></blockquote>)}
          </div>
        </div>
      </section>

      <section id="appointment" className="bg-primary py-24 text-primary-foreground sm:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-leaf">Appointment request</p><h2 className="text-5xl font-semibold leading-none sm:text-6xl">Ready to Grow Your Smile?</h2><p className="mt-6 max-w-md leading-7 text-primary-foreground/70">Share your preferred time and treatment. This demo form does not send or store information.</p><a href="#contact" className="mt-9 inline-flex items-center gap-3 border-b border-leaf pb-2 font-semibold"><MessageCircle className="h-5 w-5 text-leaf" /> Continue with WhatsApp</a></div>
          <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl bg-background p-5 text-foreground sm:grid-cols-2 sm:p-8">
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em]">Full Name<input required className="h-12 rounded-lg border border-input bg-background px-4 text-sm font-normal normal-case outline-none transition focus:border-secondary" placeholder="Your name" /></label>
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em]">Phone Number<input required type="tel" className="h-12 rounded-lg border border-input bg-background px-4 text-sm font-normal normal-case outline-none transition focus:border-secondary" placeholder="Your phone" /></label>
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em]">Email<input required type="email" className="h-12 rounded-lg border border-input bg-background px-4 text-sm font-normal normal-case outline-none transition focus:border-secondary" placeholder="you@example.com" /></label>
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em]">Select Service<select required defaultValue="" className="h-12 rounded-lg border border-input bg-background px-4 text-sm font-normal normal-case outline-none transition focus:border-secondary"><option value="" disabled>Choose a service</option>{services.map(({ title }) => <option key={title}>{title}</option>)}</select></label>
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em]">Preferred Date<input required type="date" className="h-12 rounded-lg border border-input bg-background px-4 text-sm font-normal normal-case outline-none transition focus:border-secondary" /></label>
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em]">Preferred Time<input required type="time" className="h-12 rounded-lg border border-input bg-background px-4 text-sm font-normal normal-case outline-none transition focus:border-secondary" /></label>
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em] sm:col-span-2">Message<textarea rows={4} className="rounded-lg border border-input bg-background p-4 text-sm font-normal normal-case outline-none transition focus:border-secondary" placeholder="How can we help?" /></label>
            <div className="sm:col-span-2"><SiteButton type="submit" className="w-full sm:w-auto">Request Appointment <ArrowRight className="h-4 w-4" /></SiteButton>{submitted && <p role="status" className="mt-4 flex items-center gap-2 text-sm font-semibold text-secondary"><Check className="h-4 w-4" /> Demo complete — no information was sent.</p>}</div>
          </form>
        </div>
      </section>

      <section id="contact" className="py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-2">
          <div><SectionTitle eyebrow="Visit us" title="Let’s Start a Conversation" copy="The final website can display the clinic's verified location and contact details here." />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[{ icon: MapPin, label: "Address", value: "Clinic address to be provided" }, { icon: Phone, label: "Phone & WhatsApp", value: "Contact number to be provided" }, { icon: Mail, label: "Email", value: "Email address to be provided" }, { icon: Clock3, label: "Opening Hours", value: "Clinic hours to be provided" }].map(({ icon: Icon, label, value }) => <div key={label} className="border-t border-border pt-5"><Icon className="h-5 w-5 text-secondary" /><p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">{label}</p><p className="mt-2 text-sm font-semibold text-primary">{value}</p></div>)}
            </div>
          </div>
          <div className="grid min-h-[25rem] place-items-center rounded-2xl border border-primary/10 bg-ivory-deep text-center"><div><MapPin className="mx-auto h-10 w-10 text-secondary" strokeWidth={1.4} /><h3 className="mt-5 text-3xl font-semibold text-primary">Map Placeholder</h3><p className="mt-2 text-sm text-muted-foreground">Verified clinic location will appear here.</p></div></div>
        </div>
      </section>

      <footer className="bg-primary pb-24 pt-16 text-primary-foreground md:pb-8">
        <div className="section-shell grid gap-12 border-b border-primary-foreground/15 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div><Logo light /><p className="mt-6 font-serif text-2xl italic text-leaf">Where Your Smile Grows</p><p className="mt-4 max-w-xs text-sm leading-6 text-primary-foreground/60">A premium website concept prepared for Smile Garden Dental Clinic.</p></div>
          <div><h3 className="font-sans text-sm font-bold uppercase tracking-[0.16em]">Quick Links</h3><div className="mt-5 grid gap-3 text-sm text-primary-foreground/65">{navItems.slice(0, 5).map((item) => <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-leaf">{item}</a>)}</div></div>
          <div><h3 className="font-sans text-sm font-bold uppercase tracking-[0.16em]">Services</h3><div className="mt-5 grid gap-3 text-sm text-primary-foreground/65">{services.slice(0, 5).map(({ title }) => <a key={title} href="#services" className="hover:text-leaf">{title}</a>)}</div></div>
          <div><h3 className="font-sans text-sm font-bold uppercase tracking-[0.16em]">Contact</h3><div className="mt-5 grid gap-3 text-sm text-primary-foreground/65"><p>Address to be provided</p><p>Phone to be provided</p><p>Email to be provided</p></div><div className="mt-6 flex gap-2">{[Instagram, Facebook, Youtube].map((Icon, index) => <a key={index} href="#contact" aria-label={["Instagram", "Facebook", "YouTube"][index]} className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 hover:border-leaf hover:text-leaf"><Icon className="h-4 w-4" /></a>)}</div></div>
        </div>
        <div className="section-shell mt-8 flex flex-col gap-2 text-xs text-primary-foreground/45 sm:flex-row sm:justify-between"><p>© 2026 Smile Garden Dental Clinic. Presentation concept.</p><p>All content shown for demonstration purposes.</p></div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 rounded-2xl border border-border bg-background/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">
        <a href="#appointment" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-3 text-sm font-bold text-primary-foreground"><CalendarDays className="h-4 w-4" /> Book</a>
        <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-leaf px-3 text-sm font-bold text-primary"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
      </div>
    </main>
  );
}