<template>
    <div
            :class="[
                'menu',
                {'menu--hide': ! state.isMenuOpen},
                {'menu--boot': state.isBootFromIndex},
            ]"
    >
        <div
                :class="[
                    'menu__side-circle-wrapper',
                    {'menu__side-circle-wrapper--boot': state.isBootFromIndex},
                ]">
            <div class="menu__side-circle-out"></div>
            <div class="menu__side-circle-in"></div>
            <h1
                    :class="[
                        'menu__title',
                        {'menu__title--boot': state.isBootFromIndex},
                    ]"
            >
                <span>t</span><span>s</span><span>u</span><span>y</span><span>u</span><span>g</span><span>a</span>
            </h1>
        </div>
        <ol class="menu__elements"
            :class="[
                    {'menu__elements--transition' : state.isPageTransitioning},
                    {'menu__elements--boot': state.isBootFromIndex},
                ]"
            :style="{
                'transform': `translateY(${currentOffset}px)`
             }"
        >
            <li v-for="(val, href, index) in this.menuElements" :key='href'
                :class="[
                    'menu__element',
                    {'menu__element--active' : itemActive[index]},
                ]"
                :style="{
                    transform: itemActive[index] ? 'translateX(' + itemPositionX[index] + 'px) rotate(' + itemRotate[index] + 'deg) scale(1.3)'
                                                 : 'translateX(' + itemPositionX[index] + 'px) rotate(' + itemRotate[index] + 'deg)',
                    opacity: `${itemOpacity[index]}`,
                }"
            >
                <router-link :to="{ path: href }">{{ val }}</router-link>
            </li>
        </ol>
    </div>

</template>

