"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

const predefinedQuestions = [
  {
    question: "What is the Digital Wallet Platform?",
    answer:
      "The Digital Wallet Platform is Amir's senior project \u2014 a full-stack digital wallet supporting authentication, peer-to-peer transfers, QR payments, transaction history, notifications, an analytics dashboard, and feedback sentiment classification. Amir designed the database, built the backend transaction logic, and created the REST API.",
  },
  {
    question: "How was ML integrated?",
    answer:
      "Amir implemented Logistic Regression and Random Forest models in the Digital Wallet Platform to classify user feedback after deployment. This enabled automated sentiment analysis and provided data-driven insights for continuous improvement of the platform.",
  },
  {
    question: "What certifications does Amir have?",
    answer:
      "Amir holds certifications including: AI Fundamentals from IBM, Career Essentials in Generative AI from LinkedIn, ICDL from Microsoft, AWS re/Start Cloud Computing Program, and both Foundations of CS and Advanced Full-Stack Engineering from SE Factory.",
  },
  {
    question: "How can I schedule a meeting?",
    answer:
      "You can schedule a 30-minute introductory call with Amir by clicking the \"Schedule a 30-Minute Call\" button in the Contact section, which opens his Google Calendar booking page.",
  },
]

interface Message {
  type: "user" | "bot"
  text: string
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Hi! I can help you learn more about Amir. Choose a question below or type your own.",
    },
  ])
  const [input, setInput] = useState("")

  const handleQuestionClick = (q: (typeof predefinedQuestions)[0]) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: q.question },
      { type: "bot", text: q.answer },
    ])
  }

  const handleSend = () => {
    if (!input.trim()) return
    const userMsg = input.trim()
    setInput("")

    const match = predefinedQuestions.find((q) =>
      q.question.toLowerCase().includes(userMsg.toLowerCase().slice(0, 20))
    )

    setMessages((prev) => [
      ...prev,
      { type: "user", text: userMsg },
      {
        type: "bot",
        text:
          match?.answer ||
          "Thanks for your question! For more details, please reach out via the contact form or schedule a meeting with Amir directly.",
      },
    ])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:opacity-90"
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[28rem] w-[22rem] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl sm:w-96">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border bg-primary/5 px-5 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              A
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                AI Assistant
              </p>
              <p className="text-xs text-muted-foreground">
                Ask me about Amir
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.type === "user"
                      ? "ml-auto bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Quick questions */}
            {messages.length <= 1 && (
              <div className="mt-4 flex flex-col gap-2">
                {predefinedQuestions.map((q) => (
                  <button
                    key={q.question}
                    onClick={() => handleQuestionClick(q)}
                    className="text-left rounded-lg border border-border bg-secondary px-3 py-2 text-xs text-secondary-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    {q.question}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
              <button
                onClick={handleSend}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all hover:opacity-90"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
