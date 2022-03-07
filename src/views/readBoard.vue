<template>
    <div id="app">
        <h3>Vue 게시판</h3>

		<input type="text" class="form-control" placeholder="제목 및 내용검색" v-model="searchData.searchText">
		<button v-on:click="search" style="margin-right: 100px;">검색</button>
        
		<span>글쓴이</span>
		<select v-model="searchData.searchOption">
			<option value="">전체</option>
			<option v-for="item in cdList" v-bind:key="item.nm" v-bind:value="item.nm">{{ item.nm }}</option>
		</select>
		<button v-on:click="idSearch">검색</button>

        <!--<table class="table text-center table-hover" cellspacing="0" width="100%">-->
        <table class="table" cellspacing="0" width="100%" border="1">
            <colgroup>
				<col style="width: 10%">
				<col style="width: 50%">
				<col style="width: 20%">
                <col style="width: 20%">
			</colgroup>
            <tr>
                <td>순번</td>
                <td>제목</td>
                <td>글쓴이</td>
                <td>작성일자</td>
            </tr>
            <tr v-for="x in data" :key="x.index" v-on:click="detail(x.index)">
                <td>{{x.index}}</td>
                <td>{{x.title}}</td>
                <td>{{x.id}}</td>
                <td>{{x.creDt}}</td>
            </tr>
        </table>
       <button v-on:click="write" >게시글 작성</button>
    </div>
</template>


<script>
import data from '@/data/index'
import idData from '@/data/idList'


export default {
    name: 'app',
    data(){
        return{
            data: data,
            searchData:{
                searchText: '',
                searchOption:''
            },
            cdList:idData
        }
    },
    methods: {
        //작성 params 없으면 path, 있으면 name
        write : function(){
            this.$router.push({
                path: '/createBoard'
            })
        },
        //상세조회
        detail : function(index){
            this.$router.push({
                name: 'detailBoard',
                params: {index:index}
                
            })
        },
        //검색
        search : function(){
            if(this.searchData.searchText!=''){
                alert(this.$data.data.findIndex(i=>i.title == this.searchData.searchText));
                //찾은 인덱스만 데이터에 넣기
               
                //this.$data.data.length=0
               // this.$data.data.push(this.data[0])
                
            }
            
        },
        //검색2 
        idSearch : function(){
            if(this.searchData.searchOption!=''){
                alert(this.$data.data.findIndex(i=>i.id == this.searchData.searchOption));
                //찾은 인덱스만 데이터에 넣기
            }
        }
    },

}
</script>