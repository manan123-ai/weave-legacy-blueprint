import AnimatedCounter from '@/components/motion/AnimatedCounter';
import Reveal from '@/components/motion/Reveal';

const stats = [
  { value: 55, suffix: '+', label: 'Years' },
  { value: 2, suffix: 'M+', label: 'Metres / Month' },
  { value: 20, suffix: '+', label: 'Countries' },
  { value: 5, suffix: '', label: 'Weaving Units' },
  { value: 5, suffix: '', label: 'Certifications' },
];

const HomeStatsStrip = () => (
  <section aria-label="Janki Nath & Co. at a glance" className="py-10 md:py-12" style={{ backgroundColor: '#2E3B54' }}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <dl className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 text-center">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-2 ${i > 0 ? 'md:border-l' : ''} ${i === stats.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
              style={{ borderColor: 'rgba(169,137,94,0.45)' }}
            >
              <dt className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#A9895E' }}>
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </dt>
              <dd className="mt-2 font-body text-xs md:text-sm uppercase tracking-[0.2em]" style={{ color: '#F5F3EE' }}>
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </section>
);

export default HomeStatsStrip;
