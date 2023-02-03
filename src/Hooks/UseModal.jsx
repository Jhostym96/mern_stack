import { useState } from "react";

export default function UseModal() {
  const [isOpen, setIsOpen] = useState();
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  return [isOpen, open, close]
}
