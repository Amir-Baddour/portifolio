"use client"

import { useReveal } from "@/hooks/use-reveal"
import { BrainCircuit, BarChart3, Network, Layers, Gamepad2 } from "lucide-react"
import { SectionHeading } from "@/components/ui-blocks/section-heading"

const mlCategories = [
  {
    title: "Supervised Learning",
    icon: BrainCircuit,
    items: [
      "Linear Regression",
      "Logistic Regression",
      "Decision Trees",
      "Random Forest",
      "KNN",
      "SVM",
      "Ensemble Methods",
    ],
  },
  {
    title: "Model Evaluation",
    icon: BarChart3,
    items: [
      "Confusion Matrix",
      "Precision, Recall, F1-score",
      "ROC & AUC",
      "Cross-validation",
      "Hyperparameter Tuning",
      "Bias\u2013Variance Tradeoff",
    ],
  },
  {
    title: "Unsupervised Learning",
    icon: Network,
    items: ["K-Means", "Hierarchical Clustering", "DBSCAN"],
  },
  {
    title: "Dimensionality Reduction",
    icon: Layers,
    items: ["PCA", "NMF"],
  },
  {
    title: "Reinforcement Learning",
    icon: Gamepad2,
    items: ["Q-learning basics"],
  },
]

export function MLSection() {
  const sectionRef = useReveal()

  return (
    <section
      id="ml"
      ref={sectionRef}
      className="reveal px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Machine Learning"
          title="ML knowledge & applied work"
          description="Machine learning concepts I have studied and applied on academic and personal projects, with a focus on evaluation."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mlCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="glass-card group rounded-xl p-6 transition-all hover:border-primary/30 hover:scale-[1.02]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
