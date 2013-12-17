CAPP-30370-Final
================
Purpose:
This site was created to demonstrate the knowledge acquired over a semester of learning web development. It was created 
using mobile-first RWD and uses HTML5, CSS, JavaScript and jQUery elements. The theme of the site is a celebration of 
a Schmitt Family Christmas becuase I love Christmas and cannot wait to be done with finals so I can begin preparations.
I hope to explain the traditions my family has regarding Christmas while demonstrating how to implement the various web 
development tools listed above through the site design and execution. 

Breakpoint Explanations:
These are implemented by using the CSS stylesheet linked to each page. Since the site was initially designed to
be a mobile-first site, the 700px and 1000px measurements allow the format of the site to change as the 
screensize changes. As the size of the window is adjusted, the format of the pages adjust as well. 
The paragraphs of information become wider and take up vertical less space, while the pictures go from being 
in a single line to multiple per row. All of the words and pages also shift to the left more. 

3-up or more column layout: 
This was done on the desktop view for decorations becuase there were three paragraphs that could easily be made 
into columns. It is designated in the CSS under the media screen for 1000. It has each being 22% of the parent 
with a 2% margin so that they would fit on the screen. I like it this way because you can see all three at once. 

Continuous Loop:
The continuous loop animation is on the homepage (index.html). It is a continuous loop of my brother's dog in a 
Santa suit. I find it amusing. Also Clark (the dog) is visibly annoyed by the fact that he is dressed in a 
Santa suit (my brother called it his pink bunny suit moment last Christmas-referenceing A Christmas Story). 
After adding the image and assigning it to a class, the animation was implemented using the CSS stylesheet. 
First, keyframes was used to explain the "move" portion (using transformations and then -webkit animation was 
done using the alrady-defined move as well as giving a time (3 seconds), direction (linear), time frame 
(infinite), as well as movement pattern (alternate).

Interactive Animation:
This animation is achieved using a transformation of one of the images. The action is also located on the CSS 
page. The image of the Christmas tree on the decoration page, is set to expand to twice its size when the mouse 
hovers over it. I chose this becasuse is allows for the tree and the ornaments to be seen more clearly since it 
is larger. By giving the image a class, the CSS can specifically target the tree to expand when the mouse 
hovers over the image.

Background Image:
It was placed in the top left corner, using the code background-repeat:no repeat, because while it was fun and 
Christmas-y, it made it difficult to read the text, no matter the font and font color I used. It is linked in 
the body tag on the CSS stylesheet so it will apply to the whole document and all the pages giving a uniform 
appearance.

jQuery: 
There is only 1 jquery interaction on the site but the java is coded in jquery. It is a picture swap of the 
 Santa on the decoration page. When the button is clicked, it takes the unlit Santa and lights him up. The 
action is located on the JavaScript file page and linked to the other pages at the body before the body close so
as not to mess with the load time. 

