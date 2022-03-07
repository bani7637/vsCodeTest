<template>
    <div id="app">
        <div class="content-box-wrap">
            <h2 class="contentTitle">입력</h2>
        <!-- table -->
        <div class="content-table-wrap">
            <div class="floatRight mb10 mr10">
                <i class="point">중요</i><strong>필수 입력 항목</strong>
            </div>
            <table class="table-type1 mb10">
                <colgroup>
                    <col style="width: 150px;">
                    <col style="width: auto;">
                    <col style="width: 150px;">
                    <col style="width: auto;">
                </colgroup>
                <tr>
                    <th>요청유형<i class="point">중요</i></th>
                    <td>
                        <input type="radio" id="type1" name="type" v-model="ds_formData.type" value="1"><label for="type1">내부</label>
                        <input type="radio" id="type2" name="type" v-model="ds_formData.type" value="2"><label for="type2">외부</label>
                    </td>
                    <th>요청자<i class="point">중요</i></th>
                    <td><input type="text" class="size100p" v-model="ds_formData.requester" disabled="disabled"></td>
                </tr>
                <tr>
                    <th>담당과제명<i class="point">중요</i></th>
                    <td><input type="text" class="size100p" v-model="ds_formData.projectName"></td>
                    <th>진행상태<i class="point">중요</i></th>
                    <td>
                        <select v-model="ds_formData.status" class="">
                        <option value="">선택</option>
                        <option value="요청">요청</option>
                        <option value="반려">반려</option>
                        <option value="완료">완료</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>요청 제목<i class="point">중요</i></th>
                    <td colspan="3">
                        <input type="text" class="size100p" v-model="ds_formData.title">
                    </td>
                </tr>
                <tr>
                    <th>요청 목적</th>
                    <td colspan="3">
                        <textarea rows="20" class="size100p" v-model="ds_formData.purpose"></textarea>
                    </td>
                </tr>
            </table>
        </div>
        <!-- //table -->
        <!-- button -->
        <div class="content-btn-wrap">
            <button type="button" class="basic-btn btn-color1" v-on:click="fn_apply()">등록</button>
            <button type="button" class="basic-btn btn-color2" v-on:click="fn_cancel()">취소</button>
            <button type="button" class="basic-btn btn-color1" v-on:click="fn_list()">목록</button>
        </div>
        <!-- //button -->
        </div>
    </div>
</template>

<script>

import ds_formData from '@/data/index'

export default {
   
    name: 'app',
    data(){
        return{
            ds_formData: ds_formData,
           
        }
    },
    methods: {
       write : function(){
            this.$router.push({
                path: '/createBoard'
            })
        },
        //등록이벤트
        fn_apply : function(){

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