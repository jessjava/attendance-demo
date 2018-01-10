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
                attendanceData: [
                    {
                        id:1,
                        name: '张三',
                        stuno: 110,
                        bzr: 'jess',
                        ok: false,
                        later: false,
                        early: false,
                        notcome: true
                    },
                    {
                        id:2,
                        name: '李四',
                        stuno: 111,
                        bzr: 'jess',
                        ok: true,
                        later: false,
                        early: false,
                        notcome: false
                    },
                    {
                        id:3,
                        name: '国际',
                        stuno: 112,
                        bzr: 'jess',
                        ok: true,
                        later: false,
                        early: false,
                        notcome: false
                    },
                    {
                        id:4,
                        name: '贺彪',
                        stuno: 113,
                        bzr: 'jess',
                        ok: true,
                        later: false,
                        early: false,
                        notcome: false
                    },
                    {
                        id:5,
                        name: '王晓东',
                        stuno: 114,
                        bzr: 'jess',
                        ok: true,
                        later: false,
                        early: false,
                        notcome: false
                    }
                ],
                weekLessonColumn: [
                    {
                        title: '周一',
                        key: 'a',
                        render: (h, params) => {
                            console.log(params)
                            return h('div', [
                                h('a', {
                                    on: {
                                        click: () => {
                                            this.selectLesson(params,params.row.a)
                                        }
                                    }
                                },params.row.a)
                            ]);
                        }
                    },
                    {
                        title: '周二',
                        key: 'b',
                        render: (h, params) => {
                            console.log(params)
                            return h('div', [
                                h('a', params.row.b)
                            ]);
                        }
                    },
                    {
                        title: '周三',
                        key: 'c',
                        render: (h, params) => {
                            // console.log(params.row.c)
                            return h('div', [
                                h('a', {
                                    on: {
                                        click: () => {
                                            this.selectLesson(params,params.row.c)
                                        }
                                    }
                                },params.row.c)
                            ]);
                        }
                    },
                    {
                        title: '周四',
                        key: 'd',
                        render: (h, params) => {
                            console.log(params)
                            return h('div', [
                                h('a', params.row.d)
                            ]);
                        }
                    },
                    {
                        title: '周五',
                        key: 'e',
                        render: (h, params) => {
                            console.log(params)
                            return h('div', [
                                h('a', params.row.e)
                            ]);
                        }
                    },
                    {
                        title: '周六',
                        key: 'f',
                        render: (h, params) => {
                            console.log(params)
                            return h('div', [
                                h('a', params.row.f)
                            ]);
                        }
                    },
                    {
                        title: '周日',
                        key: 'g',
                        render: (h, params) => {
                            console.log(params)
                            return h('div', [
                                h('a', params.row.g)
                            ]);
                        }
                    }
                ],
                weekLessonData: [
                    {
                        name: 'John Brown',
                        a: '数学',
                        b: '数学',
                        date: '2016-10-03'
                    },
                    {},{},
                    {
                        d: '体育锻炼',
                        e: '数学'
                    },
                    {e: '数学'},
                    {c: '数学'},
                    {}
                ],
                currentAttendance:""
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
            },
            selectLesson(e,value){
                console.log("clickLesson",e.column._index,e.row._index)
                this.currentAttendance = `周${e.column._index+1}第${e.row._index+1}节${value}`
            },
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            }
        }
    }
</script>
