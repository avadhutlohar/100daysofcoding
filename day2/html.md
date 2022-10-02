

# Introduction to html

### What is html ?

• Hyper Text Markup Language

• It is NOT a programming language

• It is used to create web pages and documents

### Tag Syntax

**How do we write HTML tags?**

• Elements names are surrounded by angle brackets

• Tag elements usually come in pairs (start and end tag)

• Some tags close themselves

• Examples:

```
- <h1> Example </h1>
- <br /> (self closing tag)
- <br> (is fine with HTML5)
```

**Tags In HTML**

**Headings**

• As the name suggests heading tag is used to create the heading on web pages.

• There are 6 headings available in HTML. From h1 to h6.

• h1 is the largest heading and h6 is the smallest heading.

```
<h1>Page title</h1>
<h2>Subheading</h2>
<h3>Tertiary heading</h3>
<h4>Quaternary heading</h4>
```

**Navbar**

nav tag is used to create navbar.

**Header**

header is used to create page header.

**Main**

Used to create main content section of webpage

**Div**

div tag is used to create division on webpage.

**Section**

section is used to the particular section. It can contain more than one HTML tags.

**Paragraph**

p tag is used to create paragraph

**Span**

span is used to style the part of text.

**Anchor**

a tag is used to create hyperlink.

**Footer**

footer tag is used to create footer for webpage.

**Mark**

mark tag is used to highlight the background of the text.

**Strike**

strike used to place horizontal lines on the text.

**Button**

button tag used to create button on web page.

**List**

li tag is used to create lists

**Code**

code tag is used to display source code on web page

**Level Elements**

Inline vs Block

• Block elements start on a new line and take the full width available.

• Inline Elements do not start on a new line and take only the necessary width.

• Some examples on block and inline level elements:

```
- Block Level: <div>,<h1> till <h6>,<p>
- Inline Level: <span>, <a>, <button>
```

**Anchor Tag in HTML**

a tag is used to create hyperlinks on the web page.

It contains the content between the opening and closing tag which will be hyper content.

Anchor Tag Attributes

href: This attribute is used to set the URL.

target: This will specify where the linked content will be opened.

\_blank: This will open the link in a new tab.

\_self: This will open the link in a current browser tab.

\_top: This works the same as \_self.

```
<a href="https://www.google.com" target="_blank"> Google </a>
```

**Lists in HTML**

Lists are used to group the items in a list.

There are mainly three types of lists in HTML.

In HTML list are: Ordered List, Unordered List, and Description Lists

List items are created using li tag.

1). Ordered List in HTML
Ordered List are created using ol tag.

This type of list shows the data and information in the given order.

Types of the ordered list are: 1, A, a, I, i

```
<ol type="A">
    <li> HTML Simplified </li>
    <li> CSS Master </li>
    <li> JavaScript Simplified </li>
</ol>
```

2). Unordered List in HTML
Unordered List are created using ul tag.

This type of list represents the data without any specific order.

Types of ordered lists are disc, circle, square, none.

```
<ul type="circle">
    <li> HTML Simplified </li>
    <li> CSS Master </li>
    <li> JavaScript Simplified </li>
</ul>
```

**Image Tag in HTML**
img tag is used to add the image on our webpage.

img tag don't required any closing tags

Image Tag Attributes

src: It is used to specify the path of the image.

alt: If users are unable to see an image then they will see the alt value.

style: This attribute is used to add style to the image like width, height, etc.

width: It is used to specify the width of the image.

height: It is used to specify the height of the image.

title: This attribute is used to set the title on the image.

```
<img src="myImage.png" width="50px" height="50px" alt="image" title="I am Avadhut Frontend Web Developer">
```

**HTML Form**

The form is a collection of input tags in a HTML document.

Mainly forms are used to take the data from the user to serve on the server.

Forms are created using form tag.

From Tag Attributes

action: This attribute specifies what action will be taken after submitting the form.

target: This specifies on which browser tab the response will be displayed after form submission.

method: This attribute is used to define the HTTP method used to submit the form.

What a From Contains?

1. input
2. lable
3. select
4. option
5. textarea
6. button

```
<form action="/index.php" target="_blank" method="get">
    Name: <input type="text"/>
    Last Name: <input type="text">
    <button type="submit"> Submit </button>
</form>
```

NOTE : Added PDF file for Basic HTML Structure of website . 


