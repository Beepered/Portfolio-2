<template>
    <section style="margin-top: 2em">
        <!-- I wish I could show my funny side, but I'll be put on a guillotine -->
        <div class="img" style="margin-bottom: 3em;">
            <img src="@assets/img/funny/poke.gif" alt="I'm throwing you away" style="width:18%">
            <img src="@assets/img/funny/bunny.gif" alt="Praying for the best, expecting the worst" style="width:17%;">
            <img src="@assets/img/funny/monster house.gif" alt="Oh man" style="width:18%;">
            <img src="@assets/img/funny/boof.gif" alt="I begging" style="width:14%">
            <img src="@assets/img/funny/cat shake.gif" alt="Staying positive is hard. I'm on team negativity"
                style="width:16%">
        </div>

        <div class="middle">
            <p>I'm going insane!</p>
        </div>

        <div class="img" style="margin-top: 3em;">
            <img src="@assets/img/funny/beach.png" alt="I'm going swimming" style="width:18%">
            <img src="@assets/img/funny/fish.png" alt="Real?" style="width:18%">
            <img src="@assets/img/funny/jail.png" alt="J-ail" style="width:20%">
            <img src="@assets/img/funny/sad.png" alt="blue" style="width:22%">
            <img src="@assets/img/funny/age.png" alt="age?" style="width:22%">
        </div>

    </section>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            date: null,
            count: 0, // pathetic way to get text to keep using transition
            result: false,
            error: false,
        }
    },
    methods: {
        CheckForm() {
            if (this.name && this.date) {
                this.result = true;
                this.error = false;
                this.count++; // no I will not check if it overflows
            }
            else {
                this.error = true;
                this.result = false;
            }
        }
    }
}
</script>

<style scoped>
input {
    margin-right: 1%;
    padding: 1%;
    border-radius: 3px;
}

.img {
    display: inline-block;
    width: 80%;
}

.middle {
    margin: auto;
    width: 70%;
    padding: 1em;
    background-color: #f4f4f4;
    border-radius: 6px;
}

.submit-btn {
    border: 2px solid black;
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.6);
}

.error {
    color: rgb(196, 0, 0);
    font-size: 1.2em;
}

.result {
    color: rgb(65, 18, 110);
    font-size: 1.5em;
}

/*--------- TRANSITIONS  ---------*/
.fadeText-enter-active,
.fadeText-leave-active {
    transition: opacity 2.25s ease;
}

.fadeText-enter-from,
.fadeText-leave-to {
    opacity: 0;
}

.slowFade-enter-active,
.slowFade-leave-active {
    transition: opacity 5s ease;
}

.slowFade-enter-from,
.slowFade-leave-to {
    opacity: 0;
}
</style>