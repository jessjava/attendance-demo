<template>
    <div>
        <div style="width:45%;float:left;">
            <Table border ref="selection" :columns="columns4" :data="data1"></Table>
            <!--<Button @click="handleSelectAll(true)">Set all selected</Button>-->
            <!--<Button @click="handleSelectAll(false)">Cancel all selected</Button>-->
        </div>
        <div style="width:55%;padding-left:10px;float:left;">
            <div style="margin:8px auto">
                <Tag color="blue">周一第一节：数学</Tag>
            </div>
            <Table border ref="operation" :columns="columns7" :data="data6">

            </Table>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns7: [
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
                        key: 'age'
                    },
                    {
                        title: '班主任',
                        key: 'address'
                    },
                    {
                        title: '考勤',
                        key: 'action',
                        width: 250,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '正常'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '迟到'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '早退'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '缺勤')

                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: '张三',
                        age: 110,
                        address: 'jess'
                    },
                    {
                        name: '李四',
                        age: 111,
                        address: 'jess'
                    },
                    {
                        name: '国际',
                        age: 112,
                        address: 'jess'
                    },
                    {
                        name: '贺彪',
                        age: 113,
                        address: 'jess'
                    },
                    {
                        name: '王晓东',
                        age: 114,
                        address: 'jess'
                    }
                ],
                columns4: [
                    {
                        title: '周一',
                        key: 'a'
                    },
                    {
                        title: '周二',
                        key: 'b'
                    },
                    {
                        title: '周三',
                        key: 'c'
                    },
                    {
                        title: '周四',
                        key: 'd'
                    },
                    {
                        title: '周五',
                        key: 'e'
                    },
                    {
                        title: '周六',
                        key: 'f'
                    },
                    {
                        title: '周日',
                        key: 'g'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        a: '数学',
                        b: '数学',
                        date: '2016-10-03'
                    },
                    {},
                    {},
                    {
                        d: '体育锻炼',
                        e: '数学'
                    },
                    {
                        e: '数学'
                    },
                    {
                        c: '数学'
                    },
                    {}
                ]
            }
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            }
        }
    }
</script>
