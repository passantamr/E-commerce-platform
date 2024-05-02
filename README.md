<h1></B> E-commerce-platform</h1>
<p>This app allows a user who is meant to be the manager of the platform for example to access all categories and products to display, edit, add, and delete any category or product.  </p>

<h2>To run the app using docker</h2>
build: docker build -t ecommerce .<br>
Run: docker run -p 3000:3000 ecommerce

<h1>How to use APIs</h1>
<h2>To display all categories</h2>
use GET:<br>localhost:3000/api/categories<br>
<h2>To display a specific category</h2>
use GET:<br>localhost:3000/api/categories/:code<br>
<h2>To add a new category</h2>
use POST:<br>localhost:3000/api/categories<br>
Example<br>{"name": "Appliances",
"code": "5"}
<h2>To edit a specific category</h2>
use PUT:<br>localhost:3000/api/categories/:code<br>
Example<br>{"name": "Food",
"code": "5"}
<h2>To delete a specific category with all the attached products</h2>
use DELETE:<br>localhost:3000/api/categories/:code<br>
