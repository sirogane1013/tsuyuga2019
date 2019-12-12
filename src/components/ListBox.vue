<template>
    <div class="list-box-wrapper">
        <div class="list-box"
             v-for="(allocation, index) in allocations" :key="index"
        >
            <div class="list-box__title">
                <h3>{{ allocation.number }}</h3>
                <h4 v-if="!(allocation.title === null)">{{ allocation.title }}</h4>
            </div>
            <div class="list-box__content">
                <table>
                    <tr v-for="(member, index) in allocation.member" :key="index"
                        :class="{'list-box__item--marked': member.isMarked}">
                        <th>{{ member.bureau }}{{ member.grade }}</th>
                        <td>{{member.name}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListBox",
        props: {
            allocations: {
                type: Array,
                required: true,
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/_variables.scss";
    @import "../assets/scss/_mixins.scss";

    .list-box {
        display: flex;
        width: calc(100% - 1rem);
        margin: 3rem auto;
        justify-content: center;
    }

    .list-box__title {
        position: relative;
        color: $main2;
        width: 10rem;
    }

    .list-box__title h3 {
        width: calc(100% - 1rem);
        text-align: right;
        font-size: $font-size-l;
        font-weight: normal;
        line-height: 1;
    }

    .list-box__title h4 {
        width: calc(100% - 1rem);
        margin-top: .5rem;
        text-align: right;
        font-size: $font-size-s;
        font-weight: normal;
        line-height: 1;
    }

    .list-box__title::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 2px;
        top: 0;
        right: 0;
        background: linear-gradient(135deg, $main2, $main1);
    }

    .list-box__content {
        padding: 1.1rem 0;
        font-size: $font-size-m;
        line-height: 1.9;
        width: 15rem;
        color: $main2;
    }

    .list-box table {
        width: 100%;
        text-align: left
    }

    .list-box__content th {
        font-weight: normal;
        width: 40%;
        padding-left: .5rem;
    }

    .list-box__item--marked {
        @include text-gradient();
        color: $main1; /* 非対応ブラウザ用 */
    }
</style>