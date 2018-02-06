const attendance = {
    state: {
        studentAttendanceList: {
            "001":[{
                id:1,
                name: '张三',
                stuno: 110,
                bzr: '吕老师',
                ok: false,
                later: false,
                early: false,
                notcome: true
            },
            {
                id:2,
                name: '李四',
                stuno: 111,
                bzr: '吕老师',
                ok: true,
                later: false,
                early: false,
                notcome: false
            },
            {
                id:3,
                name: '国际',
                stuno: 112,
                bzr: '吕老师',
                ok: true,
                later: false,
                early: false,
                notcome: false
            },
            {
                id:4,
                name: '贺彪',
                stuno: 113,
                bzr: '吕老师',
                ok: true,
                later: false,
                early: false,
                notcome: false
            },
            {
                id:5,
                name: '王晓东',
                stuno: 114,
                bzr: '吕老师',
                ok: true,
                later: false,
                early: false,
                notcome: false
            }],
            "002":[{
                id:1,
                name: '别致',
                stuno: 220,
                bzr: '吴佳',
                ok: true,
                later: false,
                early: false,
                notcome: false
            },
            {
                id:2,
                name: '张杰',
                stuno: 221,
                bzr: '吴佳',
                ok: true,
                later: false,
                early: false,
                notcome: false
            },
            {
                id:3,
                name: '张爽',
                stuno: 222,
                bzr: '吴佳',
                ok: true,
                later: false,
                early: false,
                notcome: false
            },
            {
                id:4,
                name: '赵江龙',
                stuno: 223,
                bzr: '吴佳',
                ok: true,
                later: false,
                early: false,
                notcome: false
            }]
        }
    },
    mutations: {
        updateAttendance(state,obj){
            state.studentAttendanceList[obj.clazzId] = obj.data;
        }
    }
}

export default attendance;