<template>
    <div class="kuang">
        <svg class="svg"></svg>
    </div>
</template>

<script>
    export default {
        name: "bar1",
        data(){
            return{

            }
        },
        mounted(){
            this.draw_bar2();
        },
        created(){

        },
        methods:{
            draw_bar1(){
                let marge = {
                    top: 20,
                    bottom: 60,
                    left: 60,
                    right: 60
                };
                let dataset = [250,210,170,130,90];
                let svg = this.$d3.select("svg");
                let g = svg.append('g')
                    .attr('transform','translate('+marge.left+','+marge.top+')');

                let rect_height = 30;
                g.selectAll('rect')
                    .data(dataset)
                    .enter()
                    .append('rect')
                    .attr('x',20)
                    .attr('y',(d, i)=>{
                        return i*rect_height;
                    })
                    .attr('width',(d)=>{
                        return d;
                    })
                    .attr('height',rect_height-5)
                    .attr('fill','rgba(82,178,231,0.8)')
            },
            draw_bar2(){
                let marge = {
                    top: 0,
                    bottom: 60,
                    left: 60,
                    right: 60
                };
                let dataset = [210,241,170,130,160];
                let g = this.$d3.select('svg').append('g')
                    .attr('transform','translate('+marge.left+','+marge.top+')');
                let rect_width = 30;
                let g2 = g.selectAll('rect')
                    .data(dataset)
                    .enter()
                    .append('rect')
                    .attr('x',(d, i)=>{
                        return i*(rect_width+5);
                    })
                    .attr('y',(d, i)=>{
                        return 300-d;
                    })
                    .attr('rx',2).attr('ry',2)
                    .attr('width',rect_width)
                    .attr('height',(d)=>{
                        return d;
                    })
                    .attr('fill','rgba(82,231,183,0.8)');
                    // .style({'fill':'rgba(82,231,183,0.8)','stroke':'red', 'stroke-width':2})
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
    .svg{
        width: 100%;
        height: 100%;
    }
    .border{
        stroke: #42b983;
        stroke-width: 3px;
    }
</style>
<style>
    .border2{
        border: violet solid 1px;
        background-color: purple;
    }
</style>