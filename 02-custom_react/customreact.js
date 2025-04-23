
function customRender(reactElement, container){

  /*  const demoElement = document.createElement(reactElement.type)
    demoElement.innerHTML = reactElement.children
    demoElement.setAttribute('href', reactElement.props.href)
    demoElement.setAttribute('target', reactElement.props.target)
    container.appendChild(demoElement)
  */


    const demoElement = document.createElement(reactElement.type)
    demoElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue
        demoElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(demoElement)

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
