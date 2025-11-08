const parentElement=React.createElement(
    "div",
    {
        className:"parent"
    },
React.createElement(
    "div",
    {
        className:"child"
    },
    React.createElement(
        "h1",
        {
            id:"heading"
        },
       "hello word from react aaaa"
)
)
)

const root=document.getElementById("root");
const rootReact=ReactDOM.createRoot(root);
rootReact.render(parentElement);