<template>
    <div>
        <div style="width:45%;float:left;">
            <Table border ref="selection" :columns="weekLessonColumn" :data="weekLessonData"></Table>
            <!--<Button @click="handleSelectAll(true)">Set all selected</Button>-->
            <!--<Button @click="handleSelectAll(false)">Cancel all selected</Button>-->
        </div>
        <div style="width:55%;padding-left:10px;float:left;">
            <div style="margin:8px auto">
                <Tag color="blue">{{currentAttendance?currentAttendance:"请选择需考勤的课程"}}</Tag>
            </div>
            <Table border ref="operation" :columns="attendanceColumn" :data="attendanceData">

            </Table>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                attendanceColumn: [
                    {
                        title: '姓名',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '学号',
                        key: 'stuno'
                    },
                    {
                        title: '班主任',
                        key: 'bzr'
                    },
                    {
                        title: '考勤',
                        key: 'action',
                        width: 260,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Checkbox', {
                                    props: {
                                        size: 'large',
                                        value: params.row.ok
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        "on-change": (val) => {
                                            this.doOk(params.index,val)
                                        }
                                    }
                                }, '正常'),
                                h('Checkbox', {
                                    props: {
                                        size: 'large',
                                        value: params.row.later

                                    },style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                         "on-change": (val) => {
                                            this.doLater(params.index,val)
                                        }
                                    }
                                }, '迟到'),
                                h('Checkbox', {
                                    props: {
                                        size: 'large',
                                        value: params.row.early
                                    },style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        "on-change": (val) => {
                                            this.doEarly(params.index,val)
                                        }
                                    }
                                }, '早退'),
                                h('Checkbox', {
                                    props: {
                                        size: 'large',
                                        value: params.row.notcome
                                    },
                                    on: {
                                         "on-change": (val) => {
                                            this.doNocome(params.index,val)
                                        }
                                    }
                                }, '缺勤')

                            ]);
                        }
                    }
                ],
                attendanceData: [],
                weekLessonColumn: [
                    {
                        title: '周一',
                        key: '0_cname',
                        render: (h, params) => {
                            return h('div', [
                                h('a', {
                                    on: {
                                        click: () => {
                                            this.selectLesson(params)
                                        }
                                    }
                                },params.row['0_cname'])
                            ]);
                        }
                    },
                    {
                        title: '周二',
                        key: '1_cname',
                        render: (h, params) => {
                            return h('div', [
                                h('a',{
                                    on: {
                                        click: () => {
                                            this.selectLesson(params)
                                        }
                                    }
                                }, params.row['1_cname'])
                            ]);
                        }
                    },
                    {
                        title: '周三',
                        key: '2_cname',
                        render: (h, params) => {
                            return h('div', [
                                h('a', {
                                    on: {
                                        click: () => {
                                            this.selectLesson(params)
                                        }
                                    }
                                },params.row['2_cname'])
                            ]);
                        }
                    },
                    {
                        title: '周四',
                        key: '3_cname',
                        render: (h, params) => {
                            return h('div', [
                                h('a',{
                                    on: {
                                        click: () => {
                                            this.selectLesson(params)
                                        }
                                    }
                                }, params.row["3_cname"])
                            ]);
                        }
                    },
                    {
                        title: '周五',
                        key: '4_cname',
                        render: (h, params) => {
                            return h('div', [
                                h('a', params.row['4_cname'])
                            ]);
                        }
                    },
                    {
                        title: '周六',
                        key: '5_cname',
                        render: (h, params) => {
                            return h('div', [
                                h('a', params.row['5_cname'])
                            ]);
                        }
                    },
                    {
                        title: '周日',
                        key: '6_cname',
                        render: (h, params) => {
                            return h('div', [
                                h('a', params.row['6_cname'])
                            ]);
                        }
                    }
                ],
                weekLessonData: [
                    {},
                    {'1_cname': '数学', clazzId:"001", clazzName:"三年一班"},{},
                    {'3_cname': '体育锻炼', clazzId:"002", clazzName:"三年二班"},{},{},{}
                ],
                currentAttendance:"",
                currentClazzId:""
            }
        },
        methods: {
            doOk(e,val){
                this.attendanceData[e].ok = val;
                if(val){
                    this.attendanceData[e].later = false;
                    this.attendanceData[e].early = false;
                    this.attendanceData[e].notcome = false;
                }
                this.commitAttendance(this.attendanceData[e])
            },doLater(e,val){
                this.attendanceData[e].later = val;
                if(val){
                    this.attendanceData[e].ok = false;
                    this.attendanceData[e].notcome = false;
                }
                this.commitAttendance(this.attendanceData[e])
            },doEarly(e,val){
                this.attendanceData[e].early = val;
                if(val){
                    this.attendanceData[e].ok = false;
                    this.attendanceData[e].notcome = false;
                }
                this.commitAttendance(this.attendanceData[e])
            },doNocome(e,val){
                this.attendanceData[e].notcome = val;
                if(val){
                    this.attendanceData[e].ok = false;
                    this.attendanceData[e].early = false;
                    this.attendanceData[e].later = false;
                }
                this.commitAttendance(this.attendanceData[e])
            },
            commitAttendance(data){
                console.log("commitData",data)
                //做演示，直接把本课程所有数据提交到 store
                this.$store.commit('updateAttendance',{
                    clazzId:this.currentClazzId,
                    data:this.attendanceData
                });
            },
            selectLesson(e){
                // console.log("clickLesson",e,e.column._index,e.row._index)
                let courseName = e.row[e.index+"_cname"];
                let clazzId = e.row.clazzId;
                let clazzName = e.row.clazzName;
                this.currentClazzId = clazzId;
                this.currentAttendance = `周${e.column._index+1}第${e.row._index+1}节 ${clazzName} ${courseName}`;
                let allData = this.$store.state.attendance.studentAttendanceList;
                this.attendanceData = JSON.parse(JSON.stringify(allData[clazzId]))
            },
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            init(){}
        },
        mounted(){
            // this.init();
        }
    }
</script>
