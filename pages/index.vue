<template>
  <div class="w-screen flex justify-center items-center flex-wrap text-center">
    <div> <div class="flex justify-center items-center"><img class="w-20 items-center h-24" src="~/static/icon.png"></div>
    <h1 class="text-xl text-center ml-5 mb-2">زكاة الإبل</h1>
    <input class="w-80 ring-1 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-full text-center" id="edit" type="number" v-model="number" placeholder="ادخل عدد الإبل">
    <button class="text-black ring-1 py-1 px-6 h-7 m-1 rounded-full text-1xl ml-2 hover:bg-gray-600 hover:text-gray-100 focus:outline-none focus:ring-0" v-on:click="check">تحقق</button>
    <h1 v-if="notification != ''">{{notification}}</h1>
    <div class="flex justify-center items-center"><h1 v-if="text != ''" class="text-2xl mt-3 text-green-500 w-80">{{text}}</h1></div>
        <h1 class="mt-64">تمت برمجته من قبل المهندس <a class="text-blue-500" href="https://www.netijeti.tk/developer">الشيخ المختار الشنقيطي</a></h1>
    </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      number:'',
      notification:'',
      text:'',
      d:[
        {start:5,end:9,result:"شاة واحدة"},
        {start:10,end:14,result:"شاتان"},
        {start:15,end:19,result:"ثلاثة شياه"},
        {start:20,end:24,result:"4 شياه"},
        {start:25,end:35,result:"بنت مخاض"},
        {start:36,end:45,result:"بنت لَبُون"},
        {start:46,end:60,result:"حِقَّة"},
        {start:61,end:75,result:"جدعة"},
        {start:76,end:90,result:"بنتا البون (2 بنت لبون)"},
        {start:91,end:120,result:"حِقتان (2 حقة)"},
        {start:121,end:129,result:"3 بنات البون"},
        {start:130,end:139,result:"حقة وبنتا لبون (1 حقة و 2 بنتات لبون)"},
        {start:140,end:149,result:"حقتان وبنت لبون (2 حقة و 1 بنت لبون)"},
        {start:150,end:159,result:"3 حقاق"},
        {start:160,end:169,result:"4 بنات لبون"},
      ]
    }
  },
  methods:{
    check(){
      if(this.number <= 1){
        this.notification = "رجاء، ادخل رقم صحيح"
        this.text = ''
      }
      if(this.number >= 2 && this.number < 5){
        this.text = ''
        this.notification = "اقل من 5 رؤس من الإبل لا تجب فيه الزكاة"
      }
      for(const q of this.d){
      if(this.number >= q.start && this.number <= q.end){
        this.notification = ''
        var l = q.result
        this.text = `تجب في ${this.number} رأس من الإبل: ${l}`
      }
      }
      if(this.number > 169){
          var result1 = this.number/40 | 0
          var result2 = this.number/50 | 0
          var l = result2+" حقة"+" او ("+result1+" بنت لبون"+")"
          this.text = `تجب في ${this.number} رأس من الإبل: ${l}`

      }
    }
  }
}
</script>

<style>
</style>
