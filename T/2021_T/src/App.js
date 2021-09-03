import Breadcrumb from './Breadcrumb.js'
import Nodes from './Nodes.js'
import ImageView from './ImageView.js'
import Loading from './Loading.js'
import { request } from './api.js'
const cache = {}

// 1. 컴포넌트간의 의존도 줄이기(callback 함수를 사용)


export default function App($app) {
    this.state = {
        isRoot: false,
        nodes: [],
        depth: [],
        selectedFilePath: null,
        isLoading: false
    }
    //selectedFilePath 값을 state에 넣어서 정해준다
    const imageView = new ImageView({
        $app,
        initialState: this.state.selectedNodeImage
    })

    const breadcrumb = new Breadcrumb({
        $app,
        initialState: this.state.depth,
        onClick: (index) => {
            if (index === null) {
                this.setState({
                    ...this.state,
                    depth: [],
                    nodes: cache.root
                })
                return
            }

            // breadcrumb에서 현재 위치를 누른 경우는 무시함
            if (index === this.state.depth.length - 1) {
                return
            }
            console.log("@@@@@index : ", index);
            const nextState = { ...this.state }
            console.log("@@@@@@nextState : ", nextState)
            const nextDepth = this.state.depth.slice(0, index + 1)
            console.log("@@@@@@this.state.depth : ", this.state.depth)
            console.log("@@@@@@nextDepth : ", nextDepth)
            this.setState({
                ...nextState,
                depth: nextDepth,
                nodes: cache[nextDepth[nextDepth.length - 1].id]
            })
        }
    })

    const loading = new Loading({ $app, initialState: this.state.isLoading })

    // App 컴포넌트에도 setState 함수 정의하기
    this.setState = (nextState) => {
        this.state = nextState
        breadcrumb.setState(this.state.depth)
        nodes.setState({
            isRoot: this.state.isRoot,
            nodes: this.state.nodes
        })
        imageView.setState(this.state.selectedFilePath)
        loading.setState(this.state.isLoading)
    }

    const nodes = new Nodes({
        $app,
        initialState: [],
        onClick: async (node) => {
            console.log("@@node", node)
            try {
                if (node.type === 'DIRECTORY') {
                    console.log("@@node IN cache: ", cache)
                    //캐쉬 안에 잇을때
                    if (cache[node.id]) {
                        this.setState({
                            ...this.state,
                            depth: [...this.state.depth, node],
                            nodes: nextNodes
                        })
                        console.log("cache 안에 있는데 setState 변경 완료")
                    } else {
                        //캐쉬 안에 없을때
                        console.log("@@@api 요청....")
                        const nextNodes = await request(node.id)
                        this.setState({
                            ...this.state,
                            depth: [...this.state.depth, node],
                            nodes: nextNodes,
                            isRoot: false,
                        })
                        // cache update
                        cache[node.id] = nextNodes
                    }
                } else if (node.type === 'FILE') {
                    console.log("@@FILE IN cache: ", cache)
                    // 이미지 보기 처리하기
                    this.setState({
                        ...this.state,
                        selectedFilePath: node.filePath
                    })
                }
            }
            catch (e) {
                // 에러처리하기
            }
        },
        onBackClick: async () => {
            try {
                // 이전 state를 복사하여 처리
                const nextState = { ...this.state }
                console.log("@@@onBackClick nextState : ", nextState);
                nextState.depth.pop()

                const prevNodeId = nextState.depth.length === 0 ? null : nextState.depth[nextState.depth.length - 1].id
                console.log("@@@prevNodeId : ", prevNodeId);
                // console.log("@@@nextNodes가 있어? : ", nextNodes);
                // root로 온 경우이므로 root 처리
                if (prevNodeId === null) {
                    const rootNodes = await request()
                    console.log("rootNodes : ", rootNodes)
                    this.setState({
                        ...nextState,
                        isRoot: true,
                        nodes: rootNodes
                    })
                } else {
                    const prevNodes = await request(prevNodeId)
                    this.setState({
                        // ...nextNodes,
                        ...nextState,
                        isRoot: false,
                        nodes: prevNodes,
                    })
                    console.log("App this.state : ", this.state)
                }
            } catch (e) {
                // 에러처리
            }
        }
    })
    const init = async () => {
        this.setState({
            ...this.state,
            isLoading: true,
        })
        try {
            const rootNodes = await request()
            console.log("App.js @@@rootNodes : ", rootNodes)
            this.setState({
                ...this.state,
                isLoading: false,
                isRoot: true,
                nodes: rootNodes
            })
            console.log("@@@@@init this.state ", this.state)
            // 캐시에 추가
            console.log("@@@@@init cache ", cache)

            cache.root = rootNodes

        } catch (e) {
            console.log("e : ", e)
            this.onError(e)
        }
    }
    init()
}