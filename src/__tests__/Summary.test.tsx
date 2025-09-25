import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import Resumen from "../pages/Summary/Summary";
import { UserContext } from "../context/UserContext";
import { PlansContext } from "../context/PlansContext";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const userDispatchMock = vi.fn();
const plansDispatchMock = vi.fn();

const baseUserState = {
  user: { name: "Rocío", lastName: "Pérez" },
  form: { documentNumber: "12345678", phone: "987654321" },
};

const basePlan = {
  name: "Plan Premium",
  price: 100,
  description: ["Cobertura total"],
  age: 30,
};

const Wrapper = ({
  children,
  userState = baseUserState,
  plansState,
}: {
  children: React.ReactNode;
  userState?: any;
  plansState: any;
}) => (
  <MemoryRouter>
    <UserContext.Provider
      value={{ state: userState, dispatch: userDispatchMock }}
    >
      <PlansContext.Provider
        value={{ state: plansState, dispatch: plansDispatchMock }}
      >
        {children}
      </PlansContext.Provider>
    </UserContext.Provider>
  </MemoryRouter>
);

describe("Resumen Component", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    userDispatchMock.mockClear();
    plansDispatchMock.mockClear();
  });

  it("renders fallback message when no plan is selected", () => {
    render(<Resumen />, {
      wrapper: (props) =>
        Wrapper({
          ...props,
          plansState: {
            plans: [],
            selectedPlan: null,
            forSomeoneElse: false,
            otherAge: null,
          },
        }),
    });

    expect(
      screen.getByText(/No has seleccionado un plan aún/i)
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Volver a planes/i }));
    expect(mockNavigate).toHaveBeenCalledWith("/plans");
  });

  it("renders summary correctly with a selected plan", () => {
    render(<Resumen />, {
      wrapper: (props) =>
        Wrapper({
          ...props,
          plansState: {
            plans: [basePlan],
            selectedPlan: basePlan,
            forSomeoneElse: false,
            otherAge: null,
          },
        }),
    });

    expect(screen.getByText(/Resumen del seguro/i)).toBeInTheDocument();
    expect(screen.getByText(/Plan Premium/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Costo del Plan: \$100 al mes/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Rocío Pérez/i)).toBeInTheDocument();
    expect(screen.getByText(/DNI: 12345678/i)).toBeInTheDocument();
    expect(screen.getByText(/Celular: 987654321/i)).toBeInTheDocument();
  });

  it("applies 5% discount when plan is for someone else", () => {
    render(<Resumen />, {
      wrapper: (props) =>
        Wrapper({
          ...props,
          plansState: {
            plans: [basePlan],
            selectedPlan: basePlan,
            forSomeoneElse: true,
            otherAge: 50,
          },
        }),
    });

    // 100 * 0.95 = 95
    expect(
      screen.getByText(/Costo del Plan: \$95 al mes/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/\(Se aplicó 5% de descuento — edad: 50\)/i)
    ).toBeInTheDocument();
  });

  it("navigates back when clicking 'Volver'", () => {
    render(<Resumen />, {
      wrapper: (props) =>
        Wrapper({
          ...props,
          plansState: {
            plans: [basePlan],
            selectedPlan: basePlan,
            forSomeoneElse: false,
            otherAge: null,
          },
        }),
    });

    const backBtn = screen.getByRole("button", { name: /Volver/i });
    fireEvent.click(backBtn);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
