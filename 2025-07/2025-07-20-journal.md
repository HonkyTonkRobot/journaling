---
title: I want a simple time blocking app
Date: 2025-07-20
Author: Joel Anderson
description: I've been wanting a simple alternative to time tracking apps like `Toggle` that are just way simpler. I did find one I found interesting called I think `Simple Tracker` but What I realised is the way I really like to work is time boxing. Having a task setting a max time I'd like to spend to achieve the task, and then figuring out how to get as much as I can get done in that amount of time. So As I'm playing around with Vibe coding tools like `Figma Make`, and refining with AI assisted coding like `Claude Code` I though I'd just make my own simple time boxing too.
---

## Start of Day:

### What are my goals today?
Try prompting `Figma Make` to get a basic prototype of what I want. Have something working on a front end of that tool

### What are my challenges today?
I only have 2 hours.

## End of Day

### Have I reached my goals today?
Absolutely. I learned a bit about how `Figma Make` works, and it's features that are different from `v0.dev`. I was able to build a working prototype of what I wanted. In the 2hr time limit I had.


### What have I learned today?
I have learned how to use another vibe coding tool, to get quick results on a prototype of the thing I'd like to create. Do I love it. Not yet, but what I was able to achieve was pretty cool. Will I refactor and probably replace all of the code it created probably, but it gave me some code to get started. It's always easier starting with something that isn't a blank page.

## Journal

# Time boxing App called `Capture Time`

Capture time is a dead simple app for time boxing tasks that you are working on. It's a single page application, That can hold a list of tasks, and an amount of time can be set for each task. The ordered list of tasks is held in a right side drawer component as a clickable buttons which brings that task as the active task. the tasks can be reordered by dragging the buttons up or down.

The main content of the page is the active task Name, and a big timer that is counting down, and a start stop button.  The Time shows As Green, until 50% of the alotted time has elapsed, it then turns to yellow until 80% of the time has elapsed, and finally turns to red for the remaining time.

The timer also counts down in the browser tab for easy viewing while on other tabs, and the browser tab, Icon is a Green, Yellow, or Red dot depending on how much time has elapsed.

This is the only page of the app there are no other pages.

The app should be built using the atomic component design patterns and each file should be built to be modular in use aiming for files that are 200 lines of code or less, and a max of 300 lines of code.

## Prompt 2
This is a great start. A few questions about deployment? How is this built for deployment, Is this build using just React.js/TypeScript.js application? Is it using any node modules, is there a package.json? I'm just curious what it looks like for me to download this application and deploy it. Are you able to use Chakra-ui? Are you able to use next.js?

Hmm, this was a failure I can't have a two way conversation, I can only prompt it to produce something.

## Point and Edit :mind_exploding:
I was able to point and click on a single div, and prompt a change to just that element. Really powerful, as It ensures a smaller scope and can give simple instructions. Also promotes incremental changes as it's really tempting to just give it a whole list of things to change.

I was trying to get a circle turned into a rectangular element around the timer. I needed to be really specific as it took me three prompts to get what I wanted.

1. First i asked for a box around the timer instead of circle.
  - It gave me a box but not even close to what I wanted tons of white space.
2. Then I asked the box to only have 2rem of padding around it the timer.
  - It sort of got it right. It did do the top and bottom as 2rem but maintained the 1:1 square.
3. Then I asked it to make it a rectangle with 2rem padding all the way around and to double the border thickness
  - It got it right.

Seems obvious now, but specificity leads to better results.

## Prompt 3
Can you add a ts particles background for me, with floating particles in the main content section, and when the start button is clicked the particles zoom off like warp speed in Star Wars, leaving on the background which is a css gradient that suddly changes over time.

- Woosh that was a fun one, it created a beautiful floating particle feel, but the zoom star wars effect ended up being more like the matrix except instead of 1's and 0's it was stars. It was like The Matrix and Kids toy mixxed together.

I prompted to remove it and just add a gradient background which it left off.
- it removed Barbie Matrix, but still failed to get the gradient background.
I prompted it again to add a gradient background.
- It still didn't get it right, added an interesting animated background with a shape shifting color changing background, but not at all what I asked for.

## Prompt 4
_On this one I wanted to fix the right side drawer component_

