import { render } from "@testing-library/react";
import About from "@/pages/about";

describe("Halaman About", () => {
  it("harus render sesuai dengan snapshot", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});