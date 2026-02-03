"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RedirectAnimation } from "@/components/redirect-animation"
import { useLanguage } from "@/components/language-context"

interface RegisterButtonProps {
  children?: React.ReactNode
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function RegisterButton({ children, variant = "default", size = "default", className = "" }: RegisterButtonProps) {
  const { t, language } = useLanguage()
  const [isRedirecting, setIsRedirecting] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsRedirecting(true)
  }

  if (isRedirecting) {
    return (
      <RedirectAnimation
        message={t.common.redirectingRegister}
        redirectUrl="https://my.bayarkita.com/register"
        delay={2}
      />
    )
  }

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={className}
    >
      {children || t.nav.register}
    </Button>
  )
}
