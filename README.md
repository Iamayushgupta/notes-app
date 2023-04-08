# Notes-App
1. A CLI based notes taking app in which user provides the title and body of the note and then its gets stoerd in the JSON File.
2. Operations such as Create,Read,Update,Delete,View can be performed for the same.
3. "YARGS" module is being used in this to create CLI commands

# Demonstration of notes-app
<h3>Add-Command</h3>

node app.js add --title="Greeting" --body="Good morning"

![image](https://user-images.githubusercontent.com/73697731/230644749-2b20fd58-9972-40e1-8aae-0a913c7d05b1.png)

We can see the notes have been added to the file

![image](https://user-images.githubusercontent.com/73697731/230703163-798a1dc4-938a-4fcd-add6-4ac19c6b7440.png)

<h3>Remove-Command</h3>

node app.js remove --title="Quiz"

![image](https://user-images.githubusercontent.com/73697731/230703247-d86c1600-2c0b-4288-832c-e3a0e6ca45de.png)

We can see that the note has been removed

![image](https://user-images.githubusercontent.com/73697731/230703257-fe5ed7f3-af4f-4044-9b51-9f451327dab5.png)

<h3>List-Command</h3>

node app.js list

![image](https://user-images.githubusercontent.com/73697731/230703339-656588f6-0bba-4c2e-bda5-8abc334e3bd4.png)

<h3>Read-Command</h3>

node app.js read --title="Greeting"

![image](https://user-images.githubusercontent.com/73697731/230703543-41e414e8-db84-487b-a082-650ab83e7b61.png)

<h1>Explaination Of Code</h1>
<a href="https://www.notion.so/ayushwho/Notes-App-0fb2f2442c31479f883b083a65c680d5?pvs=4">Link</a>
