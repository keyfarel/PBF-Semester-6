import { render, screen } from "@testing-library/react";
import About from "@/pages/about";

describe("Halaman About", () => {
  it("harus render sesuai dengan snapshot", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });

  it("harus menampilkan teks judul yang benar", () => {
    render(<About />);
    const title = screen.getByTestId("title");
    expect(title.textContent).toBe("About");
  });
});