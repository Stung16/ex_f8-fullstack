// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

 function StrickMode() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
      <button onClick={() => setTheme('light')}>🌞</button>
      <button onClick={() => setTheme('dark')}>🌙</button>
    </div>
  )
};
export default StrickMode