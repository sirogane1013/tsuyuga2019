<template>
    <div class="select-wrapper">
        <label :for="fieldName"
               :class="[
                    'select-label',
                    'select-label--'+shape,
               ]"
        >
            <span>{{ selected }}</span>
        </label>
        <select :name="fieldName"
                :id="fieldName"
                :class="[
                    'select',
                    'select--'+shape,
               ]"
                v-model="selected"
        >
            <option v-for="(option, index) in options" :key="index"
                    :value="option.value">
                {{ option.name }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "FramedSelect",
        data() {
            return {
                selected: this.options[0].value,
            }
        },
        props: {
            fieldName: {
                type: String,
                required: true,
            },
            options: {
                type: Array,
                required: true,
            },
            shape: {
                type: String,
                default: "rectangle",
                validator: (value) => {
                    return ['rectangle', 'hexagon'].includes(value);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/variables";
    @import "../assets/scss/mixins";

    .select-wrapper {
        position: relative;
    }

    .select {
        position: absolute;
        top: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: none;
        opacity: 0;

        &:after {
            content: '';
            display: block;
            background-image: url("../assets/svg/triangle.svg");
            background-size: contain;
            background-repeat: no-repeat;
        }

        &--rectangle {
            width: 18rem;
            height: 2.5rem;
        }

        &--hexagon {
            width: 9rem;
            height: 9rem;
        }
    }

    .select-label {
        display: block;
        font-size: $font-size-m;
        color: $main2;
        text-align: center;

        &--rectangle {
            @include box-gradient();
            width: 18rem;
            height: 2.5rem;
            line-height: 2.5rem;
            border-radius: 5px;
            & > span {
                display: block;
                width: calc(18rem - 6px);
                height: calc(2.5rem - 6px);
                position: relative;
                top: 3px;
                left: 3px;
                margin: 0;
                padding: 0;
                line-height: calc(2.5rem - 6px);
                border-radius: 3px;
                background-color: white;
            }
        }

        &--hexagon {
            width: 9rem;
            height: 9rem;
            line-height: 9rem;
            background-image: url("../assets/svg/hexagon.svg");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
    }
</style>