1. The drawer doesn't seem to be working properly, this should be closed by default with an icon center right, that you click to open/close using something like the ChevronRight and ChevronLeft.
- This got it right but I wasn't 100% happy with the styling.
2. Can you make this button Cooler, remove background boarder, basically just make the button the icon with 2rem of padding for easy clicking, And use a cooler Icon set. It doesn't have to be chevrons, just something that indicates direction.
- This was better, but it just chose an error which I think is maybe not clear enough.
3. Much better can you choose a more interesting icon, and we can remove the directional requirement, and can the icon be twice the size and thicker line weight?
- Ok, I really haven't learned my lesson, it really didn't get it right at all with my vague prompts
4. Let's use the lucide arrow-left-from-line, and arrow-right-from-line icons
- ok that worked

## Prompt 5
_Started working on the AddTask component, right now it's a button with a modal, but I am aiming for simple so going to change it to a text input directly above the TaskList.

1. In the right side drawer, Let's remove the new task button and replace it with a text input, and <Enter> adds the typed task to the list. <Tab> switchs to a time text input, That has a default of 0:15 minutes, and has parsing logic to convert multiple types of input into the numeric value needed for the timer to work. ie. 015 or 0:15 or 15 or 1:15 1hr 15min or 15 mins
- This worked pretty well. It created the inputs, and the parse logic on the timer is working really well, but for whatever reason the tab function is not working for switching inputs.

2. Pretty good, two changes, make sure that it tabs between inputs right now it's not working this should be default browser behavior.  Second remove the tasks title And the visible labels on the inputs. Since hiding the labels, make sure it's still aria accessible.
- This fixed the tab issue, and simplified the UI.

## Prompt 6
1. I'd like these tasks to be selected through keyboard navigation making sure to follow aria best practices wether thats moving up and down with the arrow keys, or tab, and how toggling the delete button works.
- This sort of worked, but most of it was broken, and the UI was not very nice.

2. It doesn't appear everything is working properly. the arrows don't work, the delete button isn't working, the enter button doesn't activate the timer, and close the sidebar. Also, when navigating by keyboard when the button is activate the only ui element change should be the background color is black instead of white.
- right, this made competing actions, when clicking on the list item it auto confirms it, so you can't even test it, which isn't actually accessible anyways.
3. Ok, I realize I've created some competing depedencies. When the drawer is opened the enter task input is toggled, and then can be tabbed through to the task list, or moved to by the updown arrows.
- This one helped improve it, by making it table through all elements of the drawer.

## Prompt 7
_I'm going to try and ask for a few things at one. I haven't learned my lesson yet_

1. Please remove the rounded time elapsed bar on the timer, keep the background. Then make the button have proper aria accessability and tab order starting with start, then reset, the the drawer open button. Make the Task title 4rem and move the Capture time to the top left corner with 2rem absolute positioning from top and left sides. make the font 2rem and a more interesting google font.
- It did pretty good. I'm surprised based on previous attempts. Wonder if it has to do with specificity of requests, or the types of requests? It made a pretty good choice on font too.

2. Pretty close, The background, I did like it having the visual effect of the timer countdown on the background if you could bring that back. Also, when the drawer is closed could the start/stop button get the active focus?
- whoosh that was a fail. brought back the wrong element, I did think about saying something make sure it's this element and not this other element you removed. And the the active button thing failed all around.
3. You brough back the wrong feature. Please remove the round time elapsed bar, I was talking about the background. I believe it previously also acted like a time elapsed bar. Also, the start/stop toggle doesn't seem to be working. can you make sure the start/stop is always the toggled button, when the drawer closes, even if its the close drawer button that has been clicked.
- Ok, much better result. it got the task bar working, but not the choosing the start/stop as the active button, also after it's gone through the 3 buttons on the screen it doesn't cycle back to the beginning. I am wondering if I have just broken default behavior with all of my requests.


## Times up
### Learnings
I want to like Figma Make more than v0.dev because as a designer, I want to tweak the designs manually and not really on prompting to do the work which is a feature that Figma has. My finding is it's not quite there. I know it will get there, because Figma is best positioned to make this happen.

I was able to get it to produce exactly the app I wanted it to produce. And from here, I think I'll likely take it locally and start developing it with Claude Code.
