"use client"

import { useState, useEffect } from "react"

export default function PasswordProtect({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const VALID_PASSWORD = "hinimdoumorsiaguitdamensammeknes"

  useEffect(() => {
    const auth = sessionStorage.getItem("projectsAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === VALID_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem("projectsAuth", "true")
      setError("")
    } else {
      setError("Mot de passe incorrect")
      setPassword("")
    }
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      padding: "1rem"
    }}>
      <div style={{
        backgroundColor: "white",
        borderRadius: "1rem",
        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.2), 0 10px 10px -5px rgba(0,0,0,0.1)",
        padding: "2.5rem",
        width: "100%",
        maxWidth: "400px",
        border: "1px solid rgba(255,255,255,0.1)"
      }}>
        <h1 style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "0.5rem",
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
          🔒 Accès protégé
        </h1>
        <p style={{
          textAlign: "center",
          color: "#4b5563",
          marginBottom: "2rem",
          fontSize: "0.95rem"
        }}>
          Veuillez entrer le mot de passe pour accéder aux projets
        </p>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1.5rem" }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                border: "2px solid #e5e7eb",
                borderRadius: "0.75rem",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                outline: "none",
                backgroundColor: "white",
                color: "#000000", // Texte en noir
                caretColor: "#3b82f6" // Curseur bleu visible
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#3b82f6"
                e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.2)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e7eb"
                e.target.style.boxShadow = "none"
              }}
              autoFocus
            />
          </div>
          
          {error && (
            <p style={{
              color: "#dc2626",
              fontSize: "0.875rem",
              textAlign: "center",
              marginBottom: "1rem",
              backgroundColor: "#fee2e2",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              fontWeight: "500"
            }}>
              {error}
            </p>
          )}
          
          <button
            type="submit"
            style={{
              width: "100%",
              background: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
              color: "white",
              padding: "0.75rem 1rem",
              border: "none",
              borderRadius: "0.75rem",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 6px -1px rgba(34,197,94,0.3)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)"
              e.target.style.boxShadow = "0 10px 15px -3px rgba(34,197,94,0.4)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "0 4px 6px -1px rgba(34,197,94,0.3)"
            }}
          >
            Accéder aux projets
          </button>
        </form>
        
        <p style={{
          textAlign: "center",
          marginTop: "1.5rem",
          fontSize: "0.8rem",
          color: "#9ca3af"
        }}>
          Espace projet personnel
        </p>
      </div>
    </div>
  )
}