import { useState } from "react";

const sections = [
  {
    title: "Cuidado Facial - Mañana",
    tasks: [
      "Limpiador suave",
      "Tónico refrescante",
      "Suero de vitamina C",
      "Hidratante ligero",
      "Protector solar SPF 50"
    ]
  },
  {
    title: "Cuidado Facial - Noche",
    tasks: [
      "Doble limpieza",
      "Tónico",
      "Retinol",
      "Hidratante nocturna"
    ]
  },
  {
    title: "Masajes Faciales",
    tasks: [
      "Usar aceite o crema",
      "Masaje de abajo hacia arriba",
      "Usar gua sha o rodillo"
    ]
  },
  {
    title: "Jawline & Cuello",
    tasks: [
      "Ejercicios de mandíbula",
      "Postura correcta",
      "Masajes de mandíbula"
    ]
  },
  {
    title: "Lunes: Tren superior",
    tasks: [
      "Flexiones (3x15)",
      "Fondos en banco (3x12)",
      "Plancha + rotación",
      "Hollow hold"
    ]
  },
  {
    title: "Martes: Piernas y Core",
    tasks: [
      "Sentadillas",
      "Zancadas",
      "Elevación de talones",
      "Ab twist"
    ]
  },
  {
    title: "Miércoles: Cardio",
    tasks: [
      "Jumping jacks",
      "Skipping",
      "Burpees",
      "Estiramiento dinámico"
    ]
  },
  {
    title: "Jueves: Full Body",
    tasks: [
      "Burpees",
      "Escaladores",
      "Jump squats",
      "Push-ups modificadas"
    ]
  },
  {
    title: "Viernes: Yoga o movilidad",
    tasks: [
      "Sesión de yoga",
      "Movilidad articular"
    ]
  }
];

export default function App() {
  const [completed, setCompleted] = useState({});

  const toggleTask = (sectionTitle, task) => {
    setCompleted((prev) => ({
      ...prev,
      [sectionTitle + task]: !prev[sectionTitle + task]
    }));
  };

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>🌟 Glow Up Tracker</h1>
      {sections.map((section) => (
        <div key={section.title} style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>{section.title}</h2>
          {section.tasks.map((task) => (
            <label key={task} style={{ display: 'block', marginBottom: 4 }}>
              <input
                type="checkbox"
                checked={!!completed[section.title + task]}
                onChange={() => toggleTask(section.title, task)}
              />{' '}
              <span style={{ textDecoration: completed[section.title + task] ? 'line-through' : 'none' }}>
                {task}
              </span>
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}
