import Projects from "app/components/projects";

export const metadata = {
  title: "Projects",
  description: "These are my projects showcase my skills as a design engineer.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Projects
      </h1>
      <Projects />
    </section>
  );
}
