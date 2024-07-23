import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Educação</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Ciência da Computação
            </h5>
            <p className="font-semibold">UNIFEI (2007-2010)</p>
            {/* <p className="my-3">
              I am currently pursuing B.tech in Computer Science Engineering
              from Academy of Technology
            </p> */}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experiência</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Desenvolvedor Android - BRQ - 2020 à 2023.</h5>
            <h5 className="my-2 text-xl font-bold">Desenvolvedor Android e .NET - Flex  A. - 2018 à 2020.</h5>
            <h5 className="my-2 text-xl font-bold">Desenvolvedor Android - Audit B. - 2015 à 2016.</h5>
            <h5 className="my-2 text-xl font-bold">Desenvolvedor Cobol - Accenture  - 2010 à 2013.</h5>
            {/* <p className="font-semibold">Tata Consultancy Services</p>
            <p className="my-3">I don't know why I am doing this job</p> */}
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Ferramentas & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
