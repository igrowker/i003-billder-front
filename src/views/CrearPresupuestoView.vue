<template>
  <div class="bg-gray-100 flex flex-col items-center">
    <!-- Header -->
    <header class="w-full bg-white py-4 flex items-center justify-between">
      <button class="text-gray-600" aria-label="volver">
        <svg class="h-8 w-8 mb-1">
          <use xlink:href="@/assets/icons.svg#icon-volver"></use>
        </svg>
      </button>
      <h1 class="text-xl font-semibold">Crear Presupuesto</h1>
      <button class="text-gray-600" aria-label="editar">
        <svg class="h-8 w-8 mb-1">
          <use xlink:href="@/assets/icons.svg#icon-editar"></use>
        </svg>
      </button>
    </header>
  </div>
  <v-stepper
    alt-labels
    :items="['Datos', 'Firma', 'Enviar']"
    next-text="Continuar"
    prev-text="Volver"
    class="custom-stepper"
  >
    <template v-slot:item.1>
      <v-card title="Completa los Datos" flat>
        <div class="w-full max-w-lg mx-auto mt-8">
          <!-- Tarjeta 1 -->
          <div class="bg-gray-100 p-4 flex justify-between items-center mb-4 shadow">
            <div>
              <p class="text-sm text-gray-500">Cliente</p>
              <h1 class="text-xl font-bold text-gray-800">Pablo Gomez</h1>
              <p class="text-sm text-gray-700">Cuit: 2738345176</p>
              <p class="text-sm text-gray-700">maria.martinez@gmail.com</p>
              <p class="text-sm text-gray-700">
                Avenida Juan B. Justo 2548, Avellaneda, Buenos Aires Argentina
              </p>
            </div>
            <input type="checkbox" class="h-5 w-5 text-blue-600 rounded border-gray-300" />
          </div>
          <!-- Tarjeta 2 -->
          <div class="bg-gray-100 p-4 flex justify-between items-center shadow">
            <div>
              <p class="text-sm text-gray-500">Albañil</p>
              <h1 class="text-xl font-bold text-gray-800">Joaquin Desimone</h1>
              <p class="text-sm text-gray-700">Cuit: 2738345176</p>
              <p class="text-sm text-gray-700">Esmeralda 569, Quilmes, Buenos Aires Argentina</p>
            </div>
            <input type="checkbox" class="h-5 w-5 text-blue-600 rounded border-gray-300" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-medium mb-2" for="date-input"
              >Fecha de Vencimiento</label
            >
            <input
              id="date-input"
              type="date"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </v-card>
    </template>

    <!-- <template v-slot:item.2>
      <v-card title="Step Two" flat>...</v-card>
    </template>

    <template v-slot:item.3>
      <v-card title="Step Three" flat>...</v-card>
    </template> -->
  </v-stepper>
</template>
