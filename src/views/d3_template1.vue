<template>
    <div id="main">
        <el-button type="primary" size="mini" @click="run_path1">匹配数据</el-button>
        <el-button type="primary" size="mini" @click="run_path_each">each验证</el-button>
        <el-button type="primary" size="mini" @click="run_path_array_dispose">数组的处理</el-button>
        <p>sdf</p>
        <p>sdf</p>
        <p>sdf</p>
        <p>sdf</p>
        <p>sdfsdf</p>
        <p>asdf</p>

    </div>
</template>

<script>
    export default {
        name: "d3_template1",
        data(){
            return {

            }
        },
        created(){

        },
        mounted(){
            // this.run_path1();
        },
        methods:{
            run_path1(){
                let dataset = [10 , 20, 30] ;
                let p = this.$d3.select('#main').selectAll('p');

                let update = p.data(dataset);
                let enter = update.enter();
                let exit = update.exit();

                /*1、update部分处理方法*/
                update
                    .text((d)=>{
                        return d;
                    });
                enter.append('p')
                    .filter((d,i)=>{
                        return d>30;
                    })
                    .text((d)=>{
                        return d;
                    });
                exit.remove();

                this.$d3.selectAll('p')
                    .sort((a,b)=>{
                        return b-a;
                    })
            },
            run_path_each(){
                let person = [
                    {id: 1001, name: "zhangfei"},
                    {id: 1002, name: "lixiaoming"}
                ];
                let p = this.$d3.selectAll('p');
                p.data(person)
                    .each((d,i)=>{
                        d.age = 20;
                    })
                    .join()
                    .text((d)=>{
                        return d.id+" "+d.name+" "+d.age;
                    })
            },
            run_path_array_dispose(){
                let arr1 = [3,1,7,undefined,10,NaN];
                console.log("arr1 - median :",this.$d3.median(arr1));
                let arr2 = [3,1,7,undefined,10,15,NaN];
                console.log("arr2 - median :",this.$d3.median(arr2))
                let arr3 = [3,1,7,undefined,10,15,NaN];
                console.log("arr3 asc =",arr3.sort((a,b)=>{
                    return a-b;
                }))
                /*console.log("arr3 - quantile :",this.$d3.quantile(arr3.sort((a,b)=>{
                    return a-b;
                }),0.5))*/
            }
        }
    }
</script>

<style scoped>

</style>