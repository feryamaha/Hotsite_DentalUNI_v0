"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import type { Route } from "next";

import { MobileMenu } from "./MobileMenu/MobileMenu";

import { menuItems } from "./menuConfig";
import { Icon } from "../../../scripts/Icon";
import { Container } from "../../ui/Container";
import { Button } from "../../ui/Button";

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Causa do erro: as rotas internas do projeto estão sob o segmento '/page' (ex.: '/page/plans', '/page/help'),
  // mas o menu configurava '/plans' e '/help'. Ao clicar, resultava em 404 ou nenhum redirecionamento válido.
  // Solução: normalizar os links internos para incluir '/page' (exceto a raiz '/'),
  // e usar <a> apenas para URLs externas (http/https), mantendo SPA para internas com <Link>.
  const resolveHref = (href: string) => {
    if (/^https?:\/\//i.test(href)) return href;
    if (href === "/") return href;
    return href.startsWith("/page/") ? href : `/page${href}`;
  };

  const isExternal = (href: string) => /^https?:\/\//i.test(href);

  return (
    <header className="relative w-full h-[72px] flex items-center bg-white z-40 border-b ">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="/" className="w-[154px] h-[24px]">
              <Icon name="IconLogoinstitucional" className="w-full h-full" />
            </a>

            <nav className="max-w-[492px] flex items-center gap-2 hidden @tablet:flex">
              {menuItems.map((item) => {
                const href = resolveHref(item.link);
                return isExternal(item.link) ? (
                  // Link externo (ex.: "Rede Credenciada") deve abrir em nova aba
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto flex items-center TypographyNavHeader hover:TypographyNavHeaderHover"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={href as Route}
                    className="w-auto flex items-center TypographyNavHeader hover:TypographyNavHeaderHover"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <button
            className="block @tablet:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <span className="text-2xl text-gray950">☰</span>
          </button>

          <div className="hidden @tablet:flex">
            {/* Link permanece /page/contractPlans */}
            <a href="/page/contractPlans">
              <Button variant="btnPrimary" className="hover:bg-red700">
                Contratar agora
              </Button>
            </a>
          </div>
        </div>

        {isSidebarOpen && <MobileMenu setIsSidebarOpen={setIsSidebarOpen} />}
      </Container>

      {children}
    </header>
  );
}
