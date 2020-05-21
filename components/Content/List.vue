<template>
 <div class="container" v-loading.fullscreen.lock="loading">
     <ul class="list-box" v-for="(item, index) in list" :key="index" >
       <li class="list-item">
         <div class="pic">{{item.amg}}</div>
         <div class="desc">
           <h3>{{item.titlie}}</h3>
           <p class="date">
             <span>日期</span>
             <span>{{item.date}}</span>
           </p>
           <p class="bet">
             <span>备注：</span>
             <span>{{item.bet}}</span>
           </p>
         </div>
         <div class="price">价格：<span>{{item.price}}</span></div>
         <div class="btn"><button>删除</button></div>
       </li>
     </ul>
    
  
    <div class="block">
    <span class="demonstration"></span>
    <el-pagination
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
</div>
 </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
  data() {
    return {
      // project:[],
    }
  },
   

  computed:{
      ...mapState({
        list:state=>state.app.list,
        loading: state => state.app.loading
    })
  },
  created(){
    console.log(this.list)
    this.$store.dispatch('getList')
  }
}
</script>

<style scope>
.container {
  padding: 10px 20px;
}
.list-box{
  /* float: left; */
}
.list-item {
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.list-item div{
  float: left;
}
.pic {
  width: 100px;
  height: 100px;
  border: 1px solid;
  margin-right: 20px;
}
.desc h3{
  font-size: 20px;
  font-weight: bold;
  text-align: left;
}
.desc .date {
  font-size: 14px;
}
.bet {
  position: absolute;
  bottom: 10px;
  font-size: 12px;
}
.price, .btn {
  height: 100px;
  line-height:  100px;
  margin-left: 100px;
}
.price span {
  color: #f00;
}
.btn button {
  width: 80px;
  height: 30px;
  line-height: 30px;
  border: none;
  background-color: aquamarine;
  border-radius: 4px;
}
.el-pagination {
margin-top: 300px;
}
</style>