import Image from "next/image";
import { Sword, Trophy, User } from "lucide-react";

export default function About() {
  const games = [
    {
      logo: "/images/games/genshin.webp",
      name: "Genshin Impact",
      sub: "Current main: Skirk",
    },
    {
      logo: "/images/games/hsr.webp",
      name: "Honkai: Star Rail",
      sub: "Current main: Jingliu",
    },
    {
      logo: "/images/games/zzz.webp",
      name: "Zenless Zone Zero",
      sub: "Current main: Yixuan",
    },
  ];

  return (
    <section
      id="about"
      className="px-6 md:px-10 pt-16 pb-20 border-t border-navy"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <User size={16} className="text-orange" />
          <p className="text-orange text-xs uppercase tracking-widest">About</p>
        </div>
        <h2 className="text-2xl font-semibold text-text mb-8">Who I am</h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10">
          <div className="text-muted text-sm leading-7 space-y-4">
            <p>
              My journey into web development started with an obsession over
              gaming fan sites like{" "}
              <span className="text-orange font-medium">
                Prydwen, Game8, and GameWith
              </span>
              . That passion led me to build{" "}
              <span className="text-orange font-medium">Skirk Portal</span>, a
              Genshin Impact team builder, and I've been hooked on development
              ever since.
            </p>
            <p>
              I graduated from{" "}
              <span className="text-orange font-medium">
                Hacktiv8 with Honors
              </span>{" "}
              (98% average), building everything from real-time multiplayer apps
              to AI-integrated platforms. My grand final project, Impression, is
              a professional profile rating platform with AI-generated
              evaluation criteria and a quota economy system.
            </p>
            <p>
              Outside of coding, I've practiced{" "}
              <span className="text-orange font-medium">
                Kendo since college
              </span>
              , serving as Technical Department Advisor at Kendo ITS. There's
              something about the discipline of martial arts that translates
              surprisingly well to writing clean, deliberate code.
            </p>
            <p>Currently based in Jakarta, open to opportunities anywhere.</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-surface border border-navy rounded-xl p-4">
              <p className="text-orange text-xs uppercase tracking-widest mb-3">
                Currently Playing
              </p>
              <div className="space-y-3">
                {games.map((game) => (
                  <div key={game.name} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg overflow-hidden bg-navy shrink-0">
                      <Image
                        src={game.logo}
                        alt={game.name}
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-text text-sm font-medium">
                        {game.name}
                      </p>
                      <p className="text-subtle text-xs">{game.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface border border-navy rounded-xl p-4">
              <p className="text-orange text-xs uppercase tracking-widest mb-3">
                Kendo
              </p>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-orange rounded-lg flex items-center justify-center shrink-0">
                  <Sword size={18} className="text-bg" />
                </div>
                <div>
                  <p className="text-text text-sm font-medium">Kendo ITS</p>
                  <p className="text-subtle text-xs">
                    Technical Department Advisor · 2021
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-bg border border-orange rounded-lg px-3 py-2.5">
                <Trophy size={16} className="text-orange shrink-0" />
                <div>
                  <p className="text-text text-xs font-medium">
                    1st Place, Team Division
                  </p>
                  <p className="text-subtle text-xs">
                    Surabaya Kendo Open Tournament 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
