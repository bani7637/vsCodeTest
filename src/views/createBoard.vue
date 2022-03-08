<template>
    <div id="app">
        <div class="content-box-wrap">
            <h2 class="contentTitle" v-if="mode == 'C'" >입력</h2>
            <h2 class="contentTitle" v-if="mode == 'R'" >상세조회</h2>
        <!-- table -->
        <div class="content-table-wrap">
            <div class="floatRight mb10 mr10" v-if="mode == 'R'">
                <i class="point">중요</i><strong>필수 입력 항목</strong>
            </div>
            <table class="table-type1 mb10">
                <colgroup>
                    <col style="width: 150px;">
                    <col style="width: auto;">
                    <col style="width: 150px;">
                    <col style="width: auto;">
                </colgroup>
                <tr v-if="mode != 'R'">
                    <th>요청유형<i class="point">중요</i></th>
                    <td>
                        <input type="radio" id="type1" name="type" v-model="ds_formData.type" value="1"><label for="type1">내부</label>
                        <input type="radio" id="type2" name="type" v-model="ds_formData.type" value="2"><label for="type2">외부</label>
                    </td>
                    <th>요청자<i class="point">중요</i></th>
                    <td><input type="text" class="size100p" v-model="ds_formData.requester" disabled="disabled"></td>
                </tr>
                <tr v-if="mode == 'R'">
                    <th>요청유형</th>
                    <td>
                    <input type="radio" id="type1" name="type" v-model="ds_formData.type" value="1"><label for="type1">내부</label>
                    <input type="radio" id="type2" name="type" v-model="ds_formData.type" value="2"><label for="type2">외부</label>
                    </td>
					<th>요청자</th>
					<td>{{ds_formData.requester}}</td>
                </tr>

                <tr v-if="mode != 'R'">
                    <th>담당과제명<i class="point">중요</i></th>
                    <td><input type="text" class="size100p" v-model="ds_formData.projectName"></td>
                    <th>진행상태<i class="point">중요</i></th>
                    <td>
                        <select v-model="ds_formData.status" class="">
                        <option v-for="x in selList" :value="x.value" :key="x.value">{{x.text}}</option>
                        </select>
                    </td>
                </tr>
                <tr v-if="mode == 'R'">
                    <th>담당과제명</th>
					<td>{{ds_formData.projectName}}</td>
					<th>진행상태</th>
					<td>{{ds_formData.status}}</td>
                </tr>

                <tr v-if="mode != 'R'">
                    <th>요청 제목<i class="point">중요</i></th>
                    <td colspan="3">
                        <input type="text" class="size100p" v-model="ds_formData.title">
                    </td>
                </tr>
                <tr v-if="mode == 'R'">
                     <th>요청 제목</th>
                    <td colspan="3">{{ds_formData.title}}</td>
                </tr>

                <tr v-if="mode != 'R'">
                    <th>요청 목적</th>
                    <td colspan="3">
                        <textarea rows="20" class="size100p" v-model="ds_formData.purpose"></textarea>
                    </td>
                </tr>
                <tr v-if="mode == 'R'">
                    <th>요청 목적</th>
                   <td colspan="3" class="sizeh400">{{ds_formData.purpose}}</td>
                </tr>

            </table>
        </div>
        <!-- //table -->
        <!-- button -->
        <div class="content-btn-wrap" v-if="mode!='R'">
            <button type="button" class="basic-btn btn-color1" v-on:click="fn_apply()">저장</button>
            <button type="button" class="basic-btn btn-color2" v-on:click="fn_cancel()">취소</button>
        </div>
        <div class="content-btn-wrap" v-if="mode=='R'">
            <button type="button" class="basic-btn btn-color1" v-on:click="fn_apply()">수정</button>
            <button type="button" class="basic-btn btn-color2" v-on:click="fn_cancel()">목록</button>
        </div>
        <!-- //button -->
        </div>
    </div>
</template>

<script>
import selList from '@/data/selectList'
import data2 from '@/data/index'
export default {

    name: 'app',
    props:{
        index:{
            type: String,
            default: ""
        }
    },
    data(){
        return{
            ds_formData: {
                type: null,
                requester: null,
                projectName: null,
                status: null,
                title: null,
                purpose: null
            },
            selList:selList,
            mode: null
        }
    },
    mounted: function(){
        var vm = this
        var test= this.$route.params.index
        if(test==undefined){
            vm.init('C');
        }else{
            vm.init('R');
        }
    },
    methods: {
       init: function(mode){
          
          this.mode= mode
          if(mode=='R'){
            this.ds_formData=data2[this.$route.params.index]
          }else if(mode=='C'){
            this.ds_formData.status='1'
          }

       }, 
        //수정이벤트
        fn_apply : function(){
            var vm =this   
            vm.init('U')
        },
        //취소이벤트
        fn_cancel : function(){

        },
        //리스트이벤트
        fn_list : function(){

        }
    },

}
</script>
<style>

</style>