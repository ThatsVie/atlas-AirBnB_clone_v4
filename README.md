# AirBnB Clone 

## The Console
The console is the first segment of the AirBnB project at Holberton School that will collectively cover fundamental concepts of higher level programming. The goal of AirBnB project is to eventually deploy our server a simple copy of the AirBnB Website(HBnB). A command interpreter is created in this segment to manage objects for the AirBnB(HBnB) website.

<details>
<summary>Functionalities of this command interpreter</summary>
<ul>
  <li>Create a new object (ex: a new User or a new Place)</li>
  <li>Retrieve an object from a file, a database etc...</li>
  <li>Do operations on objects (count, compute stats, etc...)</li>
  <li>Update attributes of an object</li>
  <li>Destroy an object</li>
</ul>
</details>
    
<details>
<summary>Table of Content</summary>
<ul>
  <li><a href="#environment">Environment</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#file-descriptions">File Descriptions</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#examples-of-use">Examples of use</a></li>
  <li><a href="#bugs">Bugs</a></li>
  <li><a href="#authors">Authors</a></li>
  <li><a href="#license">License</a></li>
</ul>
</details>

<details>
<summary> Environment</summary>
<ul>
  <li>This project is interpreted/tested on Ubuntu 14.04 LTS using python3 (version 3.4.3) </li>
</ul>
</details>

<details>
<summary>Installation</summary>
<ul>
  <li>Clone this repository: `git clone "https://github.com/alexaorrico/AirBnB_clone.git"`</li>
  <li>Access AirBnb directory: `cd AirBnB_clone`</li>
  <li>Run hbnb(interactively): `./console` and enter command</li>
  <li>Run hbnb(non-interactively): `echo "<command>" | ./console.py`</li>
</ul>
</details>

<details>
<summary>File Descriptions</summary>
<ul>
  <li>[console.py](console.py) - the console contains the entry point of the command interpreter.</li>
  <li>List of commands this console current supports:</li>
  <li>`EOF` - exits console</li>
  <li>`quit` - exits console</li>
  <li>`<emptyline>` - overwrites default emptyline method and does nothing</li>
  <li>`create` - Creates a new instance of`BaseModel`, saves it (to the JSON file) and prints the id</li>
  <li>`destroy` - Deletes an instance based on the class name and id (save the change into the JSON file).</li>
  <li>`show` - Prints the string representation of an instance based on the class name and id.</li>
  <li>`all` - Prints all string representation of all instances based or not on the class name.</li>
  <li>`update` - Updates an instance based on the class name and id by adding or updating attribute (save the change into the JSON file).</li>
</ul>

#### `models/` directory contains classes used for this project:
<ul>
  <li>[base_model.py](/models/base_model.py) - The BaseModel class from which future classes will be derived</li>
  <li>`def __init__(self, *args, **kwargs)` - Initialization of the base model</li>
  <li>`def __str__(self)` - String representation of the BaseModel class</li>
  <li>`def save(self)` - Updates the attribute `updated_at` with the current datetime</li>
  <li>`def to_dict(self)` - returns a dictionary containing all keys/values of the instance</li>
</ul>

Classes inherited from Base Model:
<ul>
  <li>[amenity.py](/models/amenity.py)</li>
  <li>[city.py](/models/city.py)</li>
  <li>[place.py](/models/place.py)</li>
  <li>[review.py](/models/review.py)</li>
  <li>[state.py](/models/state.py)</li>
  <li>[user.py](/models/user.py)</li>
</ul>

#### `/models/engine` directory contains File Storage class that handles JASON serialization and deserialization :
<ul>
  <li>[file_storage.py](/models/engine/file_storage.py) - serializes instances to a JSON file & deserializes back to instances</li>
  <li>`def all(self)` - returns the dictionary __objects</li>
  <li>`def new(self, obj)` - sets in __objects the obj with key <obj class name>.id</li>
  <li>`def save(self)` - serializes __objects to the JSON file (path: __file_path)</li>
  <li>` def reload(self)` - deserializes the JSON file to __objects</li>
</ul>

#### `/tests` directory contains all unit test cases for this project:
<ul>
  <li>[/test_models/test_base_model.py](/tests/test_models/test_base_model.py) - Contains the TestBaseModel and TestBaseModelDocs classes</li>
  <li>TestBaseModelDocs class:</li>
  <li>`def setUpClass(cls)`- Set up for the doc tests</li>
  <li>`def test_pep8_conformance_base_model(self)` - Test that models/base_model.py conforms to PEP8</li>
  <li>`def test_pep8_conformance_test_base_model(self)` - Test that tests/test_models/test_base_model.py conforms to PEP8</li>
  <li>`def test_bm_module_docstring(self)` - Test for the base_model.py module docstring</li>
  <li>`def test_bm_class_docstring(self)` - Test for the BaseModel class docstring</li>
  <li>`def test_bm_func_docstrings(self)` - Test for the presence of docstrings in BaseModel methods</li>

