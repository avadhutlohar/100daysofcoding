### Lifecycle Hooks

React calls at the appropriate time for each hook.

componentWillMount()

componentDidMount()

What does mounting mean?

Since we're defining virtual representations of nodes in our DOM tree
ıith React, we're not actually defining DOM nodes. Instead, we're
building up an in-memory İieı that React maintains and manages for us.
When we talk about mounting, we're talking about the process of
conİerting the Virtual components into actual DOM elements that are
placed in the DOM by React.

### Packaging and PropTypes

PropTypes

You maĳ haİe noticed ıe use props čuite a bit in ouĎ components. FoĎ the
most paĎt, ıe'll eĲpect these to be a paĎticulaĎ tĳpe oĎ set of tĳpes ʈaka an
object oĎ a string ʉ. React pĎoİides a method foĎ defining and İalidating
these tĳpes that alloı us to easilĳ eĲpose a component API.
