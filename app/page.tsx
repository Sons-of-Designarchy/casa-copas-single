import Image from "next/image"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Spiral Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image src="/placeholder.svg?height=1080&width=1080" alt="Spiral background" fill className="object-cover" />
      </div>

      <header className="relative z-10 container mx-auto py-6 flex justify-between items-center">
        <h1 className="text-2xl font-serif font-bold">Casa de Copas</h1>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <div className="mb-12">
            <h2 className="text-6xl md:text-8xl font-serif font-bold mb-6 bg-gradient-to-r from-white via-zinc-300 to-white bg-clip-text text-transparent">
              "Cosmic Opus 1"
            </h2>
            <p className="text-2xl md:text-3xl font-serif italic text-zinc-400 tracking-wide">A Single Release</p>
          </div>

          <div className="relative my-20 max-w-3xl mx-auto">
            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-zinc-700 to-transparent opacity-40"></div>
            <div className="absolute -right-8 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-zinc-700 to-transparent opacity-40"></div>

            <div className="relative mb-16">
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-black/40 rounded-xl backdrop-blur-sm -z-10"></div>
              <div className="absolute inset-0 border border-zinc-700/30 rounded-xl -z-10"></div>
              <div className="p-1">
                <div className="border border-zinc-700/50 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Album Cover - Cosmic Opus 1"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-lg border border-zinc-800/50 shadow-xl">
              <Textarea
                placeholder="Enter a description of the project here..."
                className="min-h-[150px] bg-zinc-800/80 border-zinc-700/50 text-white placeholder:text-zinc-600"
                defaultValue="'Cosmic Opus 1' is a transcendent folk composition by Casa de Copas that explores the mystical connection between celestial movements and human consciousness. Drawing from Wagner's dramatic compositions and the symbolic imagery of tarot, this opus weaves a tapestry of sound that invites listeners to journey through the spiral of cosmic existence. Recorded with traditional instruments and infused with the essence of palo santo and sage, this musical offering serves as a portal to deeper spiritual realms."
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 p-10 rounded-lg shadow-2xl max-w-2xl mx-auto border border-zinc-800/30">
            <h3 className="text-3xl font-serif font-bold mb-4 text-white">Cosmic Opus 1</h3>
            <p className="mb-8 text-lg text-zinc-400 italic">A mystical journey through sound and spirit</p>
            <div className="flex justify-center">
              <Button className="bg-white hover:bg-zinc-200 text-black py-6 text-lg px-8">
                <Download className="mr-3 h-5 w-5" /> Download MP3
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-900/50 bg-zinc-950/80 backdrop-blur-sm">
        <div className="container mx-auto py-8 px-4 text-center">
          <p className="text-zinc-400 mb-2">© {new Date().getFullYear()} Casa de Copas. All rights reserved.</p>
          <p className="text-sm text-zinc-600">Recorded with love and infused with the essence of palo santo.</p>
        </div>
      </footer>
    </div>
  )
}