TestBaseModel class:
<ul>
  <li>`def test_is_base_model(self)` - Test that the instantiation of a BaseModel works</li>
  <li>`def test_created_at_instantiation(self)` - Test created_at is a pub. instance attribute of type datetime</li>
  <li>`def test_updated_at_instantiation(self)` - Test updated_at is a pub. instance attribute of type datetime</li>
  <li>`def test_diff_datetime_objs(self)` - Test that two BaseModel instances have different datetime objects</li>
</ul>

[/test_models/test_amenity.py](/tests/test_models/test_amenity.py) - Contains the TestAmenityDocs class:
<ul>
  <li>`def setUpClass(cls)` - Set up for the doc tests</li>
  <li>`def test_pep8_conformance_amenity(self)` - Test that models/amenity.py conforms to PEP8</li>
  <li>`def test_pep8_conformance_test_amenity(self)` - Test that tests/test_models/test_amenity.py conforms to PEP8</li>
  <li>`def test_amenity_module_docstring(self)` - Test for the amenity.py module docstring</li>
  <li>`def test_amenity_class_docstring(self)` - Test for the Amenity class docstring</li>
</ul>

[/test_models/test_city.py](/tests/test_models/test_city.py) - Contains the TestCityDocs class:
<ul>
  <li>`def setUpClass(cls)` - Set up for the doc tests</li>
  <li>`def test_pep8_conformance_city(self)` - Test that models/city.py conforms to PEP8</li>
  <li>`def test_pep8_conformance_test_city(self)` - Test that tests/test_models/test_city.py conforms to PEP8</li>
  <li>`def test_city_module_docstring(self)` - Test for the city.py module docstring</li>
  <li>`def test_city_class_docstring(self)` - Test for the City class docstring</li>
</ul>

[/test_models/test_file_storage.py](/tests/test_models/test_file_storage.py) - Contains the TestFileStorageDocs class:
<ul>
  <li>`def setUpClass(cls)` - Set up for the doc tests</li>
  <li>`def test_pep8_conformance_file_storage(self)` - Test that models/file_storage.py conforms to PEP8</li>
  <li>`def test_pep8_conformance_test_file_storage(self)` - Test that tests/test_models/test_file_storage.py conforms to PEP8</li>
  <li>`def test_file_storage_module_docstring(self)` - Test for the file_storage.py module docstring</li>
  <li>`def test_file_storage_class_docstring(self)` - Test for the FileStorage class docstring</li>
</ul>

[/test_models/test_place.py](/tests/test_models/test_place.py) - Contains the TestPlaceDoc class:
<ul>
  <li>`def setUpClass(cls)` - Set up for the doc tests</li>
  <li>`def test_pep8_conformance_place(self)` - Test that models/place.py conforms to PEP8.</li>
  <li>`def test_pep8_conformance_test_place(self)` - Test that tests/test_models/test_place.py conforms to PEP8.</li>
  <li>`def test_place_module_docstring(self)` - Test for the place.py module docstring</li>
  <li>`def test_place_class_docstring(self)` - Test for the Place class docstring</li>
</ul>

[/test_models/test_review.py](/tests/test_models/test_review.py) - Contains the TestReviewDocs class:
<ul>
  <li>`def setUpClass(cls)` - Set up for the doc tests</li>
  <li>`def test_pep8_conformance_review(self)` - Test that models/review.py conforms to PEP8</li>
  <li>`def test_pep8_conformance_test_review(self)` - Test that tests/test_models/test_review.py conforms to PEP8</li>
  <li>`def test_review_module_docstring(self)` - Test for the review.py module docstring</li>
  <li>`def test_review_class_docstring(self)` - Test for the Review class docstring</li>
</ul>

[/test_models/state.py](/tests/test_models/test_state.py) - Contains the TestStateDocs class:
<ul>
  <li>`def setUpClass(cls)` - Set up for the doc tests</li>
  <li>`def test_pep8_conformance_state(self)` - Test that models/state.py conforms to PEP8</li>
  <li>`def test_pep8_conformance_test_state(self)` - Test that tests/test_models/test_state.py conforms to PEP8</li>
  <li>`def test_state_module_docstring(self)` - Test for the state.py module docstring</li>
  <li>`def test_state_class_docstring(self)` - Test for the State class docstring</li>
</ul>

[/test_models/user.py](/tests/test_models/test_user.py) - Contains the TestUserDocs class:
<ul>
  <li>`def setUpClass(cls)` - Set up for the doc tests</li>
  <li>`def test_pep8_conformance_user(self)` - Test that models/user.py conforms to PEP8</li>
  <li>`def test_pep8_conformance_test_user(self)` - Test that tests/test_models/test_user.py conforms to PEP8</li>
  <li>`def test_user_module_docstring(self)` - Test for the user.py module docstring</li>
  <li>`def test_user_class_docstring(self)` - Test for the User class docstring</li>
