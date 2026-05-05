/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Zap, Construction, Settings, Layers, CheckCircle2, Phone, ArrowRight, Menu, X } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const WA_URL = "https://wa.me/5493516763238?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto.";
const IG_URL = "https://www.instagram.com/cioflex.ok";

// --- Components ---

const WhatsAppButton = () => (
  <motion.a
    href={WA_URL}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-shadow"
    aria-label="Contactar por WhatsApp"
  >
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.847L.057 23.625a.75.75 0 0 0 .918.918l5.808-1.484A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.705 9.705 0 0 1-4.953-1.355l-.355-.21-3.683.941.972-3.562-.23-.368A9.706 9.706 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
    </svg>
  </motion.a>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img 
            src={isScrolled ? "/logos/logo.png" : "/logos/logo-white.png"} 
            alt="CIOFLEX Logo" 
            className="h-12 md:h-16 w-auto object-contain transition-all duration-300 transform group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(58,134,255,0.6)]" 
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium transition-colors hover:text-brand-blue ${isScrolled ? "text-brand-dark" : "text-white"}`}
            >
              {link.name}
            </a>
          ))}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="bg-brand-blue hover:shadow-[0_0_15px_rgba(58,134,255,0.5)] text-white px-6 py-2 rounded-full font-semibold transition-all">
            Solicitar presupuesto
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? "text-brand-dark" : "text-white"} /> : <Menu className={isScrolled ? "text-brand-dark" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl py-6 px-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-brand-dark font-medium text-lg border-b border-gray-100 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="bg-brand-blue text-white py-3 rounded-xl font-bold mt-2 text-center">
            Solicitar presupuesto
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="inicio" className="relative h-screen flex items-center overflow-hidden bg-brand-dark">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/images/hero-bg.jpeg"
        alt="Montaje de stands en evento"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-32">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6 text-balance">
          Montajes y soluciones técnicas <br className="hidden md:block" /> con <span className="text-brand-blue animate-pulse drop-shadow-[0_0_15px_rgba(58,134,255,0.7)]">adaptabilidad total</span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
          Especialistas en stands, iluminación LED y mantenimiento industrial. 
          Diseñamos proyectos únicos adaptados a sus necesidades específicas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-yellow text-white hover:text-brand-dark px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-brand-yellow/30">
            Solicitar presupuesto <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#proyectos" className="flex items-center justify-center bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-all border border-white/10">
            Nuestros trabajos
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const items = [
    { 
      id: "serv-1",
      icon: <Layers className="w-10 h-10" />, 
      title: "Armado de Stands", 
      desc: "Diseño y montaje para ferias y eventos. 26 años materializando espacios de alto impacto." 
    },
    { 
      id: "serv-2",
      icon: <Zap className="w-10 h-10" />, 
      title: "Iluminación LED", 
      desc: "Instalación de luminarias, carteles y letras corpóreas retroiluminadas de última generación." 
    },
    { 
      id: "serv-3",
      icon: <Construction className="w-10 h-10" />, 
      title: "Instalaciones Eléctricas", 
      desc: "Servicios domiciliarios y comerciales con personal matriculado. Seguridad y normativa vigente." 
    },
    { 
      id: "serv-4",
      icon: <Settings className="w-10 h-10" />, 
      title: "Mantenimiento Integral", 
      desc: "Electricidad, plomería (gasista matriculado), albañilería, pintura y fibrado de techos." 
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestras Especialidades</h2>
          <div className="w-20 h-1.5 bg-brand-blue mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Todos nuestros trabajos son a medida, adaptados a las necesidades del cliente y al espacio disponible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-brand-yellow hover:-translate-y-2"
            >
              <div className="text-brand-blue group-hover:text-brand-yellow transition-colors mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="nosotros" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-brand-dark">
            <img
              src="/images/about.jpeg"
              alt="Stand IR Argentina - CIOFLEX"
              className="w-full h-auto opacity-90 hover:opacity-100 transition-all duration-700 hover:scale-105"
            />
          </div>
          {/* Decorative frame */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-brand-yellow rounded-tl-3xl z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-brand-blue rounded-br-3xl z-0"></div>
        </motion.div>

        <div className="lg:w-1/2">
          <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block">Trayectoria y Confianza</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Infraestructura propia y equipo especializado</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Contamos con un equipo de trabajo de 10 personas y maquinaria propia para garantizar el cumplimiento de plazos y la máxima calidad en cada entrega.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-gray-50 p-4 rounded-2xl border-l-4 border-brand-yellow">
              <span className="text-3xl font-bold text-brand-dark">26 años</span>
              <p className="text-gray-500 text-sm">Armado de Stands</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl border-l-4 border-brand-blue">
              <span className="text-3xl font-bold text-brand-dark">10 años</span>
              <p className="text-gray-500 text-sm">Electricidad</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl border-l-4 border-brand-dark">
              <span className="text-3xl font-bold text-brand-dark">25 años</span>
              <p className="text-gray-500 text-sm">Mantenimiento General</p>
            </div>
            <div className="bg-brand-blue p-4 rounded-2xl">
              <span className="text-3xl font-bold text-white">Todo el País</span>
              <p className="text-blue-100 text-sm">Cobertura Nacional</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-brand-dark font-bold">
              <CheckCircle2 className="text-brand-blue w-5 h-5" /> Cobertura en eventos y ferias
            </div>
            <div className="flex items-center gap-2 text-brand-dark font-bold">
              <CheckCircle2 className="text-brand-blue w-5 h-5" /> Locales comerciales y empresas
            </div>
            <div className="flex items-center gap-2 text-brand-dark font-bold">
              <CheckCircle2 className="text-brand-blue w-5 h-5" /> Viviendas particulares
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const workImages = [
    { url: "/images/project-laplace.jpeg",     title: "Stand LaPlace",           tag: "Feria de Turismo",      id: "p1" },
    { url: "/images/project-juantoselli.jpeg", title: "Stand Juan Toselli",      tag: "Evento Corporativo",    id: "p2" },
    { url: "/images/project-riu.jpeg",         title: "Stand RIU / Free Way",    tag: "Feria de Turismo",      id: "p3" },
    { url: "/images/project-siga.jpeg",        title: "Letras Corpóreas LED",    tag: "Iluminación LED",       id: "p4" },
    { url: "/images/project-tecmaq.jpeg",      title: "Cartel TECMAQ",           tag: "Cartelería Industrial", id: "p5" },
    { url: "/images/project-anodal.jpeg",      title: "Stand Anodal Outdoor",    tag: "Evento Outdoor",        id: "p6" },
    { url: "/images/project-futura.jpeg",      title: "Stand Futura / Minexo",   tag: "Iluminación LED",       id: "p7" },
    { url: "/images/project-taglus.jpeg",      title: "Mostrador Taglus",        tag: "Cartelería LED",        id: "p8" },
    { url: "/images/project-dent3d.jpeg",      title: "Mostrador DENT3D",        tag: "Cartelería LED",        id: "p9" },
    { url: "/images/project-menara.jpeg",      title: "Stand Menara",            tag: "Iluminación LED",       id: "p10" },
  ];

  return (
    <section id="proyectos" className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nuestra Trayectoria</h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Experiencia comprobable trabajando con clientes como Grupo Arpeco, ByC Distribuidora y Control X Diseño.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workImages.map((work, idx) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-brand-blue/50 transition-all shadow-xl hover:shadow-brand-blue/20"
            >
              <img
                src={work.url}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-1">{work.tag}</span>
                <h4 className="text-lg font-bold text-white group-hover:text-brand-blue transition-colors duration-300 drop-shadow-lg">{work.title}</h4>
                <div className="w-0 group-hover:w-full h-0.5 bg-brand-blue mt-3 transition-all duration-300 shadow-[0_0_15px_rgba(58,134,255,0.8)]"></div>
              </div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-brand-blue opacity-0 group-hover:opacity-100 transition-all shadow-[0_0_20px_rgba(58,134,255,1)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const diffs = [
    { title: "Precio competitivo", id: "d1" },
    { title: "Rapidez en ejecución", id: "d2" },
    { title: "Alta calidad de terminación", id: "d3" },
    { title: "Diseño personalizado", id: "d4" },
    { title: "Atención directa", id: "d5" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-50 rounded-[40px] p-12 md:p-20 overflow-hidden relative">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Nuestros Diferenciales</h2>
              <div className="space-y-4">
                {diffs.map((diff) => (
                  <div key={diff.id} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold text-brand-dark">{diff.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-brand-blue rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 italic">"Experiencia, cumplimiento de plazos y calidad en la entrega de los trabajos."</h3>
              <ul className="space-y-4 text-blue-100">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                  Disponibilidad fines de semana
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                  Presupuestos en 24 a 48 hs.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                  Disponibilidad para viajar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section id="contacto" className="py-24 px-6">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto bg-brand-blue rounded-[50px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-blue/30"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      
      <div className="relative z-10">
        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8">¿Tenés un proyecto?</h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Cotización rápida por proyecto. El costo del presupuesto se descuenta del trabajo final.
          <br/><strong>Respuesta en 24 - 48 horas.</strong>
        </p>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-yellow hover:bg-white text-brand-dark px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl hover:scale-105">
          Contactanos por WhatsApp
        </a>
      </div>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <img 
              src="/logos/logo-white.png" 
              alt="CIOFLEX Logo" 
              className="h-20 w-auto object-contain" 
            />
          </div>
          <p className="text-gray-400 leading-relaxed mb-8">
            Servicios profesionales de electricidad, montajes y mantenimiento industrial con cobertura nacional.
          </p>
          <div className="flex gap-4">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors border border-white/10">
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#25D366] transition-colors border border-white/10">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.847L.057 23.625a.75.75 0 0 0 .918.918l5.808-1.484A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.705 9.705 0 0 1-4.953-1.355l-.355-.21-3.683.941.972-3.562-.23-.368A9.706 9.706 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 underline decoration-brand-blue underline-offset-8">Especialización</h4>
          <ul className="space-y-4">
            <li className="text-gray-400">Armado de Stands</li>
            <li className="text-gray-400">Iluminación LED</li>
            <li className="text-gray-400">Cartelería Corporativa</li>
            <li className="text-gray-400">Electricidad Matriculada</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 underline decoration-brand-blue underline-offset-8">Información</h4>
          <ul className="space-y-4">
            <li className="text-gray-400">Seña del 30% al iniciar</li>
            <li className="text-gray-400">Reserva con 15 días</li>
            <li className="text-gray-400">Proyectos a medida</li>
            <li className="text-gray-400">Cotización por proyecto</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 underline decoration-brand-blue underline-offset-8">Contacto</h4>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <Phone className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-brand-blue transition-colors">+54 9 3516 76-3238</a>
                <p className="text-gray-400 text-sm">WhatsApp disponible</p>
              </div>
            </li>
            <li className="flex gap-4">
              <InstagramIcon className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-brand-blue transition-colors">@cioflex.ok</a>
                <p className="text-gray-400 text-sm">Seguinos en Instagram</p>
              </div>
            </li>
            <li className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Presupuesto en 24-48 hs.</p>
                <p className="text-gray-400 text-sm">Efectivo / Transferencia</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} CIOFLEX Soluciones Integrales. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="antialiased scroll-smooth">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Differentials />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
