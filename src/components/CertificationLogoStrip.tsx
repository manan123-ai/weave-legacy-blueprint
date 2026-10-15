import { useState } from 'react';
import { Link } from 'react-router-dom';

// Shows the certifier-issued logo when the file exists in /public/certs, otherwise a plain text name.
const certs = [
  { name: 'OEKO-TEX Standard 100', file: '/certs/oeko-tex.png' },
  { name: 'GOTS', file: '/certs/gots.png' },
  { name: 'OCS', file: '/certs/ocs.png' },
  { name: 'GRS', file: '/certs/grs.svg' },
  { name: 'BCI', file: '/certs/bci.svg' },
];

const Logo = ({ name, file }: { name: string; file: string }) => {
  const [missing, setMissing] = useState(false);
  return (
    <li className="flex h-24 w-44 items-center justify-center px-4">
      {missing ? (
        <span className="font-serif text-lg text-foreground/80 text-center leading-tight">{name}</span>
      ) : (
        <img
          src={file}
          alt={`${name} certified`}
          width={176}
          height={80}
          loading="lazy"
          onError={() => setMissing(true)}
          className="max-h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      )}
    </li>
  );
};

const CertificationLogoStrip = () => (
  <section className="py-16 bg-background border-t border-border">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="font-serif text-2xl md:text-3xl font-bold">Certified to the standards buyers ask for</h2>
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {certs.map((c) => (
          <Logo key={c.name} {...c} />
        ))}
      </ul>
      <Link to="/certifications" className="mt-6 inline-block font-body text-sm underline underline-offset-4">
        See certification details
      </Link>
    </div>
  </section>
);

export default CertificationLogoStrip;
