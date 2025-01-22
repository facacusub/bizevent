"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { addToGetResponse } from "@/app/actions/addToGetResponse"

export default function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(event) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const response = await addToGetResponse(formData)

    if (response.success) {
      router.push("/survey")
    } else {
      alert("Registration failed. Please try again.")
    }

    setIsLoading(false)
  }

  return (
    (<form
      onSubmit={onSubmit}
      className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="rounded-xl !py-6" />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="rounded-xl !py-6" />
      </div>
      <div>
        <Input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          required
          className="rounded-xl !py-6" />
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="w-fit bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        {isLoading ? "Registering..." : "Register Now"}
      </Button>
      <p className="text-center text-sm text-cyan-600 mt-4">You're just one step away from your free video!</p>
    </form>)
  );
}

