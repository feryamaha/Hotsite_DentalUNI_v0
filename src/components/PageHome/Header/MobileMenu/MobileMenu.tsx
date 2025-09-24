"use client";

import Link from "next/link";
import type { Route } from "next";
import { useEffect } from "react";
import { menuItems } from "../menuConfig";
import { Icon } from "../../../../scripts/Icon";
import { Button } from "../../../ui/Button";

// Types: Apenas a prop para fechar o menu é necessária agora
type MobileMenuProps = {
  setIsSidebarOpen: (value: boolean) => void;
};

// Componente principal do Menu Mobile
export function MobileMenu({ setIsSidebarOpen }: MobileMenuProps) {
  // Efeito para controlar o scroll do body quando o menu está aberto/fechado
  useEffect(() => {
    // A prop isSidebarOpen agora é gerenciada pelo componente pai (Header)
    // Aqui, apenas aplicamos o efeito baseado em se o componente está montado (aberto)
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []); // O efeito só precisa rodar uma vez ao montar/desmontar

  // Causa do erro: o menu definia rotas internas como '/plans' e '/help',
  // mas no app elas vivem sob '/page' (ex.: '/page/plans', '/page/help').
  // Solução: normalizar links internos para incluir '/page' (exceto '/'),
  // mantendo <Link> para internas e <a> para externas.
  const resolveHref = (href: string) => {
    if (/^https?:\/\//i.test(href)) return href;
    if (href === "/") return href;
    return href.startsWith("/page/") ? href : `/page${href}`;
  };
  const isExternal = (href: string) => /^https?:\/\//i.test(href);

  return (
    // Overlay escuro que cobre a tela inteira quando o menu está aberto
    // Clicar no overlay também fecha o menu
    <div
      className="fixed inset-0 bgOverlayMobile bg-opacity-80 z-50"
      onClick={() => setIsSidebarOpen(false)}
    >
      {/* Container principal do menu: desliza da direita
          O onClick stopPropagation impede que clicar no menu feche ele acidentalmente
      */}
      <div
        className="fixed inset-y-0 right-0 w-full max-w-[20.5rem] bg-white overflow-y-auto p-[16px] "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Cabeçalho do menu mobile com título e botão de fechar */}
          <div className="flex items-center justify-end ">
            {/* Botão genérico de fechar menu - usa IconClear */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-red500 hover:text-gray700"
              aria-label="Fechar Menu Mobile"
            >
              <Icon name="IconCloseMenuMobile" className="w-6 h-6" />{" "}
              {/* Ajustado tamanho do ícone */}
            </button>
          </div>

          {/* Conteúdo principal do menu: itens de navegação e botão de ação */}
          <div className="flex-1 overflow-y-auto flex flex-col gap-4 justify-between pt-[116px]">
            <div className="flex flex-col gap-[16px] items-center ">
              {/* Renderiza os itens de menu usando map no array importado */}
              {menuItems.map((item) => {
                const href = resolveHref(item.link);
                return isExternal(item.link) ? (
                  // Link externo (ex.: "Rede Credenciada") deve abrir em nova aba
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="TypographyMenuMobile flex font-semibold justify-between focus:outline-none"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name} // Chave única para cada item na lista
                    href={href as Route}
                    className="TypographyMenuMobile flex font-semibold justify-between focus:outline-none"
                    onClick={() => setIsSidebarOpen(false)} // Fecha o menu ao clicar em um item
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Botão de ação 'Contratar agora' - replicando a estrutura do Header */}
            <div className="mt-4">
              {" "}
              {/* Adiciona um pouco de espaço acima do botão */}
              <Button
                href="/page/contractPlans"
                variant="btnSecondary"
                className="w-full hover:bg-red700"
                onClick={() => setIsSidebarOpen(false)} // Fecha o menu ao clicar no botão
              >
                Contratar agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