</ul>


</details>

<details>
<summary>Examples of use</summary>

```
vagrantAirBnB_clone$./console.py
(hbnb) help

Documented commands (type help <topic>):
========================================
EOF  all  create  destroy  help  quit  show  update

(hbnb) all MyModel
** class doesn't exist **
(hbnb) create BaseModel
7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) all BaseModel
[[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}]
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}
(hbnb) destroy BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
** no instance found **
(hbnb) quit
```
</details>

<details>
<summary> Authors</summary>
  <ul>
Alexa Orrico - [Github](https://github.com/alexaorrico) / [Twitter](https://twitter.com/alexa_orrico)  
Jennifer Huang - [Github](https://github.com/jhuang10123) / [Twitter](https://twitter.com/earthtojhuang)  
Jhoan Zamora - [Github](https://github.com/jzamora5) / [Twitter](https://twitter.com/JhoanZamora10)  
<David Ovalle - [Github](https://github.com/Nukemenonai) / [Twitter](https://twitter.com/disartDave)

Second part of Airbnb: Joann Vuong
</ul>  </details>
<details>
  <summary>License</summary>
Public Domain. No copy write protection. 
</details>


To view a README file for the Atlas AirBnB Clone Console project, please visit [this link](https://github.com/ThatsVie/atlas-AirBnB_clone/blob/main/README.md).



## Web Static

The `web_static` folder serves as a repository for static assets such as HTML, CSS, and images. It organizes the front-end resources used to create and style the web pages in the project. These assets are served to users directly by the web server without any processing, enhancing the performance and scalability of the web application.

To view a README file for the Atlas AirBnb Clone `web_static` folder, please visit [this link](https://github.com/ThatsVie/atlas-AirBnB_clone/blob/main/web_static/README.md).


## Web Flask/ Web Framewok

This project implements a web framework for an AirBnB clone using Flask, a lightweight WSGI web application framework. It includes various tasks that demonstrate the functionality of the web application, such as displaying different routes, rendering HTML templates, and interacting with a database.

To view a README file for the Atlas AirBnb Clone `web_flask` folder, please visit [this link](https://github.com/ThatsVie/atlas-AirBnB_clone_v2/blob/master/web_flask/README.md).


## AirBnB Clone v3 API

This repository was originally forked from this [codebase](https://github.com/alexaorrico/AirBnB_clone_v2). It was built upon to provide endpoints to interact with various resources such as states, cities, users, places, reviews, and amenities.

To view a README file for the Atlas AirBnb Clone v3 project please visit [this link](https://github.com/ThatsVie/atlas-AirBnB_clone_v3/blob/master/README.md).

## AirBnb Clone v4 Web Dynamic

### File Overview
<details>
<summary><i>web_dynamic/0-hbnb.py, web_dynamic/templates/0-hbnb.html, Static files, and Models </i></summary>
<ul>
  <li><sub>
    web_dynamic/0-hbnb.py is the main script that starts the Flask web application and defines the route to render the HTML template.</sub></li>

<li><sub>web_dynamic/templates/0-hbnb.html is the HTML template that provides the structure and content of the web page.</sub></li>

<li><sub>Static files (CSS stylesheets, image assets) are used to style the web page.</sub></li>

<li><sub>Models define the data structure and relationships used to retrieve data from the database.</sub></li>
</ul>
</details>

<details>
<summary><i>web_dynamic/1-hbnb.py, web_dynamic/templates/1-hbnb.html, web_dynamic/static/scripts/1-hbnb.js  </i></summary>
<ul>
  <li><sub>

web_dynamic/1-hbnb.py is the Flask backend responsible for rendering the web page and providing data to populate it.</sub></li>

<li><sub>web_dynamic/templates/1-hbnb.html is the HTML template that defines the structure and content of the web page. It imports JQuery and the JavaScript file 1-hbnb.js to add dynamic functionality.</sub></li>

<li><sub>web_dynamic/static/scripts/1-hbnb.js is the JavaScript file that adds dynamic behavior to the web page, such as handling checkbox changes and updating the displayed amenities.</sub></li>

<li><sub>Together, these files work to create a dynamic web page where users can interact with checkboxes to filter amenities, while the backend provides the necessary data.</sub></li>

</ul></details>

<details>
<summary>api/v1/app.py, web_dynamic/2-hbnb.py, web_dynamic/templates/2-hbnb.html, web_dynamic/static/styles/3-headers.css, web_dynamic/static/scripts/2-hbnb.js </summary>
<ul>
  <li>
    
api/v1/app.py serves as the backend of the application, providing an API endpoint for accessing data related to the AirBnB service.</li>

<li>web_dynamic/2-hbnb.py is the frontend of the application, serving HTML templates and handling user requests.</li>

<li>web_dynamic/templates/2-hbnb.html defines the structure of the webpage and includes dynamic content placeholders.</li>

<li>web_dynamic/static/styles/3-header.css styles the header section of the webpage, including the newly added API status indicator.</li>

<li>web_dynamic/static/scripts/2-hbnb.js adds interactivity to the webpage, updating the list of selected amenities and checking the status of the API dynamically.</li>

<li>Together, these files create a cohesive web application that allows users to interact with AirBnB data through a user-friendly interface while also providing real-time feedback on the status of the API.
  
</ul> </li> </details>

<details>
<summary>web_dynamic/3-hbnb.py, web_dynamic/templates/3-hbnb.html, web_dynamic/static/scripts/3-hbnb.js </summary>
<ul>
  <li>

web_dynamic/3-hbnb.py sets up a Flask web application with a route that renders the 3-hbnb.html template. </li>

<li>web_dynamic/templates/3-hbnb.html is the HTML template that defines the structure of the webpage and imports necessary CSS and JavaScript files. </li>

<li>web_dynamic/static/scripts/3-hbnb.js is the JavaScript file that adds interactivity to the webpage, such as updating lists based on checkbox changes and retrieving and displaying places data dynamically.</li>

<li>Together, these files create a dynamic web application where users can interact with data retrieved from the backend.

</ul> </li></details>

<details>
<summary>web_dynamic/4-hbnb.py, web_dynamic/templates/4-hbnb.html, web_dynamic/static/scripts/4-hbnb.js </summary>
<ul>
  <li>
  
4-hbnb.py Initializes a Flask web application with a route /4-hbnb that renders 4-hbnb.html. Retrieves data from the database and passes it to the template.</li>

<li>4-hbnb.html is the HTML template for the web page. iIt ncludes CSS and JavaScript files, sets up the layout, and dynamically populates content based on data passed from the backend.</li>

<li>4-hbnb.js is the client-side JavaScript for the page. It handles checkbox changes, sends requests to check API status and retrieve places data, and dynamically updates the page based on user interactions.

</ul> </li> </details>


### Detailed Summary and Usage

#### web_dynamic/0-hbnb.py, templates/0-hbnb.html, Static Files, Models
<details>
<summary>
Summary: </summary>
<ul>
This project begins with creating a Flask web application based on existing files and making modifications to integrate asset caching.

We copied the following files from the web_flask directory to the web_dynamic directory

`static` directory
`templates/100-hbnb.html`
`__init__.py`
`100-hbnb.py`

We renamed `100-hbnb.py` to `0-hbnb.py` and `100-hbnb.html` to `0-hbnb.html.`

We Modified `0-hbnb.py` to replace the existing route to /0-hbnb/. The new route serves 0-hbnb.html.

We added a variable cache_id to the render_template function in 0-hbnb.py. The value of this variable is a UUID generated using uuid.uuid4()

In 0-hbnb.html, we added this variable cache_id as a query string to each <link> tag URL.

Files

0-hbnb.py:

This file is the main Python script that starts the Flask web application.

It imports necessary modules from the Flask framework and the application's models.

It defines a route /0-hbnb that renders the 0-hbnb.html template.

Inside the route function, it retrieves data from the database (states, amenities, places) using the storage module.

It generates a UUID (cache_id) for asset caching and passes it to the template.

It starts the Flask application to run on 0.0.0.0:5000.

0-hbnb.html:

This HTML template is rendered by the Flask route defined in 0-hbnb.py.

It contains the structure and layout of the web page, including headers, filters, places listing, and footer.

It includes links to CSS stylesheets with query strings appended for asset caching using the cache_id variable.

Static Files (`styles` directory, icon.png):

These files contain CSS stylesheets and image assets used to style and enhance the appearance of the web page.

The CSS stylesheets define the visual presentation of elements like headers, filters, places, etc.

The icon.png file is used as the favicon for the web page.

Models (State, City, Amenity, Place):

These Python modules define the data models used in the application.

They contain classes representing database tables (e.g., State, City) and their relationships.

The models are used by 0-hbnb.py to retrieve data from the database.
</ul> </li> </details>

<details>
<summary>Usage:</summary>
<ul>
  

**Input this command in your terminal**

```bash
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3 -m web_dynamic.0-hbnb
```

This command is executing 0-hbnb.py. It sets several environment variables related to MySQL database connection parameters before running the script. 

HBNB_MYSQL_USER=hbnb_dev: This sets the MySQL database username to hbnb_dev.

HBNB_MYSQL_PWD=hbnb_dev_pwd: This sets the MySQL database password to hbnb_dev_pwd.

HBNB_MYSQL_HOST=localhost: This sets the MySQL database host to localhost.

HBNB_MYSQL_DB=hbnb_dev_db: This sets the name of the MySQL database to hbnb_dev_db.

HBNB_TYPE_STORAGE=db: This sets the storage type to db, indicating that the application is configured to use a database for storage.

After setting these environment variables, the command runs the Python script 0-hbnb.py as a module using Python 3 (python3 -m). This means that Python will treat the web_dynamic directory as a package and execute the 0-hbnb.py script within that package.

![image](https://github.com/grahacr/atlas-AirBnB_clone_v4/assets/143755961/b8a475ca-be6b-4403-87de-e426a6c665ae)

Environment variables for MySQL database connection are set.

The Python script 0-hbnb is executed as a module using Python 3.

Flask starts serving the application on port 5000.

Requests are made to the server:

A request to /0-hbnb/ returns a 200 response.

Requests for static CSS files and images return 200 responses.

Some image requests return 304 responses, indicating no modification since the last request.



**In another window if your terminal input this command:**

```bash
curl -s -XGET http://0.0.0.0:5000/0-hbnb/ | head -6
```

This command is using curl to make a GET request to a web server running locally on the address http://0.0.0.0:5000/0-hbnb/. 

curl: This is a command-line tool for transferring data using various network protocols. It is commonly used to make HTTP requests.

-s: This option instructs curl to operate in silent mode, where it suppresses the progress meter and other output. It makes curl run silently, without showing any progress or error messages.

-XGET: This option specifies the HTTP method to be used in the request. In this case, it explicitly specifies that a GET request should be made. However, curl automatically uses GET requests if no method is specified, so this part is redundant but explicitly specifies the HTTP method.

http://0.0.0.0:5000/0-hbnb/: This is the URL to which the GET request is made. It specifies the address 0.0.0.0 on port 5000, with the path /0-hbnb/. This would typically be the address of a web server running locally on the machine.

|: This is a pipe operator that redirects the output of the command on the left side to the input of the command on the right side.

head -6: This is a command that prints the first 6 lines of the input it receives. It's typically used to show only the beginning of a file or the output of a command when combined with the pipe operator |.

![image](https://github.com/grahacr/atlas-AirBnB_clone_v4/assets/143755961/21a9966f-ce05-4b3f-9ec4-ec2257fb71e1)


**In your browser:**

```bash
http://localhost:5000/0-hbnb/
```
![httplocalhost50000-hbnb](https://github.com/grahacr/atlas-AirBnB_clone_v4/assets/143755961/ebc0ce94-db22-4da9-a190-00e4438e717a)

</ul>  </details>


#### web_dynamic/1-hbnb.py, templates/1-hbnb.html, static/scripts/1-hbnb.js
<details>
<summary>
Summary: </summary>
<ul>
Next, we enhanced the functionality of the Flask web application by making the filters section dynamic. The task involved updating the Flask route, creating a new HTML template with dynamic filtering functionality using checkboxes, and writing JavaScript code to handle the checkbox changes and update the displayed amenities accordingly.


We replaced the existing route /0-hbnb with /1-hbnb in the Python script file (1-hbnb.py).

We created a new HTML template named 1-hbnb.html based on the existing 0-hbnb.html template.

We updated the HTML Template by:

Importing JQuery and the JavaScript file static/scripts/1-hbnb.js in the `head` tag of 1-hbnb.html.

Appending the cache_id variable as a query string to the `script` tag.

Adding a checkbox input (<input type="checkbox">) to each amenity (`li` tag).

Positioning the checkbox 10px to the left of the Amenity name.

Adding two attributes to the checkbox input:

data-id=":amenity_id": This attribute stores the Amenity ID, allowing retrieval from the DOM.
data-name=":amenity_name": This attribute stores the Amenity name, allowing retrieval from the DOM.

We wrote static/scripts/1-hbnb.js:

The script only executes when the DOM is fully loaded.
JQuery is used for DOM manipulation.

Listens for changes on each input checkbox tag:

If the checkbox is checked, we store the Amenity ID in a variable
If the checkbox is unchecked, we remove the Amenity ID from the variable.

We also updated the `h4` tag inside the div Amenities with the list of Amenities checked.


1-hbnb.py:

This Python script starts a Flask web application.

It imports necessary modules and defines routes.

The route /1-hbnb renders the 1-hbnb.html template.

Inside the route function hbnb(), data for states, amenities, and places are fetched from the database using the storage module.

A unique cache_id is generated using uuid.uuid4() to prevent asset caching.

It renders the 1-hbnb.html template with the retrieved data and cache_id.

1-hbnb.html:

This HTML template defines the structure of the web page.

It imports necessary CSS stylesheets with cache IDs to prevent caching.

JQuery and the JavaScript file 1-hbnb.js are imported to add dynamic functionality.

The template contains sections for filters, amenities, places, and a footer.

It dynamically generates lists of states, amenities, and places fetched from the Flask route.

Checkboxes for amenities are added dynamically with data attributes (data-id and data-name) for each amenity.

1-hbnb.js:

This JavaScript file adds dynamic functionality to the web page using JQuery.

It listens for changes on each input checkbox tag (amenities).

When a checkbox is checked or unchecked, it updates the checkedAmenities array accordingly.

It then generates a comma-separated string of checked amenity names and updates the text of the `h4` tag inside the div with class amenities.
</ul>  </details>

<details>
<summary> Usage: </summary>
<ul>
  
**Input this command in your terminal:**

```bash
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3 -m web_dynamic.1-hbnb
```

**In your browser:**

```bash
http://localhost:5000/1-hbnb/
```
![clicking on amenities httplocalhost50001-hbnb](https://github.com/grahacr/atlas-AirBnB_clone_v4/assets/143755961/3f910ec8-ada4-4129-81df-0cd2f4575954)

![checking boxes](https://github.com/grahacr/atlas-AirBnB_clone_v4/assets/143755961/210232b5-9e1f-4f56-9d64-5ddfda9cb7ca)

</ul>  </details>

#### api/v1/app.py, web_dynamic/2-hbnb.py, web_dynamic/templates/2-hbnb.html, web_dynamic/static/styles/3-header.css, web_dynamic/static/scripts/2-hbnb.js

<details>
<summary> Summary: </summary>
<ul>
  
Next we ensured that the HBNB web application and API were updated to handle status checks and served the correct template with necessary JavaScript functionality.

We updated the API Entry Point:

In the api/v1/app.py file, we replaced CORS(app, origins="0.0.0.0") with CORS(app, resources={r"/api/v1/*": {"origins": "*"}}).

This change allows requests from any origin to access the API, specifically targeting routes under /api/v1/.


In the 2-hbnb.py file (based on 1-hbnb.py), we changed the route from /1-hbnb to /2-hbnb.

This ensures that the web application serves the new template 2-hbnb.html under the updated route.


We created a new HTML template 2-hbnb.html based on the existing 1-hbnb.html.

Imported the JavaScript file 2-hbnb.js in the `head` tag instead of 1-hbnb.js.

Added a new `div` element in the header tag with specific attributes:

ID is api_status.

Aligned to the right.

Circular shape with a diameter of 40px.

Vertically centered.

Positioned 30px from the right border.

Background color is #cccccc.

We also added a CSS class named available for this new element in web_dynamic/static/styles/3-header.css. This class has a background color of #ff545f.

We created a new JavaScript file named 2-hbnb.js based on 1-hbnb.js.

This script makes an HTTP request to http://localhost:5001/api/v1/status/ to check the status of the HBNB API.

If the status is "OK", it adds the class available to the `div` element with ID api_status.

If the status is not "OK", it removes the class available from the `div` element with ID api_status.

**Note:**

Using http://localhost:5001/api/v1/status/ explicitly specifies the loopback address, ensuring a connection to the local machine. This is universally supported and commonly used in development environments.

However, http://0.0.0.0:5001/api/v1/status/ (as the task requires) specifies the wildcard address, which means "any available interface." Some systems or configurations may not allow connections to this address, leading to potential issues with connectivity, especially in development environments.

This project was developed on VSCode with Liver Server.

api/v1/app.py:

This file is the main entry point for the Flask application that serves the HBNB API.

It imports necessary modules and initializes Flask, CORS, and Swagger.

The teardown_appcontext function closes the SQLAlchemy session when the application context is popped.

An error handler is defined for 404 errors, returning a JSON response.

It starts the Flask application, configuring the host and port based on environment variables.

The purpose of this file is to configure the Flask application, define routes, and handle errors for the API.


web_dynamic/2-hbnb.py:

This file is a Flask web application script.

It imports necessary modules and initializes Flask.

The teardown_appcontext function closes the SQLAlchemy session when the application context is popped.

It defines a route /2-hbnb that renders a template 2-hbnb.html.

The purpose of this file is to define a route for the web application and render a specific HTML template.


web_dynamic/templates/2-hbnb.html:

This HTML file represents the template for the web application.

It imports necessary CSS and JavaScript files and sets up the structure of the webpage.

The template includes placeholders for states, amenities, and places data to be rendered dynamically.

It also includes a <div> element with ID api_status in the header section.

The purpose of this file is to define the layout and structure of the web page, including dynamic content.


web_dynamic/static/styles/3-header.css:

This CSS file contains styling rules for the header section of the web page.

It defines styles for the header, logo, and the newly added api_status div.

The .available class is defined to set a specific background color for the api_status div when the API status is "OK".

The purpose of this file is to define the visual appearance of elements in the header section of the webpage.


web_dynamic/static/scripts/2-hbnb.js:

This JavaScript file contains client-side scripting logic for the web page.

It listens for changes on input checkboxes for amenities and updates the list of selected amenities dynamically.

It also makes an AJAX request to the API to check the status and updates the visual indicator (api_status) based on the response.

The purpose of this file is to add interactivity to the webpage and handle API status checks dynamically.

These files collectively define and implement the functionality of the HBNB web application and API, ensuring proper rendering of dynamic content and handling of API status checks.

</ul>  </details>

<details>
<summary> Usage: </summary>
<ul>

**Input this command in your terminal:**
```bash
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db HBNB_API_PORT=5001 python3 -m api.v1.app
```

This command is configuring environment variables related to a MySQL database and the API, and then starting the Flask application defined in the api.v1.app module.

HBNB_MYSQL_USER=hbnb_dev: Sets the MySQL username to hbnb_dev.

HBNB_MYSQL_PWD=hbnb_dev_pwd: Sets the MySQL password to hbnb_dev_pwd.

HBNB_MYSQL_HOST=localhost: Sets the MySQL host to localhost.

HBNB_MYSQL_DB=hbnb_dev_db: Sets the MySQL database name to hbnb_dev_db.

HBNB_TYPE_STORAGE=db: Sets the storage type to use a database.

HBNB_API_PORT=5001: Sets the port for the API to 5001.

python3 -m api.v1.app: Runs the Python module api.v1.app using Python 3.


**Input this command in your terminal:**
```bash
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3 -m web_dynamic.2-hbnb
```
HBNB_MYSQL_USER=hbnb_dev: Sets the MySQL database username to hbnb_dev.

HBNB_MYSQL_PWD=hbnb_dev_pwd: Sets the MySQL database password to hbnb_dev_pwd.

HBNB_MYSQL_HOST=localhost: Sets the MySQL database host to localhost.

HBNB_MYSQL_DB=hbnb_dev_db: Sets the MySQL database name to hbnb_dev_db.

HBNB_TYPE_STORAGE=db: Sets the type of storage to use to db, which likely indicates that the application will use a MySQL database for storage.

python3 -m web_dynamic.2-hbnb: Executes the Python script 2-hbnb.py located in the web_dynamic package/module using Python 3 as the interpreter. This script starts a Flask web application that serves the dynamic content for your application.

![image](https://github.com/grahacr/atlas-AirBnB_clone_v4/assets/143755961/1560564b-47fc-476e-9108-90cb7a672486)


The server is started, and it's listening on all available IP addresses (0.0.0.0) and ports (5001). It's also listening specifically on 127.0.0.1:5001 and 172.25.115.237:5001, indicating that the server is accessible locally and from another IP address.

The last line indicates that a GET request to /api/v1/status/ was made and received a response with status code 200, indicating success.

![image](https://github.com/grahacr/atlas-AirBnB_clone_v4/assets/143755961/95e9eb7c-d6a8-435b-9c59-46f2104e7948)


This output indicates that a Flask application is being served using a development server. 

The server is started, and it's listening on all available IP addresses (0.0.0.0) and ports (5000). It's also listening specifically on 127.0.0.1:5000 and 172.25.115.237:5000, indicating that the server is accessible locally and from another IP address.

The subsequent lines show GET requests being made to various static resources (CSS, JavaScript, and images), all of which are being served successfully with a status code of 200 or 304. The 304 status code indicates that the requested resource has not been modified since the last request, and it can be retrieved from the browser cache.

**In your browser**
```bash
http://localhost:5000/2-hbnb
```
**This is before the API is connected. Note the gray circle in the top right**

![httplocalhost50002-hbnb](https://github.com/grahacr/atlas-AirBnB_clone_v4/assets/143755961/0c3c9122-e7a8-4d1a-851d-552c7710b26f)

**After the API is connected. Note that the circle is now red**

![API connected OK red circle](https://github.com/grahacr/atlas-AirBnB_clone_v4/assets/143755961/e5d455db-61e6-4790-b169-2b5f9c084d8c)


</ul>  </details>

#### web_dynamic/3-hbnb.py, web_dynamic/templates/3-hbnb.html, web_dynamic/static/scripts/3-hbnb.js
<details>
<summary> Summary: </summary>
<ul>

The overall goal of this task is to load places dynamically from the front-end by making a request to the specified API endpoint and displaying the retrieved data without relying on the back-end to render the places.

To accomplish this in the file 3-hbnb.py, we changed the route from /2-hbnb to /3-hbnb, based on the existing 2-hbnb.py file.

We created a new HTML template file named 3-hbnb.html based on the existing 2-hbnb.html. We updated the template by importing the JavaScript file static/scripts/3-hbnb.js in the `head` tag instead of 2-hbnb.js. We also removed the Jinja section responsible for displaying all places (all `article` tags).

Next, we created a new JavaScript script named static/scripts/3-hbnb.js. This script is based on 2-hbnb.js. It makes a request to the API endpoint http://localhost:5001/api/v1/places_search/, which returns a list of places. The script sends a POST request with an empty dictionary in the body to this endpoint. Upon receiving the response, the script loops through the result and dynamically creates `article` tags representing each place in the section with the class places. The script excludes the Owner tag from the place description.


web_dynamic/3-hbnb.py: This Python file sets up a Flask web application. It defines a route /3-hbnb that renders the template 3-hbnb.html. Inside the route function, it retrieves data from the database using SQLAlchemy and passes it to the template for rendering. The purpose of this file is to serve as the backend for the web application and handle HTTP requests.

web_dynamic/templates/3-hbnb.html: This HTML file is a template for the web page served by the Flask application. It contains the structure of the webpage including header, filters, places, and footer sections. It imports the necessary CSS and JavaScript files and includes placeholders for dynamic content. The purpose of this file is to provide the structure and layout for the web page.

web_dynamic/static/scripts/3-hbnb.js: This JavaScript file is responsible for adding interactivity to the webpage. It listens for changes on checkboxes, updates the list of checked amenities dynamically, checks the status of the API, and makes an AJAX request to retrieve places data from the backend. Upon receiving the places data, it dynamically generates HTML for each place and appends it to the appropriate section on the webpage. The purpose of this file is to enhance the user experience by adding dynamic content and interactions to the webpage.


</ul>  </details>

<details>
<summary> Usage: </summary>
<ul>

**Start the API server:**

```bash
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db HBNB_API_PORT=5001 python3 -m api.v1.app
```

**In another window of your terminal run the web application server:**
```bash
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3 -m web_dynamic.3-hbnb
```

![image](https://github.com/grahacr/atlas-AirBnB_clone_v4/assets/143755961/f976900e-93d5-491c-8bdb-b2c57b8a5a03)


**In your browser:**
```bash
http://localhost:5000/3-hbnb
```

![The final result must be the same as previously, but now, places are loaded from the front-end, not from the back-end!](https://github.com/grahacr/atlas-AirBnB_clone_v4/assets/143755961/a339cab8-81dc-44fb-991c-f61c4fe94726)

  </ul>  </details>

  
#### web_dynamic/4-hbnb.py, web_dynamic/templates/4-hbnb.html, web_dynamic/static/scripts/4-hbnb.js
<details>
<summary> Summary: </summary>
<ul>

Next, we created 4-hbnb.py to replace the existing route 3-hbnb with 4-hbnb. 
We created a new HTML template named 4-hbnb.html, based on the existing 3-hbnb.html. In the new HTML template, the JavaScript file 4-hbnb.js is imported instead of 3-hbnb.js.

We created the JavaScript script 4-hbnb.js, building upon the functionality of 3-hbnb.js. When the button tag is clicked, a new POST request to places_search is made with the list of Amenities checked. This implementation completes the first filter and enhances the functionality of the web application.

4-hbnb.py: This Python file initializes a Flask web application. It defines a route /4-hbnb that renders an HTML template named 4-hbnb.html. Inside the route function, it retrieves data from the database (states, amenities, places) and passes it to the HTML template for rendering.

4-hbnb.html: This HTML file is the template for the web page rendered by the Flask application. It includes various CSS and JavaScript files, sets up the layout of the page with sections for filters and places, and dynamically populates content based on data passed from the Python file.

4-hbnb.js: This JavaScript file contains client-side scripting for the web page. It initializes an array to store checked amenities, listens for changes on input checkboxes, sends a GET request to check the API status, and sends a POST request to retrieve places data. It dynamically generates HTML for each place and appends it to the appropriate section on the web page. Additionally, it listens for a click event on the search button and triggers a search function with the selected filters.

These files work together to create a web application where users can view places and apply filters based on selected amenities. The Python file serves as the backend, handling routing and data retrieval, while the HTML and JavaScript files handle the frontend, defining the structure and behavior of the web page.


</ul>  </details>

  <details>
<summary> Usage: </summary>
<ul>

**Start the API server:**

```bash
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db HBNB_API_PORT=5001 python3 -m api.v1.app
```

**In another window of your terminal run the web application server:**

```bash
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3 -m web_dynamic.4-hbnb
```
![image](https://github.com/grahacr/atlas-AirBnB_clone_v4/assets/143755961/0bb185b2-6bda-4443-adf9-9b249645b18a)



**In your browser:**

```bash
http://localhost:5000/4-hbnb
```

**Before filtering ameneties:**

![before amenities filter](https://github.com/grahacr/atlas-AirBnB_clone_v4/assets/143755961/6e2e6461-e3c4-4216-8bcc-3aca9b2c467e)

**After filtering amenities:**

![amenities filtered by AC cable and dogs](https://github.com/grahacr/atlas-AirBnB_clone_v4/assets/143755961/df948fc1-5cdb-47d5-9714-b0676aef6a9b)

**View of API log after filtering amenities:**

![image](https://github.com/grahacr/atlas-AirBnB_clone_v4/assets/143755961/3ba2761a-5ca6-47bd-85b7-a451fdcd0fba)


  </ul>  </details>
  
### Authors

Courtney Graham - [Github](https://github.com/grahacr)

Vie Paula - [Github](https://github.com/ThatsVie)
