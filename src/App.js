import React from "react";
import { GraduationCap, Briefcase, Heart, Brain } from "lucide-react";
import Header from "./components/Header";
import Section from "./components/Section";
import ContactInfo from "./components/ContactInfo";
import ExperienceCard from "./components/ExperienceCard";
import SkillCard from "./components/SkillCard";

function App() {
  return (
    <div className="min-h-screen bg-navy-50">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <ContactInfo />

        <Section title="Formation" icon={<GraduationCap />}>
          <ExperienceCard
            title="ÉCOLE SPÉCIALE DES TRAVAUX PUBLICS (ESTP PARIS)"
            place="Campus de Cachan"
            date="2023-2025"
            points={[
              "Spécialité Génie Mécanique et Électrique (GME)",
              "Projet BIM: Modélisation 3D et simulation énergétique d'un bâtiment tertiaire",
              "Formation en management de projet et gestion d'équipe",
              "Stage l'été 2025",
            ]}
            delay={50}
          />
          <ExperienceCard
            title="B.U.T MESURES PHYSIQUES 2ÈME ANNEE"
            place="IUT1: Grenoble"
            date="2021-2022"
            points={[
              "Réalisation d'un oxymètre, conversion signal analogique/numérique, électronique, optique, traitement du signal",
              "Réalisation complète d'une radio: autonomie, apprentissage de méthodes de soudure et de gravure chimique",
              "Encadrant plongeur universitaire sur un semestre à U-Dive",
            ]}
            delay={100}
          />
          <ExperienceCard
            title="BACCALAUREAT GENERAL, ASSEZ-BIEN"
            place="Lycée d'altitude, Briançon"
            date="2020"
            points={[
              "Bac S spécialité maths",
              "Préparation millitaire marine (2019-2020, major de promotion)",
            ]}
            delay={200}
          />
        </Section>

        <Section title="Expérience Professionnelle" icon={<Briefcase />}>
          <ExperienceCard
            title="STAGE TECHNIQUE AU CEA"
            place="CEA liten Grenoble laboratoire LCA"
            date="16 JANVIER-31 MARS 2023"
            points={[
              "Étude de microstructure sur tubes inox",
              "Attaques chimiques",
              "Test d'étanchéité",
            ]}
            delay={300}
          />
          <ExperienceCard
            title="RÉSERVISTE DE LA MARINE NATIONALE"
            place="Base navale de Toulon"
            date="EN COURS"
            points={[
              "Opérateur défense : surveiller et filtrer les sites sensibles militaires à pied ou véhiculé",
            ]}
            delay={400}
          />
        </Section>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Section title="Compétences Techniques" icon={<Brain />}>
            <div className="grid grid-cols-1 gap-4">
              <SkillCard title="Électronique" level={4} delay={500} />
              <SkillCard title="Optique" level={4} delay={600} />
              <SkillCard title="Pack Office & LabVIEW" level={4} delay={700} />
              <SkillCard title="Python" level={3} delay={800} />
              <SkillCard
                title="Anglais"
                level={5}
                description="945/990 TOEIC"
                delay={900}
              />
            </div>
          </Section>

          <Section title="Centres d'Intérêt" icon={<Heart />}>
            <div className="space-y-4">
              <SkillCard
                title="Parachutisme"
                level={4}
                description="Depuis juin 2020"
                delay={1000}
              />
              <SkillCard
                title="Plongée sous-marine"
                level={5}
                description="Depuis 2010, Master Diver"
                delay={1100}
              />
              <SkillCard
                title="Boxe anglaise"
                level={3}
                description="Depuis 2017"
                delay={1200}
              />
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}

export default App;
