<template>
    <div class="list-box-wrapper">
        <div class="list-box">
            <div class="list-box__title">
                <h3>{{ member.name }}</h3>
            </div>
            <div class="list-box__content">
                <table>
                    <tr>
                        <th>{{member.vehicle}}</th>
                        <td>{{member.vehicle_number}}</td>
                    </tr>
                    <tr>
                        <th>部屋</th>
                        <td>{{ member.room }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "person-information",
        props: {
            member: {
                name:"",
                vehicle:"",
                vehicle_number:"",
                room:""
            },
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
        width: 9rem;
    }

    .list-box__title h3 {
        width: calc(100% - 1.5rem);
        text-align: center;
        font-size: 1.3rem;
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
        line-height: 3;
        width: 10rem;
        color: $main2;
    }

    .list-box table {
        width: 100%;
        text-align: left
    }

    .list-box__content th {
        font-weight: normal;
        width: 50%;
        padding-left: .5rem;
    }
    .list-box__content td {
        font-weight: normal;
        width: 30%;
        padding-right: .0rem;
    }
</style>