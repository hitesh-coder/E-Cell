<template>
    <div class="home">
        <transition name="fade">
            <preloader />
        </transition>
        <nav>
            <div class="logo">
                <a href="/">
                    <img src="../assets/logo.png" alt="" />
                </a>
            </div>
            <div class="navbar" :class="{ none: isnone }">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#aboutUs">About Us</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#contactUs">Contact Us</a></li>
                </ul>
            </div>
            <div class="hamburger">
                <i
                    class="material-icons menu"
                    v-if="!sidebarOpen"
                    @click="changeSidebarState"
                    >menu</i
                >
                <i
                    class="material-icons close"
                    v-if="sidebarOpen"
                    @click="changeSidebarState"
                    >close</i
                >
            </div>
        </nav>
        <div class="section">
            <div class="content">
                <div class="heading">
                    PCCOE, <br />
                    Welcomes you...
                </div>
                <div class="content-text">
                    PCCOE's Department of Computer engineering, has started
                    E-CELL to evoke idea of entrepreneurship among engineering
                    students.
                </div>
                <div class="btn">Get Started</div>
            </div>
            <div class="svg">
                <img src="../assets/file2.svg" alt="" />
            </div>
        </div>
        <quotes />

        <credits />
    </div>
</template>

<script>
import Credits from "./credits.vue";
import Preloader from "./preloader.vue";
import quotes from "./quotes.vue";

export default {
    name: "Home",
    components: { quotes, Preloader, Credits },
    data() {
        return {
            sidebarOpen: false,
            isnone: true,
        };
    },
    methods: {
        changeSidebarState() {
            this.isnone = !this.isnone;
            this.sidebarOpen = !this.sidebarOpen;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$font-color: rgb(255, 199, 45);

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.home {
    padding: 5vh 8vw;
    background: #000428; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #004e92,
        #000428
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to left,
        #0168c2,
        rgb(20, 57, 90)
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    width: 100vw;
    min-height: 100vh;
    max-height: fit-content;
}

nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8rem;

    .logo {
        margin-right: 10rem;
        img {
            width: 50px;
            filter: drop-shadow(1px 1px 2px rgb(170, 170, 170));
            // -webkit-filter: drop-shadow(1px 1px 1px rgb(224, 224, 224));
        }
    }

    .navbar {
        flex: 1;
        ul {
            list-style: none;
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            a {
                font-weight: 500;
                font-size: 18px;
                line-height: 22px;
                text-decoration: none;
                text-transform: uppercase;
                color: $font-color;

                background: linear-gradient(
                    to right,
                    $font-color,
                    $font-color 50%,
                    rgb(255, 255, 255) 50%
                );
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-size: 200% 100%;
                background-position: 100%;

                transition: background-position 0.6s ease;

                &:hover,
                &:focus {
                    background-position: 0 100%;
                }
            }
        }
    }

    .hamburger {
        display: none;
    }
}

.section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 450px;

        .heading {
            color: $font-color;
            // font-family: 'Playfair Display', serif;
            font-size: 48px;
            line-height: 54px;
            letter-spacing: 3px;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        .content-text {
            color: white;
            font-size: 16px;
            letter-spacing: 1px;
            line-height: 20px;
            margin-bottom: 2rem;
        }

        .btn {
            width: fit-content;
            padding: 1rem;
            background: $font-color;
            border-radius: 1rem;
            cursor: pointer;
            // box-shadow: 0px 0px 5px rgb(173, 173, 173);

            font-size: 18px;
            line-height: 20px;
            font-weight: 600;
            letter-spacing: 1px;

            transition: all 0.2s ease;

            &:hover {
                background: rgb(255, 187, 0);
            }
        }
    }

    .svg {
        img {
            width: 600px;
        }
    }
}

@media screen and (max-width: 1100px) {
    .home {
        padding: 5vh 5vh;
    }
}
@media screen and (max-width: 950px) {
    .section {
        .svg {
            img {
                width: 450px;
            }
        }
    }
}
@media screen and (max-width: 800px) {
    nav {
        .navbar {
            ul {
                a {
                    font-size: 16px;
                    line-height: 20px;
                }
            }
        }
    }

    .section {
        .content {
            .heading {
                font-size: 42px;
                line-height: 47px;
                letter-spacing: 2.5px;
            }
            .content-text {
                font-size: 14px;
                line-height: 17px;
            }
            .btn {
                font-size: 16px;
                line-height: 18px;
            }
        }
    }
}

@media screen and (max-width: 750px) {
    nav {
        margin-bottom: 4rem;
    }
    .section {
        display: flex;
        flex-direction: column;
        position: relative;
        .content {
            width: 100%;
            z-index: 1;
            .heading {
                text-shadow: 1px 1px 3px rgba(61, 61, 61, 0.76);
            }
            .content-text {
                width: 300px;
                text-shadow: 1px 1px 3px rgb(66, 66, 66);
            }
        }
        .svg {
            position: absolute;
            right: 0;
            img {
                width: 350px;
                opacity: 0.7;
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .home {
        padding: 5vh 3vw;
    }

    nav {
        .logo {
            z-index: 11;
        }
        .navbar {
            position: fixed;
            width: 100vw;
            height: 100vh;
            background: black;
            top: 0%;
            left: 0%;
            z-index: 10;
            clip-path: circle(150% at 93% 10%);
            transition: all 0.8s ease;
            // display: none;

            ul {
                height: 100%;
                padding: 10vh 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
            }
        }

        .none {
            clip-path: circle(0px at 93% 10%) !important;
        }

        .hamburger {
            display: inline-block;
            z-index: 11;
            i {
                color: white;
                font-size: 2rem;
            }
        }
    }

    .section {
        .svg {
            img {
                opacity: 0.45;
            }
        }
    }
}

@media screen and (max-width: 450px) {
    .section {
        .content {
            .heading {
                font-size: 36px;
                line-height: 42px;
            }
        }
    }
}

@media screen and (max-width: 365px) {
    .section {
        .content {
            .heading {
                font-size: 28px;
                line-height: 44px;
            }
        }
    }
}
</style>
