"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RedirectAnimation } from "@/components/redirect-animation"
import { useLanguage } from "@/components/language-context"

interface LoginButtonProps {
  children?: React.ReactNode
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
  asLink?: boolean
}

export function LoginButton({ children, variant = "outline", size = "default", className = "", asLink = false }: LoginButtonProps) {
  const { t, language } = useLanguage()
  const [isRedirecting, setIsRedirecting] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsRedirecting(true)
  }

  if (isRedirecting) {
    return (
      <RedirectAnimation
        message={language === "id" ? "Tunggu kami akan mengarahkan ke halaman login" : "Wait we will direct you to the login page"}
        redirectUrl="https://my.bayarkita.com/login"
        delay={2}
      />
    )
  }

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={asLink ? "p-0 h-auto font-normal" : className}
    >
      {children || t.nav.login}
    </Button>
  )
}
