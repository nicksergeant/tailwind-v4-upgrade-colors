
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Tailwind CSS Demo
        </h1>
        <p className="text-gray-600 mb-4">
          This is a simple demo page using Tailwind CSS v3.4.17
        </p>
        <div className="p-6 bg-flxBlue rounded-lg text-white">
          <p>
            This box uses Tailwind's color utilities
          </p>
        </div>
      </div>
    </main>
  )
}
