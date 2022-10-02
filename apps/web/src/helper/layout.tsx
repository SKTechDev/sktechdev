import { Navbar } from "ui";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen ml-24 bg-light-background text-light-on-background dark:bg-dark-background dark:text-dark-on-background">
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
}
