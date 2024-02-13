<template>
    <div class="flex gap-2">
        <input class="border-2 border-[#27ae5f96] rounded-[5px] px-[5px] py-[3px] text-[16px] focus-within:outline-none focus:border-primary min-w-[250px] font-semibold" type="number" placeholder="أكتب هنا عدد الرؤوس ..." v-model="total" />
    <!-- button calcule -->
    <button @click="calcule" class="px-[10px] py-[3px] bg-primary rounded-[3px] text-white transition delay-150 duration-150 hover:text-primary hover:bg-[#27ae5f00] hover:outline hover:outline-2 hover:outline-primary">حساب</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let notifi = ref(null)
let total = ref(0)
let higa = ref(2)
let bintlebon = ref(4)
let result = ref(null)
const arrayOfTheZakat = ref([
    { start: 5, end: 9, result: "شاة واحدة" },
    { start: 10, end: 14, result: "شاتان" },
    { start: 15, end: 19, result: "ثلاثة شياه" },
    { start: 20, end: 24, result: "4 شياه" },
    { start: 25, end: 35, result: "بنت مخاض" },
    { start: 36, end: 45, result: "بنت لَبُون" },
    { start: 46, end: 60, result: "حِقَّة" },
    { start: 61, end: 75, result: "جدعة" },
    { start: 76, end: 90, result: "بنتا البون (2 بنت لبون)" },
    { start: 91, end: 120, result: "حِقتان (2 حقة)" },
    { start: 121, end: 129, result: "3 بنات البون" },
    {
        start: 130,
        end: 139,
        result: "حقة وبنتا لبون (1 حقة و 2 بنتات لبون)",
    },
    {
        start: 140,
        end: 149,
        result: "حقتان وبنت لبون (2 حقة و 1 بنت لبون)",
    },
    { start: 150, end: 159, result: "3 حقاق" },
    { start: 160, end: 169, result: "4 بنات لبون" },
]);
function calcule() {
    if (total.value < 5) {
        notifi.value = "هذا العدد لا تجب فيه الزكاة."
    } else if (total.value > 5 && total <= 169) {
        for (const status of arrayOfTheZakat.value) {
            if (total.value >= status.start && total.value <= status.end) result.value = status.result;
        }
    } else {
        
    }
}
</script>