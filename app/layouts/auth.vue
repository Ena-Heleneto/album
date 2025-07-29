<template>
  <div class="flex min-h-screen transition-colors duration-300 from-purple-50 to-orange-50 via-pink-50 bg-linear-to-br">
    <div id="Branding" class="hidden from-purple-600 to-orange-500 via-pink-600 bg-linear-to-br lg:flex lg:w-1/2" />
    <div id="Form">
      <slot />
    </div>
  </div>
</template>
