import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from '@testing-library/user-event'

describe("Greeting component", () => {
  test("renders hello world as a text", () => {
    //Arrange
    render(<Greeting />);

    // Act
    // ...Nothing

    // Assert
    // Case insensitive or substrings with exact: false
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'It's good to see you!' if button not clicked", () => {
    //Arrange
    render(<Greeting />);

    // Act
    // ...Nothing

    // Assert
    // Case insensitive or substrings with exact: false
    const seeYouElement = screen.getByText("It's good to see you!", { exact: false });
    expect(seeYouElement).toBeInTheDocument();
  });



  test("renders 'Changed' as a text if button is clicked", () => {
    //Arrange
    render(<Greeting />);

    // Act
    // Click the button
    const buttonElement = screen.getByRole("button")
    userEvent.click(buttonElement)

    // Assert
    // Case insensitive or substrings with exact: false
    const outputElement = screen.getByText("Changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'It's good to see you!' is not visible if button clicked", () => {
    //Arrange
    render(<Greeting />);

    // Act
    // Click the button
    const buttonElement = screen.getByRole("button")
    userEvent.click(buttonElement)

    // Assert
    // Use query to not throw error on not finding. Expect not to be visible
    const seeYouElement = screen.queryByText("It's good to see you!", { exact: false });
    expect(seeYouElement).not.toBeInTheDocument();
  });

});
