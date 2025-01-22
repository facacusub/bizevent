"use server";
export async function addToGetResponse(formData) {
  // TODO: Implement actual GetResponse API call here
  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")

  console.log("Adding to GetResponse:", { name, email, phone })

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // For demonstration purposes, always return success
  return { success: true }
}

