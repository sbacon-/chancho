##########
You have discovered the source code for what, (a recursive acronym: What Html Actually Toasts) 
The source files are fairly small and somewhat documented.

<h1> what - Static Website Tooling </h1>

Writing HTML can get repetitive, especially as a static website is growing.
The idea behind this revolutionary framework is the use of a single template
for the style of the website. This follows traditional design patterns for
static websites and encourages the use of templates that show consistency
across your platform.

FILES:

buildManifest.cpp
splitManifest.cpp

rebuildSite.cpp

<i> indexTemplate.chancho </i>

The project structure would consist of a plaintext 'manifest.chancho' and plaintext files in the 'manifest'
folder with their names set to match the file location path in the directory.

Files can be edited individually in the folder then ./buildManifest can be run
Alternately you can edit the manifest.chancho directly then ./splitManifest

The root would also include a special html-like file 'indexTemplate.chancho'
The difference with this file is that it contains a special row that tells the
C++ programs to merge this into every write from the main manifest file.

TIP: Always ensure the .chancho file is up to date before running ./rebuildSite

###########

The site has been migrated to svelte and no longer requires this but I could
see something similar using .svelte files. 

Schedule for update and improve ?? tom@chancho.dev 02/19/23
