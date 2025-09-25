import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import Plans from "../pages/Plans/Plans";
import { UserContext } from "../context/UserContext";
import { PlansContext } from "../context/PlansContext";

const mockUserState = { name: "Rocío", age: 0 };
const mockPlans = [
  {
    name: "Plan Básico",
    price: 39,
    description: ["Cobertura básica"],
    age: 60,
  },
  {
    name: "Plan Premium",
    price: 99,
    description: ["Cobertura completa"],
    age: 70,
  },
];

const plansDispatchMock = vi.fn();
const userDispatchMock = vi.fn();

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>
    <UserContext.Provider
      value={{ state: mockUserState, dispatch: userDispatchMock }}
    >
      <PlansContext.Provider
        value={{
          state: {
            plans: mockPlans,
            loading: false,
            error: null,
            selectedPlan: null,
            forSomeoneElse: false,
            otherAge: null,
          },
          dispatch: plansDispatchMock,
        }}
      >
        {children}
      </PlansContext.Provider>
    </UserContext.Provider>
  </MemoryRouter>
);

describe("Plans Component", () => {
  beforeEach(() => {
    plansDispatchMock.mockClear();
    userDispatchMock.mockClear();
  });

  it("renders the component title", () => {
    render(<Plans />, { wrapper: Wrapper });
    expect(
      screen.getByText(/¿Para quién deseas cotizar\?/i)
    ).toBeInTheDocument();
  });

  it("shows plans only after selecting an option", async () => {
    render(<Plans />, { wrapper: Wrapper });

    // The plans should not be visible at the beginning (they are hidden until an option is selected)
    expect(screen.queryByText(/Plan Básico/i)).not.toBeInTheDocument();

    // Select “For me” (input/label must match the text on the OptionCard)
    fireEvent.click(screen.getByLabelText(/Para mí/i));

    // Wait for the mock plan to appear in the DOM
    expect(await screen.findByText(/Plan Básico/i)).toBeInTheDocument();
  });

  it("dispatches SELECT_PLAN when user selects a plan", async () => {
    render(<Plans />, { wrapper: Wrapper });

    // Open the options (select “For me”)
    fireEvent.click(screen.getByLabelText(/Para mí/i));

    // Wait for all “Select” buttons
    const selectBtns = await screen.findAllByRole("button", {
      name: /seleccionar/i,
    });

    // Click on the first one
    fireEvent.click(selectBtns[0]);

    // We verified that the dispatch of the plan context was called.
    expect(plansDispatchMock).toHaveBeenCalled();

    // Verify that it was called with an action containing type 'SELECT_PLAN'
    expect(plansDispatchMock).toHaveBeenCalledWith(
      expect.objectContaining({ type: "SELECT_PLAN" })
    );
  });
});
