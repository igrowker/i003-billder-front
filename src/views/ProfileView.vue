<template>
  <div class="sm:w-full p-4">
    <div class="bg-gray-100 flex flex-col items-center">
      <!-- Header -->
      <header class="w-full bg-white py-4 flex items-center justify-between">
        <button class="text-gray-600" aria-label="volver">
          <svg class="h-8 w-8 mb-1">
            <use xlink:href="@/assets/icons.svg#icon-volver"></use>
          </svg>
        </button>
        <h1 class="text-xl font-semibold">Mi perfil</h1>
        <button class="text-gray-600" aria-label="editar">
          <svg class="h-8 w-8 mb-1">
            <use xlink:href="@/assets/icons.svg#icon-editar"></use>
          </svg>
        </button>
      </header>
    </div>
    <div class="w-full bg-white rounded px-8 pt-6 pb-8 mb-4 mt-6 flex justify-center">
      <img class="w-24 h-24 rounded-full" src="../assets/img/obrero.jpg" alt="Imagen del usuario" />
    </div>
    <form class="bg-white rounded-lg px-1 mb-10 w-full">
      <div class="mb-5">
        <label for="nombre" class="block text-slate-600 font-bold">Nombre y Apellido</label>
        <input
          id="nombre"
          type="text"
          placeholder="Escribe aqui tu nombre"
          class="border rounded-xl w-full p-1 mt-2 py-2 px-3 placeholder-gray-400 rounded"
        />
      </div>
      <div class="mb-5">
        <label for="identidad" class="block text-slate-600 font-bold">ID</label>
        <input
          id="identidad"
          type="text"
          placeholder="DNI, CUIT, otros"
          class="border rounded-xl w-full p-2 mt-2 placeholder-gray-400"
        />
      </div>
      <div class="mb-5">
        <label for="direccion" class="block text-slate-600 font-bold">Dirección</label>
        <input
          id="direccion"
          type="text"
          placeholder="Tu dirección"
          class="border rounded-xl w-full p-2 mt-2 placeholder-gray-400"
        />
      </div>
      <div class="mb-5 flex flex-row gap-5">
        <div>
          <label for="pais" class="block text-slate-600 font-bold">País</label>
          <input
            id="pais"
            type="text"
            placeholder="Tu País"
            class="border rounded-xl w-full p-2 mt-2 placeholder-gray-400"
          />
        </div>
        <div>
          <label for="ciudad" class="block text-slate-600 font-bold">Ciudad</label>
          <input
            id="ciudad"
            type="text"
            placeholder="Tu ciudad"
            class="border rounded-xl w-full p-2 mt-2 placeholder-gray-400"
          />
        </div>
      </div>
      <div class="mb-5">
        <label for="contacto" class="block text-slate-600 font-bold">Teléfono</label>
        <input
          id="contacto"
          type="text"
          placeholder="Tu teléfono"
          class="border rounded-xl w-full p-2 mt-2 placeholder-gray-400"
        />
      </div>
      <div class="mb-5">
        <label for="email" class="block text-slate-600 font-bold">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Escribe aquí tu email"
          class="border rounded-xl w-full p-2 mt-2 placeholder-gray-400"
        />
      </div>
      <div class="mb-5 bg-gray-200 border rounded-lg w-full px-5">
        <p class="text-center font-bold">Registra tu firma</p>
        <p>Guarda tu firma para firmar tus documentos de manera más rápida</p>
      </div>
      <input
        type="submit"
        class="bg-blue-500 w-full hover:bg-indigo-700 text-white cursor-pointer transition-colors font-bold my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        value="GUARDAR CAMBIOS"
      />
    </form>
  </div>
  <div class="w-full bottom-0">
    <div class="grid grid-cols-3 gap-0 w-full">
      <button
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 flex flex-col items-center justify-center"
      >
        <svg class="h-6 w-6 mb-1">
          <use xlink:href="@/assets/icons.svg#icon-house"></use>
        </svg>
        <span class="text-sm text-white">Inicio</span>
      </button>

      <button
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 flex flex-col items-center justify-center"
      >
        <svg class="h-6 w-6 mb-1">
          <use xlink:href="@/assets/icons.svg#icon-user"></use>
        </svg>
        <span class="text-sm text-white">Perfil</span>
      </button>
      <button
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 flex flex-col items-center justify-center"
      >
        <svg class="h-6 w-6 mb-1">
          <use xlink:href="@/assets/icons.svg#icon-face"></use>
        </svg>
        <span class="text-sm text-white">Ayuda</span>
      </button>
    </div>
  </div>
</template>
