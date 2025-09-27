"use client";

import React, { useState, ChangeEvent } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import { z } from "zod";

interface StepB3BasicDataProps {
  onNext: () => void;
  onBack: () => void;
}

const basicDataSchema = z.object({
  nomeMae: z.string().min(3, "Digite o nome da mãe"),
  sexo: z.string().min(1, "Informe o sexo"),
  parentesco: z.string().min(2, "Informe o parentesco"),
  rg: z.string().min(2, "Informe o RG"),
  orgaoEmissor: z.string().min(2, "Informe o órgão emissor"),
  cns: z.string().min(2, "Informe o CNS"),
});

export function StepB3BasicData({ onNext, onBack }: StepB3BasicDataProps) {

  const [form, setForm] = useState({
    nomeMae: "",
    sexo: "",
    parentesco: "",
    rg: "",
    orgaoEmissor: "",
    cns: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleValidateAndNext = () => {
    const result = basicDataSchema.safeParse(form);
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
      <div className="flex gap-[24px] w-[80%] h-[80%]">
        {/* Modal Content */}
        <div className="flex-1 bg-white rounded-r-[16px] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center border-b px-[32px] py-[16px]">
            <h2 className="TypographyPlato20">Dados básicos do dependente</h2>
            <button onClick={onBack} className="p-[12px]">
              <Icon name="IconCloseA" />
            </button>
          </div>
          {/* Body */}
          <div className="flex-1 overflow-y-auto px-[32px] py-[16px] flex flex-col gap-[24px]">
            <FloatingLabelInput
              label="Nome da mãe"
              name="nomeMae"
              placeholder="Digite o nome da mãe"
              value={form.nomeMae}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("nomeMae", e.target.value)
              }
              errors={errors}
            />
            <FloatingLabelInput
              label="Sexo"
              name="sexo"
              placeholder="Masculino"
              value={form.sexo}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("sexo", e.target.value)
              }
              errors={errors}
            />
            <FloatingLabelInput
              label="Parentesco"
              name="parentesco"
              placeholder="Filho"
              value={form.parentesco}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("parentesco", e.target.value)
              }
              errors={errors}
            />
            <FloatingLabelInput
              label="RG"
              name="rg"
              placeholder="Digite o RG"
              value={form.rg}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("rg", e.target.value)
              }
              errors={errors}
            />
            <FloatingLabelInput
              label="Órgão Emissor"
              name="orgaoEmissor"
              placeholder="Digite o órgão emissor"
              value={form.orgaoEmissor}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("orgaoEmissor", e.target.value)
              }
              errors={errors}
            />
            <FloatingLabelInput
              label="CNS"
              name="cns"
              placeholder="Digite o CNS"
              value={form.cns}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("cns", e.target.value)
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

export default StepB3BasicData;
