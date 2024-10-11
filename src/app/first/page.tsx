"use client";

import { onSubmit } from "./action";

export default function FirstPage() {
  return (
    <main className="container mx-auto flex-1 space-y-4 p-2 md:p-4">
      <div className="flex flex-col space-y-0.5">
        <h2 className="bg-gradient-to-r from-blue-600 to-red-400 bg-clip-text text-center text-2xl font-bold tracking-tight text-transparent sm:w-fit sm:text-start">
          ¡Bienvenidx a Therapia!
        </h2>
        <p className="text-muted-foreground">
          Llena tu perfil en 4 sencillos pasos para que puedas aparecer en las
          búsquedas 🔍 de los pacientes.
        </p>
      </div>
      <form className="space-y-4" action={onSubmit}>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full font-medium bg-primary text-primary-foreground">
              1
            </div>
            <span className="hidden text-sm md:flex">Datos Personales</span>
          </div>
          <div className="h-[2px] flex-1 rounded-full bg-secondary"></div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full font-medium bg-secondary text-secondary-foreground">
              2
            </div>
            <span className="hidden text-sm md:flex">
              Formación Profesional
            </span>
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
            <div className="space-y-8">
              <section className="flex min-h-0 flex-col gap-y-3">
                <h2 className="text-xl font-bold">Información Personal</h2>
                <div className="flex flex-col-reverse items-center gap-x-4 sm:flex-row sm:items-start">
                  <div className="flex w-full flex-1 flex-col gap-4">
                    <div className="space-y-2">
                      <label
                        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 after:ml-0.5 after:text-destructive after:content-["*"]'
                        htmlFor=":R5j9uuivfdba:-form-item"
                      >
                        Nombre completo
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id=":R5j9uuivfdba:-form-item"
                        aria-describedby=":R5j9uuivfdba:-form-item-description"
                        aria-invalid="false"
                        name="name"
                        value="e2e"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor=":R9j9uuivfdba:-form-item"
                      >
                        Presentación
                      </label>
                      <p
                        id=":R9j9uuivfdba:-form-item-description"
                        className="text-sm text-muted-foreground"
                      >
                        Puedes poner una descripción de máximo 280 caracteres
                        cómo presentación cuando aparezcas en las búsquedas
                      </p>
                      <textarea
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-fit resize-none"
                        rows={3}
                        maxLength={280}
                        name="title"
                        id=":R9j9uuivfdba:-form-item"
                        aria-describedby=":R9j9uuivfdba:-form-item-description"
                        aria-invalid="false"
                      ></textarea>
                      <span className="text-sm text-muted-foreground">280</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="space-y-2 flex flex-col justify-center">
                      <div
                        className="relative h-40 w-40"
                        id=":R2j9uuivfdba:-form-item"
                        aria-describedby=":R2j9uuivfdba:-form-item-description"
                        aria-invalid="false"
                      >
                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-full w-full">
                          <span className="flex h-full w-full items-center justify-center rounded-full bg-secondary text-3xl">
                            E
                          </span>
                        </span>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10 absolute bottom-0 right-0 rounded-full">
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
                            className="lucide lucide-pencil h-4 w-4"
                          >
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                            <path d="m15 5 4 4"></path>
                          </svg>
                        </button>
                        <input
                          type="file"
                          className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hidden"
                          accept="image/*"
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                        type="button"
                      >
                        Quitar foto
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 after:ml-0.5 after:text-destructive after:content-["*"]'
                    htmlFor=":Rr9uuivfdba:-form-item"
                  >
                    ¿En qué idiomas puedes dar terapia?
                  </label>
                  <div className="grid grid-cols-2 gap-y-4 sm:grid-cols-5">
                    <div>
                      <div className="space-y-2 flex items-center space-x-2.5">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                          id=":Rdr9uuivfdba:-form-item"
                          aria-describedby=":Rdr9uuivfdba:-form-item-description"
                          aria-invalid="false"
                        ></button>
                        <input
                          type="checkbox"
                          aria-hidden="true"
                          style={{
                            transform: "translateX(-100%)",
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0,
                          }}
                        />
                        <label
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 !mt-0 cursor-pointer font-normal"
                          htmlFor=":Rdr9uuivfdba:-form-item"
                        >
                          Español
                        </label>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 flex items-center space-x-2.5">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                          id=":Rlr9uuivfdba:-form-item"
                          aria-describedby=":Rlr9uuivfdba:-form-item-description"
                          aria-invalid="false"
                        ></button>
                        <input
                          type="checkbox"
                          aria-hidden="true"
                          style={{
                            transform: "translateX(-100%)",
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0,
                          }}
                        />
                        <label
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 !mt-0 cursor-pointer font-normal"
                          htmlFor=":Rlr9uuivfdba:-form-item"
                        >
                          Inglés
                        </label>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 flex items-center space-x-2.5">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                          id=":Rtr9uuivfdba:-form-item"
                          aria-describedby=":Rtr9uuivfdba:-form-item-description"
                          aria-invalid="false"
                        ></button>
                        <input
                          type="checkbox"
                          aria-hidden="true"
                          style={{
                            transform: "translateX(-100%)",
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0,
                          }}
                        />
                        <label
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 !mt-0 cursor-pointer font-normal"
                          htmlFor=":Rtr9uuivfdba:-form-item"
                        >
                          Francés
                        </label>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 flex items-center space-x-2.5">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                          id=":R15r9uuivfdba:-form-item"
                          aria-describedby=":R15r9uuivfdba:-form-item-description"
                          aria-invalid="false"
                        ></button>
                        <input
                          type="checkbox"
                          aria-hidden="true"
                          style={{
                            transform: "translateX(-100%)",
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0,
                          }}
                        />
                        <label
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 !mt-0 cursor-pointer font-normal"
                          htmlFor=":R15r9uuivfdba:-form-item"
                        >
                          Portugués
                        </label>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 flex items-center space-x-2.5">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                          id=":R1dr9uuivfdba:-form-item"
                          aria-describedby=":R1dr9uuivfdba:-form-item-description"
                          aria-invalid="false"
                        ></button>
                        <input
                          type="checkbox"
                          aria-hidden="true"
                          style={{
                            transform: "translateX(-100%)",
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0,
                          }}
                        />
                        <label
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 !mt-0 cursor-pointer font-normal"
                          htmlFor=":R1dr9uuivfdba:-form-item"
                        >
                          Otro
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex min-h-0 flex-col gap-y-3">
                <h2 className="text-xl font-bold">
                  Contacto <span className="text-sm text-destructive">*</span>
                </h2>
                <p className="text-sm text-muted-foreground">
                  Ingresa al menos 1 medio de contacto para que los pacientes
                  puedan agendar sus sesiones contigo.
                </p>
                <div className="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2 space-y-0 rounded-lg border p-4">
                    <div className="flex w-full flex-row items-center justify-between gap-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor=":R2t9uuivfdba:-form-item"
                      >
                        Correo electrónico
                      </label>
                      <button
                        type="button"
                        role="switch"
                        aria-checked="true"
                        data-state="checked"
                        className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input mt-0"
                        id=":R2t9uuivfdba:-form-item"
                        aria-describedby=":R2t9uuivfdba:-form-item-description"
                        aria-invalid="false"
                      >
                        <span
                          data-state="checked"
                          className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                        ></span>
                      </button>
                      <input
                        type="checkbox"
                        aria-hidden="true"
                        style={{
                          transform: "translateX(-100%)",
                          position: "absolute",
                          pointerEvents: "none",
                          opacity: 0,
                          margin: 0,
                        }}
                        checked={true}
                      />
                    </div>
                    <p className="h-10 px-3 py-2 text-sm text-muted-foreground text-primary">
                      bfdbb70f-50fb-487a-b588-b00a773d0c60@e2e.com
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col gap-2 space-y-0 p-4">
                    <div className="flex w-full flex-row items-center justify-between gap-2 space-y-0">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor=":Rct9uuivfdba:-form-item"
                      >
                        Teléfono
                      </label>
                      <button
                        type="button"
                        role="switch"
                        aria-checked="false"
                        data-state="unchecked"
                        className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input mt-0"
                        id=":Rct9uuivfdba:-form-item"
                        aria-describedby=":Rct9uuivfdba:-form-item-description"
                        aria-invalid="false"
                      >
                        <span
                          data-state="unchecked"
                          className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                        ></span>
                      </button>
                      <input
                        type="checkbox"
                        aria-hidden="true"
                        style={{
                          transform: "translateX(-100%)",
                          position: "absolute",
                          pointerEvents: "none",
                          opacity: 0,
                          margin: 0,
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex PhoneInput PhoneInput--disabled">
                        <button
                          className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 flex gap-1 rounded-e-none rounded-s-lg px-3"
                          type="button"
                          disabled={true}
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:Rbkt9uuivfdba:"
                          data-state="closed"
                        >
                          <span className="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 513 342"
                            >
                              <title>MX</title>
                              <path
                                fill="#dc2339"
                                d="M342 0H0v341.3h513V0z"
                              ></path>
                              <path fill="#11865d" d="M0 0h171v342H0z"></path>
                              <path fill="#FFF" d="M171 0h171v342H171z"></path>
                              <path
                                fill="#8C9157"
                                d="M195.8 171.2c0 21.6 11.5 41.7 30.3 52.5 5.8 3.4 13.2 1.4 16.6-4.4 3.4-5.8 1.4-13.2-4.4-16.6-11.3-6.5-18.2-18.5-18.2-31.5 0-6.7-5.4-12.1-12.1-12.1-6.7 0-12.2 5.4-12.2 12.1zm93.4 51.1c17.5-11.1 28-30.4 28-51.1 0-6.7-5.4-12.1-12.1-12.1s-12.1 5.4-12.1 12.1c0 12.4-6.3 24-16.8 30.7-5.7 3.5-7.5 10.9-4.1 16.7s10.9 7.5 16.7 4.1c0-.2.2-.3.4-.4z"
                              ></path>
                              <ellipse
                                fill="#C59262"
                                cx="256.5"
                                cy="159.1"
                                rx="24.3"
                                ry="36.4"
                              ></ellipse>
                            </svg>
                          </span>
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
                            className="lucide lucide-chevrons-up-down -mr-2 h-4 w-4 opacity-50 hidden"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path>
                          </svg>
                        </button>
                        <input
                          type="tel"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-e-lg rounded-s-none PhoneInputInput"
                          autoComplete="tel"
                          data-testid="phone-input"
                          placeholder=""
                          id=":Rkt9uuivfdba:-form-item"
                          aria-describedby=":Rkt9uuivfdba:-form-item-description"
                          aria-invalid="false"
                          disabled={true}
                          name="phone"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  También puedes agregar hasta 5 enlaces a tus redes sociales o
                  páginas privadas
                </p>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  data-testid="add-url"
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
        </div>
        <div className="flex justify-end">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            type="submit"
          >
            Siguiente
          </button>
        </div>
      </form>
    </main>
  );
}
