<template>
    <section>
        <h1>
            <span class="reveal" @click="RevealSecret">O</span>ther Projects
        </h1>
        <!--
        <div class="side-image" style="left: 0;">
            <img draggable="false" src="@assets/img/other_projects/background.png">
        </div>
        -->
        <div class="side-image" style="left: 0;">
            <img draggable="false" src="@assets/img/other_projects/background2.png">
        </div>
        <div class="block">
            <div class="col left">
                <router-link class="route" to="/Month">
                    <img draggable="false" class="fit-image hover-effect" src="@assets/img/other_projects/month.jpg"
                        alt="Jumpscare image" style="">
                </router-link>
            </div>
            <div class="col right">
                <h2>Month of Code</h2>
                <p class="facts">SQL, Full-Stack, Unreal Engine, Roblox</p>
                <p>1 week = 1 new thing</p>
            </div>
        </div>
        <div class="block">
            <div class="col left">
                <a href="https://luminice-star.itch.io/jumpscare" target="_blank" style="">
                    <img draggable="false" class="fit-image hover-effect" src="@assets/img/other_projects/foxy.jpg"
                        alt="Jumpscare image" style="">
                </a>
            </div>
            <div class="col right">
                <h2>Random Jumpscare</h2>
                <p class="facts">Python, Tkinter</p>
                <p>Funny program that has a 1/10000 chance of playing a jumpscare. It autostarts and you can change
                    which jumpscares play and if you want the chance to increase slowly. Took a lot longer to finish
                    than I thought.
                </p>
            </div>
        </div>
        <div class="block">
            <div class="col left">
                <a href="https://mosaicly-seven.vercel.app/" target="_blank" style="">
                    <img draggable="false" class="fit-image hover-effect" src="@assets/img/other_projects/mosaicly.png"
                        alt="Mosaicly image" style="">
                </a>
            </div>
            <div class=" col right">
                <h2>Mosaicly</h2>
                <p class="facts">TypeScript, SCSS, Svelte</p>
                <p>Scrum Master for a quarter long agile developed web app to create public interactable canvases
                    similar to Pokemon Go.
                </p>
            </div>
        </div>
        <div class="block">
            <div class="col left">
                <a href="https://connor-lynchh.github.io/CMPM-169-Team-Project-Group-8/" target="_blank">
                    <img draggable="false" class="fit-image hover-effect"
                        src="@assets/img/other_projects/eerie_watch.png" alt="Eerie Watch image">
                </a>
            </div>
            <div class="col right">
                <h2>EerieWatch</h2>
                <p class="facts">HTML, CSS, JS</p>
                <p>Lead group of software engineers to design a website about working as an agent investigating
                    supernatural events. Read blogs and decide whether to report it and
                    send a
                    team to investigate further or don't risk it in case it is a fake.
                </p>
            </div>
        </div>
        <transition name="slowFade" v-show="secret">
            <div class="block" style="background-color: #e0e0e0;">
                <div class="col left hover-effect">
                    <router-link to="/Secret" class="secret"><b>Secret</b></router-link>
                </div>
                <div class="col right">
                    <h2>Secret Found</h2>
                    <p class="facts">???</p>
                    <p>Who knows where this leads?
                    </p>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import sound from '@assets/sfx/jingle.mp3'

export default {
    data() {
        return {
            secret: false,
        }
    },
    methods: {
        RevealSecret() {
            this.secret = true;
            this.PlaySound();
        },
        PlaySound() {
            var audio = new Audio(sound)
            audio.play();
        }
    }
}
</script>


<style scoped>
.block {
    display: flex;
    padding: 1.5em;
    width: 80%;
    margin: auto;
}

.block>div.col {
    float: left;
    text-align: center;
    align-content: center;
    z-index: 1;
}

.block>div.left {
    width: 55%;
    margin-left: 2em;
    margin-right: 0.5em;
    max-height: 18em;
}

.block>div.right {
    width: 45%;
    margin-right: 2em;
}

.facts {
    /* programming languages section" */
    color: rgb(110, 110, 110);
    line-height: 10px;
}

.side-image {
    position: fixed;
    bottom: 0;
    z-index: 0;
}

.reveal {
    cursor: pointer;
}

.secret {
    background: linear-gradient(rgb(77, 212, 149), rgb(45, 122, 86));
    color: transparent;
    background-clip: text;
    font-size: 5em;
}

.hover-effect {
    transition: 0.2s;
}

.hover-effect:hover {
    transform: scale(1.05);
}
</style>