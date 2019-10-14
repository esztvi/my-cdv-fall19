
Project Summary:
My project is a summary of all the incoming messages I received on my phone over the course of five days. I would have done longer, but I was concerned over the sheer number of data points after five days so I didn't continue collecting data.The chose to collect this data because I have a habit of saying "I literally don't talk to anyone". I just really wanted to see how accurate that statement was.

Overall Issues:
The data set was massive! It broke Atom a little bit, but it's all good now (I hope?).
I had issues with Atom initially too, and I struggled to push things to GitHub for a solid week.  
It took a long time to actually get the date/time correctly formatted and to a usable point.
It's important to note that the data is a little messed up... in that, when I was collecting, if there was a conversation that continued or there were multiple messages at the same time... I selected points. An example is a long conversation I had with Kevin where we sent maybe forty messages back and forth but a) a lot happened within the same timestamp and I wasn't about to count seconds and milliseconds, b) it seemed redundant and not accurate to the amount we actually speak.
I did collect another data point, content, but as my friends did not consent to the content of our conversations being made public to a class assignment, I chose to omit that point when it came to inputting my hand collected data to an Excel Sheet.
I did not tell my classmates/friends that this project was going on so now a number of them are upset they weren't included in this data set.

Specific Issues:

Cover:
My initial idea was to actually be able to change color as you hovered over it with the mouse, but then when I realized this would be printed, that obviously had to change.
The samples I found with Leon were also for a different version of d3... and sometimes it made it difficult to understand, but slowly as I started meshing the code, it came together (with professor help).
The Color Scale idea was sort of a compromise with the hover idea... I'm not actually THAT upset about the cover anymore. It's okay, not what I initially planned, especially since initially I wanted to be able to display four of those graphs (one that looks like the cover now, one with locations, one with mediums of communication, and one with content)... I also ditched that idea because honestly... I completely changed the organization of the Zine...

Source: https://www.d3-graph-gallery.com/graph/circular_barplot_basic.html

Final Cover:
![image](https://github.com/esztvi/my-cdv-fall19/blob/master/my-work/screenshots-zine/cover.png)

Middle:
This page was the worst, hands down. Essentially I was trying to do the same thing I did as with my append <g> homework, but then of course because it's me and I need to do everything as complicated as possible I amended that idea and decided I wanted to color social media icons as opposed to circles. ... I'll also say that that while that has been hard to sort out, what is the most difficult is actually understanding the whole timeParse thing. I ended up re-manually separating my data because I just couldn't get the data to work in the way I wanted it to... I'm lucky because while time consuming, it was way easier to wrap my head around what was happening. (Low key, if the icons don't work by 11:30, I'm turning in the circle version... I'm serious, something has to just go in at this point.) I would also like to add that the free SVG makers don't work because they fail to account for layers so I had to get help using Illustrator because it simply would not work (the eyes of the WeChat logo disappeared, which would have defeated the whole purpose of using the logos in the first place).

Sources: https://github.com/d3/d3-time-format , https://bl.ocks.org/loveice622/023b5c20e8a25d88958e6e8b8110aa01 , https://stackoverflow.com/questions/44111608/d3js-makes-date-duplicates , https://stackoverflow.com/questions/44878164/d3-js-display-image-as-circle
Final MiddleSpread:
![image](https://github.com/esztvi/my-cdv-fall19/blob/master/my-work/screenshots-zine/Screen%20Shot%202019-10-14%20at%2011.57.00%20AM.png)
Late Update:
![image](https://github.com/esztvi/my-cdv-fall19/blob/master/my-work/screenshots-zine/Screen%20Shot%202019-10-14%20at%201.10.27%20PM.png)
Back:
I originally wanted to load all of the countries, but then the idea was loading only the countries I received messages from and then coloring them according to the amount of messages received.
I had to work with OGR2OGR which was kinda challenging. I worked off of a guide to get it to work.
I did have to ask for coloring help because the same color scale formatting didn't work for the mapping.
I also had to consult Konrad for help nesting the two data sets (the country polygon data and the amount of messages).

Source: http://datawanderings.com/2018/10/28/making-a-map-in-d3-js-v-5/

Final Back:
![image](https://github.com/esztvi/my-cdv-fall19/blob/master/my-work/screenshots-zine/back.png)
