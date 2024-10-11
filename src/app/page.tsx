"use client";
import { useState } from "react";

function Element() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative">
      <div className="absolute right-2 top-2 z-10">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x h-4 w-4"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div className="p-6 space-y-4 pt-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
          <div className="space-y-2">
            <label
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 after:ml-0.5 after:text-destructive after:content-["*"] sm:hidden'
              htmlFor=":r0:-form-item"
            >
              Grado
            </label>
            <button
              type="button"
              role="combobox"
              aria-controls="radix-:r1:"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 !mt-0 w-full sm:w-40"
              data-testid="degree-0"
              id=":r0:-form-item"
              aria-describedby=":r0:-form-item-description"
              aria-invalid="false"
            >
              <span style={{ pointerEvents: "none" }}>Curso</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <select
              aria-hidden="true"
              tabIndex={-1}
              style={{
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0px, 0px, 0px, 0px)",
                whiteSpace: "nowrap",
                overflowWrap: "normal",
              }}
            >
              <option value="course" selected>
                Curso
              </option>
              <option value="bachelors">Licenciatura</option>
              <option value="postgraduate">Posgrado</option>
              <option value="specialization">Especialidad</option>
            </select>
          </div>
          <div className="space-y-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hidden shrink-0 sm:flex"
              htmlFor=":r2:-form-item"
            >
              terminado en
            </label>
            <label
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 after:ml-0.5 after:text-destructive after:content-["*"] sm:hidden'
              htmlFor=":r2:-form-item"
            >
              Año de término
            </label>
            <input
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 !mt-0 w-full sm:w-24"
              placeholder="Año"
              id=":r2:-form-item"
              aria-describedby=":r2:-form-item-description"
              aria-invalid="false"
              type="number"
              value="2000"
            />
          </div>
        </div>
        <div className="space-y-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <label
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 after:ml-0.5 after:text-destructive after:content-["*"]'
            htmlFor=":r3:-form-item"
          >
            Institución
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id=":r3:-form-item"
            aria-describedby=":r3:-form-item-description"
            aria-invalid="false"
            value=""
            name="education.0.school"
          />
        </div>
        <div className="space-y-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <label
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 after:ml-0.5 after:text-destructive after:content-["*"]'
            htmlFor=":r4:-form-item"
          >
            Título
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id=":r4:-form-item"
            aria-describedby=":r4:-form-item-description"
            aria-invalid="false"
            value=""
            name="education.0.title"
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor=":r5:-form-item"
            >
              No. Certificado
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
              id=":r5:-form-item"
              aria-describedby=":r5:-form-item-description"
              aria-invalid="false"
              value=""
              name="education.0.certificateNumber"
            />
          </div>
          <p
            id=":r5:-form-item-description"
            className="text-xs text-muted-foreground"
          >
            Ingresar algún folio o certificado nos serviría para verificar esta
            información y darle seguridad a los pacientes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [elements, setElements] = useState<number>(0);
  const addElement = () => {
    setElements(elements + 1);
  };
  return (
    <form className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full font-medium bg-green-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-check h-4 w-4"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          </div>
          <span className="hidden text-sm md:flex font-medium text-green-500">
            Datos Personales
          </span>
        </div>
        <div className="h-[2px] flex-1 rounded-full bg-green-500"></div>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full font-medium bg-primary text-primary-foreground">
            2
          </div>
          <span className="hidden text-sm md:flex">Formación Profesional</span>
        </div>
        <div className="h-[2px] flex-1 rounded-full bg-secondary"></div>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full font-medium bg-secondary text-secondary-foreground">
            3
          </div>
          <span className="hidden text-sm md:flex">Costos y Modos</span>
        </div>
        <div className="h-[2px] flex-1 rounded-full bg-secondary"></div>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full font-medium bg-secondary text-secondary-foreground">
            4
          </div>
          <span className="hidden text-sm md:flex">Metodo y Enfoques</span>
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div className="p-0">
          <section className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">
              Formación Profesional
              <span className="text-sm text-destructive">*</span>
            </h2>

            {elements ? (
              Array.from({ length: elements }).map((_, index) => (
                <Element key={index} />
              ))
            ) : (
              <p className="text-sm text-muted-foreground">
                No has agregado información sobre tu educación todavía
              </p>
            )}
            <button
              onClick={addElement}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Agregar
            </button>
          </section>
        </div>
      </div>
      <div className="flex justify-between">
        <a
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          href="link:///signup/steps/personal"
        >
          Anterior
        </a>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          type="submit"
        >
          Siguiente
        </button>
      </div>
    </form>
  );
}
