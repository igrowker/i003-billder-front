<template>
  <div class="flex flex-col sm:flex-row-reverse w-full">
    <div class="flex justify-center items-center sm:w-1/2">
      <img alt="img" class="w-full h-auto" src="@/assets/img/imago_billder.png" />
    </div>

    <form class="bg-white w-full sm:px-11 sm:w-1/2 flex flex-col justify-center">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Accede a tu cuenta
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="E-mail"
        />
      </div>
      <div class="mb-6">
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Contraseña"
        />
        <!--  <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
      </div>
      <div class="flex items-center justify-end">
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Olvidaste tu contraseña?
        </a>
      </div>

      <div class="flex flex-col">
        <button
          class="bg-yellow-600 hover:bg-blue-900 text-white font-bold my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Iniciar sesión
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Registrarse
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Acceder con Google
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
