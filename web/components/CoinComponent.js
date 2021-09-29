app.component('coin-component', {
    props: {
        imageCoin: {
            type: String,

        },
        name: {
            type: String,
            required: true,
        },
        indice: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        progress: {
            type: Number,
            required: true,
        }
    },
    template:
    /*html*/
        `<div class="containerCoin">
    <img src="../assets/images/bitcoin.png"/>
    <div class="leftElement">
        <h4>{{ name }}</h4>
        <h6>{{ indice }}</h6>
    </div>
    <div class="rightElement">
        <h4> {{ printPrice }}</h4>
        <div class="rightContent">
            <i class="material-icons" :style="{color: color}">{{printIcon}}</i>
            <span :style="{color: color}">{{ printProgress }}</span>
        </div>
    </div>
    </div>`,
    data() {
        return {
            color: "blue",
        };
    },
    methods: {},
    computed: {
        printPrice() {
            return "$" + ' ' + this.price;
        },
        printProgress() {
            return this.progress + '%';
        },
        printIcon() {
            if (this.progress > 0.1) {
                this.color = "green";
                return "arrow_drop_up";
            }
            this.color = "red";
            return "arrow_drop_down";
        }
    }
});