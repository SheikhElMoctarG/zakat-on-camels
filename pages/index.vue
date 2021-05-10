<template>
  <div class="w-screen flex justify-center items-center">
    <div> <div class="flex justify-center items-center"><img class="w-20 items-center h-24" src="~/static/icon.svg"></div>
    <h1 class="text-xl text-center ml-5 mb-2">زكاة الإبل</h1>
    <input class="w-80 ring-1 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-full text-center" id="edit" type="number" v-model="number" placeholder="ادخل عدد الإبل">
    <button class="text-black ring-1 py-1 px-6 h-7 m-1 rounded-full text-1xl ml-2 hover:bg-gray-600 hover:text-gray-100 focus:outline-none focus:ring-0" v-on:click="check">تحقق</button>
    <h1 v-if="notification != ''">{{notification}}</h1>
    </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      number:'',
      notification:''
    }
  },
  methods:{
    check(){
      if(this.number <= 1){
        this.notification = "رجاء، ادخل رقم صحيح"
      }
      if(this.number >= 2 && this.number < 5){
        this.notification = "اقل من 5 رؤس من الإبل لا تجب فيه الزكاة"
      }
      if(this.number >= 5 && this.number >= 9){
        this.notification = "فيها ساة"
      }
    }
  }
}
</script>

<style>
</style>
