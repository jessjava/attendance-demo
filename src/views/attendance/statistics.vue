<template>
    <div>
        <div style="padding:8px;margin:10px auto;background-color:#FFF;">
            <Select value="001" style="width:200px">
                <Option value="001">2018届</Option>
            </Select>
            <Select v-model="currentClazzId" style="width:200px" @on-change="changeClazz">
                <Option v-for="item in clazzList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Select value="001" style="width:200px">
                <Option value="001">周次:2018/02/01~2018/02-07</Option>
            </Select>
        </div>
        <div class="charts">
            <Row :gutter="16">
            <Col span="12">
                <VmChartBarLine :title="barTitle" :xAxisData="dataBar1.xAxisData" :series="dataBar1.series">
                </VmChartBarLine>
            </Col>
            </Row>
        </div>
    </div>
</template>
<script>
    import VmChartBarLine from '@/views/main-components/echarts/echar'

    export default {
        components: {
            VmChartBarLine
        },
        data () {
            return {
                data:"",
                currentClazzId: '001',
                barTitle:'',
                clazzList: [
                    {
                        value: '001',
                        label: '三年一班'
                    },
                    {
                        value: '002',
                        label: '三年二班'
                    }
                ],
                dataBar1: {
                    xAxisData: ['正常', '迟到', '早退', '缺勤'],
                    series: [
                    ]
                }
            }
        },
        methods: {
            changeClazz(e){
                this.currentClazzId = e;
                this.init();
            },
            init(){
                let showData = this.$store.state.attendance.studentAttendanceList[this.currentClazzId];
                if(this.currentClazzId=="001"){
                    this.barTitle = "周二"
                }else{
                    this.barTitle = "周四"
                }
                let normal = 0;
                let later = 0;
                let early = 0;
                let notcome = 0;
                showData.forEach(item=>{
                    if(item.ok){
                        normal ++;
                    }else if(item.later){
                        later ++;
                    }else if(item.early){
                        early ++;
                    }else if(item.notcome){
                        notcome ++;
                    }
                })
                this.dataBar1.series.splice(0)
                this.dataBar1.series.push(
                    {
                        name: this.currentClazzId == '001'?'数学':'体育锻炼',
                        type: 'bar',
                        data: [normal,later,early,notcome]
                    }
                )
            }
        },
        mounted(){
            this.init();
        }
    }
</script>
