// 생성된 DOM을 어디에 append 할지를 $app 파라메터로 받기
// 파라메터는 구조 분해 할당 방식으로 처리
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export default function Nodes({ $app, initialState, onClick, onBackClick }) {
	// console.log("@@@@@@@@@Nodes initialState : ", initialState);
	this.state = initialState

	// Nodes 컴포넌트를 렌더링 할 DOM을 this.$target 이라는 이름으로 생성
	this.$target = document.createElement('ul')
	$app.appendChild(this.$target)

	// state를 받아서 현재 컴포넌트의 state를 변경하고 다시 렌더링하는 함수
	this.setState = (nextState) => {
		this.state = nextState
		// render 함수 내에서 this.state 기준으로 렌더링을 하기 때문에,
		// 단순히 이렇게만 해주어도 상태가 변경되면 화면이 알아서 바뀜
		this.render()
	}

	this.onClick = onClick
	this.onBackClick = onBackClick

	this.render = () => {
		console.log("@@@@@@Nodes this.render  : ");
		if (this.state.nodes) {
			const nodesTemplate = this.state.nodes.map(node => {
				const iconPath = node.type === 'FILE' ? './assets/file.png' : './assets/directory.png'
				return `
			<div class="Node" data-node-id="${node.id}">
			  <img src="${iconPath}" />
			  <div>${node.name}</div>
			</div>
		  `
			}).join('')
			this.$target.innerHTML = !this.state.isRoot ? `<div class="Node"><img src="./assets/prev.png"></div>${nodesTemplate}` : nodesTemplate
		}
	}

	this.$target.addEventListener('click', (e) => {
		// $target 하위에 있는 HTML 요소 클릭시 이벤트가 상위로 계속 전파 되면서
		// $target까지 오게 됨. 이 특성을 이용한 기법.
		// closest를 이용하면 현재 클릭한 요소와 제일 인접한 요소를 가져올 수 있음.
		// e.stopImmediatePropagation()
		e.stopPropagation()
		const $node = e.target.closest('.Node')
		console.log("@@@@@@@@$node : ", $node)
		if ($node) {
			const { nodeId } = $node.dataset

			if (!nodeId) {
				this.onBackClick()
				return
			}

			const selectedNode = this.state.nodes.find(node => node.id === nodeId)

			if (selectedNode) {
				this.onClick(selectedNode)
			}
		}
	})


}
