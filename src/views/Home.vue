<template>
    <div id="app">
        
        <div class="content-search-wrap">
            <h2 class="contentTitle">검색</h2>
            <ul>
                <li class="mt30">
                    <label class="searchTitle">ㆍ요청 :</label>
                    <select class="size50p" v-model="searchData.searchCondition">
                        <option value="">검색조건</option>
                    </select>
                </li>
                <li class="mt30">
                    <label class="searchTitle">ㆍ진행상태 :</label>
                    <select class="size50p" v-model="searchData.searchUseYn">
                        <option value="">전체</option>
                    </select>
                </li>
                <li>
                    <label class="searchTitle">ㆍ요청제목 :</label>
                    <input type="text" class="size50p" v-model="searchData.searchKeyword">
                </li>
			</ul>
            <div class="search-btn-wrap"><button type="button" class="basic-btn btn-color1" v-on:click="btnClick()">조회</button></div>
        </div>
        <div class="content-box-wrap">
            <h2 class="contentTitle">목록</h2>
            <button type="button" class="basic-btn btn-color1" v-on:click="write()">작성</button>
            <div class="content-table-wrap">
                <table class="table text-center table-hover" cellspacing="0" width="100%">
                    <colgroup>
                        <col style="width: 20%">
                        <col style="width: 20%">
                        <col style="width: 20%">
                        <col style="width: 20%">
                        <col style="width: 20%">
                    </colgroup>
                    <tr>
                        <td>번호</td>
                        <td>분류</td>
                        <td>제공형태</td>
                        <td>데이터명</td>
                        <td>등록일자</td>
                    </tr>
                    <tr v-for="(x, index) in data" :key="x.number" v-on:click="detail(index)">
                        <td>{{x.number}}</td>
                        <td>{{x.type1}}</td>
                        <td>{{x.id}}</td>
                        <td>{{x.title}}</td>
                        <td>{{x.requestDate}}</td>
                    </tr>
                </table>
            </div>
        </div> 
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
                searchKeyword: '',
                searchCondition:'',
                searchUseYn:''
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
                name: 'createBoard',
                params: {index:index}
                
            })
        },
        //검색
        search : function(){
            if(this.searchData.searchKeyword!=''){
                alert(this.$data.data.findIndex(i=>i.title == this.searchData.searchKeyword));
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
<style>

</style>