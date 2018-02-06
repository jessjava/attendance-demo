<template>
    <div>
        <div style="padding:8px;margin:10px auto;background-color:#FFF;">
            <h2>
                <a href="https://leancloud.cn" target="_blank">leancloud.cn 存储测试</a>
            </h2>
            <br>
            <Row>
                <Col span="12">
                <Input v-model="name" placeholder="姓名" style="width: 300px"></Input>
                <br><br>
                <Input v-model="age" placeholder="年龄" style="width: 300px"></Input>
                <br><br>
                <Input v-model="address" placeholder="地址" style="width: 300px"></Input>
                <br><br>

                    <Button @click="save" type="primary">保存</Button>
                    <br><br>
                </Col>
            </Row>

            <Table stripe :columns="columns1" :data="data"></Table>
        </div>
    </div>
</template>
<script>

    export default {
        components: {
            
        },
        data () {
            return {
                name:"",
                age:"",
                address:"",

                columns1: [
                    {
                        title:"ID",
                        key:"id"
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data:[]
            }
        },
        methods: {
            save() {
                let share = new this.$lean.Object('data')
                share.set('jsonData',JSON.stringify({
                    name:this.name,
                    age:this.age,
                    address:this.address
                }))
                share.save().then(res => {
                    this.name = '';
                    this.age = '';
                    this.address = '';
                    this.init();
                })
            },
            init(){
                this.data.splice(0)
                let data = new this.$lean.Query('data')
                data.find().then(res => {
                    console.log("get data",res)
                    res.forEach(d => {
                        let tmp = JSON.parse(d.attributes.jsonData);
                        tmp.id = d.id;
                        this.data.push(tmp)
                    })
                })
            }

        },
        mounted(){
            this.init();
        }
    }
</script>
