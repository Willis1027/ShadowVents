const axios = require('axios');

export default {
    data() {
        return {
            inputState: false,
            message: '',
            letters: [],
            loading: true,
            show: false,
        }
    },
    mounted() {
        axios.get('https://script.google.com/macros/s/AKfycbzQIVRaKOktqSZye6RebfcctsvCRwzJM7UOprTkH34Uj3-DLJ-0X4SGLBjjJv-cPggq/exec')
            .then((response) => {
                this.letters = response['data'].slice(-8)
            }).then(()=>{
                this.loading = false
                this.show = true
            })
            .catch((error) => console.log(error))
    },
    name: 'App',
    methods: {
        ShowForm() {
            this.inputState = !this.inputState
            this.message = ''
        },
        submit() {
            var Today = new Date()
            let date = `${Today.getFullYear()}-${Today.getMonth()}-${Today.getDate()}`
            axios({
                method: 'post',
                url: 'https://script.google.com/macros/s/AKfycbzQIVRaKOktqSZye6RebfcctsvCRwzJM7UOprTkH34Uj3-DLJ-0X4SGLBjjJv-cPggq/exec',
                params: {
                    content: `${this.message}`,
                    date: `${date}`
                }
            });
            this.message = ''
        },
        reset() {
            this.loading = true
            this.show = false
            axios.get('https://script.google.com/macros/s/AKfycbzQIVRaKOktqSZye6RebfcctsvCRwzJM7UOprTkH34Uj3-DLJ-0X4SGLBjjJv-cPggq/exec')
                .then((response) => {
                    this.letters = response['data'].slice(-8)
                }).then(()=>{
                    this.loading = false
                    this.show = true
                })
                .catch((error) => console.log(error))
        }
    }
}
