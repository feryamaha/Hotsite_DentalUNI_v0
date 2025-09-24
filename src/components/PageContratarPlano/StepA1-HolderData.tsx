"use client";

import React, { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { contractPlansSchema } from "@/schemas/contractPlansSchema";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layoutMain";
import MenuSidebar from "@/components/ui/MenuSidebar";
import DocolMekal from "../ui/docolMekal";
import IncludeBeneficiaryCard from "../ui/IncludeBeneficiaryCard";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import { useFormContext } from "@/context/FormContext";
import ModalProcedimentos from "@/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos";

type HolderFormData = z.infer<typeof contractPlansSchema>;
interface StepA1HolderDataProps {
  onNext: () => void;
  onBack: () => void;
  
}

export function StepA1HolderData({ onNext, onBack }: StepA1HolderDataProps) {
  const { onMenuClick, currentStep, completedSteps } = useFormContext();

  // ---------------------------
  // LOGICA DO MODAL DE PROCEDIMENTOS (REUTILIZADA)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [planIdModal, setPlanIdModal] = useState("");

  // Função para abrir modal passando o ID do plano desejado
  // (INSERIDO PARA REUTILIZAÇÃO)
  const handleOpenModal = (planId: string) => {
    setPlanIdModal(planId);
    setIsModalOpen(true);
  };

  // Função para fechar modal
  // (INSERIDO PARA REUTILIZAÇÃO)
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // ---------------------------

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<HolderFormData>({
    resolver: zodResolver(contractPlansSchema),
    mode: "onChange",
    defaultValues: {
      holder: {
        cpf: "",
        beneficiaryName: "",
        motherName: "",
        sex: "",
        civilStatus: "",
        nomeConjuge: "",
      },
    },
  });

  const sex = useWatch({ control, name: "holder.sex" });
  const civilStatus = useWatch({ control, name: "holder.civilStatus" });
  const cpf = useWatch({ control, name: "holder.cpf" });
  const beneficiaryName = useWatch({ control, name: "holder.beneficiaryName" });
  const motherName = useWatch({ control, name: "holder.motherName" });

  const isFormValid = React.useMemo(() => {
    const isCpfValid = cpf && /^\d{11}$/.test(cpf);
    const isBeneficiaryNameValid =
      beneficiaryName &&
      beneficiaryName.length >= 3 &&
      /^[\p{L}\s]+$/u.test(beneficiaryName);
    const isMotherNameValid =
      motherName && motherName.length >= 3 && /^[\p{L}\s]+$/u.test(motherName);
    const isSexValid = sex && sex.length >= 1;
    const isCivilStatusValid = civilStatus && civilStatus.length >= 1;
    return (
      isCpfValid &&
      isBeneficiaryNameValid &&
      isMotherNameValid &&
      isSexValid &&
      isCivilStatusValid
    );
  }, [cpf, beneficiaryName, motherName, sex, civilStatus]);

  const onSubmit = (data: HolderFormData) => {
    // eslint-disable-next-line no-console
    console.log("Dados do titular:", data);
    onNext();
  };

  // Detectar se é Mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ----------- LADO PRINCIPAL (formulário) -----------
  const mainContent = (
    <div className="w-full h-full flex gap-[24px]">
      {!isMobile && (
        <div className="w-max">
          <MenuSidebar
            onMenuClick={onMenuClick || (() => {})}
            currentStep={currentStep}
            completedSteps={Array.from(completedSteps)}
          />
        </div>
      )}
      <div className="w-full flex flex-col gap-[32px]">
        <div className="w-full h-max pb-[32px] border-b flex justify-between">
          <div className="w-max flex flex-col">
            <Button
              variant="btnLink"
              className="textbtnLink w-max"
              onClick={onBack}
            >
              <Icon name="IconArrowright" className="w-5 h-5 rotate-180" />
              Voltar
            </Button>
            <div className="w-[210px] pt-[8px]">
              <h2 className="TypographyPlato24 pb-[8px]">Titular do plano</h2>
              <p className="TypographyPinter16w400">
                Por favor, insira o CPF que será o titular do plano.
              </p>
            </div>
          </div>
          <div className="w-max flex hidden @tablet:block">
            <DocolMekal />
          </div>
        </div>
        <div className="w-full justify-between flex flex-col @tablet:flex-row">
          <p className="TypographyPlato20 mb-[16px] @tablet:mb-0">
            Dados iniciais
          </p>
          <div className="max-w-[542px]">
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FloatingLabelInput
                label="CPF"
                name="holder.cpf"
                type="text"
                placeholder="CPF*"
                onlyNumbers
                register={register}
                errors={errors}
                control={control}
                maxLength={11}
                validation={{
                  required: "CPF é obrigatório",
                  pattern: {
                    value: /^\d{11}$/,
                    message: "CPF deve ter exatamente 11 dígitos numéricos",
                  },
                }}
              />
              <FloatingLabelInput
                label="Nome do beneficiário"
                name="holder.beneficiaryName"
                type="text"
                placeholder="Nome do beneficiário*"
                allowAllCharacters
                register={register}
                errors={errors}
                control={control}
                validation={{
                  required: "Nome do beneficiário é obrigatório",
                  minLength: {
                    value: 3,
                    message: "Nome deve ter no mínimo 3 caracteres",
                  },
                  pattern: {
                    value: /^[\p{L}\s]+$/u,
                    message: "Apenas letras e espaços são permitidos",
                  },
                }}
              />
              <FloatingLabelInput
                label="Nome da mãe"
                name="holder.motherName"
                type="text"
                placeholder="Nome da mãe*"
                allowAllCharacters
                register={register}
                errors={errors}
                control={control}
                validation={{
                  required: "Nome da mãe é obrigatório",
                  minLength: {
                    value: 3,
                    message: "Nome deve ter no mínimo 3 caracteres",
                  },
                  pattern: {
                    value: /^[\p{L}\s]+$/u,
                    message: "Apenas letras e espaços são permitidos",
                  },
                }}
              />
              <div className="flex gap-4">
                <div className="w-1/2">
                  <FloatingLabelInput
                    label="Sexo"
                    name="holder.sex"
                    type="text"
                    placeholder="Sexo*"
                    allowAllCharacters
                    register={register}
                    errors={errors}
                    control={control}
                    validation={{
                      required: "Sexo é obrigatório",
                    }}
                  />
                </div>
                <div className="w-1/2">
                  <FloatingLabelInput
                    label="Estado civil"
                    name="holder.civilStatus"
                    type="text"
                    placeholder="Estado civil*"
                    allowAllCharacters
                    register={register}
                    errors={errors}
                    control={control}
                    validation={{
                      required: "Estado civil é obrigatório",
                    }}
                  />
                </div>
              </div>
              {isFormValid ? (
                <Button
                  variant="btnFormHover"
                  className="w-full"
                  type="submit"
                  onClick={onNext}
                >
                  Avançar
                  <Icon name="IconArrowright" className="w-5 h-5" />
                </Button>
              ) : (
                <Button variant="btnForm" className="w-full" disabled>
                  Avançar
                  <Icon name="IconArrowright" className="w-5 h-5" />
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  // ----------- SIDE (DETALHES DO PLANO) -----------
  const sideContent = (
    <div className="w-full h-max flex flex-col gap-[8px]">
      <div className="w-full h-max py-[16px] px-[24px] bg-white rounded-[8px]">
        {/* RENDERIZA O MODAL PROCEDIMENTO & ATOS */}
        <PlanDetailsCard onOpenModal={() => handleOpenModal('default')} />
      </div>
      <IncludeBeneficiaryCard />
    </div>
  );

  return (
    <ContractPlansLayout
      sideContent={sideContent}
      currentStep={currentStep}
      totalSteps={6}
      stepTitle="Titular do plano"
      completedSteps={Array.from(completedSteps)}
      onMenuClick={onMenuClick}
    >
      {mainContent}
      {/* RENDERIZA O MODAL PROCEDIMENTO & ATOS */}
      {isModalOpen && (
        <ModalProcedimentos onClose={handleCloseModal} planId={planIdModal} />
      )}
    </ContractPlansLayout>
  );
}

export default StepA1HolderData;
