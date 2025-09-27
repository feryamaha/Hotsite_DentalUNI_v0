"use client";

import React, { useState, ChangeEvent } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import { z } from "zod";

interface StepB2AddInitialDataProps {
  onNext: () => void;
  onBack: () => void;
}

const initialDataSchema = z.object({
  nome: z.string().min(3, "Digite o nome"),
  dataNascimento: z.string().min(10, "Digite a data de nascimento"),
  cpf: z.string().min(11, "Digite o CPF"),
});

export function StepB2AddInitialData({
  onNext,
  onBack,
}: StepB2AddInitialDataProps) {

  const [form, setForm] = useState({
    nome: "",
    dataNascimento: "",
    cpf: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleValidateAndNext = () => {
    const result = initialDataSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    onNext();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="max-w-[558px] @mobile:w-[80%] h-[80%] flex gap-[24px] absolute bottom-0 @tablet:static">
        {/* Modal Content */}
        <div className="w-full flex-1 bg-white rounded-[16px] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center border-b px-[32px] py-[16px]">
            <h2 className="TypographyPlato20">Incluir dependente</h2>
            <button onClick={onBack} className="p-[12px]">
              <Icon name="IconCloseA" />
            </button>
          </div>

          <div className="w-full pt-[32px] px-[32px] flex flex-col gap-[8px]">
            <p className="Typography14hoversidebarOK">Etapa 1 de 2</p>
            <h2 className="TypographyPlato24">Dados Iniciais</h2>
            <p className="TypographyPinter16w400">
              Vamos começar pelo CPF, nome e data de nascimento.
            </p>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto pt-[24px] flex flex-col gap-[24px] px-[32px]">
            <FloatingLabelInput
              label="Nome"
              name="nome"
              placeholder="Digite o nome completo"
              value={form.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("nome", e.target.value)
              }
              errors={errors}
            />
            <FloatingLabelInput
              label="Data de nascimento"
              name="dataNascimento"
              placeholder="dd/mm/aaaa"
              value={form.dataNascimento}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("dataNascimento", e.target.value)
              }
              errors={errors}
            />
            <FloatingLabelInput
              label="CPF"
              name="cpf"
              placeholder="000.000.000-00"
              value={form.cpf}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("cpf", e.target.value)
              }
              errors={errors}
            />
          </div>

          {/* Footer */}
          <div className="border-t px-[32px] py-[16px] flex justify-between">
            <Button variant="btnLinkForm" onClick={onBack}>
              Cancelar
            </Button>
            <Button variant="btnFormHover" onClick={handleValidateAndNext}>
              Avançar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepB2AddInitialData;
