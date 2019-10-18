<template>
    <div class="kuang">
        <p>Cat</p>
        <p>Dog</p>
        <svg width="400px" height="300px" fill="rgba(82,178,231,.8)">
            <circle cx="50px" cy="50px" r="5px"></circle>
            <circle cx="50px" cy="70px" r="5px"></circle>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "d3test1",
        data(){
            return{
                data_set: [
                    {
                        cx: 50,
                        cy: 50,
                        r: 1,
                    },
                    {
                        cx: 50,
                        cy: 70,
                        r: 3,
                    },
                    {
                        cx: 50,
                        cy: 90,
                        r: 5,
                    },
                    {
                        cx: 50,
                        cy: 110,
                        r: 8,
                    },
                    {
                        cx: 50,
                        cy: 130,
                        r: 13,
                    },
                    {
                        cx: 50,
                        cy: 160,
                        r: 21,
                    }
                ],
            }
        },
        mounted(){
            this.draw_bar1();
        },
        created(){

        },
        methods:{
            draw_bar1(){
                let p = this.$d3.select('.kuang')
                    .selectAll('p')
                    .text('Hello world');
                p.classed('p_clr',true);

                let svg = this.$d3.select('.kuang > svg');
                //1、使用.join替代enter、exit等显示的选择集操作
                console.log("绘制圆");
                let circles = svg.selectAll("circle")
                    .data(this.data_set)
                    .join(
                        enter => {
                            console.log("enter: ",enter);
                            return enter.append("circle")
                                .attr("cx","50px")
                                .attr("cy",(d)=>{
                                    return d.cy+"px";
                                })
                                .attr("r",(d)=>{
                                    return d.r+"px";
                                })
                                .attr("fill", "rgba(244,168,32,.8)")
                                // .attr("stroke", "rgba(130,20,131,.8)");
                        },
                        update => update.attr("fill", "rgba(65,189,217,.8)")
                    )
                    .attr("stroke", "rgba(130,20,131,.5)")
                    .attr("stroke-width",3);
            }
        },
        destroyed() {

        },
        beforeDestroy() {

        }
    }
</script>

<style scoped>
    .kuang{
        font-size: 1.5rem;
        height: 19em;
        width: auto;
        background-color: aliceblue;
        border: lightblue solid 1px;
    }
    .p_clr{
        font-size: 17px;
        color: #42b983;
    }
    /*.svg{
        width: 100%;
        height: 100%;
    }*/
</style>