<script>
    import store from '../store'

    export default {
        name: "TheMenu",
        data() {
            return {
                state: store.state,
                isTouch: typeof window !== "undefined" && "ontouchstart" in window,
                dragging: false,
                dragStartY: 0,
                dragMomentum: 0,
                startTime: 0,
                offset: 0,
                dragOffset: 0,
                itemFirstPositionX: [0, 0, 0, 0, 0, 0, 0],
                itemFirstPositionY: [0, 0, 0, 0, 0, 0, 0],
                bootTime: 2400,
            }
        },
        props: {
            /**
             * Resistance coefficient to dragging on the edge of the menu
             * This dictates the effect of the pull as you move towards the boundaries
             */
            resistanceCoefficient: {
                type: Number,
                default: 30
            },
            /**
             * Minimum distance for the swipe to trigger
             */
            minSwipeDistance: {
                type: Number,
                default: 8
            },
            /**
             * the number of items
             */
            numOfItems: {
                type: Number,
                default: 7
            },
            /**
             * the height per element
             */
            elementHeight: {
                type: Number,
                default: 60
            },
            /**
             * menu elements
             */
            menuElements: {
                type: Object,
                default: () => {
                    return {
                        '/mochimono': '持ち物・注意事項',
                        '/timetable/first-day': 'タイムテーブル',
                        '/optional': 'オプショナル',
                        '/play': '遊び',
                        '/allocation/search': '部屋・バス割',
                        '/other': 'その他',
                        '/link': '外部リンク',
                    }
                },
            },
            /**
             * margin when activating elements
             * when this number is 0, always 1 of any elements is active
             */
            activateMargin: {
                type: Number,
                default: 15
            },
        },
        computed: {
            currentOffset() {
                return (this.offset + this.dragOffset) * -1;
            },
            maxOffset() {
                return 180
            },
            minOffset() {
                return -180
            },
            itemPositionX() {
                let itemPositionX = [0, 0, 0, 0, 0, 0, 0];
                itemPositionX.forEach((element, index) => {
                    itemPositionX[index] = Math.sqrt(Math.pow(400, 2) - Math.pow(this.itemPositionY[index], 2)) - 240;
                });
                return itemPositionX;
            },
            itemPositionY() {
                let itemPositionY = [0, 0, 0, 0, 0, 0, 0];
                itemPositionY.forEach((element, index) => {
                    itemPositionY[index] = this.itemFirstPositionY[index] + this.currentOffset;
                });
                return itemPositionY;
            },
            itemRotate() {
                let itemRotate = [0, 0, 0, 0, 0, 0, 0];
                itemRotate.forEach((element, index) => {
                    itemRotate[index] = this.itemActive[index] ? 0 : (this.itemPositionY[index] / this.maxOffset) * 10;
                });
                return itemRotate;
            },
            itemActive() {
                let itemActive = [false, false, false, false, false, false, false];
                itemActive.forEach((element, index) => {
                    itemActive[index] = (
                        (((-this.currentOffset + 180 + this.elementHeight / 2 + this.activateMargin) / 60 < index + 1) || (index === 6)) &&
                        (((-this.currentOffset + 180 + this.elementHeight / 2 - this.activateMargin) / 60 >= index) || (index === 0)));
                });
                return itemActive;
            },
            itemOpacity() {
                let itemOpacity = [1, 1, 1, 1, 1, 1, 1];
                itemOpacity.forEach((element, index) => {
                    itemOpacity[index] = 1 - (Math.abs(this.itemPositionY[index]) / this.maxOffset) * 0.7;
                });
                return itemOpacity;
            }
        },
        watch: {
            'state.isMenuOpen': function (isMenuOpen) {
                if (isMenuOpen) {
                    document.querySelector(".menu").addEventListener(
                        this.isTouch ? "touchstart" : "mousedown",
                        this.onStart
                    );
                } else {
                    document.querySelector(".menu").removeEventListener(
                        this.isTouch ? "touchstart" : "mousedown",
                        this.onStart
                    );
                }
            }
        },
        methods: {
            onStart(e) {
                // detect right click
                store.unBoot();
                if (e.button === 2) {
                    return;
                }
                document.addEventListener(
                    this.isTouch ? "touchend" : "mouseup",
                    this.onEnd,
                    true
                );
                document.addEventListener(
                    this.isTouch ? "touchmove" : "mousemove",
                    this.onDrag,
                    true
                );
                this.startTime = e.timeStamp;
                this.dragging = true;
                this.dragStartY = this.isTouch ? e.touches[0].clientY : e.clientY;
            },
            onEnd(e) {
                // compute the momentum speed
                const eventPosY = this.isTouch ? e.changedTouches[0].clientY : e.clientY;
                const delta = this.dragStartY - eventPosY;
                this.dragMomentum = delta / (e.timeStamp - this.startTime);
                this.offset += this.dragOffset;
                this.dragOffset = 0;
                this.dragging = false;
                this.render();
                // clear events listeners
                document.removeEventListener(
                    this.isTouch ? "touchend" : "mouseup",
                    this.onEnd,
                    true
                );
                document.removeEventListener(
                    this.isTouch ? "touchmove" : "mousemove",
                    this.onDrag,
                    true
                );
            },
            onDrag(e) {
                const eventPosY = this.isTouch ? e.touches[0].clientY : e.clientY;
                const newOffsetY = this.dragStartY - eventPosY;
                e.stopImmediatePropagation();
                this.dragOffset = newOffsetY;
                const nextOffset = this.offset + this.dragOffset;
                if (nextOffset < this.minOffset) {
                    this.dragOffset = (this.minOffset - this.offset) + (this.dragOffset + this.offset - this.minOffset) * 0.2;
                } else if (nextOffset > this.maxOffset) {
                    this.dragOffset = (this.maxOffset - this.offset) + (this.dragOffset + this.offset - this.maxOffset) * 0.2;
                }
            },
            onWheel(e) {
                e.preventDefault();
                this.offset += e.deltaY * 0.2;
                if (this.offset < this.minOffset) {
                    this.offset = this.minOffset;
                } else if (this.offset > this.maxOffset) {
                    this.offset = this.maxOffset;
                }
            },
            render() {
                // set offset to the nearest element
                if (this.offset > this.maxOffset) {
                    this.offset = this.maxOffset;
                } else if (this.offset < this.minOffset) {
                    this.offset = this.minOffset;
                }
            },
        },
        created() {
            this.itemFirstPositionY.forEach((element, index) => {
                this.itemFirstPositionY[index] = (index - 3) * 60;
            });
        },
        mounted() {
            document.querySelector(".menu").addEventListener(
                this.isTouch ? "touchstart" : "mousedown",
                this.onStart
            );
            window.addEventListener('click', function () {
                store.unBoot()
            }, {
                once: true
            });
            setTimeout(() => {
                store.unBoot()
            }, this.bootTime);
            if (!this.isTouch) {
                document.querySelector(".menu").addEventListener(
                    "wheel",
                    this.onWheel
                );
            }
        },
    }
</script>

