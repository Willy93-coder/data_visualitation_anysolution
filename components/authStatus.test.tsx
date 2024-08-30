import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AuthStatus from "./authStatus";
import SessionProviderWrapper from "./sessionProviderWrapper";

test("AuthStatus component renders without errors", () => {
  render(
    <SessionProviderWrapper>
      <AuthStatus />
    </SessionProviderWrapper>
  );
  expect(screen.queryByText(/Loading/i)).toBeNull();
});

test('AuthStatus component displays "Sign Out" button when authenticated', () => {
  // Mock the useSession hook to return a valid session object
  // Render the AuthStatus component
  // Assert that the "Sign Out" button is displayed
});

test('AuthStatus component calls signOut function when "Sign Out" button is clicked', () => {
  // Mock the useSession and signOut hooks
  // Render the AuthStatus component
  // Simulate a click on the "Sign Out" button
  // Assert that the signOut function is called
});
