<template>
    <div class="search-wrapper">
        <div class="bureau-grade-wrapper">
            <framedSelect id="bureau" field-name="bureau" :options="bureaus" shape="hexagon"/>
            <framedSelect id="grade" field-name="grade" :options="grades" shape="hexagon"/>
        </div>
        <div v-on:click="setPerson()" class="name-wrapper">
            <framedSelect id="name" field-name="name" :options="names" shape="rectangle"/>
        </div>
        <div v-on:click="searchPerson()" class="search-button-wrapper">
            <framed-button >検索</framed-button>
        </div>
        <div class="bureau-grade-wrapper">
            <person-information :member="personals"/>
        </div>
    </div>
</template>

<script>
    import FramedSelect from "../../components/FramedSelect"
    import FramedButton from "../../components/FramedButton"
    import PersonInformation from "../../components/PersonInformation"
    import roomData from "../../assets/json/room"
    import busData from "../../assets/json/bus"

    export default {
        name: "Search",
        components: {
            FramedSelect,
            FramedButton,
            PersonInformation,
        },
        methods:{
            setPerson(){/*名前欄がクリックされた時に作動。名前欄を書き換え、条件に合致する名前を集めて配列にする*/
                var selected_bureau = document.querySelector('#bureau label').textContent;//局名を取得
                var selected_grade = document.querySelector('#grade label').textContent;//学年を取得
                var name_array = [];//結果はここに格納

                for(var i=0;i<this.busAllocation.length;i++){//局、学年から合致する名前を複数取得
                    for(var k=0;k<this.busAllocation[i].member.length;k++){
                        if(this.busAllocation[i].member[k].bureau==selected_bureau
                        && this.busAllocation[i].member[k].grade==selected_grade){//合致する名前を配列に追加
                            var person_object = {};
                            person_object.value = this.busAllocation[i].member[k].name;
                            person_object.name = this.busAllocation[i].member[k].name;
                            name_array.push(person_object)
                        }
                    }
                }
                this.names = name_array;
            },
            searchPerson(){/*検索ボタンが押された時*/
                var selected_name = document.querySelector('#name label').textContent;//検索文字列を取得
                if(selected_name=="名前を選択してください") return;

                var found_vehicle = "";//検索した結果出てきた乗り物
                var found_vehicle_number = "";//何号車か
                var found_room = "";//部屋番号
                //this.roomAllocation.forEach(x => { console.log(x.number, x.title,x.member); });
                for(var i=0;i<this.busAllocation.length;i++){//乗り物と、それが何号車かを検索
                    for(var k=0;k<this.busAllocation[i].member.length;k++){
                        if(this.busAllocation[i].member[k].name==selected_name){
                            found_vehicle = this.busAllocation[i].title;//結果を格納
                            found_vehicle_number = this.busAllocation[i].number;//結果を格納
                            break;
                        }
                    }
                }
                for(var m=0;m<this.roomAllocation.length;m++){//部屋番号が何か検索
                    for(var d=0;d<this.roomAllocation[m].member.length;d++){
                        if(this.roomAllocation[m].member[d].name==selected_name){
                            found_room = this.roomAllocation[m].number;//結果を格納
                            break;
                        }
                    }
                }
                this.personals.name = selected_name;
                this.personals.vehicle = found_vehicle;
                if(found_vehicle=="バス") this.personals.vehicle_number = found_vehicle_number.toString() + "号車";
                else this.personals.vehicle_number = found_vehicle_number.toString();
                this.personals.room = found_room;
            },
        },
        data() {
            return {
                bureaus: [
                    {
                        value: '1部署',
                        name: '1部署',
                    },
                    {
                        value: '2部署',
                        name: '2部署',
                    },
                    {
                        value: '3部署',
                        name: '3部署',
                    },
                    {
                        value: '4部署',
                        name: '4部署',
                    },
                ],
                grades: [
                    {
                        value: '17',
                        name: '17',
                    },
                    {
                        value: '18',
                        name: '18',
                    },
                    {
                        value: '19',
                        name: '19',
                    },
                ],
                personals: {
                    name: '',
                    vehicle: '',
                    vehicle_number: '',
                    room: '',
                },
                names: [
                    {
                        value: '名前を選択してください',
                        name: '名前を選択してください',
                    },
                ],
                roomAllocation:roomData,
                busAllocation:busData,
            }
        }
    }
</script>

<style scoped lang="scss">
    .search-wrapper {
        margin: 0 auto;
        display: flex;
        width: 19rem;
        flex-direction: column;
        align-items: center;
    }

    .bureau-grade-wrapper {
        display: flex;
        width: 19rem;
        justify-content: space-between;
        margin-top: 4rem;
    }
    .name-wrapper {
        display: flex;
        width: 18rem;
        justify-content: center;
        margin-top: 2rem;
    }

    .search-button-wrapper {
        align-self: flex-end;
        margin-top: 2rem;
        margin-right: .5rem;
    }
</style>