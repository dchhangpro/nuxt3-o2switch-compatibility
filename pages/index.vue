<script setup lang="ts">
useHead({
  title: "Titre de la page affiché sur l'onglet",
  meta: [
    {
      name: "Description",
      content: "Balise meta description pour le SEO",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://xxxxx.yyy",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
});
</script>
<template>
  <div class="text-4xl">Coucou tout le monde !</div>
</template>
