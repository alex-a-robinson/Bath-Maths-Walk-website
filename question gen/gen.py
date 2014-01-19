'''
Genteres pages for questions
'''

# Title text (title will be the same as pageTitle)

pageID = input('Page ID: ')		# String unique to page
pageTitle = input('Page Title: ')
pageInfo = input('Page info: ')

# Image location (e.g. ba.jpg)
pageImage = input('Title Image: ')

questions = []


while True:
	if not input('Add a question? (blank to exit): '):
		break

	qTitle = input('Question: ')
	qHint = input('Question hint: ')
	qSolution = []
	while True:
		sol = input('Question solution (blank to exit): ')
		qSolution.append(sol)
		if not sol:
			break

	# check they all exsit
	if qTitle and qHint and qSolution:
		questions.append([qTitle, qHint, qSolution])
	else:
		print('You left somthing blank, not submitting to questions')


questionDefaultHTML = ''

for i, q in enumerate(questions):

	qTitle = q[0]

	# Questions HTML
	questionDefaultHTML = questionDefaultHTML + '''
	<div class='box math-question'>
		<div id='question-title'>
			%s
			<span class='question-hint' id='%s-%i-h' onclick="displayHint('%s-%i')">Hint</span> |
			<span class='question-solution' id='%s-%i-s' onclick="displaySolution('%s-%i')">Solution</span>
		</div>
		<input class='question-answer' id='%s-%i-a' onsubmit="checkAnswer('%s-%i')" onkeydown="if (event.keyCode == 13) checkAnswer('%s-%i')"/>
		<a class='button' id='ba-1-b' onclick="checkAnswer('%s-%i')">Submit</a>
	</div>
	''' % (qTitle, pageID, i, pageID, i, pageID, i, pageID, i, pageID, i, pageID, i, pageID, i, pageID, i)



# Body/Defualt html
pageHTML = '''
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="../../css/style.css" />
		<script type='text/javascript' src='../../js/script.js'></script>
	</head>
	<body>
			
		<div id='header'><div id='header-title'>%s</div></div>
			
		<div id='nav'>
			<div id='nav-link-container'>
				<a class='nav-link' href='../index.html'>home</a>
				<a class='nav-link' href='../maths.html'>maths</a>
				<a class='nav-link' href='../route.html'>route</a>
				<a class='nav-link' href='../about.html'>about</a>
			</div>
		</div>
		
		<div id='central-page-container'>
		
			<div class='box'>
				<div id='box-title'>%s</div>
				%s
			</div>
			
			<hr />
			
			<div class='box'>
				<img src='../../img/%s' />
			</div>
			
			<hr />

			<div class='box'>
				<div id='score'><span id='points'>0</span> points</div>
			</div>

			<hr />
			
			<div class='box'>
			
			%s

			</div>

			<hr />
			
		</div>
		
		<div id='footer'>
			<div id='footer-contact-info'>
				Garrod Musto - <a id='footer-email' href="mailto:gjm@kingswood.bath.sch.uk">email me</a> 
			</div>
		</div>
		
	</body>
</html>

''' % (pageTitle, pageTitle, pageInfo, pageImage, questionDefaultHTML)

page = open(pageTitle + '.html', 'w')
page.write(pageHTML)
page.close()
