import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Button } from "../Button";

describe("Button", () => {
  it("renderiza com o texto fornecido", () => {
    const { getByRole } = render(<Button>Enviar</Button>);
    expect(getByRole("button", { name: /enviar/i })).toBeInTheDocument();
  });

  it("dispara onClick quando clicado", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    const { getByRole } = render(<Button onClick={handleClick}>Clique</Button>);

    await user.click(getByRole("button", { name: /clique/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
