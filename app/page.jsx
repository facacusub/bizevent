import RegistrationForm from "@/components/RegistrationForm";

export default function Home() {
  return (
    (<div
      className="min-h-screen bg-gradient-to-br from-cyan-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-cyan-800 mb-6 text-center">Webinar Registration</h1>
        <RegistrationForm />
      </div>
    </div>)
  );
}

