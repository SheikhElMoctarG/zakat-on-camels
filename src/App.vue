<template>
  <div class="container mx-auto flex flex-col justify-center items-center h-full px-3 text-center">
    <img src="./assets/logo.png" alt="logo" class="w-[170px]  py-[20px]">
    <h1 class="font-bold text-[32px] text-primary ">زكـــــــــــــــــــاة الإبل</h1>
    <p class="font-bold py-4 text-[#34495e]">تطبيق ويب مبسط يقدم مستحقات الزكاة من الإبل، مقدم مجانا للمنمين.</p>
    <Content class="py-4 pt-4"/>
    <Footer class="mt-4"/>
  </div>
</template>
<script setup>
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';

</script>