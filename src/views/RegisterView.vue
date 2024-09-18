<template>
  <div class="flex flex-col sm:flex-row-reverse w-full p-4">
    <div class="flex justify-center items-center sm:w-1/2 px-11">
      <img alt="img" class="w-full h-auto" src="@/assets/img/imago_billder.png" />
    </div>

    <form
      class="bg-white sm:px-11 sm:w-1/2 flex flex-col justify-center rounded-lg px-1 mb-10 w-full"
    >
      <div class="w-full bg-white rounded my-6 flex justify-center">
        <h1 class="text-xl font-semibold uppercase">formulario de registro</h1>
      </div>
      <div class="mb-5">
        <label for="nombre" class="block text-slate-600 font-bold">Nombre y Apellido</label>
        <input
          id="nombre"
          type="text"
          placeholder="Escribe aqui tu nombre"
          class="border-2 w-full p-1 mt-2 py-2 px-3 placeholder-gray-400 rounded"
        />
      </div>
      <div class="mb-5">
        <label for="identidad" class="block text-slate-600 font-bold">ID</label>
        <input
          id="identidad"
          type="text"
          placeholder="DNI, CUIT, otros"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        />
      </div>
      <div class="mb-5">
        <label for="direccion" class="block text-slate-600 font-bold">Dirección</label>
        <input
          id="direccion"
          type="text"
          placeholder="Tu dirección"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        />
      </div>
      <div class="mb-5 flex flex-row gap-5">
        <div>
          <label for="pais" class="block text-slate-600 font-bold">País</label>
          <input
            id="pais"
            type="text"
            placeholder="Tu País"
            class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div>
          <label for="ciudad" class="block text-slate-600 font-bold">Ciudad</label>
          <input
            id="ciudad"
            type="text"
            placeholder="Tu ciudad"
            class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
      </div>
      <div class="mb-5">
        <label for="contacto" class="block text-slate-600 font-bold">Teléfono</label>
        <input
          id="contacto"
          type="text"
          placeholder="Tu teléfono"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        />
      </div>
      <div class="mb-5">
        <label for="email" class="block text-slate-600 font-bold">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Escribe aquí tu email"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        />
      </div>

      <input
        type="submit"
        class="bg-blue-500 w-full hover:bg-indigo-700 text-white cursor-pointer transition-colors font-bold my-8 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        value="Registrarse"
      />
    </form>
  </div>
</template>
