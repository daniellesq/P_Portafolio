// src/App.jsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LAYOUTS = {
  HOME: "home",
  DATOS: "datos",
  TAREAS: "tareas",
  EJERCICIOS: "ejercicios",
};

// Variantes de animación para cada layout
const layoutVariants = {
  initial: { opacity: 0, x: 60, scale: 0.98, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    x: -60,
    scale: 0.98,
    filter: "blur(6px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function App() {
  const [currentLayout, setCurrentLayout] = useState(LAYOUTS.HOME);

  const goTo = (layout) => setCurrentLayout(layout);

  return (
    <div className="min-h-screen bg-[#050816] text-slate-200">
      {/* Contenedor principal */}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-4 sm:px-8 sm:py-6">
        {/* Top bar */}
        <header className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#64ffda]/10 text-[#64ffda] text-sm font-bold">
              DA
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-100">
                Portafolio de Daniel
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 text-xs font-mono text-slate-400 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>
              Layout actual:{" "}
              <span className="text-[#64ffda]">
                {currentLayout === LAYOUTS.HOME && "Inicio"}
                {currentLayout === LAYOUTS.DATOS && "Mis datos"}
                {currentLayout === LAYOUTS.TAREAS && "Mis tareas"}
                {currentLayout === LAYOUTS.EJERCICIOS && "Mis ejercicios"}
              </span>
            </span>
          </div>
        </header>

        {/* Menú + contenido */}
        <div className="mt-4 flex flex-1 flex-col gap-6 md:mt-6 md:flex-row">
          {/* Menú lateral */}
          <aside className="md:w-64 md:border-r md:border-white/5 md:pr-6">
            <nav className="flex flex-wrap gap-2 md:flex-col md:gap-3">
              <NavButton
                label="Inicio"
                active={currentLayout === LAYOUTS.HOME}
                onClick={() => goTo(LAYOUTS.HOME)}
              />
              <NavButton
                label="Mis datos"
                active={currentLayout === LAYOUTS.DATOS}
                onClick={() => goTo(LAYOUTS.DATOS)}
              />
              <NavButton
                label="Mis tareas"
                active={currentLayout === LAYOUTS.TAREAS}
                onClick={() => goTo(LAYOUTS.TAREAS)}
              />
              <NavButton
                label="Mis ejercicios"
                active={currentLayout === LAYOUTS.EJERCICIOS}
                onClick={() => goTo(LAYOUTS.EJERCICIOS)}
              />
            </nav>

            <div className="mt-6 hidden text-xs text-slate-500 md:block">
              <p className="font-mono uppercase tracking-[0.2em] text-slate-600">
                QUE PONGO AQUI
              </p>
              <p className="mt-1">vjreibveirhbvkdfhwiufhcvbs.</p>
            </div>
          </aside>

          {/* Área de layouts con transiciones */}
          <main className="relative flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLayout}
                variants={layoutVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full"
              >
                {currentLayout === LAYOUTS.HOME && (
                  <HomeLayout goTo={goTo} />
                )}
                {currentLayout === LAYOUTS.DATOS && (
                  <MisDatosLayout goTo={goTo} />
                )}
                {currentLayout === LAYOUTS.TAREAS && (
                  <MisTareasLayout goTo={goTo} />
                )}
                {currentLayout === LAYOUTS.EJERCICIOS && (
                  <MisEjerciciosLayout goTo={goTo} />
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        <footer className="mt-4 border-t border-white/5 pt-3 text-center text-[11px] text-slate-500">
          Proyecto: Portafolio.
        </footer>
      </div>
    </div>
  );
}

/* ------------------------- Componentes auxiliares ------------------------- */

function NavButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition
      ${
        active
          ? "bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/50 shadow-sm"
          : "text-slate-300 hover:bg-white/5"
      }`}
    >
      <span>{label}</span>
      {active && (
        <span className="text-[10px] font-mono uppercase tracking-widest">
          {/* ACTIVO */}
        </span>
      )}
    </button>
  );
}

/* ------------------------------ HOME LAYOUT ------------------------------ */

function HomeLayout({ goTo }) {
  const cards = [
    {
      key: LAYOUTS.DATOS,
      title: "Mis datos",
      description: "Información personal, contacto, resumen estudiantil.",
      accent: "bg-sky-500/30",
    },
    {
      key: LAYOUTS.TAREAS,
      title: "Mis tareas",
      description: "Lista de pendientes, cosas por hacer, estado actual.",
      accent: "bg-amber-500/30",
    },
    {
      key: LAYOUTS.EJERCICIOS,
      title: "Mis ejercicios",
      description: "Prácticas de código, retos y mini proyectos.",
      accent: "bg-violet-500/30",
    },
  ];

  return (
    <div className="flex h-full flex-col gap-6 rounded-2xl border border-white/5 bg-gradient-to-br from-[#050816] via-[#050816] to-[#020414] p-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
          HOLAAA 👨‍💻
        </h1>
        <p className="mt-2 max-w-xl text-sm text-slate-400">
          En esta sección puedes consultar mis distintos apartados.
        </p>
      </div>

      <div className="grid flex-1 gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <button
            key={card.key}
            onClick={() => goTo(card.key)}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#64ffda]/60 hover:bg-white/10"
          >
            <div
              className={`mb-3 inline-flex h-7 w-7 items-center justify-center rounded-xl text-xs font-mono uppercase tracking-[0.2em] text-slate-200 ${card.accent}`}
            >
              Go
            </div>
            <h2 className="text-lg font-semibold text-slate-100 group-hover:text-[#64ffda]">
              {card.title}
            </h2>
            <p className="mt-2 text-xs text-slate-400">{card.description}</p>
            <span className="mt-4 text-[11px] font-mono text-[#64ffda] opacity-80 group-hover:opacity-100">
              Da click para acceder a este apartado →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------- MIS DATOS LAYOUT --------------------------- */

function MisDatosLayout({ goTo }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-blue-500/30 bg-blue-950/40 p-6">
      <LayoutHeader
        title="Mis datos"
        subtitle="Información personal y perfil."
        onBack={() => goTo(LAYOUTS.HOME)}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3 rounded-xl bg-black/20 p-4">
          <h3 className="text-sm font-semibold text-slate-100">
            Información básica
          </h3>
          <ul className="space-y-1 text-xs text-slate-300">
            <li>
              <span className="font-mono text-slate-400">Nombre: </span>
              Daniel A. Esquivel Gómez
            </li>
            <li>
              <span className="font-mono text-slate-400">Matrícula: </span>
              72965
            </li>
            <li>
              <span className="font-mono text-slate-400">Email: </span>
              al072965@uacam.mx
            </li>
          </ul>
        </div>

        <div className="space-y-3 rounded-xl bg-black/20 p-4">
          <h3 className="text-sm font-semibold text-slate-100">
            Stack principal
          </h3>
          <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-200">
            {["React", "Vite", "TailwindCSS", "JavaScript", "Git"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-blue-500/20 px-3 py-1 border border-blue-400/40"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 rounded-xl bg-black/20 p-4">
          <h3 className="text-sm font-semibold text-slate-100">
            Resumen corto
          </h3>
          <p className="mt-2 text-xs text-slate-300">
            Soy estudiante de Ingeniería en Tecnologías de Software cursando
            5to semestre, con el objetivo de graduarme y trabajar en algo que
            me guste y me apasione, aunque todavía con la incertidumbre de qué
            es lo que mejor se me da.
          </p>
        </div>
      </div>
    </div>
  );
}

/* --------------------------- MIS TAREAS LAYOUT --------------------------- */

function MisTareasLayout({ goTo }) {
  const tareas = [
    {
      title: "Tarea 01 - Sitio de e-commerce accesible",
      url: "https://daniellesq.github.io/Ecommerce/", 
    },
    {
      title: "Tarea 02 - Mi Red social",
      url: "https://daniellesq.github.io/Red-social---HTML/index.html", 
    },
    {
      title: "Tarea 03 - Cheat Sheet",
      url: "https://daniellesq.github.io/Acordeon-HTML/",
    },
  ];

  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-violet-500/30 bg-violet-950/30 p-6">
      <LayoutHeader
        title="Mis tareas"
        subtitle="Listado de tareas de la materia."
        onBack={() => goTo(LAYOUTS.HOME)}
      />

      <div className="grid gap-3 md:grid-cols-2">
        {tareas.map((t, i) => (
          <div
            key={i}
            className="flex flex-col rounded-xl bg-black/25 p-4 text-xs text-slate-200"
          >
            <span className="text-sm font-semibold text-slate-100">
              {t.title}
            </span>

            {t.url ? (
              <a
                href={t.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-fit items-center rounded-full border border-violet-400/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-violet-200 transition hover:bg-violet-500/15"
              >
                VER TAREA
              </a>
            ) : (
              <button className="mt-3 inline-flex w-fit items-center rounded-full border border-violet-400/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-violet-200 transition hover:bg-violet-500/15">
                VER TAREA
              </button>
            )}
          </div>
        ))}
      </div>

      <p className="text-[11px] text-slate-300">
        Hola.
      </p>
    </div>
  );
}


/* ------------------------- MIS EJERCICIOS LAYOUT ------------------------- */

function MisEjerciciosLayout({ goTo }) {
  const ejercicios = [
    {
      title: "Ejercicio 01 - Formulario de Registro",
      url: "https://daniellesq.github.io/Portfolio/"
    },
    {
      title: "Ejercicio 02 - Animación CSS",
      url: "https://daniellesq.github.io/AnimacionCSS/"
    },
    {
      title: "Ejercicio 03 - Escapa de Beyonce",
      url: "https://daniellesq.github.io/JuegoBeyonce/",
    },
    {
      title: "Ejercicio 04 - Formulario CRUD",
      url: "https://daniellesq.github.io/CRUD/"
    },
    {
      title: "Ejercicio 05 - Tic Tac Toe",
      url: "https://daniellesq.github.io/Tic-Tac-Toe/"
    },
  ];

  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-violet-500/30 bg-violet-950/30 p-6">
      <LayoutHeader
        title="Mis ejercicios"
        subtitle="Listado de mis ejercicios."
        onBack={() => goTo(LAYOUTS.HOME)}
      />

      <div className="grid gap-3 md:grid-cols-2">
        {ejercicios.map((e, i) => (
          <div
            key={i}
            className="flex flex-col rounded-xl bg-black/25 p-4 text-xs text-slate-200"
          >
            <span className="text-sm font-semibold text-slate-100">
              {e.title}
            </span>
             
             {e.url ? (
              <a
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-fit items-center rounded-full border border-violet-400/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-violet-200 transition hover:bg-violet-500/15"
              >
                Ver Ejercicio
              </a>
            ) : (
            <button className="mt-3 inline-flex w-fit items-center rounded-full border border-violet-400/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-violet-200 transition hover:bg-violet-500/15">
              Ver Ejercicio
            </button>
            )}
          </div>
        ))}
      </div>

      <p className="text-[11px] text-slate-300">
        No se que poner.
      </p>
    </div>
  );
}

// HEADER LAYOUT

function LayoutHeader({ title, subtitle, onBack }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <div>
        <h2 className="text-xl font-semibold text-slate-100">{title}</h2>
        {subtitle && (
          <p className="text-xs text-slate-400">{subtitle}</p>
        )}
      </div>
      <button
        onClick={onBack}
        className="inline-flex items-center rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-slate-200 transition hover:bg-white/10"
      >
        ← Volver al inicio
      </button>
    </div>
  );
}
