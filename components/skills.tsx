import { Badge } from "@/components/ui/badge"

const skills = [
  "JavaScript",
  "java",
  "python",
  "Next.js",
  "Node.js",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "RESTful APIs",
  "C++",
]

export default function Skills() {
  return (
    <section id="skills" className="container py-12 bg-muted">
      <h2 className="text-3xl font-bold tracking-tighter mb-8">My Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}

