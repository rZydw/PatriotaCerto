import React from "react";
import Logo from "./Logo";
import FeatureCard from "./FeatureCard";
import Testimonial from "./Testimonial";
import { Check, AlertTriangle, Globe, ShieldCheck, BadgeCheck } from "lucide-react";

const KIWIFY_URL = "https://pay.kiwify.com.br/mdZbYG5";

const LandingPage = () => {
  return (
    <div className="w-full max-w-[480px] mx-auto px-5 pt-7 pb-10 select-none">
      {/* Logo */}
      <div className="flex justify-center mb-5">
        <Logo />
      </div>

      {/* Headline */}
      <h1 className="text-center text-white font-extrabold uppercase leading-[1.15] tracking-wide text-[19px] sm:text-[22px] mb-6 px-2">
        Notícias, análises e
        <br />
        comprometimento com a verdade!
      </h1>

      {/* Video Box */}
      <div className="br-border mb-8">
        <div className="br-border-inner">
          <div className="br-border-content">
            <div className="bg-black aspect-square w-full overflow-hidden">
              <video
                src="https://customer-assets.emergentagent.com/job_mobile-design-16/artifacts/wlt4bsgy_Copy%20site.mp4"
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section: Entre e tenha acesso a */}
      <div className="flex items-center justify-center mb-5 gap-2">
        <span className="text-white text-2xl sm:text-3xl leading-none" aria-hidden="true">⤹</span>
        <h2 className="text-white font-extrabold uppercase text-[15px] sm:text-[17px] tracking-wide text-center">
          Entre e tenha acesso a
        </h2>
        <span className="text-white text-2xl sm:text-3xl leading-none" aria-hidden="true">⤸</span>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-col gap-4 mb-8">
        <FeatureCard
          title="Notícias em Primeira Mão"
          body="Alertas diários sobre Congresso, STF, decisões importantes e o que a grande mídia omite."
        />
        <FeatureCard
          title="Análises Conservadoras"
          body="Opinião direta, patriota e sem neutralidade falsa. Entenda o que está realmente por trás das notícias."
        />
        <FeatureCard
          title="Comunidade de Patriotas"
          body="Mais de 2 mil brasileiros que pensam como você. Troca de ideias, alertas e união pela liberdade."
        />
      </div>

      {/* Subheadline */}
      <h3 className="text-center text-white font-extrabold uppercase leading-[1.2] text-[15px] sm:text-[17px] tracking-wide mb-4 px-1">
        Acesse a comunidade e junte-se a
        <br />
        mais de 2 mil defensores da liberdade
        <br />
        no nosso país!
      </h3>

      {/* Flag */}
      <div className="flex justify-center mb-1">
        <span className="text-3xl" role="img" aria-label="Brasil">🇧🇷</span>
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-3 mb-4 text-white text-2xl">
        <span className="arrow-bounce">↓</span>
        <span className="arrow-bounce">↓</span>
        <span className="arrow-bounce">↓</span>
      </div>

      {/* CTA */}
      <a href={KIWIFY_URL} target="_blank" rel="noopener noreferrer" className="cta-link mb-4">
        <div className="cta-border">
          <div className="cta-border-inner">
            <div className="cta-content">
              <div
                className="cta-glow text-white font-black uppercase tracking-wide text-[32px] sm:text-[38px] leading-none"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Participe Aqui
              </div>
              <div className="text-white/90 text-[10px] sm:text-[11px] tracking-wider uppercase mt-2 font-semibold">
                *por um valor simbólico de R$ 9,90
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Trust row */}
      <div className="flex items-center justify-between px-2 mb-8 text-white">
        <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] uppercase tracking-wide font-semibold">
          <Check className="w-4 h-4" strokeWidth={3} />
          <span>Acesso Imediato</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] uppercase tracking-wide font-semibold">
          <AlertTriangle className="w-4 h-4" strokeWidth={2.5} />
          <span>Vagas Limitadas</span>
        </div>
      </div>

      {/* Testimonials */}
      <div className="flex flex-col gap-5 mb-10">
        <Testimonial
          name="Fran"
          avatar="https://customer-assets.emergentagent.com/job_mobile-design-16/artifacts/vsu8au14_photo_2026-01-30_10-14-38.jpg"
          stars={4}
          text={<>Comunidade excelente, avante Brasil <span role="img" aria-label="Brasil">🇧🇷</span></>}
        />
        <Testimonial
          name="Roberto"
          avatar="https://customer-assets.emergentagent.com/job_mobile-design-16/artifacts/47yrx8i8_photo_2024-10-15_19-55-52.jpg"
          stars={5}
          text="Finalmente um portal com informação de qualidade, recomendo!"
        />
        <Testimonial
          name="Villanassi"
          avatar="https://customer-assets.emergentagent.com/job_mobile-design-16/artifacts/w6lc4i1p_photo_2026-02-27_20-12-14.jpg"
          stars={5}
          text={
            <>
              MUITO BOM, VAMOS RECUPERAR NOSSO BRASIL 2026{" "}
              <span role="img" aria-label="Brasil">🇧🇷🇧🇷🇧🇷</span>
            </>
          }
        />
      </div>

      {/* Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-2 text-white/85 text-[11px] sm:text-[12px] pt-2">
        <div className="flex items-center justify-center sm:justify-start gap-1.5">
          <Globe className="w-4 h-4" strokeWidth={1.6} />
          <span className="truncate">jornal.opatrioota@gmail.com</span>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4" strokeWidth={1.6} />
          <span>Compra Segura</span>
        </div>
        <div className="flex items-center justify-center sm:justify-end gap-1.5">
          <BadgeCheck className="w-4 h-4" strokeWidth={1.6} />
          <span>Garantia de 7 dias</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