<style lang="scss">
    @import "../assets/scss/_variables.scss";

    .menu {
        position: fixed;
        top: calc(50% - 300px);
        width: 450px;
        height: 600px;
        max-height: 100vh;
        overflow: hidden;
        transition-timing-function: ease;
        transition-duration: .3s;
        transition-delay: $animation-delay-2;

        @media (max-width: 375px) { // only small mobile device
            left: -75px;
            width: calc(100% + 75px);
        }

        &--hide {
            @media (max-width: 1023px) { // only mobile device
                transform: translateX(-30px);
                opacity: 0;
                transition-delay: 0s;
                pointer-events: none;
            }
        }

        &--boot {

        }

        &__elements {
            width: 100%;
            height: 460px;
            position: absolute;
            top: calc((100% - 460px) / 2);
            list-style: none;
            will-change: transform;

            &--transition {
                opacity: 0;
                transition-duration: .3s;
            }

            &--boot {
                animation: menu_elements-boot .2s ease-out 2.2s 1 both;
                z-index: -1;
            }
        }

        &__element {
            width: max-content;
            color: $main1;
            font-size: 20px;
            line-height: 1;
            margin: 40px 0;
            transform-origin: left;
            will-change: transform;

            &:before {
                content: '';
                display: block;
                width: 15px;
                height: 2px;
                position: absolute;
                left: -40px;
                top: 10px;
                background-color: $main2;
                opacity: 0;
                transition-duration: 0.3s;
            }

            &:after {
                content: '';
                display: block;
                width: 15px;
                height: 2px;
                position: absolute;
                left: calc(100% + 10px);
                top: 10px;
                background-color: $main2;
                opacity: 0;
                transition-duration: 0.3s;
            }

            &--active {
                color: $main2;
                transition-duration: .1s;

                &:before {
                    transform: translateX(15px);
                    opacity: 1;
                }

                &:after {
                    opacity: 1;
                }
            }

        }

        &__element > a {
            color: inherit;
        }

        &__side-circle-wrapper {
            &--boot {
                animation: menu_side-circle-boot .8s ease-out .3s 1 both;
            }
        }

        &__side-circle-out {
            width: 320px;
            height: 320px;
            position: absolute;
            top: calc((100% - 320px) / 2);
            left: -200px;
            background: linear-gradient($main1, $main2);
            border-radius: 50%;
            animation: rotate-clockwise 10s linear 0s infinite;

            &:before {
                content: "";
                display: block;
                width: calc(320px - 6px);
                height: calc(320px - 6px);
                position: relative;
                top: 3px;
                left: 3px;
                background-color: $background;
                border-radius: 50%;
            }
        }

        &__side-circle-in {
            width: 260px;
            height: 260px;
            position: absolute;
            top: calc((100% - 260px) / 2);
            left: -170px;
            background: linear-gradient($main1, $main1-i);
            border-radius: 50%;
            animation: rotate-counterclockwise 7s linear 0s infinite;

            &:before {
                content: "";
                display: block;
                width: calc(260px - 6px);
                height: calc(260px - 6px);
                position: relative;
                top: 3px;
                left: 3px;
                background-color: $background;
                border-radius: 50%;
            }
        }

        &__title {
            position: absolute;
            top: calc((100% - 320px) / 2 + 320px);
            color: $main2;
            font-size: 18px;

            & > span {
                display: inline-block;
            }

            & > span:nth-child(1) {
                transform: rotate(-23deg) translate(11.5px, -4.8px);
                animation: gradate 10s linear 0.6s infinite;
            }

            & > span:nth-child(2) {
                transform: rotate(-27deg) translate(14px, -7px);
                animation: gradate 10s linear 0.5s infinite;
            }

            & > span:nth-child(3) {
                transform: rotate(-29deg) translate(16px, -11px);
                animation: gradate 10s linear 0.4s infinite;
            }

            & > span:nth-child(4) {
                transform: rotate(-31deg) translate(19px, -15px);
                animation: gradate 10s linear 0.3s infinite;
            }

            & > span:nth-child(5) {
                transform: rotate(-33deg) translate(22px, -19.5px);
                animation: gradate 10s linear 0.2s infinite;
            }

            & > span:nth-child(6) {
                transform: rotate(-34deg) translate(25px, -25px);
                animation: gradate 10s linear 0.1s infinite;
            }

            & > span:nth-child(7) {
                transform: rotate(-36deg) translate(29px, -29.5px);
                animation: gradate 10s linear 0s infinite;
            }

            &--boot {
                & > span:nth-child(1) {
                    animation: menu_title-boot .5s ease-out .8s 1 both;
                }

                & > span:nth-child(2) {
                    animation: menu_title-boot .5s ease-out .9s 1 both;
                }

                & > span:nth-child(3) {
                    animation: menu_title-boot .5s ease-out 1s 1 both;
                }

                & > span:nth-child(4) {
                    animation: menu_title-boot .5s ease-out 1.1s 1 both;
                }

                & > span:nth-child(5) {
                    animation: menu_title-boot .5s ease-out 1.2s 1 both;
                }

                & > span:nth-child(6) {
                    animation: menu_title-boot .5s ease-out 1.3s 1 both;
                }

                & > span:nth-child(7) {
                    animation: menu_title-boot .5s ease-out 1.4s 1 both;
                }
            }
        }
    }

    .footer-index {
        width: 100%;
        position: absolute;
        bottom: 0;
        text-align: center;

        &__copyright {
            font-size: $font-size-s;
            color: $main2;
        }
    }

    @keyframes rotate-clockwise {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }

    @keyframes rotate-counterclockwise {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(-360deg);
        }
    }

    @keyframes gradate {
        0% {
            color: $main2;
        }
        50% {
            color: $main1;
        }
        100% {
            color: $main2;
        }
    }

    @keyframes menu_side-circle-boot {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes menu_elements-boot {
        0% {
            opacity: 0;
            transform: translateX(-30px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes menu_title-boot {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>