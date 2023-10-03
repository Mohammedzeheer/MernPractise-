CSS SELECTORS

  CSS selectors are patterns used to select the elements you want to style. 
  They are the first part of a CSS rule, and they tell the browser which HTML 
  elements should have the CSS property values inside the rule applied to them.

There are five main types of CSS selectors:

  Simple selectors: Select elements based on their type, id, or class.
  Combinator selectors: Select elements based on their relationship to other elements.
  Pseudo-class selectors: Select elements based on their state or condition.
  Pseudo-element selectors: Select and style a part of an element.
  Attribute selectors: Select elements based on their attributes or attribute values.

 
  <!--  Simple selectors  -->
h1 {
  color: red;
}

#my-id {
  background-color: green;
}

.my-class {
  font-size: 20px;
}


<!-- Combinator selectors -->
p + h2 {
  margin-top: 0;
}

ul li {
  list-style-type: none;
}

 <!-- Pseudo-class selectors -->
a:hover {
  color: blue;
}

input[type="submit"]:disabled {
  cursor: not-allowed;
}

 <!-- Pseudo-element selectors  -->
::before {
  content: "Hello, world!";
}

<!-- / Attribute selectors  -->
input[name="email"] {
  border: 1px solid red;
}