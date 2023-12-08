import { getDictionary } from "./dictionaries"
import Contact from "./components/Contact";
import Favorite from "./components/Favorite";
import Header from "./components/Header";
import Information from "./components/Information";
import Project from "./components/Project";

export default async function Admin({params: {lang}}) {
  const dict = await getDictionary(lang)
  return (
    <main className="mb-8">
    <Header lang={lang} />
    <div className="flex gap-6 pt-[2rem] px-10">
      <Information />
      <div className="flex-1 flex flex-col gap-y-3" >
        <Contact data={dict.contact} />
        <Project data={dict.project} />
        <Favorite data={dict.hobby} />
      </div>
    </div>
  </main>
  );
}

