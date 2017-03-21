#Resources Used
  * html
  * Bootstrap CSS and JS (for carousel only)
  * Font Awesome for icons
  * Custom css
  * Custom javaScript
  * Google Fonts (Quicksand and Josefin Sans)
  * Colors from Design Seeds (https://www.design-seeds.com/seasons/spring/color-treat1/)

#General Layout
  1. Header/Nav Bar
  2. Carousel
  3. About  
  4. Projects
  5. Contact
  6. Testimonials
  7. Footer/Social Links

Each section has padding on the bottom for separation. A margin of 0 auto and text-align: center on the body keeps all content centered on the page.

Buttons are styled so that opacity changes and text is underlined on hover.

The class flex-row is given to rows which all have a display of flex and which use flex-wrap to push items in a container over to the next line if necessary based on width of screen.

A flex-column class is used to create a column that is 50% the width of a flex row so that anything within those columns will not go over column container

Colors for circles are designated as classes for ease of use and styling.

### Scroll to Sections
A function called scroll that takes the argument "target" is declared. When the function is called, it animates the html and body of the page to scroll to the top of the target slowly and is offset from the top of the target by 150 (because the top of the section was not precisely where the text started).

When each nav link is clicked, scroll is called and the class of selected is added (this adds underline to the text), all other nav links have that class of selected removed. Target is set to the class of the section to be scrolled to and the scroll function is called.

The same scroll function is called with a target section set when a carousel link is clicked.

## Header/Nav Bar
The header consists of an icon/logo and a nav bar. It is styled to not take up the entire width of the page and the position is fixed so that when the page scrolls, the header sits at the top in the same position (setting top to zero anchors it to the top of the page). To prevent it from being displayed behind other elements, it is given a z-index of 1.

The hamburger icon is set to not display unless the screen size is as designated in a media-query (see Mobile Styling below).

The icon/logo is a link and using jquery, when hovered over it adds a div to it that says "Hello!" When the logo is clicked on, the window scrolls to the top of the page.

The Nav Bar is made using an unordered list made up of anchor links. Each list element is styled using border-radius to make circles and each anchor link's text becomes underlined on hover. There is a margin of 30% on the top and bottom of each list item (all with the class navigation-link) and auto for the sides to center.


## Carousel
To create the carousel, I downloaded the necessary carousel javascript and css documentation from Bootstrap and made files for each which are linked in my HTML.

The carousel width is set to 70% and each image in the carousel is given a minimum height for uniformity. A background color for each image is given in case the image does not load. Each image takes up 100% of the carousel.

Each carousel slide has an h3 that links to a certain part of the page or to an outside source. The h3 changes in opacity when hovered on.

The carousel is called in the JS and left and right navigation is enabled on click, calling the next carousel slide or previous slide. (Used bootstrap documentation fromw w3 schools)


## About
The About section is contained within section tags (like all the main sections except header and footer) and then contains three separate parts: a paragraph, past experience and hobbies.

Each part is designated using an h2 on its own row. For the past experience and hobbies, there are rows made using flex that hold containers. These containers hold divs styled into circles that hold links that when clicked open lightboxes with relevant information or link to relevant sites.

## Projects
The Projects section uses the same row/container/circle concept as the About section but each div circle contains an image link (images screenshotted from work and then formatted in photoshop) which will eventually link to the project on GitHub.

In Projects, the second row of circles is offset using styling and these circles are pushed to the center using margin. All circles are in containers and the content of the containers is styled using justify-content: space-between to put even space between the circles.

### Circle Links
Circle width and height are set in pixels but are put in a flex-row with flex-wrap so that when a screen is sized down, they flow to the next line but do not change size.

When images are hovered over the opacity changes, when text is hovered over the font-size increases and text becomes underlined.

### Lightboxes
Certain circle anchor links and image links prompt a lightbox with content to pop up. This lightbox is styled using a background on which the lightbox content sits. The position of the lightbox background is absolute and positioned at the top of the page. A close link is added to each lightbox, but it may also be closed by clicking outside of the lightbox content.

In JS, each circle div when clicked the adjacent lightbox background and its children (the lightbox content) fades in. When the close link is clicked or the lightbox background is clicked, the lightbox and lightbox content fade out.

## Contact
The Contact section uses a form and an input with submit value styled in CSS to be a button.

## Testimonials
Testimonials are written using paragraph tags and are contained in a div with the class of quotes. There is no special styling for this section.

A counter variable is set to zero and a variable to measure the number of paragraphs with quotes (in the div with class quote) is set.

An interval is established that selects the paragraph at the quote counter and fades it out. If the quote counter equals the number of quotes -1 (to account for starting at zero) the counter is reset. Otherwise the counter is added to. The next quote is then faded in.

## Footer/Social Links
The Footer consists of an unordered list with anchor links wrapped around font-awesome icons that link to my github, linkedin, and codepen.
There is also a small heading in the Footer showing who the site was made by.

The footer is styled to be 25% of the width of the page and centered. The unordered list has a flex display to format the list items (styled as circles) in a row.

# Media Query
For small screens (max 480px), special styles are applied:

* The body has a max-width of the max screen size.
* The header has a smaller height
* The logo is smaller
* The hamburger menu icon is displayed and floated right
* The nav bar is hidden until the hamburger is clicked and is floated right and given its own background and width so that it extends beyond the header but is the same color. Furthermore the nav links are styled as squares and are displayed in an inline-block (stacked) and are a smaller height.
* h1s do not have a border
* The carousel starts further down
* Circle containers are adjusted to be centered
* The footer spans the entire page

## Hamburger Toggle for Mobile
A variable called menu status which holds the css display value of the element with the id menu-icon (the hamburger icon) is declared.
If the menuStatus (the css display value) equals block (which it does only on the mobile media query), the navigation bar is hidden. When the hamburger icon is clicked, the nav bar visibility is toggled off and on.

# In Progress
* Getting nav link to stay highlighted when currently viewing a section that it corresponds to
* Full mobile capability
* Adjusting lightbox so that page does not scroll to top when lightbox opens, making lightbox smaller and pictures larger maybe
* More TBD(decided/discovered)
