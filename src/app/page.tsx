import { TitleShaderHero } from "@/components/title-shader-hero";
import { NavigationChrome } from "@/components/navigation-chrome";
import { ContactForm } from "@/components/contact-form";
import { Code, Zap, Palette, Globe, Briefcase, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-zinc-50 selection:bg-white selection:text-black">
      
      {/* Dinamik Üst ve Alt Navbar Yönetimi */}
      <NavigationChrome />

      <main className="w-full">
        
        {/* Giriş Bölümü (Hero) */}
        <TitleShaderHero />

        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          
          {/* Projeler / Özellikler Bölümü */}
          <section id="work" className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 scroll-mt-32">
            <FeatureCard 
              icon={<Code className="text-blue-400" />}
              title="Temiz Yazılım"
              desc="Bakımı kolay, ölçeklenebilir ve sağlam kod yapıları."
            />
            <FeatureCard 
              icon={<Zap className="text-yellow-400" />}
              title="Performans"
              desc="99+ Lighthouse skorları ve optimize edilmiş runtime."
            />
            <FeatureCard 
              icon={<Palette className="text-purple-400" />}
              title="Yaratıcı UI"
              desc="Shaderlar ve dengeli animasyonlarla zengin deneyim."
            />
            <FeatureCard 
              icon={<Globe className="text-green-400" />}
              title="Gelişmiş Mimari"
              desc="Uluslararası standartlarda modern web mimarisi."
            />
          </section>

          {/* Hakkımda Bölümü */}
          <section id="about" className="mt-32 scroll-mt-32">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                  Programlamanın <span className="text-zinc-500">Ötesinde.</span>
                </h2>
                <p className="text-lg leading-relaxed text-zinc-400">
                  Sadece kod yazmıyorum; özgür yazılımı sonuna kadar geliştirip daha fazla topluluğa destek vermek için dağıtıyorum. 
                  Bir yazılımın sadece çalışması yetmez; hızlı, güvenli ve kullanıcıya özgürlük sunan bir yapısı olmalıdır.
                </p>
                <p className="text-zinc-500">
                  Şu an Linux ve WebGl teknolojilerine odaklanarak kurumsal seviyede 
                  çözümler üretiyorum.
                </p>
              </div>
              <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-1">
                <div className="h-full w-full rounded-[22px] bg-black p-8">
                   <pre className="text-xs text-zinc-500 leading-relaxed overflow-x-auto">
                     <code>{`const developer = {
  name: "Vialestia",
  role: "Full Stack Engineer",
  skills: ["Linux", "Python", "Node.js", "C"],
  motto: "Code is poetry when written well.",
  status: "Open for innovative projects"
};`}</code>
                   </pre>
                </div>
              </div>
            </div>
          </section>

          <section id="career" className="mt-40 scroll-mt-32">
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Kariyer <span className="text-zinc-500">Yolculuğu.</span>
              </h2>
            </div>

            <div className="space-y-8">
              <CareerItem 
                role="Full Stack Developer"
                company="Independent / Freelance"
                period="2022 — 2024"
                description="Next.js ve Supabase ekosistemini kullanarak yüksek performanslı web uygulamaları ve kişisel SaaS projeleri geliştiriyorum."
                tags={["Next.js", "Tailwind", "Supabase", "TypeScript"]}
              />
              <CareerItem 
                role="Package Developer / App Developer"
                company="Linux Exosystem"
                period="2025 — Günümüz"
                description="Python ve C dilleri ile basit uygulama ve paketler yapıyorum."
                tags={["Python", "C", "Figma"]}
              />
            </div>
          </section>

          {/* İletişim Bölümü (Discord Webhook Formu) */}
          <section id="contact" className="mt-40 scroll-mt-32">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Bir Kahve <span className="text-zinc-500">İçelim mi?</span>
              </h2>
              <p className="mt-4 text-zinc-400">
                Yeni projeler, iş birlikleri veya sadece selam vermek için bana yazabilirsin.
              </p>
            </div>

            <ContactForm />
          </section>

          {/* Footer */}
          <footer className="mt-40 border-t border-white/10 pt-12 pb-12">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <p className="text-sm text-zinc-500 italic">
                © {new Date().getFullYear()} Designed & Developed by Vialestia.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

// Kart Bileşenleri
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group relative rounded-3xl border border-white/5 bg-zinc-900/50 p-8 transition-all hover:bg-zinc-900 hover:border-white/10">
      <div className="mb-4 inline-block rounded-2xl bg-white/5 p-3 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p>
    </div>
  );
}

function CareerItem({ role, company, period, description, tags }: { 
  role: string; company: string; period: string; description: string; tags: string[];
}) {
  return (
    <div className="group relative border-l border-white/10 pl-8 pb-12 last:pb-0">
      <div className="absolute -left-[5px] top-0 h-[10px] w-[10px] rounded-full bg-zinc-800 ring-4 ring-black group-hover:bg-white transition-colors" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-bold text-white">{role}</h3>
        <span className="text-sm font-medium text-zinc-500 flex items-center gap-2">
          <Calendar size={14} /> {period}
        </span>
      </div>
      <div className="mt-1 text-sm font-medium text-blue-400/80">{company}</div>
      <p className="mt-4 text-zinc-400 leading-relaxed max-w-3xl">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}