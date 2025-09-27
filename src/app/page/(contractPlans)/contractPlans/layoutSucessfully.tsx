"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { Icon } from "@/scripts/Icon";

type LayoutProps = {
  children: ReactNode;
  currentStep?: number; // ← Nova prop aqui!
};

export default function ContractPlansLayoutSucessfully({
  children,
  currentStep,
}: LayoutProps) {

  const handleClose = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-full h-screen fixed inset-0 flex flex-col bg-white z-50">
      {/* Header fixo */}
      <div className="fixed top-0 w-full h-[80px] py-[16px] px-[32px] flex items-center justify-between bg-transparent z-50">
        <Link href="/" className="w-[154px] h-[24px]">
          <Icon name="IconLogoinstitucional" className="w-full h-full" />
        </Link>
        <button className="w-max h-max" onClick={handleClose}>
          <Icon name={currentStep === 0 ? "IconCloseA" : "IconCloseB"} />
        </button>
      </div>

      {/* Conteúdo ocupando 100% */}
      <div className="w-full h-full flex items-center justify-center pt-[112px] px-[32px]">
        {children}
      </div>
    </div>
  );
}
