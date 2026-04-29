<template>
    <section>
        <div class="padd" style="padding-top: 0.75em">
            <h1>Brendan Trieu</h1>
            <div class="container">
                <p style="font-size: 1.3em;">Hey there! Welcome to my Computer Science portfolio. I have a Game
                    Development
                    portfolio but you have to search for it like a pirate.</p>
                <div id="odd_pixel" @click="this.$router.push('/Funny')"></div>
            </div>
        </div>

        <div style="background-color: #f4f4f4; margin: 0;">
            <div class="block">
                <div class="col" style="width: 40%">
                    <img loading="lazy" :src="current_image" style="height:20em; border-radius: 20%;"
                        alt="Picture of me :)" @click="ClickMe()">
                </div>
                <div class="col" style="align-content: center;">
                    <p>My name is Brendan Trieu. I graduated UC: Santa Cruz with a
                        Bachelor of
                        Science in
                        Computer Science and have worked on many projects alone and in teams.
                        I am passionate about programming and really enjoy creating things and seeing what comes out.
                        Currently working as a Robotics Instructor teaching kids how to program and build robots, but
                        hoping to get my start in the tech industry.
                    </p>

                </div>
            </div>
        </div>

        <div class="block">
            <div class="col">
                <div style="width: 90%">
                    <p>C#</p>
                    <progress-bar :progress="70" style="width: 80%; margin: auto;"></progress-bar>
                </div>
                <div style="width: 90%">
                    <p>C/C++</p>
                    <progress-bar :progress="50" style="width: 80%; margin: auto;"></progress-bar>
                </div>
                <div style="width: 90%">
                    <p>Python</p>
                    <progress-bar :progress="70" style="width: 80%; margin: auto;"></progress-bar>
                </div>
                <div style="width: 90%">
                    <p>Vue.js</p>
                    <progress-bar :progress="75" style="width: 80%; margin: auto;"></progress-bar>
                </div>
            </div>
            <div class="col">
                <div style="width: 90%">
                    <p>Web Development</p>
                    <progress-bar :progress="80" style="width: 80%; margin: auto;"></progress-bar>
                </div>
                <div style="width: 90%">
                    <p>Object Oriented Programming</p>
                    <progress-bar :progress="70" style="width: 80%; margin: auto;"></progress-bar>
                </div>
                <div style="width: 90%">
                    <p>System Design</p>
                    <progress-bar :progress="70" style="width: 80%; margin: auto;"></progress-bar>
                </div>
                <div style="width: 90%">
                    <p>Hunger</p>
                    <progress-bar :progress="hunger" style="width: 80%; margin: auto;"></progress-bar>
                </div>
            </div>
        </div>

        <div class="padd" style="margin: auto; width: 70%;">
            <p>View my <a href="https://sites.google.com/view/brendan-trieu-portfolio/home" target="_blank">old
                    portfolio
                    website</a></p>

            <QuoteGenerator style="font-size: 1.1em;"></QuoteGenerator>

        </div>



        <div class="footer">
            <div class="social_link">
                <a href="https://www.linkedin.com/in/brendan-trieu-882753266/" target="_blank"
                    style="float: left;">Linkedin<img src="@assets/icons/linkedin.png" class="icon"
                        style="float: right;"></a>
            </div>

            <div class="social_link">
                <a href="https://luminice-star.itch.io/" target="_blank" style="float: left;">itch.io<img
                        src="@assets/icons/itch.png" class="icon" style="float: right;"></a>
            </div>

            <div class="social_link">
                <a href="https://github.com/Beepered" target="_blank" style="float: left;">Github<img
                        src="@assets/icons/github.png" class="icon" style="float: right;"></a>
            </div>

            <div class="social_link">
                <a href="mailto:bktrieu@gmail.com" target="_blank" style="float: left;">Email<img
                        src="@assets/icons/email.png" class="icon" style="float: right;"></a>
            </div>
        </div>


    </section>
</template>

<script>
import QuoteGenerator from '@components/QuoteGenerator.vue';
import ProgressBar from '@components/ProgressBar.vue'

import me from '@assets/img/home/me.jpg';
import me1 from '@assets/img/home/me1.jpg';
import me2 from '@assets/img/home/me2.jpg';
import me3 from '@assets/img/home/me3.jpg';
import me4 from '@assets/img/home/me4.jpg';
import me5 from '@assets/img/home/me5.jpg';

const default_image = me;

export default {
    name: 'Home',
    components: {
        QuoteGenerator,
        ProgressBar
    },
    data() {
        return {
            hunger: 0,
            margin: 0,
            direction: 1,
            clicks: 0,
            me_images: [
                me1, me2, me3, me4, me5
            ],
            current_image: me,
        }
    },
    methods: {
        MovePixel() {
            const intervalTime = 200; // Milliseconds for each progress increment
            const moveAmt = 0.5;

            setInterval(() => {
                this.margin += moveAmt * this.direction
                if (this.margin >= 98 || this.margin <= 0) {
                    this.direction *= -1;
                }
            }, intervalTime);
        },
        PlaySound(ref) {
            var audio = new Audio(ref)
            audio.play();
        },
        RandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        ClickMe() {
            this.clicks++;
            if (this.clicks >= 5) {
                this.clicks = 0;
                this.current_image = this.me_images[this.RandomInt(0, this.me_images.length - 1)];
                setTimeout(() => {
                    this.current_image = default_image;
                }, 750);
            }
        },

    },
    beforeMount() {
        this.MovePixel();
        this.hunger = this.RandomInt(35, 100)
    },
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    /* Horizontal centering */
    align-items: center;
    gap: 0px;
}

.footer {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 12px;
    width: 55vw;
    margin-top: 1em;
    bottom: 0;
    left: 0;
    border-radius: 6px;
    background-color: #f4f4f4;
}

.padd {
    padding-top: 2em;
    padding-bottom: 2em;
}

.block {
    display: flex;
    padding: 1.5em;
}

.block>div.col {
    float: left;
    text-align: center;
    padding: 1em;
    width: 50%;
}

.social_link {
    padding: 0.5em;
    display: flex;
    justify-content: center;
    font-size: 1.2em;
}

.icon {
    padding-left: 1em;
    height: 2em;
}

#odd_pixel {
    width: 3px;
    height: 3px;
    background: #213547;
}
</style>
