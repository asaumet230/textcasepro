import { TextConverterForm } from "@/components";


export default function Home() {

  return (
    <main className="min-h-screen bg-gray-100 flex items-center">
      <div className="w-11/12 mx-auto p-10 bg-white shadow-md rounded-lg">
        <header className="mb-10">
          <h1 className="text-4xl text-center font-bold">Text Format</h1>
        </header>
        <TextConverterForm />
      </div>
    </main>
  );
}
