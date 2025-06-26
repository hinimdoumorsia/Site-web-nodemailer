import { Badge } from "@/components/ui/badge"

const competences = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "HTML",
  "CSS",
  "Git",
  "APIs REST",
]

export default function Competences() {
  return (
    <section id="competences" className="container py-16 bg-muted rounded-xl">
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-primary">
        Mes Compétences
      </h2>
      <div className="flex flex-wrap gap-3">
        {competences.map((competence, index) => (
          <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
            {competence}
          </Badge>
        ))}
      </div>
    </section>
  )
}
