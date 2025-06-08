"use client";

import Image from "next/image";
import Link from "next/link";

const clubs = [
  { name: "Espérance", slug: "esperance", logo: "/clubs/est.png" },
  { name: "Club Africain", slug: "club-africain", logo: "/clubs/ca.png" },
  { name: "Étoile du Sahel", slug: "etoile", logo: "/clubs/ess.png" },
  { name: "CS Sfaxien", slug: "cs-sfaxien", logo: "/clubs/css.png" },
  { name: "As Gabes", slug: "As-Gabes", logo: "/clubs/asg.png" },
  { name: "AS Solimane", slug: "AS-Solimane", logo: "/clubs/ass.png" },
  { name: "ca bizertin", slug: "ca-bizertin", logo: "/clubs/cab.png" },
  { name: "es metlaoui", slug: "es-metlaoui", logo: "/clubs/esm.png" },
  { name: "es zarzis", slug: "es-zarzis", logo: "/clubs/Esz.png" },
  { name: "js omrane", slug: "js-omrane", logo: "/clubs/jso.png" },
  { name: "o beja", slug: "o-beja", logo: "/clubs/ob.gif" },
  { name: "s tunisien", slug: "s-tunisien", logo: "/clubs/st.png" },
  { name: "us benguerdane", slug: "us-benguerdane", logo: "/clubs/usg.png" },
  { name: "us monastir", slug: "us-monastir", logo: "/clubs/usm.png" },
];

// Create 4x duplicates to ensure enough logos for continuous scrolling
const scrollingClubs = [...clubs, ...clubs, ...clubs, ...clubs];

export default function Topbar() {
  return (
    <div className="bg-white border-b border-gray-200 w-full fixed top-0 left-0 z-50 h-16 overflow-hidden">
      <div className="flex items-center animate-scroll whitespace-nowrap h-full">
        {scrollingClubs.map((club, index) => (
          <Link
            key={`${club.slug}-${index}`}
            href={`/clubs/${club.slug}`}
            className="mx-4 hover:scale-105 transition-transform duration-150 flex-shrink-0"
          >
            <div className="w-10 h-10 relative">
              <Image
                src={club.logo}
                alt={club.name}
                fill
                className="object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
