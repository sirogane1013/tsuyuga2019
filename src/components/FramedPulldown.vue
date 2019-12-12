<template>
    <!--プルダウン-->
    <div class="pulldown_wrapper">
        <div class="pulldown_text" id="pulldown_text">
            <span class="pulldown_triangle_blue"></span>
            <span class="pulldown_triangle_white"></span>
            <p>名前を選択</p>
        </div>
        <select class="pulldown" id="pulldown" v-on:change="pulldown_value_change">
            <option v-for="item in options">{{item}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "framed-pulldown",
        props: {
            options : {},/*optionsは文字列型の配列で、これらがプルダウンに表示される*/
        },
        methods:{
            pulldown_value_change: function(){/*プルダウンの値が変更された時*/
                var text = document.querySelector("#pulldown").value;
                document.querySelector("#pulldown_text p").textContent = text;
            }
        }
    }
</script>

<style scoped lang="scss">
.pulldown_wrapper{
    /*全体を収容するwrapperで、青いグラデーションをかけておく*/
    position:relative;
    width:100%;
    height:38px;
    background: linear-gradient(135deg,#5F87FF,#5EE7FF);
    border-radius: 6px;
    .pulldown_text{
        /*プルダウンのテキストを表示するdivに適用するクラス*/
        /*背景を白、wrapperより若干小さくサイズを設定して青のグラデーションのかかった枠線を表現*/
        position:absolute;
        background: white;
        border-radius: 5px;
        height: calc(100% - 6px); /* borderの幅だけ引く */
        width: calc(100% - 6px);
        left:3px;
        top:3px;
        box-sizing: border-box;
        color:#5F87FF;
        font-size:24px;
        text-align:center;
        .pulldown_triangle{/*角丸の三角形をこの要素、before、afterで作る*/
        /*このクラスは後で継承して使う*/
            text-align: left;
            border-top-right-radius:6px;
            transform: rotate(0deg) skewX(-30deg) scale(1,.866);
            &::before{
                content: '';
                position: absolute;
                border-top-right-radius:6px;
                transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
            }
            &::after{
                content: '';
                position: absolute;
                border-top-right-radius:6px;
                transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
            }
        }
        $pulldown_triangle_blue_size:13px;
        .pulldown_triangle_blue{/*角丸の三角形を継承、色と位置を指定*/
            @extend .pulldown_triangle;
            position:absolute;
            top:6px;
            right:10px;
            width:$pulldown_triangle_blue_size;
            height:$pulldown_triangle_blue_size;
            background: linear-gradient(0deg,#5F87FF,#5F87FF);
            &::before{
                width:$pulldown_triangle_blue_size;
                height:$pulldown_triangle_blue_size;
                background: linear-gradient(176deg,#5EE7FF,#5F87FF);
            }
            &::after{
                width:$pulldown_triangle_blue_size;
                height:$pulldown_triangle_blue_size;
                background: linear-gradient(-94deg,#5EE7FF,#5F87FF);
            }
        }
        $pulldown_triangle_white_size:8px;
        $pulldown_triangle_white_round:1px;/*角をどれだけ丸めるか*/
        .pulldown_triangle_white{/*角丸の三角形を継承、色と位置を指定*/
            @extend .pulldown_triangle;
            position:absolute;
            top:9px;
            right:14px;
            width:$pulldown_triangle_white_size;
            height:$pulldown_triangle_white_size;
            border-top-right-radius:$pulldown_triangle_white_round;
            background:#FFFFFF;
            &::before{
                width:$pulldown_triangle_white_size;
                height:$pulldown_triangle_white_size;
                border-top-right-radius:$pulldown_triangle_white_round;
                background:#FFFFFF;
            }
            &::after{
                width:$pulldown_triangle_white_size;
                height:$pulldown_triangle_white_size;
                border-top-right-radius:$pulldown_triangle_white_round;
                background:#FFFFFF;
            }
        }
    }

    /*プルダウンの本体。opacity:0にしてユーザーからは見えなくする*/
    .pulldown{
        position:absolute;
        background: white;
        height:100%;
        width:100%;
        top:0px;
        left:0px;
        box-sizing: border-box;
        outline:0;
        border-style:none;
        -webkit-appearance: none;
        color:#5F87FF;
        font-size:24px;
        opacity:0;
    }
}
</style>