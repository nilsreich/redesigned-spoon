import Chat from "@/components/Chat";
import { Navbar } from "@/components/Navbar";
import { Rail } from "@/components/Rail";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grow flex flex-col">
      <Navbar />
      <div className="flex grow ">
        <Rail />
        <div className="grow">{children}</div>
        <Chat />
      </div>
    </section>
  );
}
