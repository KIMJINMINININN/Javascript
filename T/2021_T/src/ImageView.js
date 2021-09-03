// Image Modal Component

// 상수 처리
const IMAGE_PATH_PREFIX = 'https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public'

export default function ImageView({ $app, initialState }) {
    // image url
    this.state = initialState
    this.$target = document.createElement('div')
    this.$target.className = 'Modal ImageView'

    $app.appendChild(this.$target)

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    //modal close event
    /* this.click_event = () => {
        console.log("click_test@@@@@@@@")

        window.addEventListener("keydown", (e) => {
            if (this.$target.style.display == 'block') {
                if (e.key == "Escape") {
                    console.log("esc!!!!!!!!!!!!")
                    this.$target.style.display = 'none'
                    this.state = ''
                }
            }
        })

        this.$target.addEventListener("click", (e) => {
            if (e.target.className = "image_Xbox") {
                this.$target.style.display = 'none'
                this.state = ''
            }
        })
    } */

    this.render = () => {
        console.log("this!!! : ", this)
        this.$target.innerHTML = `
            <div class="image_content">
                ${this.state ? `<img src="${IMAGE_PATH_PREFIX}${this.state}">`
                : ''}
                <div class="image_Xbox">X</div>
            </div>
        `
        console.log("@@@ImageView this.state : ", this.state)
        this.$target.style.display = this.state ? 'block' : 'none'
    }
    this.render()
    // this.click_event()
}
