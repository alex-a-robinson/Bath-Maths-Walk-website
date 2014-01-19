title = input('Place: ')
mainIMG = input('Image name: ')

template = '''
	<html>
	<head>
		<link rel="stylesheet" type="text/css" href="../../css/style.css" />
	</head>
	<body>
			
		<div id='header'><div id='header-title'>%s</div></div>
			
		<div id='nav'>
			<div id='link-container'>
				<a class='nav-link' href='../index.html' id='home'>home</a>
				<a class='nav-link' href='../maths.html' id='maths'>maths</a>
				<a class='nav-link' href='../route.html' id='route'>route</a>
				<a class='nav-link' href='../about.html' id='about'>about</a>
			</div>
		</div>
		
		<div id='container'>
		
			<div class='box' id='info'>
				<div id='box-title'>Bath Abbey!</div>
				<div id='box-content'>
							Bath Abbey, (or the Abbey Church of Saint Peter and Saint Paul) was originaly
							built in the 7th century and then rebuilt in the 12th and 16th centuries.  It
							stands at 150m tall, and can seat up to 1200 people.
				</div>
			</div>
			
			<hr />
			
			<div class='box'>
				<img id='bath-front-page' src='../../%s' />
			</div>
			
			<hr />
			
			<div class='box'>
			<div class='box m-question'>
				<div id='question-title'>How many years since King Edgar was crowned in the Abbey?
				<span id='question-hint'>Look at the plaque at the back of the abbey</span></div>
				<div id='question-answer-container'>
					<input id='question-answer'/>
					<a class='button question-button' >Submit</a>
					<a class='button question-button'>Solution</a>
				</div>
				<div id='question-solution'></div>
			</div>
			
			<div class='box m-question'>
				<div id='question-title'>Describe the different kinds of symmetry you can see in the Abbey buildings?
				<span id='question-hint'>Rotational, Reflective, Translational... </span></div>
				<div id='question-answer-container'>
					<input id='question-answer'/>
					<a class='button question-button' >Submit</a>
					<a class='button question-button'>Solution</a>
				</div>
				<div id='question-solution'></div>
			</div>
			</div>

			<div class='box'>
			
			<div class='box m-question'>
				<div id='question-title'>What percentages of the ladder steps are touched by the angels?
				<span id='question-hint'>There are two laders on the front</span></div>
				<div id='question-answer-container'>
					<input id='question-answer'/>
					<a class='button question-button' >Submit</a>
					<a class='button question-button'>Solution</a>
				</div>
				<div id='question-solution'></div>
			</div>
			
			<div class='box m-question'>
				<div id='question-title'>Name three different shapes you can find in the Abbey. For each state two of their geometrical properties?
				<span id='question-hint'>What shape is the front of the abbey?</span></div>
				<div id='question-answer-container'>
					<input id='question-answer'/>
					<a class='button question-button' >Submit</a>
					<a class='button question-button'>Solution</a>
				</div>
				<div id='question-solution'></div>
			</div>
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

''' % (title, mainIMG)


print(template)
input()