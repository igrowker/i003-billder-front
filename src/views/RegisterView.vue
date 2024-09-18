<template>
  <div class="w-full p-4">
    <div class="bg-gray-100 flex flex-col items-center">
      <header class="w-full bg-white py-4 flex items-center justify-center relative">
        <button class="text-gray-600 absolute left-4" aria-label="volver">
          <svg class="h-8 w-8 mb-1">
            <use xlink:href="@/assets/icons.svg#icon-volver"></use>
          </svg>
        </button>
        <h1 class="text-xl font-bold">Registrate</h1>
      </header>
    </div>

    <form class="bg-white flex flex-col justify-center rounded-lg px-1 mb-10 w-full">
      <div class="flex justify-center">
        <div class="rounded-full h-16 w-16 flex items-center justify-center bg-gray-200 my-5">
          <button aria-label="photo">
            <svg class="h-8 w-8 mb-1">
              <use xlink:href="@/assets/icons.svg#icon-photo"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="my-5">
        <label for="nombre" class="block text-slate-600 font-bold">Completa los datos</label>
        <input
          id="nombre"
          type="text"
          placeholder="Nombre y Apellido"
          class="border rounded-xl w-full p-1 mt-2 py-2 px-3 placeholder-gray-400"
        />
      </div>
      <div class="mb-5">
        <input
          id="identidad"
          type="text"
          placeholder="DNI"
          class="border rounded-xl w-full p-2 mt-2 placeholder-gray-400"
        />
      </div>
      <div class="mb-5">
        <input
          id="direccion"
          type="text"
          placeholder="Dirección"
          class="border rounded-xl w-full p-2 mt-2 placeholder-gray-400"
        />
      </div>
      <div class="mb-5 flex flex-row gap-5">
        <div>
          <input
            id="pais"
            type="text"
            placeholder="País"
            class="border rounded-xl w-full p-2 mt-2 placeholder-gray-400"
          />
        </div>
        <div>
          <input
            id="ciudad"
            type="text"
            placeholder="Ciudad"
            class="border rounded-xl w-full p-2 mt-2 placeholder-gray-400"
          />
        </div>
      </div>
      <div class="mb-5">
        <input
          id="contacto"
          type="text"
          placeholder="Teléfono"
          class="border rounded-xl w-full p-2 mt-2 placeholder-gray-400"
        />
      </div>
      <div class="mb-5">
        <input
          id="email"
          type="email"
          placeholder="Correo"
          class="border rounded-xl w-full p-2 mt-2 placeholder-gray-400"
        />
      </div>
      <div class="mb-5 bg-gray-200 border-2 w-full rounded-lg px-5">
        <p class="text-center font-bold">Registrar firma</p>
        <p>Guarda tu firma para firmar tus documentos de manera más rápida</p>
      </div>

      <input
        type="submit"
        class="bg-blue-500 w-full hover:bg-indigo-700 text-white cursor-pointer transition-colors font-bold my-8 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        value="CREAR CUENTA"
      />
    </form>
  </div>
</template>
