<template>
  <div class="flex flex-col sm:flex-row-reverse w-full p-4">
    <div class="flex justify-center items-center sm:w-1/2">
      <img alt="img" class="w-full h-auto" src="@/assets/img/imago_billder.png" />
    </div>

    <form class="bg-white w-full sm:px-11 sm:w-1/2 flex flex-col justify-center">
      <div class="mb-4 my-8">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Accede a tu cuenta
        </label>
        <input
          class="shadow border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none focus:shadow-outline"
          id="username"
          type="email"
          placeholder="E-mail"
        />
      </div>
      <div class="mb-6 relative">
        <div class="flex items-center">
          <input
            class="shadow rounded-xl border focus:border-blue-500 w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline pr-12"
            id="password"
            type="password"
            placeholder="Contraseña"
          />
          <button class="absolute right-0 mr-3 mb-3" aria-label="ver">
            <svg class="h-6 w-6 text-gray-600">
              <use xlink:href="@/assets/icons.svg#icon-eye"></use>
            </svg>
          </button>
        </div>
      </div>
      <!-- <div class="flex items-center justify-end">
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Olvidaste tu contraseña?
        </a>
      </div> -->

      <div class="flex flex-col my-8">
        <input
          class="bg-yellow-600 hover:bg-blue-900 text-white font-bold my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          value="Iniciar sesión"
        />

        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Registrarse
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
